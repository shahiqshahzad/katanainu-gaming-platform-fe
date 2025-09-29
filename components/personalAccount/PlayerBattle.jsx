import React from "react";
import style from "../../styles/personalAccount/personalAccount.module.css";
import { MatchShow } from "./MatchShow";

export const PlayerBattle = () => {
  return (
    <div className={`mt-20 ${style.PlayerBattle}`}>
      <div
        className={`flex mb-10 items-center justify-between ${style.topBattle}`}
      >
        <h1 className={`${style.topBattleHeading} font-bebas-neue`}>
          PLAYER <span>BATTLES</span>
        </h1>
        <button className={`${style.topBattleButton} font-satoshi-medium`}>
          Show More
        </button>
      </div>

      <div className={`grid  ${style.PlayerBattleGrid} grid-cols-2 gap-6`}>
        <MatchShow />
        <MatchShow />
      </div>
      <div
        className={`mt-10 px-9 relative flex items-center ${style.longCard}`}
      >
        <div className="flex-1 flex items-center">
          <div className="mr-5">
            <img src="/images/personalAccount/pubg.png" alt="" />
          </div>
          <div>
            <h1 className={`font-bebas-neue ${style.longCardHeading}`}>Pubg</h1>
            <p className={`font-satoshi-medium ${style.longCardPara}`}>
              22 people
            </p>
          </div>
        </div>
        <div className="flex-1">
          <h1 className={`font-bebas-neue ${style.longCardHeading}`}>Time</h1>
          <p className={`font-satoshi-medium ${style.longCardPara}`}>
            19 May 2023
          </p>
        </div>
        <div className="flex-1">
          <h1 className={`font-bebas-neue ${style.longCardHeading}`}>DATA</h1>
          <p className={`font-satoshi-medium ${style.longCardPara}`}>
            Your position: <span>#14th</span>
          </p>
        </div>
        <div className="flex-1 pr-10">
          <h1 className={`font-bebas-neue ${style.longCardHeadingMore}`}>
            35%
          </h1>
        </div>
        <img
          src="/images/personalAccount/rec.png"
          className="absolute right-0 rounded-tr-2xl rounded-br-2xl top-0"
          alt=""
        />
      </div>
    </div>
  );
};
