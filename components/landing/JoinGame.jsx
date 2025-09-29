import React, { useState } from "react";
import styles from "../../styles/landing/index.module.css";
import { Scene } from "react-scrollmagic";
export const JoinGame = () => {
  const [gameshow, setgameshow] = useState(false);
  return (
    <>
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
      <div
        className={`flex flex-col ${styles.joingame} mt-20 justify-center items-center`}
      >
        <Scene triggerHook={0.8} reverse={false} classToggle={"scrollIn"}>
          <p className={`font-satoshi-medium mb-20 text-center scrollOut`}>
            Sign up and join a video game tournament <br /> and win cash with
            your skills!
          </p>
        </Scene>
        <Scene triggerHook={0.8} reverse={false} classToggle={"scrollIn"}>
          <div className={`relative scrollOut`}>
            <img src="/images/landing/join-game.svg" alt="" />
            <button
              onClick={(e) => {
                setgameshow(true);
              }}
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer `}
            >
              <img src="/images/landing/play-icon.svg" alt="" />
            </button>
          </div>
        </Scene>
      </div>
    </>
  );
};
