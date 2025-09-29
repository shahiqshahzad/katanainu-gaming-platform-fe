import React from "react";
import styles from "../../styles/dashboard/index.module.css";
export const AboutProfile = () => {
  return (
    <div className={`${styles.about} p-8 rounded-xl mb-20`}>
      <div
        className={`${styles.abouthead} mb-4 flex items-center justify-between`}
      >
        <h1 className={`font-bebas-neue`}>
          About <span>me</span>
        </h1>
        <div className={`${styles.abouthead} flex items-center`}>
          <a href="#">
            <img src="/images/profile-new/facebook.svg" alt="" />
          </a>
          <a href="#">
            <img src="/images/profile-new/linkedin.svg" alt="" />
          </a>
          <a href="#">
            <img src="/images/profile-new/insta.svg" alt="" />
          </a>
          <a href="#">
            <img src="/images/profile-new/twitter.svg" alt="" />
          </a>
        </div>
      </div>

      <p className={`font-satoshi-regular`}>
        Your ultimate goal is to discover the ancient artifacts scattered across
        the land and unlock the secrets of the realm. Along the way, you will
        encounter various obstacles and puzzles that will require your sharp
        intellect and problem-solving skills to overcome.
      </p>
    </div>
  );
};
