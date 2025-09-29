import React from "react";
import styles from "../../styles/tournament-overview/index.module.css";
import stylestwo from "../../styles/landing/index.module.css";
import { TeamBox } from "./TeamBox";
import { Scene } from "react-scrollmagic";
export const Team = () => {
  return (
    <div className={`${styles.teamoverview} ${stylestwo.teamoverview}`}>
      <Scene triggerHook={0.8} reverse={false} classToggle={"scrollIn"}>
        <div className={`flex items-center justify-between scrollOut`}>
          <h1 className={`font-bebas-neue`}>
            MEET OUR TEAM <br />
            THE "<span>Ninja squad</span>"
          </h1>

          <h2 className={`font-bebas-neue transform translate-y-10`}>Team</h2>
        </div>
      </Scene>
      <Scene triggerHook={0.8} reverse={false} classToggle={"scrollIn"}>
        <div
          className={`grid ${stylestwo.teamboxmobile} scrollOut  grid-cols-4 gap-6`}
        >
          <TeamBox img="/images/landing/team1.png" />
          <TeamBox img="/images/landing/team2.png" />
          <TeamBox img="/images/landing/team3.png" />
          <TeamBox img="/images/landing/team4.png" />
          <TeamBox img="/images/landing/team5.png" />
          <TeamBox img="/images/landing/team2.png" />
          <TeamBox img="/images/landing/team3.png" />
          <TeamBox img="/images/landing/team4.png" />
        </div>
      </Scene>
    </div>
  );
};
