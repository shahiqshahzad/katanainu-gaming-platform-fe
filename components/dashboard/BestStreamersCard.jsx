import React from "react";
import styles from "../../styles/dashboard/index.module.css";
export const BestStreamersCard = () => {
  return (
    <div
      className={`${styles.BestStreamersCard} relative rounded-lg mt-10 py-2`}
    >
      <img
        src="/images/home/best-streamers.svg"
        className="rounded-xl w-20 h-20 absolute -top-10 left-1/2 transform -translate-x-1/2"
        alt=""
      />
      <div className={`flex items-center px-2 justify-between`}>
        <img src="/images/home/top.svg" alt="" />
        <img src="/images/home/threedots.svg" alt="" />
      </div>
      <div
        className={`${styles.presentationstream} flex flex-col items-center  px-4 py-4`}
      >
        <h1 className={`font-bebas-neue`}>Criss Gano</h1>
        <p className={`font-satoshi-regular mt-2 flex items-center`}>
          <span className="w-2 h-2 rounded-full flex mr-1"></span>
          Online
        </p>
        <p className={`font-satoshi-regular mt-2`}>You have a friend</p>
      </div>
    </div>
  );
};
