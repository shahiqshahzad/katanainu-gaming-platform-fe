import React from "react";
import styles from "../../styles/dashboard/index.module.css";
import { Groupdrow } from "./Groupdrow";
export const LatestAnalytics = () => {
  return (
    <div className={`${styles.LatestAnalytics} mt-20`}>
      <h1 className={`${styles.headingStyle} mb-10 font-bebas-neue`}>
        Latest <span>analytics</span>
      </h1>

      <div
        className={`grid grid-cols-2 gap-20 px-6 py-10 ${styles.LatestAnalyticsBox} rounded-lg`}
      >
        <div>
          <h1 className={`font-bebas-neue`}>Final Battle</h1>
          <p className={`font-satoshi-medium mt-3`}>
            Only 3 days to go ! Final battle among the teams <br /> will excited
            you more. Lot’s of fun ever.
          </p>

          <div className="grid grid-cols-3 mt-8 gap-6">
            <div
              className={`${styles.boxteam} py-4 rounded flex flex-col items-center justify-center`}
            >
              <img src="/images/home/battle1.svg" className={`mb-6`} alt="" />
              <h1 className={`mt-2 font-bebas-neue ${styles.active}`}>
                Lion’s team
              </h1>
            </div>
            <div
              className={`${styles.boxteam} py-4 rounded flex flex-col items-center justify-center`}
            >
              <img src="/images/home/battle2.svg" className={`mb-6`} alt="" />
              <h1 className={`mt-2 font-bebas-neue `}>Kings skeleton</h1>
            </div>
            <div
              className={`${styles.boxteam} py-4 rounded flex flex-col items-center justify-center`}
            >
              <img src="/images/home/battle3.svg" className={`mb-6`} alt="" />
              <h1 className={`mt-2 font-bebas-neue `}>Super warriors</h1>
            </div>

            <div
              className={`${styles.boxteam} py-4 rounded flex flex-col items-center justify-center`}
            >
              <img src="/images/home/battle4.svg" className={`mb-6`} alt="" />
              <h1 className={`mt-2 font-bebas-neue ${styles.active}`}>
                Lion’s team
              </h1>
            </div>

            <div
              className={`${styles.boxteam} py-4 rounded flex flex-col items-center justify-center`}
            >
              <img src="/images/home/battle5.svg" className={`mb-6`} alt="" />
              <h1 className={`mt-2 font-bebas-neue `}>Kings skeleton</h1>
            </div>

            <div
              className={`${styles.boxteam} py-4 rounded flex flex-col items-center justify-center`}
            >
              <img src="/images/home/battle6.svg" className={`mb-6`} alt="" />
              <h1 className={`mt-2 font-bebas-neue `}>Super warriors</h1>
            </div>
          </div>
        </div>

        <div>
          <h2 className={`font-bebas-neue mt-28`}>Group-d</h2>
          <div className={`${styles.groupdrow} mt-6`}>
            <Groupdrow img="/images/home/d1.svg" />
            <Groupdrow active img="/images/home/d2.svg" />
            <Groupdrow img="/images/home/d3.svg" />
            <Groupdrow active img="/images/home/d4.svg" />
            <Groupdrow img="/images/home/d4.svg" />
            <Groupdrow active img="/images/home/d4.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
