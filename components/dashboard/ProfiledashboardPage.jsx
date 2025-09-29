import React from "react";

import styles from "../../styles/dashboard/index.module.css";
import { ProfiledashboardBanner } from "./ProfiledashboardBanner";
import { ProfileContentArea } from "./ProfileContentArea";
export const ProfiledashboardPage = () => {
  return (
    <div className={`flex-1 p-10 ${styles.TournamentPage}`}>
      <ProfiledashboardBanner />
      <ProfileContentArea />
    </div>
  );
};
