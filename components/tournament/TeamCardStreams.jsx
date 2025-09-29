import Image from "next/image";
import React from "react";
import { VeryfiedIcon, WifiIcon } from "../common/Icons";

function TeamCardStreams({ items }) {
  return (
    <div className="sm:p-3 py-3 xl:w-1/3 sm:w-1/2   w-full">
      <div className="   flex flex-col ">
        <div className="relative ">
          <Image
            src={items.img}
            width={300}
            height={244}
            alt="img"
            className="w-full rounded"
          />
          <p className="text-[16px] absolute top-5 left-5 text-white p-2 bg-[rgba(14,12,21,0.40)] font-satoshi-regular  rounded-md ">
            4.2K watching
          </p>{" "}
          <p className="text-[16px] absolute top-5 right-5 text-white px-2.5 py-1.5 bg-[#F63664] font-satoshi-regular  rounded-md  flex items-center gap-x-2">
            {" "}
            <WifiIcon />
            Online
          </p>
        </div>
        <div className=" ">
          <p className="lg:py-6 py-2.5 text-white sm:text-[24px] uppercase text-[20px] font-bebas-neue tracking-[0.10px]   ">
            {items.tital}
          </p>
          <p className="pb-5  text-[#838091] sm:text-[16px]    text-[14px] font-satoshi-regular    ">
            {items.para}
          </p>
          <div className="flex items-center gap-4">
            <div className="sm:w-[54px] w-[40px] h-[40px] sm:h-[54px]">
              <Image
                src={"/images/user.png"}
                width={54}
                height={54}
                alt="img"
                className="w-full rounded-full  object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex  whitespace-nowrap items-center gap-x-2">
                <h2 className="xl:text-[20px] text-[18px] font-bebas-neue     leading-[100%] tracking-[0.5px]">
                  THE <span className="text-[#D136F6]"> Ninja squad </span>
                </h2>
                <VeryfiedIcon />
              </div>
              <p className="text-[14px] sm:text-[16px] text-white ">Maorid</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCardStreams;
