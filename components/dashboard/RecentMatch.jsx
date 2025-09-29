import React from "react";
import styles from "../../styles/dashboard/index.module.css";
import { RecantRow } from "./RecantRow";

export const RecentMatch = () => {
  return (
    <div className={`${styles.RosterTeam}`}>
      <div
        className={`flex items-center  mb-10 justify-between ${styles.toppasttournaments}`}
      >
        <h1 className={`font-bebas-neue ${styles.headingStyle}`}>
          Recants <span>Match</span>
        </h1>

        <button
          className={`flex items-center h-10 px-4 rounded-lg font-satoshi-medium`}
        >
          Show More
          <svg
            className="ml-2"
            width="23"
            height="23"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="28"
              height="28"
              rx="14"
              fill="#0E0C15"
              fill-opacity="0.24"
            />
            <path
              d="M19 9.00002V14C19 14.46 18.6275 14.8334 18.1667 14.8334C17.7059 14.8334 17.3334 14.46 17.3334 14V11.0117L9.58923 18.7559C9.42673 18.9184 9.21337 19 9.00004 19C8.78671 19 8.57335 18.9184 8.41085 18.7559C8.08502 18.43 8.08502 17.9033 8.41085 17.5775L16.155 9.83335H13.1667C12.7059 9.83335 12.3334 9.46002 12.3334 9.00002C12.3334 8.54002 12.7059 8.16669 13.1667 8.16669H18.1667C18.275 8.16669 18.3834 8.18911 18.4851 8.23077C18.6893 8.31494 18.8518 8.47745 18.936 8.68162C18.9785 8.78329 19 8.89169 19 9.00002Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <div className={`p-8 ${styles.recantsmatchrows} rounded-xl`}>
        <RecantRow img="/images/profile-new/recant1.png" />
        <RecantRow img="/images/profile-new/recant2.png" />
        <RecantRow img="/images/profile-new/recant3.png" />
        <RecantRow img="/images/profile-new/recant4.png" />
      </div>
    </div>
  );
};
