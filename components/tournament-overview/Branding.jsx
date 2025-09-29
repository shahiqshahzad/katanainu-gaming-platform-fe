import React from "react";
import styles from "../../styles/dashboard/index.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// css
import "@splidejs/react-splide/css";
import { Scene } from "react-scrollmagic";

export const Branding = () => {
  return (
    <div className={`mb-20 mt-20`}>
      <Scene triggerHook={0.8} reverse={false} classToggle={"scrollIn"}>
        <div className="scrollOut">
          <Splide
            className=""
            aria-label="My Favorite Images"
            options={{
              perPage: 5,
              pagination: false,
              arrows: false,
              gap: 32,
            }}
          >
            <SplideSlide>
              <img src="/images/tournament/t1.svg" alt="" className="w-full" />
            </SplideSlide>
            <SplideSlide>
              <img src="/images/tournament/t2.svg" alt="" className="w-full" />
            </SplideSlide>
            <SplideSlide>
              <img src="/images/tournament/t3.svg" alt="" className="w-full" />
            </SplideSlide>
            <SplideSlide>
              <img src="/images/tournament/t4.svg" alt="" className="w-full" />
            </SplideSlide>
            <SplideSlide>
              <img src="/images/tournament/t5.svg" alt="" className="w-full" />
            </SplideSlide>
            <SplideSlide>
              <img src="/images/tournament/t1.svg" alt="" className="w-full" />
            </SplideSlide>
            <SplideSlide>
              <img src="/images/tournament/t2.svg" alt="" className="w-full" />
            </SplideSlide>
            <SplideSlide>
              <img src="/images/tournament/t3.svg" alt="" className="w-full" />
            </SplideSlide>
            <SplideSlide>
              <img src="/images/tournament/t4.svg" alt="" className="w-full" />
            </SplideSlide>
            <SplideSlide>
              <img src="/images/tournament/t5.svg" alt="" className="w-full" />
            </SplideSlide>
          </Splide>
        </div>
      </Scene>
    </div>
  );
};
