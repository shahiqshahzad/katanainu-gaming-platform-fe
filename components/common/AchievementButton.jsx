/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Achievement, Trophy, Batch } from "./Icons";
const AchievementButton = () => {
  return (
    <>
      <div className="flex Achievement py-1 px-2 rounded-[20px] space-x-2 items-center">
        <img src="/images/coins-achievement.png" alt="trophy" />
        <span className=" flex font-bebas-neue text-neutral-primary text-base font-normal ">
          250
        </span>
      </div>
      <div className="flex Achievement py-1 px-2 rounded-[20px] space-x-2 items-center">
        <img src="/images/trophy-star.png" alt="trophy" />

        <span className=" flex font-bebas-neue text-neutral-primary text-base font-normal ">
          250
        </span>
      </div>
      <div className="flex Achievement py-1 px-2 rounded-[20px] space-x-2 items-center">
        <img src="/images/award-star.png" alt="trophy" />

        <span className=" flex font-bebas-neue text-neutral-primary text-base font-normal ">
          250
        </span>
      </div>
    </>
  );
};

export default AchievementButton;
