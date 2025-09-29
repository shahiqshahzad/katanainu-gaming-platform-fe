import React from "react";
import styles from "../../styles/dashboard/index.module.css";
export const ProfileUserSidebar = () => {
  return (
    <div className={`p-8 rounded-xl  ${styles.profileuser}`}>
      <div className="flex items-center">
        <img src="/images/profile-new/avatar.png" alt="" />

        <div className="ml-2">
          <h1 className={`font-anton`}>Esther Howard</h1>
          <p className={`flex items-center font-anton`}>
            <img src="/images/profile-new/user.svg" className="mr-1" alt="" />
            28,350
            <span className={`font-satoshi-medium ml-2`}>Subscribe</span>
          </p>
        </div>
      </div>
      <div className={`grid grid-cols-6 gap-3 mt-6 ${styles.gridbox}`}>
        <div className="text-left col-span-3 p-3 rounded">
          <h1 className={`font-satoshi-medium`}>Gamer Score</h1>
          <p className={`font-anton mt-2`}>346</p>
        </div>
        <div className="text-left col-span-3 rounded  p-3">
          <h1 className={`font-satoshi-medium`}>Game Rank</h1>
          <p className={`font-anton mt-2`}>759</p>
        </div>

        <div
          className={`text-right col-span-2 rounded  px-2 py-2 ${styles.smallbox}`}
        >
          <h1 className={`font-satoshi-medium`}>K/d Ratio</h1>
          <p className={`font-anton mt-2`}>2.48</p>
        </div>
        <div
          className={`text-right col-span-2 rounded  px-3 py-2 ${styles.smallbox}`}
        >
          <h1 className={`font-satoshi-medium`}>Match</h1>
          <p className={`font-anton mt-2`}>1207</p>
        </div>
        <div
          className={`text-right col-span-2 rounded  px-3 py-2 ${styles.smallbox}`}
        >
          <h1 className={`font-satoshi-medium`}>Achieve</h1>
          <p className={`font-anton mt-2`}>2085</p>
        </div>
      </div>
    </div>
  );
};
