import React from "react";
import style from "../../styles/matchLings/matchLings.module.css";
import styletwo from "../../styles/personalAccount/personalAccount.module.css";
import stylesthree from "../../styles/dashboard/index.module.css";
export const MatchShow = () => {
  return (
    <div
      className={`${style.MatchCard} mb-2 ${styletwo.MatchShow}  ${stylesthree.MatchShow}  flex items-center  w-full p-6 rounded-xl justify-between`}
    >
      <div className={`flex items-center`}>
        <div>
          <h1 className={`${style.matchcardheading} font-bebas-neue`}>
            Skeletons
          </h1>
          <p className={`${style.matchcardpara} mt-1 font-satoshi-medium`}>
            1 teams
          </p>
        </div>
        <img src="/images/player/team1.svg" className="ml-2" alt="" />
      </div>

      <div className={style.matchRound}>
        <div className={`${style.top} flex items-center`}>
          <h1
            className={`${style.matchRoundheading}  ${styletwo.matchRoundheading}
            ${stylesthree.matchRoundheading} 
            mr-6 font-bebas-neue w-12 h-12 rounded-lg flex items-center justify-center`}
          >
            3
          </h1>
          <h1
            className={`${style.matchRoundheading} ${styletwo.matchRoundheading}      ${stylesthree.matchRoundheading} font-bebas-neue w-12 h-12 rounded-lg flex items-center justify-center`}
          >
            0
          </h1>
        </div>
        <h2
          className={`mt-3 text-center font-satoshi-medium ${style.matchRoundTime}    ${stylesthree.matchRoundTime} `}
        >
          time match
        </h2>
      </div>

      <div className={`flex items-center`}>
        <img src="/images/player/team2.svg" className="mr-2" alt="" />
        <div>
          <h1 className={`${style.matchcardheading} font-bebas-neue`}>
            Dragons
          </h1>
          <p className={`${style.matchcardpara} mt-1 font-satoshi-medium`}>
            1 teams
          </p>
        </div>
      </div>
    </div>
  );
};
