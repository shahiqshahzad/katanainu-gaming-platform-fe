import React from "react";
import style from "../../styles/personalAccount/personalAccount.module.css";
export const MatchCard = ({ heading, bgcard, frontcard, id }) => {
  return (
    <div
      className={`${style.MatchCard} pr-16 flex items-center justify-end relative`}
      style={{ backgroundImage: `url(${bgcard})` }}
    >
      <button
        className={`cursor-pointer top-0 bg-transparent outline-none border-0 absolute right-0`}
      >
        <img src="/images/personalAccount/download.svg" alt="" />
      </button>

      <img
        src={frontcard}
        className={`-bottom-20 bg-transparent outline-none border-0 absolute  ${
          id == 1 ? "-left-5" : "-left-0"
        }`}
        alt=""
      />
      <h1 className={`font-bebas-neue   ${style.headingcard}`}>
        {heading[0]} <span> {heading[1]} </span>
      </h1>
      <div
        className={`${style.percentageWrapper} flex items-center justify-between px-5`}
      >
        <div className={`${style.barwrapper}`}>
          <span className={`${style.bar}`}></span>
        </div>
        <p className={`${style.percentageValue} font-satoshi-medium`}>
          378 Uploads
        </p>
      </div>
    </div>
  );
};
