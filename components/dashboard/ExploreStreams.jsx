import React, { useState } from "react";
import styles from "../../styles/dashboard/index.module.css";
// css
import "@splidejs/react-splide/css";
import { useRouter } from "next/router";
export const ExploreStreams = () => {
  const [active, setActive] = useState(1);
  const [gameshow, setgameshow] = useState(false);
  const navigate = useRouter();
  return (
    <div
      className={`${styles.ExploreStreams} ${styles.ExploreStreamsnew} mt-20 rounded-xl relative `}
    >
      <h1 className={`font-bebas-neue mb-10  ${styles.headingStyle}`}>
        Explore <span>Streams</span>
      </h1>

      {gameshow && (
        <div
          className={`${styles.joingamewrapper} flex items-center justify-center`}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2haLfdquhHk?si=nA2vwZLUGrcd-l5w"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <svg
            onClick={(e) => {
              setgameshow(false);
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fff"
            class="w-6 h-6 absolute top-5 right-5 cursor-pointer"
          >
            <path
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      )}

      <div className="flex">
        <nav className="mr-6">
          <li
            className={`cursor-pointer h-14 items-center flex pl-6 rounded-xl font-satoshi-medium ${
              active == 1 && styles.active
            }`}
            onClick={(e) => {
              setActive(1);
            }}
          >
            Live
          </li>
          <li
            onClick={(e) => {
              setActive(2);
            }}
            className={`cursor-pointer h-14 items-center flex pl-6 rounded-xl font-satoshi-medium ${
              active == 2 && styles.active
            }`}
          >
            Trending
          </li>
          <li
            onClick={(e) => {
              setActive(3);
            }}
            className={` cursor-pointer h-14 items-center flex pl-6 rounded-xl font-satoshi-medium ${
              active == 3 && styles.active
            }`}
          >
            New
          </li>
          <li
            onClick={(e) => {
              setActive(4);
            }}
            className={` cursor-pointer h-14 items-center flex pl-6 rounded-xl font-satoshi-medium ${
              active == 4 && styles.active
            }`}
          >
            Upcoming
          </li>
          <li
            onClick={(e) => {
              setActive(5);
            }}
            className={` cursor-pointer h-14 items-center flex pl-6 rounded-xl font-satoshi-medium ${
              active == 5 && styles.active
            }`}
          >
            Most viewed
          </li>
        </nav>

        <div className={`grid grid-cols-3 gap-6 ${styles.explorecardwrapper}`}>
          <div
            className={`${styles.explorecard} col-span-2 rounded-lg  p-5 relative`}
          >
            <img
              src="/images/home/play-explore.svg"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              alt=""
              onClick={(e) => {
                setgameshow(true);
              }}
            />
            <img
              src="/images/home/img1-explore.png"
              className="w-full h-full cursor-pointer  object-cover"
              alt=""
              onClick={(e) => {
                navigate.push("/");
              }}
            />
            <div
              className={`flex items-center absolute bottom-7 w-full left-0 px-10 justify-between h-12`}
            >
              <h1
                className={`font-bebas-neue cursor-pointer`}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                Apex legends (2023)
              </h1>
              <p className={`font-satoshi-medium`}>
                <span className={`font-bebas-neue mr-1`}>14th</span>
                Position
              </p>
            </div>
          </div>
          <div className={`${styles.explorecard} rounded-lg  p-3 relative`}>
            <img
              src="/images/home/play-explore.svg"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              alt=""
              onClick={(e) => {
                setgameshow(true);
              }}
            />
            <img
              src="/images/home/img2-explore.png"
              className="w-full h-full  object-cover cursor-pointer "
              alt=""
              onClick={(e) => {
                navigate.push("/");
              }}
            />
            <div
              className={`flex items-center absolute bottom-3 w-full left-0 px-5 justify-between h-12`}
            >
              <h1
                className={`font-bebas-neue cursor-pointer `}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                Apex legends (2023)
              </h1>
              <p className={`font-satoshi-medium`}>
                <span className={`font-bebas-neue mr-1`}>14th</span>
                Position
              </p>
            </div>
          </div>
          <div className={`${styles.explorecard} rounded-lg  p-3 relative`}>
            <img
              src="/images/home/play-explore.svg"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              alt=""
              onClick={(e) => {
                setgameshow(true);
              }}
            />
            <img
              src="/images/home/img3-explore.png"
              className="w-full h-full cursor-pointer  object-cover"
              alt=""
              onClick={(e) => {
                navigate.push("/");
              }}
            />
            <div
              className={`flex items-center absolute bottom-3 w-full left-0 px-5 justify-between h-12`}
            >
              <h1
                className={`font-bebas-neue cursor-pointer`}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                Apex legends (2023)
              </h1>
              <p className={`font-satoshi-medium`}>
                <span className={`font-bebas-neue mr-1`}>14th</span>
                Position
              </p>
            </div>
          </div>
          <div className={`${styles.explorecard} rounded-lg  p-3 relative`}>
            <img
              src="/images/home/play-explore.svg"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              alt=""
              onClick={(e) => {
                setgameshow(true);
              }}
            />
            <img
              src="/images/home/img4-explore.png"
              className="w-full h-full  object-cover cursor-pointer"
              alt=""
              onClick={(e) => {
                navigate.push("/");
              }}
            />
            <div
              className={`flex items-center absolute bottom-3 w-full left-0 px-5 justify-between h-12`}
            >
              <h1
                className={`font-bebas-neue cursor-pointer`}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                Apex legends (2023)
              </h1>
              <p className={`font-satoshi-medium`}>
                <span className={`font-bebas-neue mr-1`}>14th</span>
                Position
              </p>
            </div>
          </div>

          <div className={`${styles.explorecard} rounded-lg  p-3 relative`}>
            <img
              src="/images/home/play-explore.svg"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              alt=""
              onClick={(e) => {
                setgameshow(true);
              }}
            />
            <img
              src="/images/home/img5-explore.png"
              className="w-full h-full object-cover cursor-pointer"
              alt=""
              onClick={(e) => {
                navigate.push("/");
              }}
            />
            <div
              className={`flex items-center absolute bottom-3 w-full left-0 px-5 justify-between h-12 cursor-pointer `}
            >
              <h1
                className={`font-bebas-neue cursor-pointer`}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                Apex legends (2023)
              </h1>
              <p className={`font-satoshi-medium`}>
                <span className={`font-bebas-neue mr-1`}>14th</span>
                Position
              </p>
            </div>
          </div>

          <div className={`${styles.explorecard} rounded-lg  p-3 relative`}>
            <img
              src="/images/home/play-explore.svg"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              alt=""
              onClick={(e) => {
                setgameshow(true);
              }}
            />
            <img
              src="/images/home/img6-explore.png"
              className="w-full h-full object-cover cursor-pointer"
              alt=""
              onClick={(e) => {
                navigate.push("/");
              }}
            />
            <div
              className={`flex items-center absolute bottom-3 w-full left-0 px-5 justify-between h-12`}
            >
              <h1
                className={`font-bebas-neue cursor-pointer `}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                Apex legends (2023)
              </h1>
              <p className={`font-satoshi-medium`}>
                <span className={`font-bebas-neue mr-1`}>14th</span>
                Position
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
