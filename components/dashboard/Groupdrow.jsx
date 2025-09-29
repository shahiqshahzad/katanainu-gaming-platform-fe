import React from "react";
import styles from "../../styles/dashboard/index.module.css";
export const Groupdrow = ({ active = null, img }) => {
  return (
    <div
      className={`${styles.Groupdrow} ${
        active && styles.active
      } mt-2 px-4 py-2 rounded-lg flex items-center`}
    >
      <img
        src={img}
        alt=""
        className="cursor-pointer"
        onClick={(e) => {
          navigate.push("/");
        }}
      />
      <h1
        className="flex-1 ml-3 font-bebas-neue cursor-pointer"
        onClick={(e) => {
          navigate.push("/");
        }}
      >
        Kings Skeletos
      </h1>
      <img src="/images/home/NFT Symbol.svg" className="mr-1" alt="" />
      <p>784</p>
      <h2
        className={`w-12 h-12 rounded-full font-bebas-neue ml-3 flex items-center justify-center`}
      >
        4.9
      </h2>
    </div>
  );
};
