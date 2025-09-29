import React from "react";
import style from "../../styles/player/player.module.css";
const BestPlayerCard = ({ data }) => {
  return (
    <div className="BestPlayerCard">
      <div
        className={`${style.TopCard} border border-transparent px-4 pt-5 pb-6 rounded-lg`}
      >
        <img src={data.img} className={`w-full ${style.topcardImage}`} alt="" />
        <div
          className={`mt-6 flex items-center justify-between ${style.profilename}`}
        >
          <h1 className="font-bebas-neue">Andreas Noack</h1>
          <p>Worl Team</p>
        </div>
        <div className="traffic mt-4 flex items-center justify-between">
          <p className={style.trafficPara}>
            <span>23455</span> viewer
          </p>
          <p className={style.trafficPara}>
            <span>23455</span> likes
          </p>
        </div>
        <button
          className={`flex mt-4 mb-6 p-3  w-full items-center justify-between ${style.bestplayercardtopbuton}`}
        >
          <p className={`font-bebas-neue ${style.bestplayercardtopbutonName}`}>
            Subscribe
          </p>
          <div className="flex items-center">
            <img
              src="/images/player/view1.svg"
              className="w-6 relative z-10 transform translate-x-8"
              alt=""
            />
            <img
              src="/images/player/view2.svg"
              className="w-6 relative z-20 transform translate-x-6"
              alt=""
            />
            <img
              src="/images/player/view3.svg"
              className="w-6 relative z-30 transform translate-x-4"
              alt=""
            />
            <img
              src="/images/player/view4.svg"
              className="w-6 relative z-40 transform translate-x-2"
              alt=""
            />
            <img
              src="/images/player/plus.svg"
              className="w-6 relative z-50"
              alt=""
            />
          </div>
        </button>
      </div>

      <div className={`${style.bottomCard} px-4 pt-5 pb-6 rounded-lg`}>
        <div
          className={`${style.ImageWrapperBottomCard} rounded flex items-center justify-between`}
        >
          <img src={data.team1} alt="" />
          <div className="flex items-center">
            <h1 className={`font-bebas-neue mr-4 ${style.ImageWrapperHeading}`}>
              03
            </h1>
            <h1 className={`font-bebas-neue mr-4 ${style.ImageWrapperHeading}`}>
              Vs
            </h1>
            <h1 className={`font-bebas-neue ${style.ImageWrapperHeading}`}>
              04
            </h1>
          </div>
          <img src={data.team2} alt="" />
        </div>
      </div>
    </div>
  );
};

export { BestPlayerCard };
