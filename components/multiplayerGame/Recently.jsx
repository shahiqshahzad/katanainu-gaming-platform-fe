import { useRouter } from "next/router";
import React from "react";

function Recently() {
  const navigate = useRouter();
  return (
    <div>
      {" "}
      <div className="flex justify-center md:justify-between items-center flex-wrap gap-3 ">
        <div className="w-[230px] sm:w-[190px] mb-4 md:w-[15%] bg-[#15131D] rounded-[4px] px-2 py-4 ">
          <img
            className=" w-full sm:w-[180px] cursor-pointer"
            src="/images/multiplayer-card-img-1.png"
            alt=""
            onClick={(e) => {
              navigate.push("/");
            }}
          />
          <h3 className="pt-2 text-center  text-[20px] font-bebas-neue uppercase leading-[24px] text-[#F0F2FD] ">
            <span
              className="cursor-pointer"
              onClick={(e) => {
                navigate.push("/");
              }}
            >
              Mass Effect
            </span>{" "}
            <br />
            <span className="text-neutral-tertiary">(2023)</span>
          </h3>
        </div>
        <div className="w-[230px] sm:w-[190px] mb-4 md:w-[15%] bg-[#15131D] rounded-[4px] px-2 py-3 ">
          <img
            className="w-full sm:w-[180px] cursor-pointer"
            src="/images/multiplayer-card-img-2.png"
            alt=""
            onClick={(e) => {
              navigate.push("/");
            }}
          />
          <h3
            className="pt-1 text-center  text-[20px] font-bebas-neue uppercase leading-[24px] text-[#F0F2FD] "
            onClick={(e) => {
              navigate.push("/");
            }}
          >
            <span
              className="cursor-pointer"
              onClick={(e) => {
                navigate.push("/");
              }}
            >
              Farcry
            </span>
            <br />
            <span className="text-neutral-tertiary">(2012)</span>
          </h3>
        </div>
        <div className="w-[230px] sm:w-[190px] mb-4 md:w-[15%] bg-[#15131D] rounded-[4px] px-2 py-3 ">
          <img
            className=" w-full  sm:w-[180px] cursor-pointer"
            src="/images/multiplayer-card-img-3.png"
            alt=""
            onClick={(e) => {
              navigate.push("/");
            }}
          />
          <h3 className="pt-1 text-center  text-[20px] font-bebas-neue uppercase leading-[24px] text-[#F0F2FD]">
            <span
              className="cursor-pointer"
              onClick={(e) => {
                navigate.push("/");
              }}
            >
              Call of duty
            </span>
            <br />
            <span className="text-neutral-tertiary">(2009)</span>
          </h3>
        </div>
        <div className="w-[230px] sm:w-[190px] mb-4 md:w-[15%] bg-[#15131D] rounded-[4px] px-1 py-3 ">
          <img
            className="w-full sm:w-[180px] cursor-pointer"
            src="/images/multiplayer-card-img-4.png"
            alt=""
            onClick={(e) => {
              navigate.push("/");
            }}
          />
          <h3 className="pt-2 text-center  text-[20px] font-bebas-neue uppercase leading-[24px] text-[#F0F2FD]">
            <span
              className="cursor-pointer"
              onClick={(e) => {
                navigate.push("/");
              }}
            >
              Assassins Creed
            </span>
            <br />
            <span className="text-neutral-tertiary">(2019)</span>
          </h3>
        </div>
        <div className="w-[230px] sm:w-[190px] mb-4 md:w-[15%] bg-[#15131D] rounded-[4px] px-2 py-4 ">
          <img
            className="w-full sm:w-[180px] cursor-pointer"
            src="/images/multiplayer-card-img-5.png"
            alt=""
            onClick={(e) => {
              navigate.push("/");
            }}
          />
          <h3 className="pt-2 text-center  text-[20px] font-bebas-neue uppercase leading-[24px] text-[#F0F2FD]">
            <span
              className="cursor-pointer"
              onClick={(e) => {
                navigate.push("/");
              }}
            >
              call of duty
            </span>
            <br />
            <span className="text-neutral-tertiary">(2021)</span>
          </h3>
        </div>
        <div className="w-[230px] sm:w-[190px] mb-4 md:w-[15%] bg-[#15131D] rounded-[4px] px-2 py-4 ">
          <img
            className="w-full sm:w-[180px] cursor-pointer"
            src="/images/multiplayer-card-img-6.png"
            alt=""
            onClick={(e) => {
              navigate.push("/");
            }}
          />
          <h3 className="pt-2 text-center  text-[20px] font-bebas-neue uppercase leading-[24px] text-[#F0F2FD]">
            <span
              className="cursor-pointer"
              onClick={(e) => {
                navigate.push("/");
              }}
            >
              God of bar
            </span>
            <br />
            <span className="text-neutral-tertiary">(2017)</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Recently;
