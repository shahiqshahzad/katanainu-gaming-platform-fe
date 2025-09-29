import Link from "next/link";
import React from "react";
import styles from "../../styles/landing/index.module.css";
import { useRouter } from "next/router";
export const BlogCard = ({ heading, para, img }) => {
  const router = useRouter();
  return (
    <div
      onClick={(e) => {
        router.push("/");
      }}
      className={`px-5 pb-8 flex ${styles.BlogCard} relative rounded-lg items-end justify-start cursor-pointer`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className={`w-full relative z-10`}>
        <h1
          className={`font-bebas-neue cursor-pointer`}
          onClick={(e) => {
            router.push("/");
          }}
        >
          {heading}
        </h1>
        <p className={`mb-2 mt-4 font-satoshi-regular`}>{para}</p>
        <Link href="#" className={`font-satoshi-medium`}>
          Read More
        </Link>
      </div>
    </div>
  );
};
