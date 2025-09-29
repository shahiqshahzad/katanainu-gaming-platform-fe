import React from "react";

import ThreeDots from "./common/ThreeDots";
import { ChatIcon } from "./common/Icons";
import { useRouter } from "next/router";
const FollowDetailsWrapperCommon = ({ data }) => {
  const navigate = useRouter();
  return (
    <div className="flex justify-end sm:flex items-center mt-4 md:mt-0 gap-4 sm:gap-[24px] ">
      <div
        className="flex gap-1 cursor-pointer"
        onClick={(e) => {
          navigate.push("/");
        }}
      >
        <p className="font-bebas-neue font-bold text-white text-[20px] leading-[16px] ">
          {data?.data?.followersCount}
        </p>
        <p className="font-satoshi-medium font-medium text-[14px] text-neutral-tertiary leading-[16px]">
          Followers
        </p>
      </div>
      <div
        className="flex gap-1 cursor-pointer"
        onClick={(e) => {
          navigate.push("/");
        }}
      >
        <p className="font-bebas-neue font-bold text-white text-[20px] leading-[16px] ">
          {data?.data?.followingCount}
        </p>
        <p className="font-satoshi-medium font-medium text-[14px] text-neutral-tertiary leading-[16px]">
          Following
        </p>
      </div>
      <div
        className="p-[8px] cursor-pointer"
        onClick={(e) => {
          navigate.push("/");
        }}
      >
        <ThreeDots />
      </div>
      <div className="md:hidden">
        <ChatIcon />
      </div>
    </div>
  );
};

export default FollowDetailsWrapperCommon;
