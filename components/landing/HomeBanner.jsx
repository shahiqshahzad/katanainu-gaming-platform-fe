import React from "react";
import styles from "../../styles/landing/index.module.css";
import Link from "next/link";
import { Scene } from "react-scrollmagic";
export const HomeBanner = () => {
  return (
    <div
      className={`${styles.homebanner} relative overflow-hidden flex flex-col justify-center items-center`}
    >
      <Scene triggerHook={1} reverse={false} classToggle={"scrollOutNormal"}>
        <img
          src="/images/landing/banner-left.png"
          className="-left-10 absolute bottom-0 scrollOutLeft"
          alt=""
        />
      </Scene>
      <Scene triggerHook={1} reverse={false} classToggle={"scrollIn"}>
        <img
          src="/images/landing/banner-right.png"
          className="-right-10 absolute bottom-6 scrollOutRight"
          alt=""
        />
      </Scene>
      <Scene triggerHook={1} reverse={false} classToggle={"scrollIn"}>
        <img
          src="/images/landing/banner-logo.svg"
          className="scrollOut"
          alt=""
        />
      </Scene>
      <Scene triggerHook={1} reverse={false} classToggle={"scrollIn"}>
        <div
          className={`flex items-center mt-10 scrollOut ${styles.bannerbuttons}`}
        >
          <Link
            href="#"
            className={`flex items-center h-12 rounded-lg mr-6 font-satoshi-medium justify-center`}
          >
            <img src="/images/landing/play.svg" alt="" className="mr-2" />
            BUY THEME
          </Link>
          <Link
            href="#"
            className={`flex items-center h-12 rounded-lg font-satoshi-medium justify-center`}
          >
            <img src="/images/landing/arrow.svg" alt="" className="mr-2" />
            MEET US
          </Link>
        </div>
      </Scene>
    </div>
  );
};
