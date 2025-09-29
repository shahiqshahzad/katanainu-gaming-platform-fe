import React from "react";
import styles from "../../styles/dashboard/index.module.css";
// css
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useRouter } from "next/router";
export const HomeNewSlider = () => {
  const navigate = useRouter();
  return (
    <div className={`${styles.PopularStream} mt-10 rounded-xl relative `}>
      <Splide
        aria-label="My Favorite Images"
        options={{
          perPage: 3,
          gap: 16,
          pagination: false,
          breakpoints: {
            1083: {
              perPage: 2,
            },
            630: {
              perPage: 1,
            },
          },
        }}
      >
        <SplideSlide>
          <div className={`${styles.pstreamslider} rounded-lg py-6`}>
            <img
              src="/images/stream/pgame1.svg"
              className="rounded-xl w-full cursor-pointer"
              alt=""
              onClick={(e) => {
                navigate.push("/");
              }}
            />
            <div className={`${styles.presentationstream} px-4 py-4`}>
              <div
                className={`${styles.presentationstreamPresentaiton} flex items-center justify-between`}
              >
                <h1
                  className={`font-bebas-neue cursor-pointer`}
                  onClick={(e) => {
                    navigate.push("/");
                  }}
                >
                  Star wars lego Game (2023)
                </h1>
                <p className={`font-satoshi-medium`}>
                  5245 <span>Views</span>
                </p>
              </div>
              <p className={`font-satoshi-regular mt-2`}>
                Watch the unique battle of the two most powerful teams. King
                Skeletos vs Dragon...
              </p>
            </div>

            <div
              className={`h-16 px-4 flex items-center justify-between ${styles.bottomstream}`}
            >
              <div className="flex items-center">
                <img src="/images/stream/team1s.svg" alt="" className="mr-3 " />
                <h1 className={`font-bebas-neue`}>Kings Skeletos</h1>
              </div>
              <img src="/images/stream/22.svg" alt="" />
              <div className="flex items-center">
                <img src="/images/stream/team2s.svg" alt="" className="mr-3" />
                <h1 className={`font-bebas-neue`}>Kings Skeletos</h1>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={`${styles.pstreamslider} rounded-lg py-6`}>
            <img
              src="/images/stream/pgame2.svg"
              className="rounded-xl w-full cursor-pointer"
              alt=""
              onClick={(e) => {
                navigate.push("/");
              }}
            />
            <div className={`${styles.presentationstream} px-4 py-4`}>
              <div
                className={`${styles.presentationstreamPresentaiton} flex items-center justify-between`}
              >
                <h1
                  c
                  className={`font-bebas-neue cursor-pointer`}
                  onClick={(e) => {
                    navigate.push("/");
                  }}
                >
                  The wolf among us (2023)
                </h1>
                <p className={`font-satoshi-medium`}>
                  5245 <span>Views</span>
                </p>
              </div>
              <p className={`font-satoshi-regular mt-2`}>
                Watch the unique battle of the two most powerful teams. King
                Skeletos vs Dragon...
              </p>
            </div>

            <div
              className={`h-16 px-4 flex items-center justify-between ${styles.bottomstream}`}
            >
              <div className="flex items-center">
                <img src="/images/stream/team1s.svg" alt="" className="mr-3 " />
                <h1 className={`font-bebas-neue`}>Kings Skeletos</h1>
              </div>
              <img src="/images/stream/22.svg" alt="" />
              <div className="flex items-center">
                <img src="/images/stream/team2s.svg" alt="" className="mr-3" />
                <h1 className={`font-bebas-neue`}>Kings Skeletos</h1>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={`${styles.pstreamslider} rounded-lg py-6`}>
            <img
              src="/images/stream/pgame3.svg"
              className="rounded-xl w-full cursor-pointer"
              alt=""
              onClick={(e) => {
                navigate.push("/");
              }}
            />
            <div className={`${styles.presentationstream} px-4 py-4`}>
              <div
                className={`${styles.presentationstreamPresentaiton} flex items-center justify-between`}
              >
                <h1
                  className={`font-bebas-neue cursor-pointer`}
                  onClick={(e) => {
                    navigate.push("/");
                  }}
                >
                  Among us Game (2023)
                </h1>
                <p className={`font-satoshi-medium`}>
                  5245 <span>Views</span>
                </p>
              </div>
              <p className={`font-satoshi-regular mt-2`}>
                Watch the unique battle of the two most powerful teams. King
                Skeletos vs Dragon...
              </p>
            </div>

            <div
              className={`h-16 px-4 flex items-center justify-between ${styles.bottomstream}`}
            >
              <div className="flex items-center">
                <img src="/images/stream/team1s.svg" alt="" className="mr-3 " />
                <h1 className={`font-bebas-neue`}>Kings Skeletos</h1>
              </div>
              <img src="/images/stream/22.svg" alt="" />
              <div className="flex items-center">
                <img src="/images/stream/team2s.svg" alt="" className="mr-3" />
                <h1 className={`font-bebas-neue`}>Kings Skeletos</h1>
              </div>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className={`${styles.pstreamslider} rounded-lg py-6`}>
            <img
              src="/images/stream/pgame1.svg"
              className="rounded-xl w-full cursor-pointer"
              alt=""
              onClick={(e) => {
                navigate.push("/");
              }}
            />
            <div className={`${styles.presentationstream} px-4 py-4`}>
              <div
                className={`${styles.presentationstreamPresentaiton} flex items-center justify-between`}
              >
                <h1
                  className={`font-bebas-neue cursor-pointer`}
                  onClick={(e) => {
                    navigate.push("/");
                  }}
                >
                  Star wars lego Game (2023)
                </h1>
                <p className={`font-satoshi-medium`}>
                  5245 <span>Views</span>
                </p>
              </div>
              <p className={`font-satoshi-regular mt-2`}>
                Watch the unique battle of the two most powerful teams. King
                Skeletos vs Dragon...
              </p>
            </div>

            <div
              className={`h-16 px-4 flex items-center justify-between ${styles.bottomstream}`}
            >
              <div className="flex items-center">
                <img src="/images/stream/team1s.svg" alt="" className="mr-3 " />
                <h1 className={`font-bebas-neue`}>Kings Skeletos</h1>
              </div>
              <img src="/images/stream/22.svg" alt="" />
              <div className="flex items-center">
                <img src="/images/stream/team2s.svg" alt="" className="mr-3" />
                <h1 className={`font-bebas-neue`}>Kings Skeletos</h1>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={`${styles.pstreamslider} rounded-lg py-6`}>
            <img
              src="/images/stream/pgame2.svg"
              className="rounded-xl w-full cursor-pointer"
              alt=""
              onClick={(e) => {
                navigate.push("/");
              }}
            />
            <div className={`${styles.presentationstream} px-4 py-4`}>
              <div
                className={`${styles.presentationstreamPresentaiton} flex items-center justify-between`}
              >
                <h1
                  c
                  className={`font-bebas-neue cursor-pointer`}
                  onClick={(e) => {
                    navigate.push("/");
                  }}
                >
                  The wolf among us (2023)
                </h1>
                <p className={`font-satoshi-medium`}>
                  5245 <span>Views</span>
                </p>
              </div>
              <p className={`font-satoshi-regular mt-2`}>
                Watch the unique battle of the two most powerful teams. King
                Skeletos vs Dragon...
              </p>
            </div>

            <div
              className={`h-16 px-4 flex items-center justify-between ${styles.bottomstream}`}
            >
              <div className="flex items-center">
                <img src="/images/stream/team1s.svg" alt="" className="mr-3 " />
                <h1 className={`font-bebas-neue`}>Kings Skeletos</h1>
              </div>
              <img src="/images/stream/22.svg" alt="" />
              <div className="flex items-center">
                <img src="/images/stream/team2s.svg" alt="" className="mr-3" />
                <h1 className={`font-bebas-neue`}>Kings Skeletos</h1>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className={`${styles.pstreamslider} rounded-lg py-6`}>
            <img
              src="/images/stream/pgame3.svg"
              className="rounded-xl w-full cursor-pointer"
              alt=""
              onClick={(e) => {
                navigate.push("/");
              }}
            />
            <div className={`${styles.presentationstream} px-4 py-4`}>
              <div
                className={`${styles.presentationstreamPresentaiton} flex items-center justify-between`}
              >
                <h1
                  className={`font-bebas-neue cursor-pointer`}
                  onClick={(e) => {
                    navigate.push("/");
                  }}
                >
                  Among us Game (2023)
                </h1>
                <p className={`font-satoshi-medium`}>
                  5245 <span>Views</span>
                </p>
              </div>
              <p className={`font-satoshi-regular mt-2`}>
                Watch the unique battle of the two most powerful teams. King
                Skeletos vs Dragon...
              </p>
            </div>

            <div
              className={`h-16 px-4 flex items-center justify-between ${styles.bottomstream}`}
            >
              <div className="flex items-center">
                <img src="/images/stream/team1s.svg" alt="" className="mr-3 " />
                <h1 className={`font-bebas-neue`}>Kings Skeletos</h1>
              </div>
              <img src="/images/stream/22.svg" alt="" />
              <div className="flex items-center">
                <img src="/images/stream/team2s.svg" alt="" className="mr-3" />
                <h1 className={`font-bebas-neue`}>Kings Skeletos</h1>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};
