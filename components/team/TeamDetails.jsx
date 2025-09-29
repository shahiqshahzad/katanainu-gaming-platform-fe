/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";

const TeamDetails = ({ team }) => {
  const navigate = useRouter();
  return (
    <div
      className=" z-[-1] h-auto w-full  bg-cover bg-no-repat bg-center md:bg-buttom py-5 lg:py-12"
      style={{ backgroundImage: `url(${team?.data?.teamImage})` }}
    >
      <div className=" bg-[rgba(255,255,255,0.01)] px-4 py-6   flex justify-center md:justify-between items-center">
        {/* <div>
          <img
            className="w-[130px] hidden md:block "
            src="/images/sward-img.png"
            alt=""
          />
        </div> */}
        <div className="bg-[linear-gradient(0deg,_rgba(108,93,211,0.00)_0.16%,_rgba(209,54,246,0.04)_96.75%)] backdrop-blur-[102px] rounded-[4px] p-4 w-fit max-w-[600px] mr-0 lg:mr-4">
          <p className="text-[20px] sm:text-[40px] font-bebas-neue uppercase rounded-[4px] py-2">
            {team?.data?.teamName}
          </p>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-red-500 p-2 rounded-xl w-fit"></div>
            <span className="text-white">{team?.data?.region}</span>
          </div>
          <p>{team?.data?.description}</p>
        </div>
        {/* <div className="flex items-center px-5 relative justify-end  bg-[url('/images/management-bg-img2.png')] w-[250px] h-[150px] bg-cover bg-no-repeat bg-center">
          <img
            className=" top-[-50px] left-3 absolute w-[105px] h-[230px]"
            src="/images/management-bg-img3.png"
            alt=""
          />
          <div className="">
            <p className="text-[12px] leading-[16px] font-satoshi ">
              already Subscribed
            </p>
            <h2 className="text-[32px] font-bebas-neue leading-[40px] tracking-[0.25px] pt-1  ">
              1,82,700
            </h2>
            <button className="mt-[12px] rounded-[4px] bg-[linear-gradient(90deg,#D136F6_0%,#6C5DD3_100%)] backdrop-blur-[8px] px-5 py-2 border-[1px] font-satoshi  text-[12px] leading-[20px] border-[#998FE0]">
              Subscribe
            </button>
          </div>
        </div> */}
      </div>

      {/* <div className="flex flex-wrap items-center justify-between">
        <div className="w-full md:w-[50%] flex">
          <div className=" flex flex-col   w-[46%]">
            <div className=" border-b border-[#24222A] mt-1 md:mt-0 ">
              <div className="  px-3 py-[8.8px]">
                <h2 className="text-[16px] font-bebas-neue leading-[32px]">
                  GAME
                </h2>
              </div>
            </div>
            <div className=" border-b border-[#24222A] mt-1  ">
              <div className="  px-3 py-[8.8px]">
                <h2 className="text-[16px] font-bebas-neue leading-[32px]">
                  NAME
                </h2>
              </div>
            </div>
            <div className=" border-b border-[#24222A] mt-1 ">
              <div className="  px-3 py-[8.8px]">
                <h2 className="text-[16px] font-bebas-neue uppercase leading-[32px]">
                  short handle
                </h2>
              </div>
            </div>
          </div>
          <div className="w-[56%] flex flex-col">
            <div className=" bg-[rgba(108,93,211,0.24)] px-3 py-[18.2px]  ">
              <h2 className="text-[14px] font-satoshi-medium leading-[100%]">
                Counter Strike 1.6
              </h2>
            </div>
            <div className=" bg-[rgba(255,255,255,0.04)] px-3 py-[18.2px] mt-1 ">
              <h2 className="text-[14px] font-satoshi-medium leading-[100%]">
                Mousesports
              </h2>
            </div>
            <div className=" bg-[rgba(108,93,211,0.24)] px-3 py-[18.2px] mt-1 ">
              <h2 className="text-[14px] font-satoshi-medium leading-[100%]">
                Mouz
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex">
          <div className="flex flex-col w-[46%]">
            <div
              className=" border-b border-[#24222A] mt-1 md:mt-0 cursor-pointer"
              onClick={(e) => {
                navigate.push("/");
              }}
            >
              <div className="  px-3 py-[8.8px]">
                <h2 className="text-[16px] font-bebas-neue leading-[32px]">
                  Homepage
                </h2>
              </div>
            </div>
            <div className=" border-b border-[#24222A] mt-1">
              <div className="  px-3 py-[8.8px]">
                <h2 className="text-[16px] font-bebas-neue leading-[32px]">
                  IRC
                </h2>
              </div>
            </div>
            <div className=" border-b border-[#24222A] mt-1">
              <div className="  px-3 py-[8.8px]">
                <h2 className="text-[16px] uppercase font-bebas-neue leading-[32px]">
                  Head office
                </h2>
              </div>
            </div>
          </div>
          <div className="w-[56%] flex flex-col">
            <div
              className=" bg-[rgba(108,93,211,0.24)] px-3 py-[18.2px] cursor-pointer"
              onClick={(e) => {
                navigate.push("/");
              }}
            >
              <h2 className="text-[14px] font-satoshi-medium leading-[100%]">
                www.mousesports.de
              </h2>
            </div>
            <div className=" bg-[rgba(255,255,255,0.04)] px-3 py-[18.2px] mt-1">
              <h2 className="text-[14px] font-satoshi-medium leading-[100%]">
                #mousesports (QuakeNet)
              </h2>
            </div>
            <div className=" bg-[rgba(108,93,211,0.24)] px-3 py-[18.2px] mt-1 ">
              <h2 className="text-[14px] font-satoshi-medium leading-[100%]">
                Germany/Berlin
              </h2>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TeamDetails;
