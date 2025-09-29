import Link from "next/link";
import React from "react";
import styles from "../../styles/dashboard/index.module.css";
export const ProfiledashboardBanner = () => {
  return (
    <div
      className={`${styles.ProfiledashboardBanner} relative rounded-2xl p-10`}
    >
      <button className={`flex items-center font-Oxanium`}>
        <img src="/images/profile-new/back-arrow.svg" className="mr-3" alt="" />
        Back To Home
      </button>

      <div
        className={`absolute right-10 ${styles.ProfiledashboardBannerGamer} top-8`}
      >
        <h1 className={`font-anton text-right mb-3 ${styles.gamerheading}`}>
          GAMER RANK
        </h1>
        <div>
          <img src="/images/profile-new/759.svg" alt="" />
          <div className={`flex items-center mt-5 justify-end`}>
            <div
              className={`px-3 py-2 ${styles.bannersmbox} rounded flex flex-col items-end`}
            >
              <h1>Wins Match</h1>
              <p className={`flex items-center mt-2 `}>
                <svg
                  className="mr-1"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.54167 13.167L8.25 9.00033L7.8225 9.64616C7.53806 10.0767 7.22917 10.5525 6.89583 11.0737C6.5625 11.5948 6.25333 12.0739 5.96833 12.5112L5.54167 13.167ZM2.5 14.8337L6.25 9.00033L2.5 3.16699H13.375L17.2292 8.60449C16.8542 8.45171 16.4686 8.33699 16.0725 8.26033C15.6764 8.18366 15.2772 8.15255 14.875 8.16699L12.5 4.83366H5.54167L8.25 9.00033L5.54167 13.167H9.22917C9.1875 13.4448 9.16667 13.7225 9.16667 14.0003C9.16667 14.2781 9.1875 14.5559 9.22917 14.8337H2.5ZM14.3958 15.8753L17.2917 13.0003L16.4167 12.1253L14.3958 14.1045L13.5833 13.292L12.7083 14.1878L14.3958 15.8753ZM15 18.167C13.8472 18.167 12.8644 17.7606 12.0517 16.9478C11.2389 16.135 10.8328 15.1525 10.8333 14.0003C10.8333 12.8475 11.2397 11.8648 12.0525 11.052C12.8653 10.2392 13.8478 9.8331 15 9.83366C16.1528 9.83366 17.1356 10.24 17.9483 11.0528C18.7611 11.8656 19.1672 12.8481 19.1667 14.0003C19.1667 15.1531 18.7603 16.1359 17.9475 16.9487C17.1347 17.7614 16.1522 18.1675 15 18.167Z"
                    fill="#ADA8C4"
                  />
                </svg>
                24
              </p>
            </div>

            <div
              className={`px-3 py-2  ${styles.bannersmbox} ml-4 rounded flex flex-col items-end`}
            >
              <h1>Earnings</h1>
              <p className={`flex items-center  mt-2`}>
                <svg
                  className="mr-1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_253_8039"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="16"
                    height="16"
                  >
                    <rect width="16" height="16" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_253_8039)">
                    <path
                      d="M9.33341 8.66663C8.77786 8.66663 8.30564 8.47218 7.91675 8.08329C7.52786 7.6944 7.33341 7.22218 7.33341 6.66663C7.33341 6.11107 7.52786 5.63885 7.91675 5.24996C8.30564 4.86107 8.77786 4.66663 9.33341 4.66663C9.88897 4.66663 10.3612 4.86107 10.7501 5.24996C11.139 5.63885 11.3334 6.11107 11.3334 6.66663C11.3334 7.22218 11.139 7.6944 10.7501 8.08329C10.3612 8.47218 9.88897 8.66663 9.33341 8.66663ZM4.66675 10.6666C4.30008 10.6666 3.98619 10.5361 3.72508 10.275C3.46397 10.0138 3.33341 9.69996 3.33341 9.33329V3.99996C3.33341 3.63329 3.46397 3.3194 3.72508 3.05829C3.98619 2.79718 4.30008 2.66663 4.66675 2.66663H14.0001C14.3667 2.66663 14.6806 2.79718 14.9417 3.05829C15.2029 3.3194 15.3334 3.63329 15.3334 3.99996V9.33329C15.3334 9.69996 15.2029 10.0138 14.9417 10.275C14.6806 10.5361 14.3667 10.6666 14.0001 10.6666H4.66675ZM6.00008 9.33329H12.6667C12.6667 8.96663 12.7973 8.65274 13.0584 8.39163C13.3195 8.13052 13.6334 7.99996 14.0001 7.99996V5.33329C13.6334 5.33329 13.3195 5.20274 13.0584 4.94163C12.7973 4.68052 12.6667 4.36663 12.6667 3.99996H6.00008C6.00008 4.36663 5.86953 4.68052 5.60841 4.94163C5.3473 5.20274 5.03341 5.33329 4.66675 5.33329V7.99996C5.03341 7.99996 5.3473 8.13052 5.60841 8.39163C5.86953 8.65274 6.00008 8.96663 6.00008 9.33329ZM13.3334 13.3333H2.00008C1.63341 13.3333 1.31953 13.2027 1.05841 12.9416C0.797304 12.6805 0.666748 12.3666 0.666748 12V4.66663H2.00008V12H13.3334V13.3333Z"
                      fill="#ADA8C4"
                    />
                  </g>
                </svg>
                11M
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="transform translate-y-14">
        <img
          src="/images/profile-new/big-pic.png"
          className={`${styles.profileheadingImg}`}
          alt=""
        />
        <div className={`flex items-center mt-4 mb-2 ${styles.profileheading}`}>
          <h1 className={`font-anton mr-3`}>Esther Howard</h1>
          <div className={`flex items-center`}>
            <img src="/images/profile-new/flag.svg" alt="" />
            <p className={`ml-2 font-satoshi-medium`}>BD</p>
          </div>
        </div>
        <div className={`flex items-center ${styles.profilebelow}`}>
          <img src="/images/profile-new/eye.svg" alt="" />
          <h1 className={`font-anton mx-1`}>28,350</h1>
          <p className={`font-satoshi-medium`}>View</p>
        </div>
      </div>

      <div
        className={`flex items-center absolute right-10 gap-3 ${styles.buttonswrapper}`}
      >
        <button className="h-10 rounded font-Oxanium">Message</button>
        <button className="h-10 rounded w-10 flex justify-center items-center">
          <img src="/images/profile-new/group_add.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
