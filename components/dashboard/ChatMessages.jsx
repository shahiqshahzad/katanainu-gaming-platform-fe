import React, { useEffect, useState } from "react";
import styles from "../../styles/dashboard/index.module.css";
import { useRouter } from "next/router";
import { ButtonLoader, Loader } from "../common/Icons";
import Cookies from "js-cookie";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import axios from "../../utils/api/interceptor";
import API_END_POINTS from "../../utils/api/api_endpoints";
import InfiniteScroll from "react-infinite-scroll-component";
import { format, isToday, isYesterday, parseISO } from "date-fns";
import ImageModal from "./ImageModal";
import { seenAllMessages } from "../../utils/api/chatModule";
import { useSearchChat } from "../../store/store";

const DisplayMessageTime = (time) => {
  const date = parseISO(time?.time);
  // const localDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);

  const formattedDate = isToday(date)
    ? `Today ${format(date, "HH:mm")}`
    : isYesterday(date)
    ? `Yesterday ${format(date, "HH:mm")}`
    : `${format(date, "MM/dd/yy")} ${format(date, "HH:mm")}`;

  return <span className="font-Sora text-[10px]">{formattedDate}</span>;
};

export const ChatMessages = ({ currentHeight, groupId }) => {
  const router = useRouter();
  const { search } = useSearchChat();
  const [isImage, setIsImage] = useState(false);
  const seenMessages = seenAllMessages();

  function closeModal() {
    setIsImage(false);
  }
  const {
    data,
    refetch,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["chatMessages", groupId, search],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await axios.get(
        `${API_END_POINTS.USER_CHAT_MESSAGES}/${groupId?._id}?pageNumber=${pageParam}&search=${search}`
      );
      return response.data;
    },
    enabled: !!groupId?._id,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage, page) =>
      lastPage?.data?.nextPage != -1 ? lastPage?.data?.nextPage : null,
  });
  const userString = Cookies.get("token");
  const user = userString && JSON.parse(userString);
  const reversedMessages = data?.pages.flatMap((page) => page).reverse();
  useEffect(() => {
    seenMessages.mutate(groupId?._id);
  }, [data]);

  return (
    <div
      className={`${styles.chatmessage} w-screen lg:w-auto px-3 md:px-8 flex py-28 flex-col items-start`}
      style={{ height: `${currentHeight}px` }}
    >
      {isLoading ? (
        <div className="flex justify-center w-full">
          <Loader color="#faf089" />
        </div>
      ) : (
        <div
          className="w-full"
          id="scrollableDiv"
          style={{
            height: currentHeight,
            overflow: "auto",
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          <InfiniteScroll
            dataLength={
              data?.pages?.reduce(
                (acc, page) => acc + page?.data?.documents?.length,
                0
              ) || 0
            }
            next={fetchNextPage}
            hasMore={hasNextPage}
            inverse={true}
            scrollableTarget="scrollableDiv"
            loader={
              isFetchingNextPage && (
                <div className="flex justify-center w-full absolute top-20">
                  <ButtonLoader />
                </div>
              )
            }
          >
            <>
              {reversedMessages?.map((page, index) => (
                <>
                  {page?.data?.documents?.map((message, index) => (
                    <>
                      {user?._id === message?.senderId?._id ? (
                        <div
                          className={`px-4 py-3 mr-3 ${styles.message} w-fit mb-8 ml-auto rounded-xl rounded-br-none`}
                        >
                          <p className={`font-manrope`}>{message?.message}</p>
                          {message?.file && (
                            <>
                              {message?.fileType?.startsWith("image/") ? (
                                <>
                                  <img
                                    src={message?.file}
                                    alt="Not found"
                                    onClick={() => setIsImage(true)}
                                    className="cursor-zoom-in"
                                  />
                                  <ImageModal
                                    isImage={isImage}
                                    closeModal={closeModal}
                                    imageUrl={message?.file}
                                  />
                                </>
                              ) : (
                                <video
                                  src={message?.file}
                                  controls
                                  className="h-44 w-44 lg:h-96 lg:w-96"
                                />
                              )}
                            </>
                          )}

                          <div className="flex items-center justify-end mt-2 font-satoshi-regular">
                            <p>
                              <DisplayMessageTime time={message?.createdAt} />
                            </p>
                            <img
                              src="/images/chat/tick.svg"
                              className="ml-2"
                              alt=""
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-start w-full  mb-8">
                          <img
                            src={message?.senderId?.profileImage}
                            alt=""
                            className="mr-3 w-8 h-8 rounded-full"
                          />
                          <div
                            className={`px-4 py-3 ${styles.message} ${styles.user} rounded-xl rounded-tl-none`}
                          >
                            <p className={`font-manrope`}>{message?.message}</p>
                            {message?.file && (
                              <>
                                {message?.fileType?.startsWith("image/") ? (
                                  <>
                                    <img
                                      src={message?.file}
                                      alt="Not found"
                                      onClick={() => setIsImage(true)}
                                      className="cursor-zoom-in"
                                    />
                                    <ImageModal
                                      isImage={isImage}
                                      closeModal={closeModal}
                                      imageUrl={message?.file}
                                    />
                                  </>
                                ) : (
                                  <video
                                    src={message?.file}
                                    controls
                                    className="h-44 w-44 lg:h-96 lg:w-96"
                                  />
                                )}
                              </>
                            )}
                            <div className="flex items-center justify-end mt-2">
                              <p>
                                <DisplayMessageTime time={message?.createdAt} />
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ))}
                </>
              ))}
            </>
          </InfiniteScroll>
        </div>
      )}
    </div>
  );
};
