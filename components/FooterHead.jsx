/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { iconLinks } from "./common/Helper2";

const FooterHead = () => {
  return (
    <div className=" px-10 w-full flex flex-col sm:flex-row justify-between items-center border-t pt-5 sm:pt-[30px] bg-neutral-bg-04 border-t-[rgba(228,228,228,0.10)] h-auto py-1 mx-auto">
      <div>
        <img
          data-aos="fade-down"
          data-aos-duration="1500"
          src="/images/footer-Logo.png"
          alt="LOGO"
          className="w-[131px]"
        />
      </div>
      <div className="max-w-[120px] w-full h-[24px] flex gap-[8px]">
        {iconLinks.map((items, index) => (
          <Link
            key={index}
            href=""
            className="transition-all duration-300 ease-in-out hover:-translate-y-1 "
          >
            {items.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterHead;
