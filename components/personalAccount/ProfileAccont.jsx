import React from "react";
import style from "../../styles/personalAccount/personalAccount.module.css";
export const ProfileAccont = () => {
  return (
    <div
      className={`${style.ProfileAccont} relative flex flex-col justify-between px-10 pt-7`}
    >
      <button className={`${style.backbutton} font-Oxanium flex items-center`}>
        <svg
          className="mr-3"
          width="13"
          height="18"
          viewBox="0 0 13 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 14L13 18L7.86805e-07 9L13 0L13 4L5 9L13 14Z"
            fill="white"
          />
        </svg>
        Back To Home
      </button>

      <div className={`${style.profilearea} flex items-center`}>
        <img src="/images/personalAccount/alex.png" alt="" className="mr-4" />
        <div>
          <h1 className={`font-anton mb-3 ${style.headingname}`}>
            Alex Jhonson
          </h1>
          <div className="flex items-center">
            <p className={`font-satoshi-anton mr-2 ${style.headingdetail}`}>
              Balance :
              <span className={`font-anton  ${style.headingdetailColor}`}>
                $28,350
              </span>
            </p>
            <p className={`font-satoshi-medium ${style.headingdetail}`}>
              Skins :
              <span className={`font-anton ${style.headingdetailColor}`}>
                23 Premium
              </span>
            </p>
          </div>
        </div>
      </div>

      <div
        className={`${style.skeleton} absolute px-6 right-20 flex items-center justify-center flex-col`}
      >
        <h1 className={`font-bebas-neue ${style.skeletonHeading}`}>
          Team <span>Skeletons</span>
        </h1>
        <div
          className={`${style.donatearea} w-full flex items-center justify-center my-6`}
        >
          <div className={`mr-4 ${style.box} flex flex-col items-end`}>
            <h1 className={`font-satoshi-medium ${style.boxheading}`}>
              THE MOST DONATE
            </h1>
            <p className={`font-anton flex items-center ${style.boxpara}`}>
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.54167 10.167L6.25 6.00033L5.8225 6.64616C5.53806 7.07671 5.22917 7.55255 4.89583 8.07366C4.5625 8.59477 4.25333 9.07394 3.96833 9.51116L3.54167 10.167ZM0.5 11.8337L4.25 6.00033L0.5 0.166992H11.375L15.2292 5.60449C14.8542 5.45171 14.4686 5.33699 14.0725 5.26033C13.6764 5.18366 13.2772 5.15255 12.875 5.16699L10.5 1.83366H3.54167L6.25 6.00033L3.54167 10.167H7.22917C7.1875 10.4448 7.16667 10.7225 7.16667 11.0003C7.16667 11.2781 7.1875 11.5559 7.22917 11.8337H0.5ZM12.3958 12.8753L15.2917 10.0003L14.4167 9.12533L12.3958 11.1045L11.5833 10.292L10.7083 11.1878L12.3958 12.8753ZM13 15.167C11.8472 15.167 10.8644 14.7606 10.0517 13.9478C9.23889 13.135 8.83278 12.1525 8.83333 11.0003C8.83333 9.84755 9.23972 8.86477 10.0525 8.05199C10.8653 7.23921 11.8478 6.8331 13 6.83366C14.1528 6.83366 15.1356 7.24005 15.9483 8.05283C16.7611 8.8656 17.1672 9.8481 17.1667 11.0003C17.1667 12.1531 16.7603 13.1359 15.9475 13.9487C15.1347 14.7614 14.1522 15.1675 13 15.167Z"
                  fill="#ADA8C4"
                />
              </svg>
              10000$
            </p>
          </div>

          <div className={`${style.box} flex flex-col items-end`}>
            <h1 className={`font-satoshi-medium ${style.boxheading}`}>
              RATINGS
            </h1>
            <p className={`font-anton flex items-center ${style.boxpara}`}>
              <img src="/images/personalAccount/Rating.svg" alt="" />
              4.7
            </p>
          </div>
        </div>
        <p className={`font-satoshi-bold ${style.skeletonScore}`}>
          SCORE THE MOST POINTS TO WIN <span>CASH</span>
        </p>
      </div>
    </div>
  );
};
