import React from "react";
import styles from "../../styles/dashboard/index.module.css";
export const TournamentPlanBox = ({
  active = null,
  heading,
  users,
  lastbox,
}) => {
  return (
    <div
      className={`${styles.TournamentPlanBox} ${
        active && styles.active
      } relative `}
    >
      <div className={`flex items-center h-12 relative z-10 px-6`}>
        <img src="/images/home/plan1.svg" className="w-8 h-8" alt="" />
        <h1 className={`ml-2 font-bebas-neue flex-1`}>{heading}</h1>
        <p className={`font-satoshi-medium`}>{users}</p>
        <img src="/images/home/user.svg" className={`mr-2`} alt="" />
        <h2 className="w-9 h-9 rounded flex items-center justify-center font-bebas-neue">
          {lastbox}
        </h2>
      </div>

      {active ? (
        <img
          src="/images/home/bg-tournamentplanactive.png"
          className="absolute left-0 top-0 z-0 w-full"
          alt=""
        />
      ) : (
        <img
          src="/images/home/bg-tournamentplan.png"
          className="absolute left-0 top-0 z-0 w-full"
          alt=""
        />
      )}
    </div>
  );
};
