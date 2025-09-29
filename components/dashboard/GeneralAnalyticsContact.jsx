import React from "react";
import styles from "../../styles/dashboard/index.module.css";
export const GeneralAnalyticsContact = () => {
  return (
    <div
      className={`${styles.GeneralAnalyticsContact} mb-20 flex items-start justify-between  mt-20`}
    >
      <div>
        <h1 className={`font-bebas-neue mb-12`}>
          <span>CONTACT US</span> ABOUT PRESS MATTERS, <br />
          POTENTIAL SPONSORSHIPS, <br />
          AND TEAM ADMISSION REQUESTS
        </h1>
        <button className={`font-satoshi-medium`}>Contact us</button>
      </div>

      <div>
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
    </div>
  );
};
