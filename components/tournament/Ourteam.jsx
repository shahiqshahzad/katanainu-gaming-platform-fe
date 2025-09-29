/* eslint-disable react/no-unescaped-entities */
import React from "react";
import TeamCard from "./TeamCard";
import { Ourteamdetails } from "../common/helper";
import Image from "next/image";

function Ourteam() {
  return (
    <div className="my-10 md:mt-20">
      <div className="flex justify-between  w-full">
        <h2 className="xl:text-[40px] text-[24px] font-bebas-neue     leading-[100%] tracking-[0.5px] uppercase">
          MEET OUR TEAM <br /> THE "
          <span className="text-[#D136F6]">Ninja squad</span>"{" "}
        </h2>
        <span className="text-[#D136F6] xl:text-[140px] opacity-10 text-[24px] font-bebas-neue       tracking-[0.5px] lg:block hidden leading-[60%] -mb-6">
          TEAM
        </span>
      </div>
      <div className="flex flex-wrap">
        {Ourteamdetails.map((items, index) => (
          <TeamCard items={items} key={index} />
        ))}
      </div>

      {/* <TeamCard /> <TeamCard /> <TeamCard /> */}
    </div>
  );
}

export default Ourteam;
