import React from "react";
import style from "../../styles/profile/profile.module.css";
import { RecentlyPlayedCard } from "./RecentlyPlayedCard";
export const RecentlyPlayed = () => {
  return (
    <div className={`${style.RecentlyPlayed} `}>
      <div
        className={`flex mb-10 items-center justify-between ${style.topBattle}`}
      >
        <h1 className={`${style.RecentlyPlayedHeading} font-bebas-neue`}>
          PLAYER <span>BATTLES</span>
        </h1>
        <button className={`${style.RecentlyPlayedButton} font-satoshi-medium`}>
          Show More
        </button>
      </div>

      <div className={`grid gap-7`}>
        <RecentlyPlayedCard victory />
        <RecentlyPlayedCard />
        <RecentlyPlayedCard />
      </div>
    </div>
  );
};
