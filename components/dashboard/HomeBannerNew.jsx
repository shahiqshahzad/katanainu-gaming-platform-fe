import Link from "next/link";
import React from "react";
import styles from "../../styles/dashboard/index.module.css";
export const HomeBannerNew = () => {
  return (
    <div
      className={`${styles.HomeBannerNew} rounded-xl flex items-center pl-20`}
    >
      <div className={`${styles.homebannernewpresentation}`}>
        <h1 className={`font-bebas-neue flex items-end`}>
          Connect to
          <img src="/images/home/stream-outline.svg" className="ml-4" alt="" />
        </h1>
        <p className={`font-satoshi-regular py-4 mt-4 text-center`}>
          Play everywhere at any time
        </p>
        <div className={`flex items-center mt-8`}>
          <button
            className={`flex flex-1 font-satoshi-medium items-center justify-center mr-4 h-11 rounded-lg px-5`}
          >
            Browser Stream
          </button>
          <button
            className={`flex flex-1 font-satoshi-medium items-center justify-center h-11 rounded-lg px-5`}
          >
            Join with Stream
          </button>
        </div>
      </div>
    </div>
  );
};
