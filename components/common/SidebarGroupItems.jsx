/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { StarIcon } from "./helper";
import {
  getFriends,
  getPhotos,
  getVideos,
  removeFriend,
} from "../../utils/api/friendsModule";
import { useRouter } from "next/router";
import { ScrollLoader } from "./Icons";
import Link from "next/link";

const SidebarGroupItems = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: photos, isLoading, isError } = getPhotos(id);
  const { data: videos, isLoading: loadingVideos } = getVideos(id);
  const { data: friends, isLoading: loadingFriends } = getFriends();
  const { mutate } = removeFriend();
  const handleRemoveFriend = (userId) => {
    mutate(userId);
  };

  return (
    <div className="lg:max-h-screen py-3 lg:sticky lg:w-[380px]  min-w-[320px] xl:min-w-[380px] lg:ml-4 lg:top-0">
      <aside className=" w-full lg:h-full scrollbar-hide overflow-auto">
        <div className="flex flex-col">
          <h2
            data-aos="fade-left"
            data-aos-duration="1500"
            className="text-[24px] font-bebas-neue  leading-[20px] tracking-[0.5px]"
          >
            Esther Howard
          </h2>

          <div className="flex justify-between items-end border-b-2 border-[#24222A] py-4">
            <p className="text-[14px]  font-satoshi-regular leading-[24px] text-neutral-tertiary max-w-[180px]">
              Is playing{" "}
              <span className="bg-[linear-gradient(90deg,_#D136F6_0%,_#6C5DD3_100%)]  bg-clip-text  text-transparent">
                Prince of Persia{" "}
              </span>{" "}
              for 2 hours.
            </p>
            <div>
              <span className="text-[14px]  font-satoshi-medium cursor-pointer hover:text-[#D136F6] transition-all duration-150 ease-in-out">
                See all
              </span>
            </div>
          </div>
          <img
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="py-6"
            src="/images/sidebar-img-1.png"
            alt=" sidebar-first-image"
          />
          <div className="flex justify-between px-3 py-2 bg-[linear-gradient(180deg,_rgba(21,19,29,0.00)_0%,_#15131D_100%)]">
            <h3 className="text-[14px] leading-[100%] font-satoshi-bold uppercase text-neutral-secondary">
              Started at
            </h3>
            <h3 className="text-[20px] leading-[100%] font-bebas-neue   ">
              10.21 am
            </h3>
          </div>
        </div>
        {/* Photos from friend */}
        <div className="mt-12">
          <div className="flex justify-between border-b-2 py-4 border-[#24222A]">
            <h2 className="text-[24px] font-bebas-neue  leading-[20px]">
              Photos from <span className="text-[#D136F6]">friend</span>
            </h2>
            <p className="text-[14px] font-satoshi-medium cursor-pointer hover:text-[#D136F6] transition-all duration-150 ease-in-out ">
              See all
            </p>
          </div>
          {isLoading ? (
            <div className="w-full flex justify-center items-center">
              <ScrollLoader />
            </div>
          ) : (
            <>
              {photos?.data?.documents?.length === 0 ? (
                <div className="w-full text-center mt-3 font-satoshi-regular">
                  No Photos
                </div>
              ) : (
                <div className="columns-3 space-y-3 gap-x-3 mt-7">
                  {photos?.data?.documents?.slice(0, 9).map((photo, index) => (
                    <img
                      className="w-full aspect-auto rounded-lg"
                      src={photo?.mediaUrl}
                      alt="Not found"
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
        {/* Videos from friend */}
        <div className="mt-12">
          <div className="flex justify-between border-b-2 py-4 border-[#24222A]">
            <h2 className="text-[24px] font-bebas-neue leading-[20px]">
              VIDEOS from <span className="text-[#D136F6]">friend</span>
            </h2>
            <p className="text-[14px] font-satoshi-medium cursor-pointer hover:text-[#D136F6] transition-all duration-150 ease-in-out ">
              See all
            </p>
          </div>
          <div className="flex  lg:flex-col flex-wrap justify-between">
            {loadingVideos ? (
              <div className="w-full flex justify-center items-center">
                <ScrollLoader />
              </div>
            ) : (
              <>
                {videos?.data?.documents?.length === 0 ? (
                  <div className="w-full text-center mt-3 font-satoshi-regular">
                    No Videos
                  </div>
                ) : (
                  <>
                    {videos?.data?.documents?.slice(0, 3).map((video) => (
                      <div className="flex gap-x-5 lg:w-full md:w-1/2 w-full  lg:justify-between items-center bg-[#15131D] rounded-[8px] px-3 py-4 mt-6">
                        <div className="w-full h-[250px] flex justify-center">
                          <video className="h-full w-full" controls>
                            <source src={video?.mediaUrl} type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </>
            )}
          </div>
        </div>
        {/* My subscriptions */}
        <div className="mt-12">
          <div>
            <h2 className="text-[24px] font-bebas-neue  leading-[20px]">
              My <span className="text-[#D136F6]">subscriptions</span>
            </h2>

            <div className="flex justify-between items-end border-b-2 border-[#24222A] py-4">
              <p className="text-[14px]  font-satoshi-regular leading-[24px] text-neutral-tertiary max-w-[180px]">
                Is playing{" "}
                <span className="bg-[linear-gradient(90deg,_#D136F6_0%,_#6C5DD3_100%)]  bg-clip-text text-transparent">
                  Prince of Persia
                </span>{" "}
                for 2 hours.
              </p>
              <div>
                <span className="text-[14px]  font-satoshi-medium cursor-pointer hover:text-[#D136F6] transition-all duration-150 ease-in-out">
                  See all
                </span>
              </div>
            </div>
          </div>
          <div className="mt-9">
            <div className="flex justify-between items-center ">
              <img
                className="w-[32%]"
                src="/images/battlefield-img.png"
                alt=""
              />
              <img className="w-[32%]" src="images/dead-king-img.png" alt="" />
              <img
                className="w-[32%]"
                src="/images/callofduty-img.png"
                alt=""
              />
            </div>
            <div className="pt-2">
              <img src="/images/assassins-img.png" alt="" />
            </div>
            <div className="flex justify-between items-center pt-2">
              <img
                className="w-[48%]"
                src="/images/battlefield6-img.png"
                alt=""
              />
              <img className="w-[48%]" src="/images/division-img.png" alt="" />
            </div>
          </div>
        </div>
        {/* My Friend */}
        <div className="my-12">
          <div className="flex justify-between border-b-2 py-4 border-[#24222A]">
            <h2 className="text-[24px] font-bebas-neue  leading-[20px]">
              MY <span className="text-[#D136F6]">FRIEND</span>
            </h2>
            <Link
              href={"/profile/team"}
              className="text-[14px] font-satoshi-medium cursor-pointer hover:text-[#D136F6] transition-all duration-150 ease-in-out"
            >
              See all
            </Link>
          </div>
          {loadingFriends ? (
            <div className="w-full flex justify-center items-center">
              <ScrollLoader />
            </div>
          ) : (
            <>
              {friends?.data?.documents?.length === 0 ? (
                <div className="w-full text-center mt-3 font-satoshi-regular">
                  No friends
                </div>
              ) : (
                <>
                  {friends?.data?.documents
                    ?.slice(0, 5)
                    .map((friend, index) => (
                      <div
                        className={`${
                          index % 2 === 0 ? "bg-[#15131D]" : "bg-transparent"
                        } flex justify-between items-center mt-6 px-3 py-4 rounded-[8px]`}
                      >
                        <div className="w-[228px] flex items-center gap-3">
                          <img
                            className="w-[40px] h-[40px] rounded-full bg-gray-500"
                            src={
                              friend?.friendId?.profileImage
                                ? friend?.friendId?.profileImage
                                : "/images/home/user.svg"
                            }
                            alt="No Image"
                          />
                          <div className="w-[172px] ">
                            <h3 className="text-[16px] font-bebas-neue tracking-[0.5px] ">
                              {friend?.friendId?.name}
                            </h3>
                            {/* <h3 className="text-[12px] text-neutral-tertiary font-satoshi-light ">
                    UX designer at Dezzlab studio
                  </h3> */}
                          </div>
                        </div>
                        <button
                          className="w-[96x] h-[36px] font-satoshi-medium  text-[14px]  leading-[20px] rounded-[18px] border-2 border-[#D136F6] hover:bg-[#D136F6] transition-all duration-300 ease-in-out pb-1 px-6 flex justify-center items-center"
                          onClick={() =>
                            handleRemoveFriend(friend?.friendId?._id)
                          }
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                </>
              )}
            </>
          )}
        </div>
        {/* My Group */}
        <div className="mt-12">
          <div className="flex justify-between border-b-2 py-4 border-[#24222A]">
            <h2 className="text-[24px] font-bebas-neue  leading-[20px]">
              MY <span className="text-[#D136F6]">GROUP</span>
            </h2>
            <p className="text-[14px] font-satoshi-medium cursor-pointer hover:text-[#D136F6] transition-all duration-150 ease-in-out">
              See all
            </p>
          </div>
          <div className="flex justify-between items-center mt-6 px-3 py-4 bg-[#15131D] rounded-[8px]">
            <div className="w-[228px] flex items-center gap-3">
              <img
                className="w-[50px] h-[40px]"
                src="/images/group-img-1.png"
                alt=""
              />
              <div className="w-[172px]">
                <h3 className="text-[16px] font-bebas-neue tracking-[0.5px]">
                  Ferrari
                </h3>
                <h3 className="text-[12px] text-neutral-tertiary  font-satoshi-light">
                  UX designer at Dezzlab studio
                </h3>
              </div>
            </div>
            <button className="w-[96x] h-[36px]  font-satoshi-medium text-[14px]  leading-[20px] rounded-[18px] border-2 border-[#D136F6] hover:bg-[#D136F6] transition-all duration-300 ease-in-out pb-1 px-6 flex justify-center items-center">
              Remove
            </button>
          </div>
          <div className="flex justify-between items-center mt-2 px-3 py-4  rounded-[8px]">
            <div className="w-[228px] flex items-center gap-3">
              <img
                className="w-[50px] h-[40px]"
                src="/images/group-img-2.png"
                alt=""
              />
              <div className="w-[172px]">
                <h3 className="text-[16px] font-bebas-neue tracking-[0.5px] ">
                  Johnson & Johnson
                </h3>
                <h3 className="text-[12px] text-neutral-tertiary font-satoshi-light">
                  UX designer at Dezzlab studio
                </h3>
              </div>
            </div>
            <button className="w-[96x] h-[36px]  font-satoshi-medium  text-[14px]  leading-[20px] rounded-[18px] border-2 border-[#D136F6] hover:bg-[#D136F6] transition-all duration-300 ease-in-out pb-1 px-6 flex justify-center items-center">
              Remove
            </button>
          </div>
          <div className="flex justify-between items-center mt-2 px-3 py-4 bg-[#15131D] rounded-[8px]">
            <div className="w-[228px] flex items-center gap-3">
              <img
                className="w-[50px] h-[40px]"
                src="/images/group-img-3.png"
                alt=""
              />
              <div className="w-[172px]">
                <h3 className="text-[16px] font-bebas-neue tracking-[0.5px] ">
                  The Walt Disney Company
                </h3>
                <h3 className="text-[12px] text-neutral-tertiary font-satoshi-light">
                  UX designer at Dezzlab studio
                </h3>
              </div>
            </div>
            <button className="w-[96x] h-[36px]  font-satoshi-medium text-[14px]  leading-[20px] rounded-[18px] border-2 border-[#D136F6] hover:bg-[#D136F6] transition-all duration-300 ease-in-out pb-1 px-6 flex justify-center items-center">
              Remove
            </button>
          </div>
          <div className="flex justify-between items-center mt-2 px-3 py-4  rounded-[8px]">
            <div className="w-[228px] flex items-center gap-3">
              <img
                className="w-[50px] h-[40px]"
                src="/images/group-img-4.png"
                alt=""
              />
              <div className="w-[172px]">
                <h3 className="text-[16px] font-bebas-neue tracking-[0.5px] ">
                  Starbucks
                </h3>
                <h3 className="text-[12px] text-neutral-tertiary font-satoshi-light">
                  UX designer at Dezzlab studio
                </h3>
              </div>
            </div>
            <button className="w-[96x] h-[36px]  font-satoshi-medium text-[14px]  leading-[20px] rounded-[18px] border-2 border-[#D136F6] hover:bg-[#D136F6] transition-all duration-300 ease-in-out pb-1 px-6 flex justify-center items-center">
              Remove
            </button>
          </div>
          <div className="flex justify-between items-center mt-2 px-3 py-4 bg-[#15131D] rounded-[8px]">
            <div className="w-[228px] flex items-center gap-3">
              <img
                className="w-[50px] h-[40px]"
                src="/images/group-img-5.png"
                alt=""
              />
              <div className="w-[172px]">
                <h3 className="text-[16px] font-bebas-neue tracking-[0.5px] ">
                  Mitsubishi
                </h3>
                <h3 className="text-[12px] text-neutral-tertiary font-satoshi-light">
                  UX designer at Dezzlab studio
                </h3>
              </div>
            </div>
            <button className="w-[96x] h-[36px]  font-satoshi-medium text-[14px]  leading-[20px] rounded-[18px] border-2 border-[#D136F6] hover:bg-[#D136F6] transition-all duration-300 ease-in-out pb-1 px-6 flex justify-center items-center">
              Remove
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SidebarGroupItems;
