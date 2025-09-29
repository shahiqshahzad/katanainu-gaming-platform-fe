import React, { useRef } from "react";

import { Linkedphoto, NextArrowIcon } from "./Icons";
import { Image_gallery } from "./Icons";
import { Friends } from "./Icons";
import { Friends_group } from "./Icons";
import { Edit_page } from "./Icons";
import { My_privacy } from "./Icons";
import Link from "next/link";
const TabsWrapper = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="TabsWrapper px-4 pt-3 flex items-center relative">
      <div className="TabsWrapper h-[50px] flex justify-between font-satoshi-medium leading-4 tracking-[0.25px] text-sm text-neutral-primary scrollbar-hide overflow-auto whitespace-nowrap w-full 2xl:gap-x-10 ">
        <button
          onClick={handleClick}
          className="absolute  right-1 text-white   top-6 connect-wallet w-[24px] h-[24px] flex flex-col justify-center items-center rounded-full  lg:hidden     "
        >
          <NextArrowIcon />
        </button>
        <Link
          href="/profile/gallery"
          className="active text-neutral-tertiary flex items-center gap-2 px-5  2xl:px-10 md:px-7  transition-all duration-300 ease-in-out hover:bg-[#15131D]  justify-center"
        >
          <Linkedphoto />
          <span className="text-sm tracking-[0.25px] leading-4 font-satoshi-medium">
            Linked Photos
          </span>
          <p className="text-neutral-primary text-xs font-bebas-neue font-bold leading-4 tracking-[0.25px] bg-[#FF776F] h-5 w-5 flex items-center justify-center rounded-lg">
            24
          </p>
        </Link>
        <Link
          href=""
          className="flex items-center gap-2 px-5  2xl:px-10 md:px-7  transition-all duration-300 ease-in-out hover:bg-[#15131D]  justify-center "
        >
          <Image_gallery />
          <span className=" text-neutral-tertiary text-sm tracking-[0.25px] leading-4 font-satoshi-medium">
            Photo album
          </span>
        </Link>
        <Link
          href="/profile/friend"
          className="flex items-center gap-2 px-5  2xl:px-10 md:px-7  transition-all duration-300 ease-in-out hover:bg-[#15131D]  justify-center "
        >
          <Friends />
          <span className=" text-neutral-tertiary text-sm tracking-[0.25px] leading-4 font-satoshi-medium">
            Friend
          </span>
          <p className="friends text-neutral-primary text-xs font-bebas-neue font-bold leading-4 tracking-[0.25px] rounded-lg h-[20px] w-[20px] flex items-center justify-center">
            312
          </p>
        </Link>
        <Link
          href="/profile/team"
          className=" flex items-center gap-2 px-5  2xl:px-10 md:px-7  transition-all duration-300 ease-in-out hover:bg-[#15131D]  justify-center"
        >
          <Friends_group />
          <span className=" text-neutral-tertiary text-sm tracking-[0.25px] leading-4 font-satoshi-medium">
            Team
          </span>
          <p className="bg-neutral-bg-03 text-neutral-primary text-xs font-bebas-neue font-bold leading-4 tracking-[0.25px] rounded-lg h-[20px] px-2 flex items-center justify-center">
            Swordish
          </p>
        </Link>
        <Link
          href=""
          className="flex items-center gap-2 px-5  2xl:px-10 md:px-7  transition-all duration-300 ease-in-out hover:bg-[#15131D]  justify-center "
        >
          <Edit_page />
          <span className=" text-neutral-tertiary text-sm tracking-[0.25px] leading-4 font-satoshi-medium">
            Edit Page
          </span>
        </Link>
        <Link
          ref={ref}
          href=""
          className=" flex items-center gap-2 px-5  2xl:px-10 md:px-7  transition-all duration-300 ease-in-out hover:bg-[#15131D]  justify-center"
        >
          <My_privacy />
          <span className=" text-neutral-tertiary text-sm tracking-[0.25px] leading-4 font-satoshi-medium">
            My Privacy
          </span>
        </Link>
      </div>
    </section>
  );
};

export default TabsWrapper;
