import React from "react";
import styles from "../../styles/dashboard/index.module.css";

export const StreamYoutubeMessage = ({ currentHeight }) => {
  return (
    <div className={`${styles.StreamYoutubeMessage} rounded-xl relative px-6`}>
      <img
        src="/images/stream/chat-case.svg"
        className="absolute right-0 top-0 z-10 rounded-tr-xl"
        alt=""
      />
      <div
        className={`inline-flex pr-5  items-center pt-7 pb-5 ${styles.StreamYoutubeMessageTop} absolute left-6 z-10`}
      >
        <img src="/images/stream/dot.svg" alt="" className="mr-3" />
        <h1 className={`font-satoshi-medium`}>
          24,586 User <span>watch online</span>
        </h1>
      </div>
      <div
        className={`${styles.StreamYoutubeMessagesWrapper} pt-20 mt-8`}
        style={{ height: `${currentHeight}px` }}
      >
        <div
          className={`${styles.StreamYoutubeMessage} w-full mb-10 flex items-start`}
        >
          <img src="/images/stream/avatar.png" alt="" />
          <div className={`flex-1 ml-3 ${styles.wrappermessage}`}>
            <div
              className={`flex items-center  ${styles.StreamYoutubeMessageName}`}
            >
              <h1
                className={`font-satoshi-bold cursor-pointer `}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                Darrell Steward
              </h1>
              <p
                className={`font-satoshi-medium ml-2 cursor-pointer`}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                32sec
              </p>
              <div className={`flex items-center flex-1 justify-end`}>
                <img src="/images/stream/likechat.svg" alt="" />
                <p className={`font-satoshi-medium ml-2`}>24</p>
                <img src="/images/stream/dots.svg" alt="" className="ml-3" />
              </div>
            </div>
            <p className="mt-3 font-satoshi-medium">
              But I must explain to you how atl this mistaken idea of denouncing
              pleasure and praising pain.
            </p>
          </div>
        </div>
        <div
          className={`${styles.StreamYoutubeMessage} w-full mb-10 flex items-start`}
        >
          <img src="/images/stream/avatar.png" alt="" />
          <div className={`flex-1 ml-3 ${styles.wrappermessage}`}>
            <div
              className={`flex items-center  ${styles.StreamYoutubeMessageName}`}
            >
              <h1
                className={`font-satoshi-bold cursor-pointer `}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                Darrell Steward
              </h1>
              <p
                className={`font-satoshi-medium ml-2 cursor-pointer`}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                32sec
              </p>
              <div className={`flex items-center flex-1 justify-end`}>
                <img src="/images/stream/likechat.svg" alt="" />
                <p className={`font-satoshi-medium ml-2`}>24</p>
                <img src="/images/stream/dots.svg" alt="" className="ml-3" />
              </div>
            </div>
            <p className="mt-3 font-satoshi-medium">
              But I must explain to you
            </p>
          </div>
        </div>
        <div
          className={`${styles.StreamYoutubeMessage} w-full mb-10 flex items-start`}
        >
          <img src="/images/stream/avatar.png" alt="" />
          <div className={`flex-1 ml-3 ${styles.wrappermessage}`}>
            <div
              className={`flex items-center  ${styles.StreamYoutubeMessageName}`}
            >
              <h1
                className={`font-satoshi-bold cursor-pointer `}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                Darrell Steward
              </h1>
              <p
                className={`font-satoshi-medium ml-2 cursor-pointer`}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                32sec
              </p>
              <div className={`flex items-center flex-1 justify-end`}>
                <img src="/images/stream/likechat.svg" alt="" />
                <p className={`font-satoshi-medium ml-2`}>24</p>
                <img src="/images/stream/dots.svg" alt="" className="ml-3" />
              </div>
            </div>
            <p className="mt-3 font-satoshi-medium">
              But I must explain to you how atl this mistaken idea of denouncing
              pleasure and praising pain.
            </p>
          </div>
        </div>
        <div
          className={`${styles.StreamYoutubeMessage} w-full mb-10 flex items-start`}
        >
          <img src="/images/stream/avatar.png" alt="" />
          <div className={`flex-1 ml-3 ${styles.wrappermessage}`}>
            <div
              className={`flex items-center  ${styles.StreamYoutubeMessageName}`}
            >
              <h1
                className={`font-satoshi-bold cursor-pointer `}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                Darrell Steward
              </h1>
              <p
                className={`font-satoshi-medium ml-2 cursor-pointer`}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                32sec
              </p>
              <div className={`flex items-center flex-1 justify-end`}>
                <img src="/images/stream/likechat.svg" alt="" />
                <p className={`font-satoshi-medium ml-2`}>24</p>
                <img src="/images/stream/dots.svg" alt="" className="ml-3" />
              </div>
            </div>
            <p className="mt-3 font-satoshi-medium">Hello</p>
          </div>
        </div>
        <div
          className={`${styles.StreamYoutubeMessage} w-full mb-10 flex items-start`}
        >
          <img src="/images/stream/avatar.png" alt="" />
          <div className={`flex-1 ml-3 ${styles.wrappermessage}`}>
            <div
              className={`flex items-center  ${styles.StreamYoutubeMessageName}`}
            >
              <h1
                className={`font-satoshi-bold cursor-pointer `}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                Darrell Steward
              </h1>
              <p
                className={`font-satoshi-medium ml-2 cursor-pointer`}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                32sec
              </p>
              <div className={`flex items-center flex-1 justify-end`}>
                <img src="/images/stream/likechat.svg" alt="" />
                <p className={`font-satoshi-medium ml-2`}>24</p>
                <img src="/images/stream/dots.svg" alt="" className="ml-3" />
              </div>
            </div>
            <p className="mt-3 font-satoshi-medium">Hello</p>
          </div>
        </div>{" "}
        <div
          className={`${styles.StreamYoutubeMessage} w-full mb-10 flex items-start`}
        >
          <img src="/images/stream/avatar.png" alt="" />
          <div className={`flex-1 ml-3 ${styles.wrappermessage}`}>
            <div
              className={`flex items-center  ${styles.StreamYoutubeMessageName}`}
            >
              <h1
                className={`font-satoshi-bold cursor-pointer `}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                Darrell Steward
              </h1>
              <p
                className={`font-satoshi-medium ml-2 cursor-pointer`}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                32sec
              </p>
              <div className={`flex items-center flex-1 justify-end`}>
                <img src="/images/stream/likechat.svg" alt="" />
                <p className={`font-satoshi-medium ml-2`}>24</p>
                <img src="/images/stream/dots.svg" alt="" className="ml-3" />
              </div>
            </div>
            <p className="mt-3 font-satoshi-medium">Hello</p>
          </div>
        </div>{" "}
        <div
          className={`${styles.StreamYoutubeMessage} w-full mb-10 flex items-start`}
        >
          <img src="/images/stream/avatar.png" alt="" />
          <div className={`flex-1 ml-3 ${styles.wrappermessage}`}>
            <div
              className={`flex items-center  ${styles.StreamYoutubeMessageName}`}
            >
              <h1
                className={`font-satoshi-bold cursor-pointer `}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                Darrell Steward
              </h1>
              <p
                className={`font-satoshi-medium ml-2 cursor-pointer`}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                32sec
              </p>
              <div className={`flex items-center flex-1 justify-end`}>
                <img src="/images/stream/likechat.svg" alt="" />
                <p className={`font-satoshi-medium ml-2`}>24</p>
                <img src="/images/stream/dots.svg" alt="" className="ml-3" />
              </div>
            </div>
            <p className="mt-3 font-satoshi-medium">Hello</p>
          </div>
        </div>{" "}
        <div
          className={`${styles.StreamYoutubeMessage} w-full mb-10 flex items-start`}
        >
          <img src="/images/stream/avatar.png" alt="" />
          <div className={`flex-1 ml-3 ${styles.wrappermessage}`}>
            <div
              className={`flex items-center  ${styles.StreamYoutubeMessageName}`}
            >
              <h1
                className={`font-satoshi-bold cursor-pointer `}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                Darrell Steward
              </h1>
              <p
                className={`font-satoshi-medium ml-2 cursor-pointer`}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                32sec
              </p>
              <div className={`flex items-center flex-1 justify-end`}>
                <img src="/images/stream/likechat.svg" alt="" />
                <p className={`font-satoshi-medium ml-2`}>24</p>
                <img src="/images/stream/dots.svg" alt="" className="ml-3" />
              </div>
            </div>
            <p className="mt-3 font-satoshi-medium">Hello</p>
          </div>
        </div>{" "}
        <div
          className={`${styles.StreamYoutubeMessage} w-full mb-10 flex items-start`}
        >
          <img src="/images/stream/avatar.png" alt="" />
          <div className={`flex-1 ml-3 ${styles.wrappermessage}`}>
            <div
              className={`flex items-center  ${styles.StreamYoutubeMessageName}`}
            >
              <h1
                className={`font-satoshi-bold cursor-pointer `}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                Darrell Steward
              </h1>
              <p
                className={`font-satoshi-medium ml-2 cursor-pointer`}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                32sec
              </p>
              <div className={`flex items-center flex-1 justify-end`}>
                <img src="/images/stream/likechat.svg" alt="" />
                <p className={`font-satoshi-medium ml-2`}>24</p>
                <img src="/images/stream/dots.svg" alt="" className="ml-3" />
              </div>
            </div>
            <p className="mt-3 font-satoshi-medium">Hello</p>
          </div>
        </div>{" "}
        <div
          className={`${styles.StreamYoutubeMessage} w-full mb-10 flex items-start`}
        >
          <img src="/images/stream/avatar.png" alt="" />
          <div className={`flex-1 ml-3 ${styles.wrappermessage}`}>
            <div
              className={`flex items-center  ${styles.StreamYoutubeMessageName}`}
            >
              <h1
                className={`font-satoshi-bold cursor-pointer `}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                Darrell Steward
              </h1>
              <p
                className={`font-satoshi-medium ml-2 cursor-pointer`}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                32sec
              </p>
              <div className={`flex items-center flex-1 justify-end`}>
                <img src="/images/stream/likechat.svg" alt="" />
                <p className={`font-satoshi-medium ml-2`}>24</p>
                <img src="/images/stream/dots.svg" alt="" className="ml-3" />
              </div>
            </div>
            <p className="mt-3 font-satoshi-medium">Hello</p>
          </div>
        </div>{" "}
        <div
          className={`${styles.StreamYoutubeMessage} w-full mb-10 flex items-start`}
        >
          <img src="/images/stream/avatar.png" alt="" />
          <div className={`flex-1 ml-3 ${styles.wrappermessage}`}>
            <div
              className={`flex items-center  ${styles.StreamYoutubeMessageName}`}
            >
              <h1
                className={`font-satoshi-bold cursor-pointer `}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                Darrell Steward
              </h1>
              <p
                className={`font-satoshi-medium ml-2 cursor-pointer`}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                32sec
              </p>
              <div className={`flex items-center flex-1 justify-end`}>
                <img src="/images/stream/likechat.svg" alt="" />
                <p className={`font-satoshi-medium ml-2`}>24</p>
                <img src="/images/stream/dots.svg" alt="" className="ml-3" />
              </div>
            </div>
            <p className="mt-3 font-satoshi-medium">Hello</p>
          </div>
        </div>{" "}
        <div
          className={`${styles.StreamYoutubeMessage} w-full mb-10 flex items-start`}
        >
          <img src="/images/stream/avatar.png" alt="" />
          <div className={`flex-1 ml-3 ${styles.wrappermessage}`}>
            <div
              className={`flex items-center  ${styles.StreamYoutubeMessageName}`}
            >
              <h1
                className={`font-satoshi-bold cursor-pointer `}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                Darrell Steward
              </h1>
              <p
                className={`font-satoshi-medium ml-2 cursor-pointer`}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                32sec
              </p>
              <div className={`flex items-center flex-1 justify-end`}>
                <img src="/images/stream/likechat.svg" alt="" />
                <p className={`font-satoshi-medium ml-2`}>24</p>
                <img src="/images/stream/dots.svg" alt="" className="ml-3" />
              </div>
            </div>
            <p className="mt-3 font-satoshi-medium">Hello</p>
          </div>
        </div>{" "}
        <div
          className={`${styles.StreamYoutubeMessage} w-full mb-10 flex items-start`}
        >
          <img src="/images/stream/avatar.png" alt="" />
          <div className={`flex-1 ml-3 ${styles.wrappermessage}`}>
            <div
              className={`flex items-center  ${styles.StreamYoutubeMessageName}`}
            >
              <h1
                className={`font-satoshi-bold cursor-pointer `}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                Darrell Steward
              </h1>
              <p
                className={`font-satoshi-medium ml-2 cursor-pointer`}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                32sec
              </p>
              <div className={`flex items-center flex-1 justify-end`}>
                <img src="/images/stream/likechat.svg" alt="" />
                <p className={`font-satoshi-medium ml-2`}>24</p>
                <img src="/images/stream/dots.svg" alt="" className="ml-3" />
              </div>
            </div>
            <p className="mt-3 font-satoshi-medium">Hello</p>
          </div>
        </div>{" "}
        <div
          className={`${styles.StreamYoutubeMessage} w-full mb-10 flex items-start`}
        >
          <img src="/images/stream/avatar.png" alt="" />
          <div className={`flex-1 ml-3 ${styles.wrappermessage}`}>
            <div
              className={`flex items-center  ${styles.StreamYoutubeMessageName}`}
            >
              <h1
                className={`font-satoshi-bold cursor-pointer `}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                Darrell Steward
              </h1>
              <p
                className={`font-satoshi-medium ml-2 cursor-pointer`}
                onClick={(e) => {
                  navigate.push("/");
                }}
              >
                32sec
              </p>
              <div className={`flex items-center flex-1 justify-end`}>
                <img src="/images/stream/likechat.svg" alt="" />
                <p className={`font-satoshi-medium ml-2`}>24</p>
                <img src="/images/stream/dots.svg" alt="" className="ml-3" />
              </div>
            </div>
            <p className="mt-3 font-satoshi-medium">Hello</p>
          </div>
        </div>
      </div>

      <div
        className={`absolute w-full bottom-5 left-0 px-6 ${styles.inputWrapperContainer}`}
      >
        <div
          className={`flex ${styles.inputWrapper} w-full px-3 rounded-lg items-center  `}
        >
          <input
            type="text"
            placeholder="Enter your message.."
            className="flex-1 h-full bg-transparent outline-none"
          />
          <img src="/images/stream/emoji.svg" className="mr-4" alt="" />
          <img src="/images/stream/send.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
