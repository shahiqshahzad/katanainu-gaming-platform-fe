import React from "react";
import {
  BgCardIcon,
  BgCardIcon2,
  CiscoIcon2,
  DisnepIcon2,
  EyIcon2,
  HuaiIcon2,
  XfiIcon2,
} from "../common/Icons";

function LogoCards() {
  return (
    <div className="flex flex-wrap  justify-around   sm:justify-between gap-x-6   ">
      <div className="2xl:max-w-[200px]   py-3 sm:p-3">
        <div className="relative flex flex-col justify-center items-center ">
          <BgCardIcon />
          <span className="absolute   ">
            <XfiIcon2 />
          </span>
        </div>
      </div>{" "}
      <div className="2xl:max-w-[200px]   py-3 sm:p-3">
        <div className="relative flex flex-col justify-center items-center ">
          <BgCardIcon2 />
          <span className="absolute  ">
            <EyIcon2 />
          </span>
        </div>
      </div>{" "}
      <div className="2xl:max-w-[200px]   py-3 sm:p-3">
        <div className="relative flex flex-col justify-center items-center ">
          <BgCardIcon />
          <span className="absolute  ">
            <DisnepIcon2 />
          </span>
        </div>
      </div>{" "}
      <div className="2xl:max-w-[200px]   py-3 sm:p-3">
        <div className="relative flex flex-col justify-center items-center ">
          <BgCardIcon2 />
          <span className="absolute  ">
            <HuaiIcon2 />
          </span>
        </div>
      </div>{" "}
      <div className="2xl:max-w-[200px]   py-3 sm:p-3">
        <div className="relative flex flex-col justify-center items-center ">
          <BgCardIcon />
          <span className="absolute  ">
            <CiscoIcon2 />
          </span>
        </div>
      </div>
    </div>
  );
}

export default LogoCards;
