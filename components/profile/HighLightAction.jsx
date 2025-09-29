import React from "react";
import style from "../../styles/profile/profile.module.css";

export const HighLightAction = ({ img, name, percentage }) => {
  return (
    <div className={`flex items-center mt-1  ${style.headingrow} px-6`}>
      <img src={img} className="mr-5" alt="" />
      <h1 className={`font-bebas-neue flex-1 ${style.headingrowpercentage}`}>
        {name}
      </h1>

      <div className={`${style.percentage}`}>
        <span
          className={`${style.percentageInner}`}
          style={{ width: percentage }}
        ></span>
      </div>
    </div>
  );
};
