import React, { useRef } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";
import { NextArrowIcon } from "../common/Icons";

const TabsWrapper2 = () => {
  const router = useRouter();
  const ref = useRef(null);
  const userString = Cookies.get("token");
  const user = userString && JSON.parse(userString);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="TabsWrapper px-4  py-2 xl:py-4 flex items-center relative">
      <div className="TabsWrapper   flex   font-satoshi-medium leading-4 tracking-[0.25px] text-sm text-neutral-primary scrollbar-hide overflow-auto whitespace-nowrap w-full 2xl:gap-x-10 ">
        <button
          onClick={handleClick}
          className="absolute  right-1 text-white   top-5 connect-wallet w-[24px] h-[24px] flex flex-col justify-center items-center rounded-full  lg:hidden  "
        >
          <NextArrowIcon />
        </button>
        <Link
          href="/"
          className=" active-bg-tab    text-white font-satoshi-medium py-4 uppercase    lg:px-16 sm:px-10 px-6  transition-all duration-300 ease-in-out"
        >
          Home
        </Link>
        <Link
          href=""
          className="  text-white font-satoshi-medium py-4 uppercase    lg:px-16 sm:px-10 px-6  transition-all duration-300 ease-in-out "
        >
          Streams
        </Link>
        <Link
          ref={ref}
          href="/Tournament"
          className="  text-white font-satoshi-medium py-4 uppercase    lg:px-16 sm:px-10 px-6  transition-all duration-300 ease-in-out "
        >
          tournaments
        </Link>
        <Link
          href={`/profile/team?id=${user?._id}`}
          className="  text-white font-satoshi-medium py-4 uppercase    lg:px-16 sm:px-10 px-6  transition-all duration-300 ease-in-out "
        >
          Teams
        </Link>
        <Link
          href=" "
          className="  text-white font-satoshi-medium py-4 uppercase    lg:px-16 sm:px-10 px-6  transition-all duration-300 ease-in-out "
        >
          Marketplace
        </Link>
        <Link
          href=" "
          className="   text-white font-satoshi-medium py-4 uppercase    lg:px-16 sm:px-10 px-6  transition-all duration-300 ease-in-out"
        >
          Blog/News/Feed
        </Link>
        <Link
          href="/profile/friend"
          className="  text-white font-satoshi-medium py-4 uppercase    lg:px-16 sm:px-10 px-6  transition-all duration-300 ease-in-out "
        >
          Friends
        </Link>
      </div>
    </section>
  );
};

export default TabsWrapper2;
