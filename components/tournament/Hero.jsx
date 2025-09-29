import Image from "next/image";
import React from "react";
import { FollowIcon, VeryfiedIcon } from "../common/Icons";

function Hero() {
  return (
    <div>
      <div className="maw-w-[940px] 2xl:min-h-[600px] min-h-[400px] w-full bg-[url('/images/cover.png')]  bg-cover bg-no-repat bg-center   flex flex-col justify-end  ">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="bg-[rgba(14,12,21,0.40)] mt-[74px] flex md:flex-row flex-col items-center justify-between  backdrop-blur-[4px] p-3 sm:p-6 gap-4 md:gap-0"
        >
          <div className="flex items-center gap-4">
            <div className="sm:w-[107px] w-[80px] h-[80px] sm:h-[107px]">
              <Image
                src={"/images/user.png"}
                width={107}
                height={107}
                alt="img"
                className="w-full rounded-full  object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex  whitespace-nowrap items-center gap-x-2">
                <h2 className="xl:text-[40px] text-[24px] font-bebas-neue     leading-[100%] tracking-[0.5px]">
                  THE <span className="text-[#D136F6]"> Ninja squad </span>
                </h2>
                <VeryfiedIcon />
              </div>
              <p className="text-[14px] sm:text-[16px] text-white ">
                {" "}
                25TH AUGUST 2020 / 15:00 / MAORID
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-end flex-wrap-reverse  sm:flex-wrap gap-4 xl:gap-5">
            <div className="flex flex-col gap-y-2 2xl:w-[100px]">
              <p className="font-satoshi-bold text-[12px] sm:text-[14px] text-white ">
                124
              </p>
              <p className="font-satoshi-regular text-[10px]   sm:text-[12px] text-white opacity-70  ">
                MATCH WINS
              </p>
            </div>{" "}
            <div className="flex flex-col gap-y-2 2xl:w-[100px]">
              <p className="font-satoshi-bold text-[12px] sm:text-[14px] text-white ">
                00
              </p>
              <p className="font-satoshi-regular text-[10px]   sm:text-[12px] text-white opacity-70  ">
                MATCH LOSES
              </p>
            </div>{" "}
            <div className="flex flex-col gap-y-2 2xl:w-[100px]">
              <p className="font-satoshi-bold text-[12px] sm:text-[14px] text-white ">
                12
              </p>
              <p className="font-satoshi-regular text-[10px]   sm:text-[12px] text-white opacity-70  ">
                MATCH DRAWS{" "}
              </p>
            </div>{" "}
            <div className="flex flex-col gap-y-2 2xl:w-[100px]">
              <p className="font-satoshi-bold text-[12px] sm:text-[14px] text-white ">
                08
              </p>
              <p className="font-satoshi-regular text-[10px]   sm:text-[12px] text-white opacity-70  ">
                PLAYERS{" "}
              </p>
            </div>
            <button className="text-[14px] hover:scale-90 transition duration-300 ease-in-out  w-[116px] h-[40px] font-bold leading-5 text-white font-satoshi-bold rounded-[4px] bg-[linear-gradient(90deg,#D136F6_0%,#6C5DD3_100%)] backdrop-blur-[8px] flex items-center justify-center gap-x-2   ">
              <FollowIcon />
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
