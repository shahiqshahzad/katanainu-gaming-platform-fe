import React from "react";
import styles from "../../styles/dashboard/index.module.css";

export const OnlineStream = () => {
  return (
    <div className={`${styles.PopularStream} mt-20 rounded-xl relative `}>
      <div
        className={`flex items-center  mb-10 justify-between ${styles.toppasttournaments}`}
      >
        <h1 className={`font-bebas-neue ${styles.headingStyle}`}>
          online <span>stream</span>
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

      <div className={`${styles.rowWrapper} px-6 py-8 rounded-xl`}>
        <div className={`${styles.rowonline} mb-3 flex items-center  pl-6`}>
          <img
            src="/images/personalAccount/pubg.png"
            alt=""
            className="mr-3 w-16"
          />
          <div className="pl-6 ">
            <h1 className={`font-bebas-neue`}>LIVE: Nemiga vs Fortnite</h1>
            <p className={`font-satoshi-medium mt-2 mb-1`}>22 people</p>
            <h2 className={`font-satoshi-medium`}>FORTNITE</h2>
          </div>
          <div
            className={`pl-6 ${styles.rowonlinedivbtn} flex-1 flex flex-col justify-center items-center `}
          >
            <h1 className={`font-satoshi-medium`}>
              <span>356,599</span> viewers <span>125K</span> Likes
            </h1>
            <div className={`flex items-center mt-4 transfrom -translate-x-3`}>
              <button
                className={`font-satoshi-medium flex items-center justify-center`}
              >
                Strategy
              </button>
              <button
                className={`font-satoshi-medium ml-1 flex items-center justify-center`}
              >
                RPG
              </button>
            </div>
          </div>
          <div className={`pl-6 ${styles.rowonlinediv} pr-6`}>
            <h1 className={`font-satoshi-medium`}>Info</h1>
            <p className={`font-satoshi-medium mt-2 mb-1`}>
              LIVE: Nemiga vs Fortnite
            </p>
            <p className={`font-satoshi-medium`}>Nemiga vs Fortnite</p>
          </div>

          <div className="h-20 ml-4">
            <img src="/images/stream/os1.png" className="h-20" alt="" />
          </div>
        </div>
        <div className={`${styles.rowonline} mb-3 flex items-center  pl-6`}>
          <img
            src="/images/personalAccount/pubg.png"
            alt=""
            className="mr-3 w-16"
          />
          <div className="pl-6 ">
            <h1 className={`font-bebas-neue`}>LIVE: Nemiga vs Fortnite</h1>
            <p className={`font-satoshi-medium mt-2 mb-1`}>22 people</p>
            <h2 className={`font-satoshi-medium`}>FORTNITE</h2>
          </div>
          <div
            className={`pl-6 ${styles.rowonlinedivbtn}  flex-1 flex flex-col justify-center items-center `}
          >
            <h1 className={`font-satoshi-medium`}>
              <span>356,599</span> viewers <span>125K</span> Likes
            </h1>
            <div className={`flex items-center mt-4 transfrom -translate-x-3`}>
              <button
                className={`font-satoshi-medium flex items-center justify-center`}
              >
                Strategy
              </button>
              <button
                className={`font-satoshi-medium ml-1 flex items-center justify-center`}
              >
                RPG
              </button>
            </div>
          </div>
          <div className={`pl-6 ${styles.rowonlinediv} pr-6`}>
            <h1 className={`font-satoshi-medium`}>Info</h1>
            <p className={`font-satoshi-medium mt-2 mb-1`}>
              LIVE: Nemiga vs Fortnite
            </p>
            <p className={`font-satoshi-medium`}>Nemiga vs Fortnite</p>
          </div>

          <div className="h-20 ml-4">
            <img src="/images/stream/os1.png" className="h-20" alt="" />
          </div>
        </div>
        <div className={`${styles.rowonline}  flex items-center  pl-6`}>
          <img
            src="/images/personalAccount/pubg.png"
            alt=""
            className="mr-3 w-16"
          />
          <div className="pl-6 ">
            <h1 className={`font-bebas-neue`}>LIVE: Nemiga vs Fortnite</h1>
            <p className={`font-satoshi-medium mt-2 mb-1`}>22 people</p>
            <h2 className={`font-satoshi-medium`}>FORTNITE</h2>
          </div>
          <div
            className={`pl-6 ${styles.rowonlinedivbtn} flex-1 flex flex-col justify-center items-center `}
          >
            <h1 className={`font-satoshi-medium`}>
              <span>356,599</span> viewers <span>125K</span> Likes
            </h1>
            <div className={`flex items-center mt-4 transfrom -translate-x-3`}>
              <button
                className={`font-satoshi-medium flex items-center justify-center`}
              >
                Strategy
              </button>
              <button
                className={`font-satoshi-medium ml-1 flex items-center justify-center`}
              >
                RPG
              </button>
            </div>
          </div>
          <div className={`pl-6 ${styles.rowonlinediv} pr-6`}>
            <h1 className={`font-satoshi-medium`}>Info</h1>
            <p className={`font-satoshi-medium mt-2 mb-1`}>
              LIVE: Nemiga vs Fortnite
            </p>
            <p className={`font-satoshi-medium`}>Nemiga vs Fortnite</p>
          </div>

          <div className="h-20 ml-4">
            <img src="/images/stream/os1.png" className="h-20" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
