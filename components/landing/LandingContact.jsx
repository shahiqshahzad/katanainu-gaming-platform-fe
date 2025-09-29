import React from "react";
import styles from "../../styles/dashboard/index.module.css";
import stylestwo from "../../styles/landing/index.module.css";
import { Scene } from "react-scrollmagic";
export const LandingContact = () => {
  return (
    <div
      className={`${styles.GeneralAnalyticsContact} ${stylestwo.LandingContact} flex items-start justify-between`}
    >
      <Scene triggerHook={0.8} reverse={false} classToggle={"scrollIn"}>
        <div className="scrollOut">
          <h1 className={`font-bebas-neue mb-12`}>
            <span>CONTACT US</span> We look forward <br />
            to hearing from you!, POTENTIAL SPONSORSHIPS,
            <br />
            AND TEAM ADMISSION REQUESTS
          </h1>
          <button className={`font-satoshi-medium`}>Contact us</button>
        </div>
      </Scene>
      <Scene triggerHook={0.8} reverse={false} classToggle={"scrollIn"}>
        <div className="scrollOut">
          <form action="#">
            <div className={`${styles.inputwrapper} flex items-start`}>
              <label htmlFor="" className={`font-bebas-neue`}>
                Name
              </label>
              <input
                type="text"
                className={`font-satoshi-medium`}
                placeholder="Enter your name"
              />
            </div>
            <div className={`${styles.inputwrapper} flex items-start`}>
              <label htmlFor="" className={`font-bebas-neue`}>
                Email
              </label>
              <input
                type="text"
                className={`font-satoshi-medium`}
                placeholder="Enter your mail"
              />
            </div>
            <div className={`${styles.inputwrapper} flex items-start`}>
              <label htmlFor="" className={`font-bebas-neue`}>
                Your message
              </label>
              <textarea
                placeholder="Germany/Berlin.."
                cols="30"
                className={`font-satoshi-medium`}
                rows="10"
              ></textarea>
            </div>
            <div className="flex items-center justify-end">
              <button className={`font-satoshi-medium ml-auto`}>
                SUBMIT MESSAGE
              </button>
            </div>
          </form>
        </div>
      </Scene>
    </div>
  );
};
