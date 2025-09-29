import React, { useState } from "react";
import {
  BlockIcon,
  DropDownBgIcon,
  EmailIcon,
  MatchNowIcon,
  ReportIcon,
  ThreedotIcon,
} from "./Icons";

const ThreeDots = () => {
  const [cardShow, setCardShow] = useState(false);
  const handleShowCard = () => {
    setCardShow(!cardShow);
  };
  return (
    <>
      <div className="relative flex flex-col   items-center">
        <button onClick={handleShowCard}>
          <ThreedotIcon />
        </button>
        {cardShow ? (
          <div className="absolute top-10 z-[999999]">
            <div className=" w-[290px] sm:w-[324px] h-[248px] z-[999999] relative ">
              <div className="absolute left-0 top-0  right-0 bottom-0 ">
                <DropDownBgIcon />
              </div>
              <div className="absolute left-0 top-[17px] right-0 bottom-0 p-4">
                <div className="flex flex-col gap-2">
                  <p
                    onClick={() => setCardShow(false)}
                    className="text-[14px] group hover:text-white  cursor-pointer flex items-center gap-3 h-[44px] font-bold leading-[150%] text-neutral-secondary  font-satoshi-bold"
                  >
                    <span className="w-[20px] h-[20px] flex items-center justify-center">
                      <EmailIcon />
                    </span>{" "}
                    <span>Send Message</span>
                  </p>
                  <p
                    onClick={() => setCardShow(false)}
                    className="text-[14px]  hover:text-white group  cursor-pointer flex items-center gap-3 h-[44px] font-bold leading-[150%] text-neutral-secondary  font-satoshi-bold"
                  >
                    <span className="w-[20px] h-[20px] flex items-center justify-center">
                      <MatchNowIcon />
                    </span>{" "}
                    <span>Match Now</span>
                  </p>
                  <p
                    onClick={() => setCardShow(false)}
                    className="text-[14px]  hover:text-white group  cursor-pointer flex items-center gap-3 h-[44px] font-bold leading-[150%] text-neutral-secondary  font-satoshi-bold"
                  >
                    <span className="w-[20px] h-[20px] flex items-center justify-center">
                      <BlockIcon />
                    </span>{" "}
                    <span>Block</span>
                  </p>

                  <p
                    onClick={() => setCardShow(false)}
                    className="text-[14px]  hover:text-white group  cursor-pointer border-t border-[rgba(228,228,228,0.10)] flex items-center gap-3 h-[44px] font-bold leading-[150%] text-neutral-secondary  font-satoshi-bold"
                  >
                    <span className="w-[20px] h-[20px] flex items-center justify-center">
                      <ReportIcon />
                    </span>{" "}
                    <span>Find support or Report</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ThreeDots;
