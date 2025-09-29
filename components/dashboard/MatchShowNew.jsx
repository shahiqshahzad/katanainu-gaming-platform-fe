import React from "react";
import style from "../../styles/matchLings/matchLings.module.css";
import styletwo from "../../styles/personalAccount/personalAccount.module.css";
export const MatchShowNew = () => {
  return (
    <div
      className={`${style.MatchCard} ${styletwo.MatchShow} ${style.MatchShowNew} flex items-center  w-full p-6 rounded-xl justify-between`}
    >
      <div className={`flex items-center flex-col text-center`}>
        <img src="/images/home/team1homenew.svg" alt="" />
        <div>
          <h1 className={`${style.matchcardheading} font-bebas-neue`}>
            Skeletons
          </h1>
          <p className={`font-satoshi-medium ${style.matchcardParaNew}`}>
            1 teams
          </p>
        </div>
      </div>

      <div className={style.matchRound}>
        <div className={`${style.top} flex items-center`}>
          <h1
            className={`${style.matchRoundheading}  ${styletwo.matchRoundheading} 
            mr-6 font-bebas-neue w-12 h-12 rounded-lg flex items-center justify-center`}
          >
            3
          </h1>
          <h1
            className={`${style.matchRoundheading} ${styletwo.matchRoundheading}  font-bebas-neue w-12 h-12 rounded-lg flex items-center justify-center`}
          >
            0
          </h1>
        </div>
      </div>

      <div className={`flex items-center flex-col`}>
        <img src="/images/home/team2homenew.svg" alt="" />
        <div>
          <h1 className={`${style.matchcardheading} font-bebas-neue`}>
            Dragons
          </h1>
          <p className={`font-satoshi-medium ${style.matchcardParaNew}`}>
            1 teams
          </p>
        </div>
      </div>
    </div>
  );
};
