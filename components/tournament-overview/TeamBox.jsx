import React from "react";
import styles from "../../styles/tournament-overview/index.module.css";
export const TeamBox = ({ img }) => {
  return (
    <div
      className={`${styles.TeamBox} flex flex-col rounded-lg justify-end  pb-6 px-6 mt-20`}
    >
      <img src={img} className="mb-10" alt="" />

      <h1 className={`font-bebas-neue`}>Andreas Noack</h1>
      <p
        className={`font-bebas-neue px-3 flex items-center rounded-xl rounded-bl-0 rounded-br-0 my-6`}
      >
        Uswordfish
      </p>
      <div className={`flex items-center`}>
        <a href="#" className="mr-1">
          <img src="/images/tournament/facebook.svg" alt="" />
        </a>
        <a href="#" className="mr-1">
          <img src="/images/tournament/insta.svg" alt="" />
        </a>
        <a href="#" className="mr-1">
          <img src="/images/tournament/twitter.svg" alt="" />
        </a>
        <a href="#">
          <img src="/images/tournament/discord.svg" alt="" />
        </a>
      </div>
    </div>
  );
};
