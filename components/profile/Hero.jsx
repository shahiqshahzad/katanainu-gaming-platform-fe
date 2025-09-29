import React from "react";
import style from "../../styles/profile/profile.module.css";
export const Hero = () => {
  return (
    <div className={`${style.Hero} rounded-lg flex items-end justify-start`}>
      <div className={`${style.bannerRow} bannerrow w-full flex items-center`}>
        <div
          className={`profilehero transform -translate-y-10 relative mr-7 ${style.bannerrowprofileImg}`}
        >
          <img
            src="/images/profile/profileimg.png"
            className={`${style.bannerrowprofileImgCode}`}
            alt=""
          />
          <img
            src="/images/profile/profile-bage.svg"
            className={`absolute top-0 -right-2`}
            alt=""
          />
        </div>
        <div className={`${style.bannerRowProfile} `}>
          <h1 className={`font-satoshi-bold ${style.bannerRowProfileHeading}`}>
            VibeHunterZz
          </h1>
          <p
            className={`font-satoshi-light my-2 ${style.bannerRowProfilePara}`}
          >
            Member since 16th Mar 2016
          </p>
          <div className={`flex items-center`}>
            <div className={`flex items-center mr-7`}>
              <img src="/images/profile/hunter.svg" alt="" />
              <p
                className={`ml-2 font-satoshi-medium ${style.bannerRowProfileBadge}`}
              >
                VibeHunter
              </p>
            </div>
            <div className={`flex items-center`}>
              <img src="/images/profile/vibe.svg" alt="" />
              <p
                className={`ml-2 font-satoshi-medium ${style.bannerRowProfileBadge}`}
              >
                VibeZzz
              </p>
            </div>
          </div>
        </div>

        <div className={`${style.smallacheivmentbox} ml-8 pl-5 pr-6`}>
          <div className={`flex items-center`}>
            <img src="/images/profile/cup.svg" className="mr-2" alt="" />
            <h1 className={`${style.count} font-satoshi-bold`}>14</h1>
          </div>
          <h1 className={`${style.namebox} mt-2 font-satoshi-medium`}>
            TOURNAMENT <br /> WINS
          </h1>
        </div>
        <div className={`${style.smallacheivmentbox} pl-5 pr-6`}>
          <div className={`flex items-center`}>
            <img src="/images/profile/eye.svg" className="mr-2" alt="" />
            <h1 className={`${style.count} font-satoshi-bold`}>3216</h1>
          </div>
          <h1 className={`${style.namebox} mt-2 font-satoshi-medium`}>
            PEOPLE <br /> VIEWS
          </h1>
        </div>
        <div className={`${style.smallacheivmentbox} pl-5 pr-6`}>
          <div className={`flex items-center`}>
            <img src="/images/profile/money.svg" className="mr-2" alt="" />
            <h1 className={`${style.count} font-satoshi-bold`}>974,00</h1>
          </div>
          <h1 className={`${style.namebox} mt-2 font-satoshi-medium`}>
            LIFETIME <br /> EARNINGS
          </h1>
        </div>

        <div className={`flex items-center flex-1  justify-end`}>
          <button
            className={`flex mr-6 items-center  font-satoshi-bold ${style.messagebutton} justify-center h-12`}
          >
            <img src="/images/profile/email.svg" className="mr-2" alt="" />
            Message
          </button>

          <button
            className={`flex items-center font-satoshi-bold ${style.friendsbutton} justify-center h-12`}
          >
            Friends
            <img
              src="/images/profile/arrow_drop_down.svg"
              className="ml-2"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};
