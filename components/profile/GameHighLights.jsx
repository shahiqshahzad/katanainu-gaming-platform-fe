import React from "react";
import style from "../../styles/profile/profile.module.css";
import { HighLightAction } from "./HighLightAction";

export const GameHighLights = () => {
  return (
    <div className={`${style.RecentlyPlayed} `}>
      <div
        className={`flex mb-8 items-center justify-between ${style.topBattle}`}
      >
        <h1 className={`${style.RecentlyPlayedHeading} font-bebas-neue`}>
          Game <span>Highlights</span>
        </h1>
        <button className={`${style.RecentlyPlayedButton} font-satoshi-medium`}>
          Show More
        </button>
      </div>

      <div className={` ${style.GameHighLights}`}>
        <div
          className={`${style.bannerarea} flex items-center pt-14 pl-8 w-full`}
        >
          <h1 className={`font-bebas-neue ${style.bannerareaheading}`}>
            Call of duty Modern <br />
            warfare 3
          </h1>
        </div>

        <HighLightAction
          img="/images/profile/adventer.svg"
          name="Adventure"
          percentage="93%"
        />
        <HighLightAction
          img="/images/profile/action.svg"
          name="Action"
          percentage="23%"
        />
        <HighLightAction
          img="/images/profile/strategy.svg"
          name="Strategy"
          percentage="73%"
        />
        <HighLightAction
          img="/images/profile/role.svg"
          name="Role playing"
          percentage="63%"
        />
      </div>
    </div>
  );
};
