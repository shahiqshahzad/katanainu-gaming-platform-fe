import React from "react";
import styles from "../../styles/dashboard/index.module.css";
import { useRouter } from "next/router";
export const GeneralAnalyticsPhotos = () => {
  const router = useRouter();
  return (
    <div className={`${styles.GeneralAnalyticsPhotos} mt-20`}>
      <h1 className={`font-bebas-neue`}>Photos and videos</h1>
      <div className={`grid grid-cols-4 gap-4 mt-6`}>
        <div
          className={`${styles.card} px-5 pb-6 pt-5 rounded-lg cursor-pointer`}
          onClick={(e) => {
            router.push("/");
          }}
        >
          <img
            src="/images/general-analytics/photo1.png"
            alt=""
            className="mb-4"
          />
          <h1 className={`font-bebas-neue`}>Star Craft Gameplay (2023)</h1>
          <div className="flex items-center mb-3 mt-1">
            <img
              src="/images/general-analytics/Rating.svg"
              className="mr-1"
              alt=""
            />
            <img
              src="/images/general-analytics/Rating.svg"
              className="mr-1"
              alt=""
            />
            <img
              src="/images/general-analytics/Rating.svg"
              className="mr-1"
              alt=""
            />
            <img
              src="/images/general-analytics/Rating.svg"
              className="mr-1"
              alt=""
            />
            <img src="/images/general-analytics/Rating.svg" alt="" />
          </div>
          <div className={`flex items-center justify-between mt-3`}>
            <p className={`font-satoshi-medium`}>Magarita H.</p>
            <p className={`font-satoshi-medium`}>09 Jun 2023</p>
          </div>
        </div>
        <div
          className={`${styles.card} px-5 pb-6 pt-5 rounded-lg cursor-pointer`}
          onClick={(e) => {
            router.push("/");
          }}
        >
          <img
            src="/images/general-analytics/photo2.png"
            alt=""
            className="mb-4"
          />
          <h1 className={`font-bebas-neue`}>Star Craft Gameplay (2023)</h1>
          <div className="flex items-center mb-3 mt-1">
            <img
              src="/images/general-analytics/Rating.svg"
              className="mr-1"
              alt=""
            />
            <img
              src="/images/general-analytics/Rating.svg"
              className="mr-1"
              alt=""
            />
            <img
              src="/images/general-analytics/Rating.svg"
              className="mr-1"
              alt=""
            />
            <img
              src="/images/general-analytics/Rating.svg"
              className="mr-1"
              alt=""
            />
            <img src="/images/general-analytics/Rating.svg" alt="" />
          </div>
          <div className={`flex items-center justify-between mt-3`}>
            <p className={`font-satoshi-medium`}>Magarita H.</p>
            <p className={`font-satoshi-medium`}>09 Jun 2023</p>
          </div>
        </div>
        <div
          className={`${styles.card} px-5 pb-6 pt-5 rounded-lg cursor-pointer`}
          onClick={(e) => {
            router.push("/");
          }}
        >
          <img
            src="/images/general-analytics/photo3.png"
            alt=""
            className="mb-4"
          />
          <h1 className={`font-bebas-neue`}>Star Craft Gameplay (2023)</h1>
          <div className="flex items-center mb-3 mt-1">
            <img
              src="/images/general-analytics/Rating.svg"
              className="mr-1"
              alt=""
            />
            <img
              src="/images/general-analytics/Rating.svg"
              className="mr-1"
              alt=""
            />
            <img
              src="/images/general-analytics/Rating.svg"
              className="mr-1"
              alt=""
            />
            <img
              src="/images/general-analytics/Rating.svg"
              className="mr-1"
              alt=""
            />
            <img src="/images/general-analytics/Rating.svg" alt="" />
          </div>
          <div className={`flex items-center justify-between mt-3`}>
            <p className={`font-satoshi-medium`}>Magarita H.</p>
            <p className={`font-satoshi-medium`}>09 Jun 2023</p>
          </div>
        </div>
        <div
          className={`${styles.card} px-5 pb-6 pt-5 rounded-lg  cursor-pointer  `}
          onClick={(e) => {
            router.push("/");
          }}
        >
          <img
            src="/images/general-analytics/photo4.png"
            alt=""
            className="mb-4"
          />
          <h1 className={`font-bebas-neue`}>Star Craft Gameplay (2023)</h1>
          <div className="flex items-center mb-3 mt-1">
            <img
              src="/images/general-analytics/Rating.svg"
              className="mr-1"
              alt=""
            />
            <img
              src="/images/general-analytics/Rating.svg"
              className="mr-1"
              alt=""
            />
            <img
              src="/images/general-analytics/Rating.svg"
              className="mr-1"
              alt=""
            />
            <img
              src="/images/general-analytics/Rating.svg"
              className="mr-1"
              alt=""
            />
            <img src="/images/general-analytics/Rating.svg" alt="" />
          </div>
          <div className={`flex items-center justify-between mt-3`}>
            <p className={`font-satoshi-medium`}>Magarita H.</p>
            <p className={`font-satoshi-medium`}>09 Jun 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};
