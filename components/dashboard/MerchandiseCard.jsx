import React from "react";
import styles from "../../styles/landing/index.module.css";
import { useRouter } from "next/router";
export const MerchandiseCard = ({ img }) => {
  const router = useRouter();
  return (
    <div className={`${styles.MerchandiseCard} rounded-lg px-5 pt-5`}>
      <div>
        <div
          className={`${styles.shirtwrapper} relative rounded-lg flex items-center justify-center cursor-pointer`}
          onClick={(e) => {
            router.push("/");
          }}
        >
          <img src={img} alt="" />

          <img
            src="/images/landing/heart.svg"
            className="absolute right-5 top-5 cursor-pointer"
            alt=""
            onClick={(e) => {
              router.push("/");
            }}
          />
        </div>
        <div
          className={`flex ${styles.merchandisepresentation} items-start justify-between px-4 py-4 mt-3 pb-8`}
        >
          <div>
            <h1
              className={`font-bebas-neue cursor-pointer`}
              onClick={(e) => {
                router.push("/");
              }}
            >
              Battlefield 4 t-shirt
            </h1>
            <div className="flex items-center py-3">
              <img src="/images/landing/Star.svg" className="mr-1" alt="" />
              <img src="/images/landing/Star.svg" className="mr-1" alt="" />
              <img src="/images/landing/Star.svg" className="mr-1" alt="" />
              <img src="/images/landing/Star.svg" className="mr-1" alt="" />
              <img src="/images/landing/Star.svg" alt="" />
            </div>
            <p className={`font-satoshi-medium`}>Purchased at 13 Jun 2023</p>
          </div>
          <h1 className={`font-bebas-neue`}>$13</h1>
        </div>
        <div
          className={`flex ${styles.bottomcardarea} items-center justify-between px-4 py-4 pb-6`}
        >
          <div
            className={`flex items-center cursor-pointer`}
            onClick={(e) => {
              router.push("/");
            }}
          >
            <img src="/images/landing/reviews.svg" alt="" />
            <p className={`ml-1 font-satoshi-medium`}>Reviews (12)</p>
          </div>
          <div
            className={`flex items-center cursor-pointer`}
            onClick={(e) => {
              router.push("/");
            }}
          >
            <img src="/images/landing/like.svg" alt="" />
            <p className={`ml-1 font-satoshi-medium`}>Recommended (59)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
