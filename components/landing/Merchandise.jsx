import React from "react";
import styles from "../../styles/tournament-overview/index.module.css";
import stylestwo from "../../styles/landing/index.module.css";
import { MerchandiseCard } from "../dashboard/MerchandiseCard";
import { Scene } from "react-scrollmagic";
export const Merchandise = () => {
  return (
    <div className={`${styles.teamoverview} ${stylestwo.teamoverview}`}>
      <Scene triggerHook={0.8} reverse={false} classToggle={"scrollIn"}>
        <div className={`flex items-center justify-between scrollOut`}>
          <h2 className={`font-bebas-neue transform translate-y-10`}>nEWEST</h2>
          <h1 className={`font-bebas-neue transform -translate-x-60`}>
            Merchandise
            <br />
            <span>Items</span>
          </h1>
        </div>
      </Scene>
      <Scene triggerHook={0.8} reverse={false} classToggle={"scrollIn"}>
        <div
          className={`grid grid-cols-3 gap-8 scrollOut ${stylestwo.merchandisemobile}`}
        >
          <MerchandiseCard img="/images/landing/shirtone.svg" />
          <MerchandiseCard img="/images/landing/shirttwo.svg" />
          <MerchandiseCard img="/images/landing/shirtthree.svg" />
        </div>
      </Scene>
    </div>
  );
};
