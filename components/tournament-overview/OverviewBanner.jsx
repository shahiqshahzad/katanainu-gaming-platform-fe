import React from "react";
import style from "../../styles/tournament-overview/index.module.css";
export const OverviewBanner = () => {
  return (
    <div className={`${style.OverviewBanner} flex items-end`}>
      <div className={`${style.overviewcontent} w-full px-8 flex items-center`}>
        <img src="/images/tournament/profile.svg" alt="" />
        <div className="ml-6 flex-1">
          <h1 className={`flex items-center font-bebas-neue`}>
            THE <span className="ml-2">Ninja squad</span>
            <img src="/images/tournament/badge.svg" alt="" />
          </h1>
          <p className={`font-satoshi-medium`}>
            25TH AUGUST 2020 / 15:00 / MAORID
          </p>
        </div>

        <div className="mr-7">
          <h1 className={`flex items-center font-satoshi-bold`}>
            <img src="/images/tournament/money.svg" className="mr-2" alt="" />
            280K
          </h1>
          <p className={`font-satoshi-medium mt-2`}>PRIZE POOL</p>
        </div>

        <div className="mr-7">
          <h1 className={`flex items-center font-satoshi-bold`}>
            <img src="/images/tournament/mode.svg" className="mr-2" alt="" />
            5V5
          </h1>
          <p className={`font-satoshi-medium mt-2`}>PLAY MODE</p>
        </div>

        <div className="mr-7">
          <h1 className={`flex items-center font-satoshi-bold`}>
            <img src="/images/tournament/pc.svg" className="mr-2" alt="" />
            PC
          </h1>
          <p className={`font-satoshi-medium mt-2`}>PLATFORM</p>
        </div>
        <div className="mr-7">
          <h1 className={`flex items-center font-satoshi-bold`}>
            <img src="/images/tournament/group.svg" className="mr-2" alt="" />
            GROUPS
          </h1>
          <p className={`font-satoshi-medium mt-2`}>PLAYERS</p>
        </div>
        <button className={`flex items-center h-12 rounded justify-center`}>
          <img src="/images/tournament/follow.svg" alt="" className="mr-2" />
          Follow
        </button>
      </div>
    </div>
  );
};
