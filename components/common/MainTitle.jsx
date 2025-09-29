import React from "react";

const MainTitle = ({ firstWord, lastWord }) => {
  return (
    <h2 className="text-[24px] sm:text-[32px] font-bebas-neue leading-[100%] uppercase">
      {firstWord} <span className="text-[#D136F6]">{lastWord}</span>
    </h2>
  );
};

export default MainTitle;
