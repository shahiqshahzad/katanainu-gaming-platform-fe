import React, { useRef, useEffect } from "react";
import styles from "../../styles/dashboard/index.module.css";
import { MatchShow } from "./MatchShow";
import { useRouter } from "next/router";

export const StreamYoutube = ({ setcurrentHeight }) => {
  const ref = useRef(null);
  const navigate = useRouter();
  const handleResize = (e) => {
    setcurrentHeight(ref.current.clientHeight - 100);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <div className={`${styles.StreamYoutube}`}>
      <div ref={ref}>
        <img src="/images/stream/youtube.png" className="w-full" alt="" />
        <div
          className={`${styles.streamyoutube} rounded-bl-xl rounded-br-xl px-3`}
        >
          <h1
            className={`font-anton pt-8 cursor-pointer`}
            onClick={(e) => {
              navigate.push("/");
            }}
          >
            Pumping account go brothers!
          </h1>

          <div
            className={`mt-3  pb-8  flex items-center justify-between ${styles.streammoreinfo} `}
          >
            <div className={`flex items-center ${styles.streammoreinfoleft}`}>
              <img src="/images/stream/avatar.png" alt="" />
              <h1
                className={`font-satoshi-medium pr-2 ml-2 cursor-pointer`}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                Star Lodde
              </h1>
              <p
                className={`font-satoshi-medium pl-2 cursor-pointer`}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                24,586
                <span className={`ml-1`}>Follower</span>
              </p>

              <button
                className={`font-satoshi-medium h-6 rounded ml-2 cursor-pointer`}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                Follow
              </button>
            </div>

            <div className={`flex items-center ${styles.streammoreinforight}`}>
              <div
                className={`flex items-center rounded-lg px-2 h-9 ${styles.streammoreinforightlike}`}
              >
                <div
                  className="like flex items-center cursor-pointer"
                  onClick={(e) => {
                    navigate.push("/");
                  }}
                >
                  <img src="/images/stream/like.svg" alt="" />
                  <p className={`font-satoshi-medium ml-1`}>1.5K</p>
                </div>
                <div
                  className="like ml-2 cursor-pointer"
                  onClick={(e) => {
                    navigate.push("/");
                  }}
                >
                  <img src="/images/stream/dislike.svg" alt="" />
                </div>
              </div>
              <button
                className={`font-satoshi-medium h-9 rounded ml-2 cursor-pointer`}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                Donate
              </button>
            </div>
          </div>

          <div className="">
            <MatchShow />
          </div>
        </div>
      </div>
    </div>
  );
};
