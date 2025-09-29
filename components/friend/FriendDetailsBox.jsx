/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";

const FriendDetailsBox = () => {
  const navigate = useRouter();
  return (
    <div className="w-[90%] sm:w-[49%] md:w-[32%] mb-3 h-auto  bg-[#15131D] rounded-[8px] px-2 py-4">
      <div className="flex justify-around items-center">
        <img className="w-[45%]" src="/images/friends-card-img-1.png" alt="" />
        <img className="w-[45%]" src="/images/friends-card-img-2.png" alt="" />
      </div>
      <h2
        className="text-[20px] sm:text-[24px] font-bebas-neue uppercas leading-[24px] my-5 cursor-pointer"
        onClick={(e) => {
          navigate.push("/");
        }}
      >
        Andreas Noack
      </h2>
      <div className=" border-[0.5px] border-[#594f96] rounded-[4px] drop-shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),_0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="text-center border-b border-[rgba(228,228,228,0.10)] py-2">
          <h3 className="text-[16px] font-bebas-neue ">
            Uswordfish{" "}
            <span className="text-[14px] font-satoshi-regular text-[#9D99AD]">
              (16 Members)
            </span>
          </h3>
        </div>
        <div className=" md:pl-4 border-b border-[rgba(228,228,228,0.10)] py-2 text-center md:text-start frienddetailbox">
          <h3 className="text-[16px] font-satoshi-regular text-[#9D99AD] ">
            14
            <span className="ml-2 text-[14px] font-satoshi-medium leading-[18px] text-[#9D99AD]">
              Common Subscriptions
            </span>
          </h3>
        </div>
        <div className=" md:pl-4 text-center md:text-start border-b border-[rgba(228,228,228,0.10)] py-2 frienddetailbox">
          <h3 className="text-[16px] font-satoshi-regular text-[#9D99AD] ">
            48
            <span className="ml-2 text-[14px] font-satoshi-medium leading-[18px] text-[#9D99AD]">
              Mutual Friends
            </span>
          </h3>
        </div>
        <div className=" md:pl-4 text-center md:text-start border-b border-[rgba(228,228,228,0.10)] py-2 frienddetailbox">
          <h3 className="text-[16px] font-satoshi-regular text-[#9D99AD] ">
            48
            <span className="ml-2 text-[14px] font-satoshi-medium leading-[18px] text-[#9D99AD]">
              Games Together
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsBox;
