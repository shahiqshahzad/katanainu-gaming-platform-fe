import React from "react";
import styles from "../../styles/dashboard/index.module.css";
export const RosterCard = ({ heading, img, position }) => {
  return (
    <div className={`${styles.RosterCard}`}>
      <img src={img} alt="" className="w-full" />
      <div className={`pl-2 mt-4`}>
        <h1 className={`font-bebas-neue`}>{heading}</h1>
        <p className={`font-bebas-neue mt-1`}>
          {position}{" "}
          <span className={`font-satoshi-medium ml-1`}>Position</span>
        </p>
      </div>
    </div>
  );
};
