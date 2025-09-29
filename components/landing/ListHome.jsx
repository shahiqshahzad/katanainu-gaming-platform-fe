import React from "react";
import styles from "../../styles/tournament-overview/index.module.css";
import stylestwo from "../../styles/landing/index.module.css";
import { ListContent } from "../tournament-overview/ListContent";
import { Scene } from "react-scrollmagic";
export const ListHome = () => {
  return (
    <div className={`${styles.teamoverview} ${stylestwo.listhomenew} `}>
      <Scene triggerHook={0.8} reverse={false} classToggle={"scrollIn"}>
        <div className={`flex items-center justify-between scrollOut`}>
          <h1 className={`font-bebas-neue`}>
            NOOB DIA PARADISO <br />
            <span>TOURNAMENT</span>
          </h1>
          <h2 className={`font-bebas-neue transform translate-y-8`}>List</h2>
        </div>
      </Scene>
      <Scene triggerHook={0.8} reverse={false} classToggle={"scrollIn"}>
        <div className="mb-20 scrollOut">
          <ListContent />
        </div>
      </Scene>
      <Scene triggerHook={0.8} reverse={false} classToggle={"scrollIn"}>
        <div className="mb-20 scrollOut">
          <ListContent />
        </div>
      </Scene>
      <Scene triggerHook={0.8} reverse={false} classToggle={"scrollIn"}>
        <div className="scrollOut">
          <ListContent />
        </div>
      </Scene>
    </div>
  );
};
