import React from "react";
import TeamCard from "./TeamCard";
import { OurteamStreamsdetails, Ourteamdetails } from "../common/helper";
import Image from "next/image";
import TeamCardStreams from "./TeamCardStreams";

function OurteamStreams() {
  return (
    <div className="my-10 md:mt-20">
      <div className="flex justify-between  w-full">
        <h2 className="xl:text-[40px] text-[24px] font-bebas-neue     leading-[100%] tracking-[0.5px] uppercase">
          OUR TEAM <br />
          <span className="text-[#D136F6]">STREAMS</span>
        </h2>
        <span className="text-[#D136F6] xl:text-[140px] opacity-10 text-[24px] font-bebas-neue       tracking-[0.5px] lg:block hidden leading-[60%] -mb-6">
          TEAM
        </span>
      </div>
      <div className="flex flex-wrap">
        {OurteamStreamsdetails.map((items, index) => (
          <TeamCardStreams items={items} key={index} />
        ))}
      </div>

      {/* <TeamCard /> <TeamCard /> <TeamCard /> */}
    </div>
  );
}

export default OurteamStreams;
