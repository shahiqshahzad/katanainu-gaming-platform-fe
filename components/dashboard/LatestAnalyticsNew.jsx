import React from "react";
import styles from "../../styles/dashboard/index.module.css";
import { Groupdrow } from "./Groupdrow";
import { PastTournamentsNew } from "./PastTournamentsNew";
import { MatchShowNew } from "./MatchShowNew";
// css
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
export const LatestAnalyticsNew = () => {
  return (
    <div className={`${styles.LatestAnalytics} mt-20`}>
      <h1 className={`${styles.headingStyle} mb-10 font-bebas-neue`}>
        Latest <span>analytics</span>
      </h1>

      <div
        className={`grid grid-cols-2 gap-20 gap-y-10 px-6 py-10 ${styles.LatestAnalyticsBox}  ${styles.LatestAnalyticsBoxNew} rounded-lg`}
      >
        <div>
          <h1 className={`font-bebas-neue`}>Final Battle</h1>
          <p className={`font-satoshi-medium mt-3`}>
            Only 3 days to go ! Final battle among the teams <br /> will excited
            you more. Lot’s of fun ever.
          </p>

          <div className="grid grid-cols-3 mt-8 gap-6">
            <div
              className={`${styles.boxteam} py-4 rounded flex flex-col items-center justify-center cursor-pointer`}
              onClick={(e) => {
                navigate.push("/");
              }}
            >
              <img src="/images/home/battle1.svg" className={`mb-6`} alt="" />
              <h1 className={`mt-2 font-bebas-neue ${styles.active}`}>
                Lion’s team
              </h1>
            </div>
            <div
              className={`${styles.boxteam} py-4 rounded flex flex-col items-center justify-center cursor-pointer `}
              onClick={(e) => {
                navigate.push("/");
              }}
            >
              <img src="/images/home/battle2.svg" className={`mb-6`} alt="" />
              <h1 className={`mt-2 font-bebas-neue `}>Kings skeleton</h1>
            </div>
            <div
              className={`${styles.boxteam} py-4 rounded flex flex-col items-center justify-center cursor-pointer`}
              onClick={(e) => {
                navigate.push("/");
              }}
            >
              <img src="/images/home/battle3.svg" className={`mb-6`} alt="" />
              <h1 className={`mt-2 font-bebas-neue `}>Super warriors</h1>
            </div>

            <div
              className={`${styles.boxteam} py-4 rounded flex flex-col items-center justify-center cursor-pointer `}
              onClick={(e) => {
                navigate.push("/");
              }}
            >
              <img src="/images/home/battle4.svg" className={`mb-6`} alt="" />
              <h1 className={`mt-2 font-bebas-neue ${styles.active}`}>
                Lion’s team
              </h1>
            </div>

            <div
              className={`${styles.boxteam} py-4 rounded flex flex-col items-center justify-center cursor-pointer`}
              onClick={(e) => {
                navigate.push("/");
              }}
            >
              <img src="/images/home/battle5.svg" className={`mb-6`} alt="" />
              <h1 className={`mt-2 font-bebas-neue `}>Kings skeleton</h1>
            </div>

            <div
              className={`${styles.boxteam} py-4 rounded flex flex-col items-center justify-center cursor-pointer `}
              onClick={(e) => {
                navigate.push("/");
              }}
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
        <div className={`col-span-2 ${styles.extendedarea}`}>
          <div
            className={`flex items-center mt-20 justify-between ${styles.toppasttournaments}`}
          >
            <h1 className={`font-bebas-neue ${styles.headingStyle}`}>
              Past <span>Tournaments</span>
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
        </div>
        <div
          className={`col-span-2 ${styles.extendedarea}  ${styles.extendedareambl}`}
        >
          <PastTournamentsNew />
        </div>
        <div className={`col-span-2 ${styles.extendedarea}`}>
          <div className="mt-10">
            <h1 className={`${styles.headingStyle} mb-7 font-bebas-neue`}>
              Closing tournaments
            </h1>
            <Splide
              aria-label="My Favorite Images"
              options={{
                perPage: 2,
                gap: 16,
                pagination: false,
                breakpoints: {
                  820: {
                    perPage: 1,
                  },
                },
              }}
            >
              <SplideSlide>
                <MatchShowNew />
              </SplideSlide>
              <SplideSlide>
                <MatchShowNew />
              </SplideSlide>
              <SplideSlide>
                <MatchShowNew />
              </SplideSlide>
              <SplideSlide>
                <MatchShowNew />
              </SplideSlide>
              <SplideSlide>
                <MatchShowNew />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
};
