import React from "react";
import style from "../../styles/matchLings/matchLings.module.css";
import Link from "next/link";
export const EarnPlaying = () => {
  return (
    <div
      className={`${style.EarnPlaying} w-full relative rounded-2xl flex items-center`}
    >
      <div>
        <h1 className={`${style.EarnPlayingHeading} font-bebas-neue`}>
          START STREAMING
          <span className={`${style.EarnPlayingSpan}`}> EARN BY PLAYING</span>
        </h1>
        <Link
          href="#"
          className={`flex font-satoshi-bold mt-10 items-center justify-center rounded-full h-14 ${style.streambutton}`}
        >
          Start Streaming
        </Link>

        <img
          src="/images/matchLinga/monster.png"
          className="absolute -top-40 right-5"
          alt=""
        />
      </div>
    </div>
  );
};
