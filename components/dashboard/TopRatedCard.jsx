import React from "react";
import styles from "../../styles/dashboard/index.module.css";
import { useRouter } from "next/router";
export const TopRatedCard = () => {
  const navigate = useRouter();
  return (
    <div className={`px-5 py-6 rounded-lg ${styles.TopRatedCard}`}>
      <div className="p-2 flex items-start">
        <img
          src="/images/home/teeam-spirit.png"
          className="cursor-pointer"
          alt=""
          onClick={(e) => {
            navigate.push("/");
          }}
        />
        <div className="ml-4">
          <div className={`flex items-center`}>
            <h1
              className={`font-bebas-neue flex-1 cursor-pointer`}
              onClick={(e) => {
                navigate.push("/");
              }}
            >
              Team spirit
            </h1>
            <img src="/images/home/bitcoin.svg" className="mr-1" alt="" />
            <p className="mr-2">784</p>
            <h2
              className={`font-bebas-neue h-12 w-12 rounded-full flex items-center justify-center`}
            >
              4.9
            </h2>
          </div>
          <p className={`font-satoshi-medium mt-4 ${styles.topratedcardpara}`}>
            Lorem ipsum dolor sit amet consectetur. Massa convallis mauris
            pellentesque tortor risus adipiscing. Molestie lacus arcu neque
            mollis quam suspendisse elementum. Arcu at id non lectus egestas
            dignissim eget eu.
          </p>
        </div>
      </div>
    </div>
  );
};
