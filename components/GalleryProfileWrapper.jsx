/* eslint-disable @next/next/no-img-element */
import React from "react";

import GalleryProfileTabs from "./GalleryProfileTabs";
import FollowDetailsWrapper from "./FollowDetailsWrapper";

const GalleryProfileWrapper = () => {
  return (
    <div>
      <div className=" w-full mx-auto p-5 md:p-[12px_12px] lg:p-[16px_20px] bg-neutral-bg-03 ">
        <div className="md:flex items-center">
          <div className="flex md:w-[124px] whitespace-nowrap justify-center md:flex md:justify-start flex-nowrap">
            <img
              className="w-[120px] min-w-[80px]"
              src="/images/profile.png"
              alt="profile img"
            />
          </div>
          <div className="lg:w-[calc(100%-120px)] w-full  ">
            <div className=" w-full sm:h-[50px] lg:h-[72px] sm:flex  sm:justify-between items-center mt-4 md:mt-0 px-[24px] border-b-[0.5px] border-[rgba(228,228,228,0.10)] ">
              <h1 className=" flex justify-center sm:block font-bebas-neue font-normal text-[28px] xl:text-[32px] text-[#F0F2FD] leading-[32px] tracking-[0.5px] whitespace-nowrap  ">
                Esther Howard
              </h1>
              <FollowDetailsWrapper />
            </div>
            <div className="overflow-hidden w-full ">
              <GalleryProfileTabs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryProfileWrapper;
