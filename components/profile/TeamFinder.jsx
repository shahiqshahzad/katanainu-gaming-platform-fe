import React from "react";
import style from "../../styles/profile/profile.module.css";
import { TeamFinderCard } from "./TeamFinderCard";

export const TeamFinder = () => {
  return (
    <div className={`${style.RecentlyPlayed} `}>
      <div
        className={`flex mb-8 items-center justify-between ${style.topBattle}`}
      >
        <h1 className={`${style.RecentlyPlayedHeading} font-bebas-neue`}>
          looking for a <span>team</span>
        </h1>
      </div>

      <div className={`grid gap-4 ${style.TeamFinderGrid} rounded-lg`}>
        <TeamFinderCard img="/images/profile/team3.png" name="Soeskien" />
        <TeamFinderCard img="/images/profile/team4.png" name="Man_Ratt" />
      </div>
    </div>
  );
};
