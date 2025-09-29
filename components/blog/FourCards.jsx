import React from "react";

function FourCards() {
  return (
    <div className="my-10 md:my-16 flex flex-wrap justify-center gap-6">
      <div className="rounded-xl  w-4/5 sm:w-fit backdrop-blur-[4px] bg-[rgba(255,255,255,0.08)] flex flex-col justify-center items-center   2xl:p-14 p-10 ">
        <p className="text-white 2xl:text-[64px] text-[30px] sm:text-[40px] lg:text-[50px] font-bebas-neue   text-center leading-[100%]   ">
          4817
        </p>
        <p className="text-[14px] font-satoshi-medium text-[#6C5DD3] opacity-75    ">
          TRN RATING
        </p>
      </div>{" "}
      <div className="rounded-xl  w-4/5 sm:w-fit backdrop-blur-[4px] bg-[rgba(255,255,255,0.08)] flex flex-col justify-center items-center   2xl:p-14 p-10 ">
        <p className="text-white 2xl:text-[64px] text-[30px] sm:text-[40px] lg:text-[50px] font-bebas-neue   text-center leading-[100%]   ">
          640
        </p>
        <p className="text-[14px] font-satoshi-medium text-[#6C5DD3] opacity-75    ">
          WINS / 1000 MATCHES
        </p>
      </div>{" "}
      <div className="rounded-xl  w-4/5 sm:w-fit backdrop-blur-[4px] bg-[rgba(255,255,255,0.08)] flex flex-col justify-center items-center   2xl:p-14 p-10 ">
        <p className="text-white 2xl:text-[64px] text-[30px] sm:text-[40px] lg:text-[50px] font-bebas-neue   text-center leading-[100%]   ">
          8479
        </p>
        <p className="text-[14px] font-satoshi-medium text-[#6C5DD3] opacity-75    ">
          FRAGS / 1850 MATCHES{" "}
        </p>
      </div>{" "}
      <div className="rounded-xl  w-4/5 sm:w-fit backdrop-blur-[4px] bg-[rgba(255,255,255,0.08)] flex flex-col justify-center items-center   2xl:p-14 p-10 ">
        <p className="text-white 2xl:text-[64px] text-[30px] sm:text-[40px] lg:text-[50px] font-bebas-neue   text-center leading-[100%]   ">
          86.8%
        </p>
        <p className="text-[14px] font-satoshi-medium text-[#6C5DD3] opacity-75    ">
          PLAYERS
        </p>
      </div>
    </div>
  );
}

export default FourCards;
