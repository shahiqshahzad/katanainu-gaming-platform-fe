import React from "react";
import styles from "../../styles/dashboard/index.module.css";
import { TournamentPlanBox } from "./TournamentPlanBox";
export const TournamentPlan = () => {
  return (
    <div className={`${styles.TournamentPlan} mt-20`}>
      <h1 className={`${styles.headingStyle} mb-10 font-bebas-neue`}>
        Tournament <span>Plan</span>
      </h1>
      <div
        className={`p-12 ${styles.TournamentPlanBoxWrapper} flex items-start rounded-lg`}
      >
        <div
          className={`h-full w-full ${styles.TournamentPlanBoxWrapperInner} flex items-start rounded-lg`}
        >
          <div className="flex flex-col h-full justify-between">
            <div className="relative">
              <img
                src="/images/home/arrow-purple-first.svg"
                className="absolute  -right-20 top-5"
                alt=""
              />
              <div>
                <TournamentPlanBox
                  heading="DRAGON TEAM"
                  users="13"
                  lastbox="06"
                  active
                />
              </div>
              <div className={`mt-2`}>
                <TournamentPlanBox
                  heading="DRAGON TEAM"
                  users="13"
                  lastbox="06"
                />
              </div>
              <div className={`mt-4`}>
                <TournamentPlanBox
                  heading="DRAGON TEAM"
                  users="13"
                  lastbox="06"
                  active
                />
              </div>
              <div className={`mt-2`}>
                <TournamentPlanBox
                  heading="DRAGON TEAM"
                  users="13"
                  lastbox="06"
                />
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/home/arrow-purple-first.svg"
                className="absolute  -right-20 top-5"
                alt=""
              />
              <div>
                <TournamentPlanBox
                  heading="DRAGON TEAM"
                  users="13"
                  lastbox="06"
                  active
                />
              </div>
              <div className={`mt-2`}>
                <TournamentPlanBox
                  heading="DRAGON TEAM"
                  users="13"
                  lastbox="06"
                />
              </div>
              <div className={`mt-4`}>
                <TournamentPlanBox
                  heading="DRAGON TEAM"
                  users="13"
                  lastbox="06"
                  active
                />
              </div>
              <div className={`mt-2`}>
                <TournamentPlanBox
                  heading="DRAGON TEAM"
                  users="13"
                  lastbox="06"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-1 h-full flex-col justify-around ">
            <div className=" flex flex-col items-center ">
              <div className="relative">
                <img
                  src="/images/home/arrow-big-purple.svg"
                  className="absolute  -right-20 top-4"
                  alt=""
                />
                <TournamentPlanBox
                  heading="DRAGON TEAM"
                  users="13"
                  lastbox="06"
                  active
                />
              </div>
              <div className={`mt-2`}>
                <TournamentPlanBox
                  heading="DRAGON TEAM"
                  users="13"
                  lastbox="06"
                />
              </div>
            </div>
            <div className=" flex flex-col items-center">
              <div>
                <TournamentPlanBox
                  heading="DRAGON TEAM"
                  users="13"
                  lastbox="06"
                  active
                />
              </div>
              <div className={`mt-2`}>
                <TournamentPlanBox
                  heading="DRAGON TEAM"
                  users="13"
                  lastbox="06"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col h-full justify-center">
            <div>
              <div>
                <TournamentPlanBox
                  heading="DRAGON TEAM"
                  users="13"
                  lastbox="06"
                  active
                  last
                />
              </div>
              <div className={`mt-2`}>
                <TournamentPlanBox
                  heading="DRAGON TEAM"
                  users="13"
                  lastbox="06"
                  last
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
