import React from "react";

import style from "../../styles/player/player.module.css";
const PopularPlayerCard = ({ data }) => {
  return (
    <div
      className={`${style.PopularPlayerCard} flex rounded-lg items-center justify-between`}
    >
      <img src={data.img} alt="" />
      <div>
        <h1 className={`${style.presentationHeading} font-satoshi-bold`}>
          Joze Keneyra
        </h1>
        <p className={`${style.presentationPara} font-satoshi-medium mt-1`}>
          COUNTER-STRIKE: GLOBAL...
        </p>
      </div>
      <div className="grown">
        <p className={`${style.grownP} font-satoshi-light`}>
          Games held: <span className="font-satoshi-bold">67890</span>
        </p>
        <p className={`${style.grownP} font-satoshi-light mt-1`}>
          Followers: <span className="font-satoshi-bold">67890</span>
        </p>
      </div>
      <div className="status text-right">
        <h1 className={`${style.statusHeading} font-bebas-neue mb-1`}>
          Online
        </h1>
        <p className={`${style.statusshow} font-satoshi-light`}>
          Likes: <span className="font-satoshi-bold">67890</span>
        </p>
      </div>
    </div>
  );
};

export { PopularPlayerCard };
