import React from "react";
import styles from "../../styles/dashboard/index.module.css";
import { HomeBanner } from "./HomeBanner";
import { LatestAnalytics } from "./LatestAnalytics";
import { TournamentPlan } from "./TournamentPlan";
export const HomePage = () => {
  return (
    <div className={`flex-1 p-10 ${styles.homepagedashbaord}`}>
      <HomeBanner />
      <TournamentPlan />
      <LatestAnalytics />
    </div>
  );
};
