import Link from "next/link";
import React from "react";
import styles from "../../styles/dashboard/index.module.css";
export const HomeBanner = () => {
  return (
    <div className={`${styles.HomeBanner} rounded-xl flex items-center pl-8`}>
      <div className={`p-8 ${styles.homebannerpresentation}`}>
        <h1 className={`font-bebas-neue`}>
          Tournament <span>Record</span>
        </h1>
        <div className="grid grid-cols-2 mt-6">
          <div className="timer">
            <h2 className={`font-satoshi-medium`}>for the last month</h2>

            <div className={`${styles.clockwrapper} flex gap-1 mt-4`}>
              <h1
                className={`font-bebas-neue flex items-center justify-center`}
              >
                <span>07</span>
              </h1>
              <h1
                className={`font-bebas-neue flex items-center justify-center`}
              >
                <span>04</span>
              </h1>
              <h1
                className={`font-bebas-neue flex items-center justify-center`}
              >
                <span>06</span>
              </h1>
              <h1
                className={`font-bebas-neue flex items-center justify-center`}
              >
                <span>02</span>
              </h1>
              <h1
                className={`font-bebas-neue flex items-center justify-center`}
              >
                <span>00</span>
              </h1>
            </div>
          </div>
          <div className="timer">
            <h2 className={`font-satoshi-medium`}>for the last month</h2>

            <div className={`${styles.clockwrapper} flex gap-1 mt-4`}>
              <h1
                className={`font-bebas-neue flex items-center justify-center`}
              >
                <span>07</span>
              </h1>
              <h1
                className={`font-bebas-neue flex items-center justify-center`}
              >
                <span>04</span>
              </h1>
              <h1
                className={`font-bebas-neue flex items-center justify-center`}
              >
                <span>06</span>
              </h1>
              <h1
                className={`font-bebas-neue flex items-center justify-center`}
              >
                <span>02</span>
              </h1>
              <h1
                className={`font-bebas-neue flex items-center justify-center`}
              >
                <span>00</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
