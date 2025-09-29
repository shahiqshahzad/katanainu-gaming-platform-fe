import React, { useState } from "react";
import styles from "../../styles/dashboard/index.module.css";
import { StreamYoutube } from "./StreamYoutube";
import { StreamYoutubeMessage } from "./StreamYoutubeMessage";
import { PopularStreamSlider } from "./PopularStreamSlider";
import { OnlineStream } from "./OnlineStream";
export const StreamPage = () => {
  const [currentHeight, setcurrentHeight] = useState(false);

  return (
    <div className={`flex-1 p-10 ${styles.StreamPage}`}>
      <div className={`grid gap-10 ${styles.StreamPageWrapper}`}>
        <StreamYoutube setcurrentHeight={setcurrentHeight} />
        <StreamYoutubeMessage currentHeight={currentHeight} />
      </div>

      <PopularStreamSlider />

      <OnlineStream />
    </div>
  );
};
