import React from "react";
import styles from "../../styles/tournament-overview/index.module.css";
import stylestwo from "../../styles/landing/index.module.css";
import { useRouter } from "next/router";
export const TeamBox = ({ img }) => {
  const router = useRouter();
  return (
    <div
      className={`${styles.TeamBox} ${stylestwo.TeamBox}  flex flex-col rounded-lg justify-end  pb-6 px-6 pt-5`}
    >
      <img
        src={img}
        className="mb-6 cursor-pointer"
        alt=""
        onClick={(e) => {
          router.push("/");
        }}
      />

      <h1
        className={`font-bebas-neue cursor-pointer`}
        onClick={(e) => {
          router.push("/");
        }}
      >
        Andreas Noack
      </h1>
      <p
        onClick={(e) => {
          router.push("/");
        }}
        className={`font-bebas-neue px-3 flex items-center rounded-xl rounded-bl-0 rounded-br-0 mt-6 cursor-pointer`}
      >
        Uswordfish
      </p>
    </div>
  );
};
