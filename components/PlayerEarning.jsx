"use client";

import { useState } from "react";
import style from "../styles/profile/profile.module.css";
import Image from "next/image";

export default function PlayerEarning() {
  const [gameTime, setGameTime] = useState("8H 26M");
  const [earnings, setEarnings] = useState("$987");

  return (
    <div>
      <div className={`${style.playerEarning} relative `}>
        <div className="flex justify-center absolute bottom-0 w-full items-center backdrop-blur-md h-9 ">
          <p className="text-[12px]">Now Playing : </p>
          <p className="font-bold text-[11px] ml-1 ">
            ARMY OF TWO DEVIL&apos;S CARTEL
          </p>
        </div>
      </div>
      <div className="flex items-center justify-evenly backdrop-blur-md bg-opacity-5 bg-white  py-2 divide-x-2 divide-indigo-950	">
        <div className="flex items-center ">
          <div>
            <Image
              src={"/images/profile/bitcoin-icon.svg"}
              width={40}
              height={40}
              alt="bitcoin-icon"
            />
          </div>
          <div>
            <h3 className="font-bold text-[12px] bebas-neue uppercase">
              Total Earn
            </h3>
            <h3 className="font-bold text-[12px] bebas-neue">$987</h3>
          </div>
        </div>

        <div className="flex items-center pr-1">
          <div>
            <Image
              src={"/images/profile/bitcoin-icon.svg"}
              width={40}
              height={40}
              alt="bitcoin-icon"
            />
          </div>
          <div>
            <h3 className="font-bold text-[12px] bebas-neue uppercase">
              Game played
            </h3>
            <h3 className="font-bold text-[12px] bebas-neue">8H 26M </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
