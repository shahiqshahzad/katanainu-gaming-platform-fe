/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../styles/landing/index.module.css";
import { Commenticon, Likeicon, Shareicon } from "./common/Icons";

const GalleryCard = ({ items }) => {
  const navigate = useRouter();
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
      <div className=" mx-auto w-full bg-neutral-bg-03 rounded-[8px]">
        <div className="relative flex justify-center items-end">
          {/* <img
            src={items.mediaUrl}
            className="w-full cursor-pointer rounded-t-md"
            onClick={(e) => {
              setgameshow(true);
            }}
            alt="s"
          /> */}

          {items?.mediaUrl && (
            <>
              {items?.mediaType === "video" ? (
                <video className="w-full h-[292px]" controls>
                  <source src={items?.mediaUrl} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={items.mediaUrl}
                  className="w-full h-[292px] object-cover cursor-pointer rounded-t-md"
                  // onClick={(e) => {
                  //   setgameshow(true);
                  // }}
                  alt="s"
                />
              )}
            </>
          )}

          <div className="max-w-[418px] px-[20px] w-full  absolute mb-[12px] ">
            <h2
              className="text-white font-bebas-neue leading-[20px] text-[20px] cursor-pointer "
              onClick={(e) => {
                navigate.push("/");
              }}
            >
              {items.title}
            </h2>
          </div>
          <div className="flex absolute top-[50%] left-[50%] video_icon items-center justify-center ">
            {items.icon}
          </div>
        </div>
        <div className="w-full p-3 xl:p-[8px_24px_8px_20px] flex gap-[20px] xl:gap-[40px]">
          <div
            onClick={(e) => {
              navigate.push("/");
            }}
            className="flex cursor-pointer items-center justify-center"
          >
            <div className="p-1">
              <Likeicon />
            </div>
            <p className="py-[6px] text-[#605D62] font-satoshi-medium text-[12px] font-medium leading-[20px] tracking-[0.25px] ">
              {items?.likesCount} Likes
            </p>
          </div>
          <div
            onClick={(e) => {
              navigate.push("/");
            }}
            className="flex cursor-pointer items-center justify-center"
          >
            <div className="p-1">
              <Commenticon />
            </div>
            <p className="py-[6px] text-[#605D62] font-satoshi-medium text-[12px] font-medium leading-[20px] tracking-[0.25px] ">
              {items?.commentsCount} Comments
            </p>
          </div>
          <div
            onClick={(e) => {
              navigate.push("/");
            }}
            className="flex cursor-pointer items-center justify-center"
          >
            <div className="p-1">
              <Shareicon />
            </div>
            <p className="py-[6px] text-[#605D62] font-satoshi-medium text-[12px] font-medium leading-[20px] tracking-[0.25px] ">
              {items?.sharesCount} Shares
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryCard;
