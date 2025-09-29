import React from "react";
import styles from "../../styles/dashboard/index.module.css";
// css
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { BestStreamersCard } from "./BestStreamersCard";
export const BestStreamers = () => {
  return (
    <div className={`${styles.BestStreamers} mt-20 rounded-xl relative `}>
      <h1 className={`font-bebas-neue mb-10  ${styles.headingStyle}`}>
        Best <span>Streamers</span>
      </h1>

      <Splide
        aria-label="My Favorite Images"
        options={{
          perPage: 5,
          gap: 16,
          pagination: false,
          breakpoints: {
            1083: {
              perPage: 4,
            },
            630: {
              perPage: 2,
            },
          },
        }}
      >
        <SplideSlide>
          <BestStreamersCard />
        </SplideSlide>
        <SplideSlide>
          <BestStreamersCard />
        </SplideSlide>
        <SplideSlide>
          <BestStreamersCard />
        </SplideSlide>
        <SplideSlide>
          <BestStreamersCard />
        </SplideSlide>
        <SplideSlide>
          <BestStreamersCard />
        </SplideSlide>
        <SplideSlide>
          <BestStreamersCard />
        </SplideSlide>
        <SplideSlide>
          <BestStreamersCard />
        </SplideSlide>
        <SplideSlide>
          <BestStreamersCard />
        </SplideSlide>
        <SplideSlide>
          <BestStreamersCard />
        </SplideSlide>
        <SplideSlide>
          <BestStreamersCard />
        </SplideSlide>
      </Splide>
    </div>
  );
};
