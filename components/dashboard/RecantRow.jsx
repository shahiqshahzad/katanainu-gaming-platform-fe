import React from "react";
import styles from "../../styles/dashboard/index.module.css";

export const RecantRow = ({ img }) => {
  return (
    <div className={`${styles.RecantRow} mb-3 flex items-center`}>
      <img src={img} alt="" />
      <div
        className={`flex relative items-center justify-between flex-1 ml-1 pl-8 pr-8`}
      >
        <div className="relative z-10">
          <h1 className={`font-bebas-neue`}>Fortnite Battle Royale</h1>
          <p className={`font-satoshi-medium`}>
            Your Position: <span>#102th</span>
          </p>
        </div>
        <div className={`text-center relative z-10`}>
          <h1 className={`font-satoshi-medium`}>Wins</h1>
          <p className={`font-bebas-neue  mt-3`}>04</p>
        </div>
        <div className={`text-center relative z-10`}>
          <h1 className={`font-satoshi-medium`}>Top 10</h1>
          <p className={`font-bebas-neue  mt-3`}>24</p>
        </div>
        <div className={`text-center relative z-10`}>
          <h1 className={`font-satoshi-medium`}>Elimimation</h1>
          <p className={`font-bebas-neue  mt-3`}>24</p>
        </div>
        <div className={`text-center relative z-10`}>
          <h1 className={`font-satoshi-medium`}>Match ID</h1>
          <p className={`font-bebas-neue mt-3`}>845 4488 184</p>
        </div>
        <img
          src="/images/profile-new/bg-recants.png"
          className="absolute left-0 w-full z-0"
          alt=""
        />
      </div>
    </div>
  );
};
