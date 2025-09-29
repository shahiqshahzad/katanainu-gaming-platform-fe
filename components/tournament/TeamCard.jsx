import Image from "next/image";
import React from "react";

function TeamCard({ items }) {
  return (
    <div className="sm:p-3 py-3 2xl:w-1/4 md:w-1/3 sm:w-1/2 w-full">
      <div className="card-bg py-5 px-4 flex flex-col ">
        <div>
          <Image
            src={items.img}
            width={300}
            height={244}
            alt="img"
            className="w-full rounded"
          />
        </div>
        <div className="px-3">
          <p className="lg:py-6 py-4 text-white sm:text-[24px] uppercase text-[20px] font-bebas-neue tracking-[0.10px]   ">
            {items.tital}
          </p>
          <p className="p-3 pb-5 top-border ext-white sm:text-[16px]  uppercase text-[14px] font-bebas-neue tracking-[0.10px] ">
            {" "}
            {items.para}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
