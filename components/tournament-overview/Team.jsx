import React from "react";
import styles from "../../styles/tournament-overview/index.module.css";
import { TeamBox } from "./TeamBox";
export const Team = () => {
  return (
    <div className={`${styles.teamoverview} mb-20 mt-20`}>
      <div className={`flex items-center justify-between`}>
        <h1 className={`font-bebas-neue`}>
          MEET OUR TEAM <br />
          THE <span>Ninja squad</span>
        </h1>

        <h2 className={`font-bebas-neue transform translate-y-10`}>Team</h2>
      </div>

      <div className={`grid grid-cols-4 gap-6 ${styles.teamwrapper}`}>
        <TeamBox img="/images/tournament/team1.png" />
        <TeamBox img="/images/tournament/team2.png" />
        <TeamBox img="/images/tournament/team3.png" />
        <TeamBox img="/images/tournament/team4.png" />
        <TeamBox img="/images/tournament/team4.png" />
        <TeamBox img="/images/tournament/team2.png" />
        <TeamBox img="/images/tournament/team3.png" />
        <TeamBox img="/images/tournament/team1.png" />
      </div>
    </div>
  );
};
