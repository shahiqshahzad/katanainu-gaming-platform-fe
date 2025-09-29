import React from "react";
import style from "../../styles/profile/profile.module.css";

export const TeamFinderCard = ({ img, name }) => {
  return (
    <div className={`${style.TeamFinderCard} p-5`}>
      <div className={`flex items-center`}>
        <img src={img} alt="" />
        <div className={`ml-3`}>
          <h1 className={`font-satoshi-bold ${style.TeamFinderCardHeading}`}>
            {name}
          </h1>
          <p className={`font-satoshi-medium  ${style.TeamFinderCardLastTime}`}>
            Joined about 1 hour ago
          </p>
        </div>
        <div className={`ml-3 flex-1`}>
          <h1 className={`font-bebas-neue ${style.TeamFinderCardLastState}`}>
            Stats
          </h1>
          <p className={`font-satoshi-regular ${style.TeamFinderCardLastW}`}>
            20W 67L(23%)
          </p>
        </div>
        <img src="/images/profile/chart.svg" alt="" />
      </div>
      <div className={`grid grid-cols-3 gap-2 my-5`}>
        <div
          className={`flex items-center px-4 justify-between ${style.TeamFinderBox}`}
        >
          <h1 className={`font-bebas-neue ${style.TeamFinderBoxHeading}`}>
            Game
          </h1>
          <p className={`font-satoshi-regular ${style.TeamFinderCardPara}`}>
            Glob_876
          </p>
        </div>
        <div
          className={`flex items-center px-4 justify-between ${style.TeamFinderBox}`}
        >
          <h1 className={`font-bebas-neue ${style.TeamFinderBoxHeading}`}>
            Role
          </h1>
          <p className={`font-satoshi-regular ${style.TeamFinderCardPara}`}>
            Rifler
          </p>
        </div>
        <div
          className={`flex items-center px-4 justify-between ${style.TeamFinderBox}`}
        >
          <h1 className={`font-bebas-neue ${style.TeamFinderBoxHeading}`}>
            Platform
          </h1>
          <p className={`font-satoshi-regular ${style.TeamFinderCardPara}`}>
            Glob_876
          </p>
        </div>
      </div>
      <button
        className={`font-satoshi-medium h-12 w-full flex items-center justify-center rounded-full ${style.invitebutton}`}
      >
        Invite to Team
      </button>
    </div>
  );
};
