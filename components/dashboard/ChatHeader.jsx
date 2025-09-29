import Cookies from "js-cookie";
import socket from "../../utils/socket";
import { useRouter } from "next/router";
import { useSearchChat } from "../../store/store";
import { getSingleUser } from "../../utils/api/userModule";
import styles from "../../styles/dashboard/index.module.css";
import { changeUserStatus } from "../../utils/api/chatModule";
import React, { useEffect, useLayoutEffect, useState } from "react";
import ChatMenu from "./ChatMenu";

export const ChatHeader = ({ group }) => {
  const router = useRouter();
  const userString = Cookies.get("token");
  const changeStatus = changeUserStatus();
  const [isOnline, setIsOnline] = useState(false);
  const user = userString && JSON.parse(userString);
  const setSearch = useSearchChat((state) => state.setSearch);
  const { data, isLoading } = getSingleUser(group?.otherUser?._id);
  useEffect(() => {
    setIsOnline(data?.data?.isOnline);
  }, [data]);

  const getProfileImage = (members) => {
    const member = members?.find((member) => member?._id !== user?._id);
    return member?.profileImage;
  };
  const getName = (members) => {
    const member = members?.find((member) => member?._id !== user?._id);
    return member?.name;
  };
  useLayoutEffect(() => {
    changeStatus.mutateAsync({ isOnline: true });
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      changeStatus.mutateAsync({ isOnline: false });
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    if (socket && socket.connected && group?.otherUser?._id) {
      socket.on(`userStatus-${group?.otherUser?._id}`, (data) => {
        setIsOnline(data?.isOnline);
      });

      return () => {
        socket.off(`userStatus-${group?.otherUser?._id}`);
      };
    }
  }, [socket, group, group?.otherUser?._id]);

  return (
    <div
      className={`${styles.chatheader} absolute w-full top-0 flex items-center justify-between px-8`}
    >
      {group && (
        <>
          <div className="flex items-center">
            <img
              src={
                group?.type === "group"
                  ? group?.tournamentId?.tournamentImage
                  : group?.type === "1:1"
                  ? getProfileImage(group?.members)
                  : "/images/home/user.svg"
              }
              alt="Not found"
              className="h-10 w-10 rounded-full"
            />
            <div className={`ml-3`}>
              <h1 className={`font-bebas-neue`}>
                {group?.type === "group"
                  ? group?.tournamentId?.name
                  : getName(group?.members)}
              </h1>
              {group?.type === "1:1" && (
                <p className={`flex items-center mt-1 font-satoshi-regular`}>
                  {isOnline ? (
                    <>
                      {" "}
                      <span className="block w-2 h-2 rounded-full mr-2"></span>
                      Online
                    </>
                  ) : (
                    "Offline"
                  )}
                </p>
              )}
            </div>
          </div>
          <div
            className={`border border-[#1c0f26] flex h-10 rounded-full  items-center`}
          >
            <img src="/images/chat/search.svg" alt="" />
            <input
              type="text"
              placeholder="Search chat"
              className="font-satoshi-regular h-full bg-transparent border-0 outline-none ml-2 text-[#838091] text-[14px] w-full md:w-80"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <ChatMenu group={group} />
        </>
      )}
    </div>
  );
};
