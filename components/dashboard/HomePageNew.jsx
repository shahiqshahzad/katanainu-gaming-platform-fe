import React from "react";
import { TopRated } from "./TopRated";
import UserStreams from "./UserStreams";
import { HomeBasicInfo } from "./HomeBasicInfo";
import { BestStreamers } from "./BestStreamers";
import { HomeBannerNew } from "./HomeBannerNew";
import { ExploreStreams } from "./ExploreStreams";
import { LatestAnalyticsNew } from "./LatestAnalyticsNew";
import styles from "../../styles/dashboard/index.module.css";

export const HomePageNew = () => {
  const users = ["dotatv247", "sinatraa", "taxi2g", "mande"];
  return (
    <div className={`flex-1 p-10 HomePageNew ${styles.homepagedashbaord}`}>
      <HomeBannerNew />
      <HomeBasicInfo />
      <BestStreamers />
      {/* {users?.map((streamer, index) => (
        <UserStreams userName={streamer} showThumbnail={true} key={index} />
      ))} */}
      <ExploreStreams />
      <TopRated />
      <LatestAnalyticsNew />
    </div>
  );
};
