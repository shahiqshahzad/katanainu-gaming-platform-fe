import React from "react";
import style from "../../styles/profile/profile.module.css";
export const RecentlyPlayedCard = ({ victory }) => {
  return (
    <div
      className={`${style.RecentlyPlayedCard} relative px-8 py-4 rounded-lg`}
    >
      {victory ? (
        <img
          src="/images/profile/victory.svg"
          className={`absolute right-0 top-0`}
          alt=""
        />
      ) : (
        <img
          src="/images/profile/novictory.svg"
          className={`absolute right-0 top-0`}
          alt=""
        />
      )}

      <div className={`flex items-center justify-between mb-5 pr-5`}>
        <h1 className={`font-satoshi-bold`}>20 Mar - 20:00 PM</h1>
        <h1 className={`flex items-center font-satoshi-bold`}>
          <img src="/images/profile/time.svg" alt="" className="mr-1" />
          29M 20S
        </h1>
      </div>

      <div className={`${style.teamarea} flex relative items-center w-full`}>
        <div className={`flex-1 flex items-center mr-6 justify-between`}>
          <div className={`${style.teambox} mr-10 flex items-center`}>
            <img src="/images/profile/team1.png" alt="" />
            <div className="ml-4">
              <h1 className={`font-bebas-neue ${style.mainheadingteam}`}>
                vibehunterzz
              </h1>
              <p className={`font-satoshi-bold  ${style.mainlevelteam}`}>
                Level 15
              </p>
            </div>
          </div>

          <div className={`${style.vs}`}>
            <img src="/images/profile/vs.svg" alt="" />
          </div>

          <div className={`${style.teambox}  ml-10 flex items-center`}>
            <div className="mr-4">
              <h1 className={`font-bebas-neue ${style.mainheadingteam}`}>
                SHURIKEN
              </h1>
              <p className={`font-satoshi-bold ${style.mainlevelteam}`}>
                Level 15
              </p>
            </div>
            <img src="/images/profile/team2.png" alt="" />
          </div>
        </div>

        <div className={`${style.infoboxwrapper} pl-4 flex items-center`}>
          <div className={`${style.infobox}`}>
            <h1 className={`${style.infoboxheading} font-satoshi-bold`}>MAP</h1>
            <p className={`${style.infoboxpara} font-satoshi-bold`}>De_dust2</p>
          </div>
          <div className={`${style.infobox}`}>
            <h1 className={`${style.infoboxheading} font-satoshi-bold`}>
              KILLS
            </h1>
            <p className={`${style.infoboxpara} font-satoshi-bold`}>06</p>
          </div>
          <div className={`${style.infobox}`}>
            <h1 className={`${style.infoboxheading} font-satoshi-bold`}>
              DEATHS
            </h1>
            <p className={`${style.infoboxpara} font-satoshi-bold`}>07</p>
          </div>
        </div>
      </div>
    </div>
  );
};
