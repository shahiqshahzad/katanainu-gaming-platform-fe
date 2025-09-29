import React from "react";
import styles from "../../styles/dashboard/index.module.css";
// css
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { TopRatedCard } from "./TopRatedCard";
export const TopRated = () => {
  return (
    <div className={`${styles.ExploreStreams} mt-20 rounded-xl relative `}>
      <h1 className={`font-bebas-neue mb-10  ${styles.headingStyle}`}>
        Top rated streamers <span>team</span>
      </h1>

      <Splide
        aria-label="My Favorite Images"
        options={{
          perPage: 2,
          gap: 16,
          pagination: false,
          breakpoints: {
            820: {
              perPage: 1,
            },
          },
        }}
      >
        <SplideSlide>
          <TopRatedCard />
        </SplideSlide>
        <SplideSlide>
          <TopRatedCard />
        </SplideSlide>
        <SplideSlide>
          <TopRatedCard />
        </SplideSlide>
        <SplideSlide>
          <TopRatedCard />
        </SplideSlide>
      </Splide>
    </div>
  );
};
