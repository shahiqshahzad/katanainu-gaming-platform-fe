import Link from "next/link";
import React from "react";
import Image from "next/image";
export const TournamentBanner = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/tournaments/tournament-banner.png"
            alt="Gaming tournament background"
            fill
            className="object-cover brightness-75"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end h-full p-8 ">
          <h1 className="text-5xl font-extrabold text-white leading-tight">
            UNLEASH YOUR
            <br />
            <span className="text-purple-500">COMPETITIVE</span> SPIRIT!
          </h1>
          <div className="flex justify-between">
            <p className="mt-2 text-sm text-gray-200 max-w-xs">
              250+ tournaments completed and thousands more ahead. Are you ready
              to fight?
            </p>
            {/* <Link href="#" className="justify-self-end">
              <button className="connect-wallet px-8 py-3 rounded-xl text-neutral-primary font-satoshi-medium font-medium leading-[156%] text-base ">
                Join a Tournament
              </button>
            </Link> */}
          </div>

          <div className="flex justify-between items-end ">
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
