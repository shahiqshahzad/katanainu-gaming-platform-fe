import React from "react";
import style from "../../styles/matchLings/matchLings.module.css";
export const MatchCardFortnite = () => {
  return (
    <div
      className={`${style.MatchCard} ${style.MatchCardFortnite} flex items-center  w-full mb-10   rounded-xl justify-between`}
    >
      <div className={`flex items-center`}>
        <div>
          <h1 className={`${style.matchcardheading} font-bebas-neue`}>
            Firebird
          </h1>
          <p className={`flex items-center mt-2 ${style.matchcardpara}`}>
            <img src="/images/matchLinga/star.svg" alt="" className="mr-1" />
            4.5
          </p>
        </div>
        <img src="/images/player/team1.svg" className="ml-7" alt="" />
      </div>

      <div className={style.matchRound}>
        <div className={`${style.top} flex items-center`}>
          <h1
            className={`${style.matchRoundheading} mr-6 font-bebas-neue w-12 h-12 rounded-lg flex items-center justify-center`}
          >
            0
          </h1>
          <h1
            className={`${style.matchRoundheading} font-bebas-neue w-12 h-12 rounded-lg flex items-center justify-center`}
          >
            0
          </h1>
        </div>
      </div>

      <div className={`flex items-center`}>
        <img src="/images/player/team2.svg" className="mr-7" alt="" />
        <div>
          <h1 className={`${style.matchcardheading} font-bebas-neue`}>
            Crazygirl
          </h1>
          <p className={`flex items-center mt-2 ${style.matchcardpara}`}>
            <img src="/images/matchLinga/star.svg" alt="" className="mr-1" />
            4.5
          </p>
        </div>
      </div>
    </div>
  );
};
