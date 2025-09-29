import React from "react";

// components
import Layout from "../components/common/Layout";
import { BestPlayerCard } from "../components/player/BestPlayerCard";
import { PopularPlayerCard } from "../components/player/PopularPlayerCard";
import { PopularplayerUtil, playerUtil } from "../utils/playerUtil";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// css
import "@splidejs/react-splide/css";
import style from "../styles/player/player.module.css";
import Footer from "../components/Footer";
const player = () => {
  return (
    <>
      <Layout>
        <div className="player-wrapper ">
          <img src="/images/player/main.svg" alt="" className="w-full" />

          <div className="splide-wrapper-player relative py-20 mb-10">
            <img
              src="/images/player/main-bg-player.png"
              className={`w-full -left-0  absolute -top-1 ${style.playermainImg}`}
            />
            <img
              src="/images/player/best-player-btn.svg"
              className={`mb-10 ${style.gridwrapperheading}`}
              alt=""
            />
            <Splide
              aria-label="My Favorite Images"
              options={{
                pagination: false,
              }}
            >
              <SplideSlide>
                <div
                  className={`grid grid-cols-3 gap-6 gap-y-8 ${style.playerwrappergrid}`}
                >
                  {playerUtil.map((EachPlayer) => (
                    <BestPlayerCard data={EachPlayer} />
                  ))}
                </div>
              </SplideSlide>
              <SplideSlide>
                <div
                  className={`grid grid-cols-3 gap-6 gap-y-8 ${style.playerwrappergrid}`}
                >
                  {playerUtil.map((EachPlayer) => (
                    <BestPlayerCard data={EachPlayer} />
                  ))}
                </div>
              </SplideSlide>
            </Splide>
          </div>

          <div
            className={`splide-wrapper-player mb-40 splide-wrapper-player-popular relative mt-20 ${style.gridwrapperplayer}`}
          >
            <img
              src="/images/player/popular-btn.svg"
              className={`mb-10 ${style.gridwrapperheading}`}
              alt=""
            />
            <div className={style.splideWrapperPlayerPopular}>
              <Splide
                aria-label="My Favorite Images"
                options={{
                  pagination: false,
                }}
              >
                <SplideSlide>
                  <div className={`grid grid-cols-2 gap-6 ${style.splidegrid}`}>
                    {PopularplayerUtil.map((EachPlayer) => (
                      <PopularPlayerCard data={EachPlayer} />
                    ))}
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div
                    className={`grid grid-cols-2 gap-6  ${style.splidegrid}`}
                  >
                    {PopularplayerUtil.map((EachPlayer) => (
                      <PopularPlayerCard data={EachPlayer} />
                    ))}
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};
export default player;
