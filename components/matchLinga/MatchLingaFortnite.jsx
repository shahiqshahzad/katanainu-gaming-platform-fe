import React from "react";
import style from "../../styles/matchLings/matchLings.module.css";
import Link from "next/link";
import { MatchCardFortnite } from "./MatchCardFortnite";

export const MatchLingaFortnite = () => {
  return (
    <div className={`${style.MatchLingaFortnite} w-full relative rounded-2xl`}>
      <div className={`flex items-center justify-between`}>
        <div className={``}>
          <h1
            className={`${style.MatchLingaFortniteHeading} font-satoshi-bold `}
          >
            <span>Match</span> Linage
          </h1>
          <h2
            className={`flex mt-6 items-center font-bebas-neue ${style.forniteHeading2}`}
          >
            Fourtnite
            <span
              className={`font-satoshi-medium justify-center items-center flex ml-3 ${style.forniteLive}`}
            >
              Live
            </span>
          </h2>
        </div>

        <div className={`${style.matchWrapperHeading} p-6 rounded-2xl`}>
          <h1
            className={`flex items-center ${style.matcheading} font-satoshi-medium`}
          >
            Group stage
            <span className={`${style.matcheadingspan} ml-2 font-satoshi-bold`}>
              Matchday 1 of 5
            </span>
          </h1>
        </div>
      </div>
      <h1 className={`${style.saperateheading} font-satoshi-medium `}>
        <span>Last matches</span> where the hero was involved
      </h1>

      <MatchCardFortnite />

      <div>
        <div className="flex items-center justify-between">
          <h1 className={`${style.resultHeading} font-bebas-neue`}>JK</h1>
          <h1 className={`${style.resultHeading} font-bebas-neue`}>Firebird</h1>
          <h1 className={`${style.resultHeading} font-bebas-neue`}>JK</h1>
        </div>
        <div className={`grid grid-cols-2 gap-3 my-6`}>
          <span
            className={`flex rounded-full ${style.percentageSpan} ${style.percentageSpanOne}`}
          ></span>
          <span
            className={`flex rounded-full ${style.percentageSpan} ${style.percentageSpanTwo}`}
          ></span>
        </div>
        <div className="flex items-center justify-between">
          <h1 className={`${style.resultHeading} font-bebas-neue`}>35.5k</h1>
          <h1 className={`${style.resultHeading} font-bebas-neue`}>Coatch</h1>
          <h1 className={`${style.resultHeading} font-bebas-neue`}>35.5k</h1>
        </div>
      </div>

      <div
        className={`${style.headingBanner} flex items-center justify-center font-bebas-neue absolute bottom-0`}
      >
        <h1>Statistic Gamer</h1>
      </div>
    </div>
  );
};
