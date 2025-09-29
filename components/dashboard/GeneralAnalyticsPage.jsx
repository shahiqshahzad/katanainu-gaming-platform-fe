import React from "react";
import styles from "../../styles/dashboard/index.module.css";
import { GeneralAnalyticsBanner } from "./GeneralAnalyticsBanner";
import { GeneralAnalyticsPhotos } from "./GeneralAnalyticsPhotos";
import { GeneralAnalyticsContact } from "./GeneralAnalyticsContact";
export const GeneralAnalyticsPage = () => {
  return (
    <div className={`flex-1 p-10 ${styles.GeneralAnalyticsPage}`}>
      <GeneralAnalyticsBanner />
      <GeneralAnalyticsPhotos />
      <GeneralAnalyticsContact />
    </div>
  );
};
