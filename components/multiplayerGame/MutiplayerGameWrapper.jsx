/* eslint-disable @next/next/no-img-element */
import React from "react";
import { StarIcon } from "../common/helper";

const MutiplayerGameWrapper = () => {
  return (
    <div className="mt-">
      <div className="bg-[#15131D] rounded-[8px] px-3 py-4">
        <h3 className="text-[23px] md:text-[32px] font-bebas-neue text-neutral-tertiary uppercase">
          Battlefield 3 + Add on
        </h3>
        <div className="flex justify-between flex-wrap py-3 border-b border-[#252134]">
          <div className="w-full md:w-[48%] mb-4 flex justify-between items-center flex-wrap">
            <div className="w-full sm:w-[48%] mb-4 flex justify-center ">
              <img
                className="h-[340px]"
                src="/images/multiplayer-card-img-7.png"
                alt=""
              />
            </div>
            <div className="w-full sm:w-[48%] mb-4">
              <div className="flex ml-3 py-2">
                <span className=" h-[24px]">
                  <StarIcon />
                </span>
              </div>
              <div className="flex items-center justify-between py-1 border-t border-[rgba(228,228,228,0.10)]">
                <div className="w-[50%]">
                  <h3 className="text-[16px] font-bebas-neue text-[#ADA8C3]">
                    Platform
                  </h3>
                </div>
                <div className="w-[50%] ">
                  <p className="text-[14px] font-satoshi-regular text-neutral-tertiary leading-[26px]">
                    PC
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between py-1 border-t border-[rgba(228,228,228,0.10)]">
                <div className="w-[50%]">
                  <h3 className="text-[16px] font-bebas-neue text-[#ADA8C3]">
                    Genre
                  </h3>
                </div>
                <div className="w-[50%] ">
                  <p className="text-[14px] font-satoshi-regular text-neutral-tertiary  ">
                    Action, Role playing, Browser game
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between py-1 border-t border-[rgba(228,228,228,0.10)]">
                <div className="w-[50%]">
                  <h3 className="text-[16px] font-bebas-neue text-[#ADA8C3]">
                    Character
                  </h3>
                </div>
                <div className="w-[50%] ">
                  <p className="text-[14px] font-satoshi-regular text-neutral-tertiary leading-[26px]">
                    Claymore
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between py-1 border-t border-[rgba(228,228,228,0.10)]">
                <div className="w-[50%]">
                  <h3 className="text-[16px] font-bebas-neue text-[#ADA8C3]">
                    Match
                  </h3>
                </div>
                <div className="w-[50%] ">
                  <p className="text-[14px] font-satoshi-regular text-neutral-tertiary leading-[26px]">
                    16
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between py-1 border-t border-[rgba(228,228,228,0.10)]">
                <div className="w-[50%]">
                  <h3 className="text-[16px] font-bebas-neue text-[#ADA8C3]">
                    win/lose
                  </h3>
                </div>
                <div className="w-[50%] ">
                  <p className="text-[14px] font-satoshi-regular text-neutral-tertiary leading-[26px]">
                    12/4
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between py-1 border-t border-[rgba(228,228,228,0.10)]">
                <div className="w-[50%]">
                  <h3 className="text-[16px] font-bebas-neue text-[#ADA8C3]">
                    last played
                  </h3>
                </div>
                <div className="w-[50%] ">
                  <p className="text-[14px] font-satoshi-regular text-neutral-tertiary leading-[26px]">
                    13/5
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between py-1 border-t border-[rgba(228,228,228,0.10)] pt-3">
                <div className="w-[50%]">
                  <img
                    className="w-[50] h-[40px]"
                    src="/images/multiplayer-card-smile-img.png"
                    alt=""
                  />
                </div>
                <div className="w-[50%]  ">
                  <p className="text-[20px] font-bebas-neue  leading-[20px] flex items-center gap-1">
                    412
                    <a href="">
                      <span className="text-[12px] font-satoshi-medium text-neutral-tertiary hover:text-[#D136F6] transition-all duration-300 ease-in-out">
                        reviews
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[48%] mb-4">
            <div className="flex justify-between  border-y border-[#6C6B71]">
              <div className="border-r w-full flex justify-center border-[#6C6B71]">
                <img
                  className="w-[100px]"
                  src="/images/multiplayer-card-hammer-img.png"
                  alt=""
                />
              </div>
              <div className="border-r w-full flex justify-center border-[#6C6B71]">
                <img
                  className="w-[100px]"
                  src="/images/multiplayer-card-helmet-img.png"
                  alt=""
                />
              </div>
              <div className="border-r w-full flex justify-center border-[#6C6B71]">
                <img
                  className="w-[100px]"
                  src="/images/multiplayer-card-sword-img.png"
                  alt=""
                />
              </div>
              <div className="w-full flex justify-center">
                <img
                  className="w-[100px]"
                  src="/images/multiplayer-card-shield-img.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex justify-between bg-[linear-gradient(180deg,_#252134_0%,_rgba(37,33,52,0.00)_100%)] px-3 pt-3 mt-2 rounded-t rounded-[8px]">
              <div className="w-[48%]">
                <img
                  className=""
                  src="/images/multiplayer-card-win-img.png"
                  alt=""
                />
                <h3 className="text-[24px] text-[#ADA8C3] font-bebas-neue pt-2 text-center">
                  Win
                </h3>
              </div>
              <div className="w-[48%]">
                <img src="/images/multiplayer-card-lose-img.png" alt="" />
                <h3 className="text-[24px] text-[#ADA8C3] font-bebas-neue pt-2 text-center">
                  Lose
                </h3>
              </div>
            </div>

            <div className="relative t w-full bg-[#2A263A] py-2 rounded-[4px] mb-3">
              <div className="absolute top-0 w-[45%] bg-[#6C5DD3] rounded-[4px] py-2"></div>
            </div>
            <div className="flex justify-between bg-[#0E0C15] px-2 py-1">
              <div>
                <h3 className="text-[20px] font-bebas-neue text-[#ADA8C3]">
                  Level
                </h3>
              </div>
              <div>
                <h3 className="text-[20px] font-bebas-neue text-[#ADA8C3]">
                  14/
                  <span className="text-[#3F3A52]">40</span>
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center border-y border-[#6C6B71] mt-3">
              <div className="border-r border-[#6C6B71]">
                <img
                  className="w-[100px]"
                  src="/images/multiplayer-card-poison-img.png"
                  alt=""
                />
              </div>
              <div className="border-r border-[#6C6B71]">
                <img
                  className="w-[100px]"
                  src="/images/multiplayer-card-bomb-img.png"
                  alt=""
                />
              </div>
              <div className="border-r border-[#6C6B71]">
                <img
                  className="w-[100px]"
                  src="/images/multiplayer-card-health-img.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-[100px]"
                  src="/images/multiplayer-card-target-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* Photos and videos */}

        <div className="mt-4">
          <h3 className="text-[23px] md:text-[32px] font-bebas-neue text-neutral-tertiary uppercase">
            Photos and videos
          </h3>
          <div className="flex justify-between items-center flex-wrap mt-3">
            <div className="w-full mb-4 sm:w-[48%] md:w-[24%] bg-[linear-gradient(180deg,_#0E0C15_0%,_rgba(14,12,21,0.40)_100%)] rounded-[6px] px-3 py-3">
              <img
                className="sm:w-full sm:h-[150px] "
                src="/images/multiplayer-starcraft-card-img-1.png"
                alt=""
              />
              <h3 className="text-[24px] font-bebas-neue leading-[20px] py-2 ">
                Star Craft Gameplay (2023)
              </h3>
              <span>
                <StarIcon />
              </span>
              <div className="flex justify-between items-center py-2">
                <h3 className="text-[12px] font-satoshi-medium text-neutral-tertiary">
                  Magarita H.
                </h3>
                <span className="text-[12px] font-satoshi-medium text-neutral-tertiary">
                  09 Jun 2023
                </span>
              </div>
            </div>
            <div className="w-full mb-4 sm:w-[48%] md:w-[24%] bg-[linear-gradient(180deg,_#0E0C15_0%,_rgba(14,12,21,0.40)_100%)] rounded-[6px] px-3 py-3">
              <img
                className="sm:w-full sm:h-[150px] "
                src="/images/multiplayer-starcraft-card-img-2.png"
                alt=""
              />
              <h3 className="text-[24px] font-bebas-neue leading-[20px] py-2 ">
                Star Craft Gameplay (2023)
              </h3>
              <span>
                <StarIcon />
              </span>
              <div className="flex justify-between items-center py-2">
                <h3 className="text-[12px] font-satoshi-medium text-neutral-tertiary">
                  Magarita H.
                </h3>
                <span className="text-[12px] font-satoshi-medium text-neutral-tertiary">
                  09 Jun 2023
                </span>
              </div>
            </div>
            <div className="w-full mb-4 sm:w-[48%] md:w-[24%] bg-[linear-gradient(180deg,_#0E0C15_0%,_rgba(14,12,21,0.40)_100%)] rounded-[6px] px-3 py-3">
              <img
                className="sm:w-full sm:h-[150px] "
                src="/images/multiplayer-starcraft-card-img-3.png"
                alt=""
              />
              <h3 className="text-[24px] font-bebas-neue leading-[20px] py-2 ">
                Star Craft Gameplay (2023)
              </h3>
              <span>
                <StarIcon />
              </span>
              <div className="flex justify-between items-center py-2">
                <h3 className="text-[12px] font-satoshi-medium text-neutral-tertiary">
                  Magarita H.
                </h3>
                <span className="text-[12px] font-satoshi-medium text-neutral-tertiary">
                  09 Jun 2023
                </span>
              </div>
            </div>
            <div className="w-full mb-4 sm:w-[48%] md:w-[24%] bg-[linear-gradient(180deg,_#0E0C15_0%,_rgba(14,12,21,0.40)_100%)] rounded-[6px] px-3 py-3">
              <img
                className="sm:w-full sm:h-[150px] "
                src="/images/multiplayer-starcraft-card-img-4.png"
                alt=""
              />
              <h3 className="text-[24px] font-bebas-neue leading-[20px] py-2 ">
                Star Craft Gameplay (2023)
              </h3>
              <span>
                <StarIcon />
              </span>
              <div className="flex justify-between items-center py-2">
                <h3 className="text-[12px] font-satoshi-medium text-neutral-tertiary">
                  Magarita H.
                </h3>
                <span className="text-[12px] font-satoshi-medium text-neutral-tertiary">
                  09 Jun 2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutiplayerGameWrapper;
