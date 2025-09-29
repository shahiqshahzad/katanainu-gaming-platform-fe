/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { latestPosts, needHelp, products } from "./common/Helper2";
import FooterBase from "./FooterBase";
import FooterHead from "./FooterHead";

const Footer = () => {
  return (
    <div className="Footer bg-neutral-bg-04">
      <FooterHead />
      <div className=" justify-between w-full flex px-10  flex-wrap gap-2 lg:flex-nowrap pt-5 sm:pt-[30px]  pb-10 xl:pb-0 mx-auto overflow-hidden">
        <div className=" max-w-[397px] mx-auto lg:mx-0 w-full ">
          <div className="w-full h-[108px] flex flex-col gap-[16px]">
            <div className="w-full max-w-[397px] h-[36px] text-neutral-primary text-center lg:text-left font-bebas-neue text-[20px] leading-[28px] sm:text-[24px] sm:leading-[35px]">
              Don’t miss our latest News
            </div>
            <div className="max-w-[397px] w-full h-[56px] relative">
              <input
                type="email"
                name="email"
                id="Email"
                placeholder="Email address"
                className="rounded-[28px] bg-neutral-bg-03 flex items-center text-neutral-tertiary font-satoshi-medium 
                text-[14px] font-medium leading-[14px] max-w-[397px] w-full h-[56px] pl-5 pr-2 outline-none "
              />
              <button
                data-aos="fade-right"
                data-aos-duration="1500"
                type="submit"
                className="text-white px-5 py-[10px] flex justify-center items-center rounded-[20px] bg-[linear-gradient(90deg,#D136F6_0%,#6C5DD3_100%)] backdrop-blur absolute top-[6px] right-[8px]"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="max-w-[397px] mt-5 sm:mt-[48px] w-full h-auto flex flex-col gap-[24px]">
            <p className="text-nightlyactivities text-center lg:text-left text-[16px] leading-[24px] font-satoshi-medium font-medium uppercase">
              Gamia is a project from
              <span className="text-pink text-[20px] leading-[28px] font-bebas-neue uppercase">
                {" "}
                INOVATION inc.
              </span>
            </p>
            <p className="text-nightlyactivities text-center lg:text-left text-[14px] font-normal font-satoshi-regular leading-[20px] ">
              Nothing on this website constitutes financial advice, and it is
              always recommended to consult a qualified financial advisor before
              participating in any token or NFT purchases.
            </p>
          </div>
        </div>
        <div className="flex 2xl:max-w-[1200px] 2xl:ml-32 xl:ml-28 xl:max-w-[900px] flex-wrap md:flex-nowrap justify-between mt-5 lg:mt-0 gap-2  w-full">
          <div className=" flex flex-col gap-[24px]">
            <div className=" py-3">
              <p className="text-white font-bebas-neue text-[24px] leading-[24px]">
                Products
              </p>
            </div>
            <div className=" flex flex-col gap-4">
              {products.map((items, index) => (
                <div key={index} className="w-full h-[40px] py-2 pr-4">
                  <Link
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    href=""
                    className="text-powderlilac font-satoshi-medium font-medium text-[16px] leading-[24px] transition-all duration-300 ease-in-out hover:text-[#D136F6]  "
                  >
                    {items.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className=" flex flex-col gap-[24px]">
            <div className=" py-3">
              <p className="text-white font-bebas-neue text-[24px] leading-[24px]">
                Need Help?
              </p>
            </div>
            <div className=" flex flex-col gap-4">
              {needHelp.map((items, index) => (
                <div key={index} className="w-full h-[40px] py-2 pr-4">
                  <Link
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    href=""
                    className="text-powderlilac font-satoshi-medium font-medium text-[16px] leading-[24px]  transition-all duration-300 ease-in-out hover:text-[#D136F6]"
                  >
                    {items.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="sm:max-w-[322px] w-full justify-center mx-auto sm:mt-0  mt-5 sm:mx-0 flex flex-col gap-[24px]">
            <div className="w-full h-[48px] py-3">
              <p className="text-white font-bebas-neue text-[24px] leading-[24px]">
                Latest posts
              </p>
            </div>
            <div className="max-w-[322px] w-full h-[272px] flex flex-col gap-4">
              {latestPosts.map((items, index) => (
                <div
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  key={index}
                  className="w-full max-w-[322px] h-[80px] items-center flex gap-6"
                >
                  <Link href="#">
                    <img
                      src={items.img}
                      alt="Card-Image"
                      className="w-[148px]"
                    />
                  </Link>
                  <div className="w-[150px] h-[80px] flex flex-col gap-2">
                    <p className="text-neutral-tertiary font-medium font-satoshi-medium capitalize text-[12px] leading-[16px]">
                      {items.date}
                    </p>
                    <Link href="#">
                      <p className="max-w-[150px] w-full text-neutral-primary font-bebas-neue text-[11px] sm:text-[14px] leading-4">
                        {items.about}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[rgba(228,228,228,0.10)] mt-4 lg:mt-16"></div>
      <FooterBase />
    </div>
  );
};

export default Footer;
