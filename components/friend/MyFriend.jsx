import React from "react";
import MainTitle from "../common/MainTitle";
import FriendDetailsBox from "./FriendDetailsBox";

const MyFriend = () => {
  const myFriendArr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="mt-8">
      {/* <h2 className="text-[24px] sm:text-[32px] font-bebas-neue leading-[100%] uppercase">
        My <span className="text-[#D136F6]">Friends</span>
      </h2> */}
      <MainTitle firstWord="My" lastWord="Friends" />
      <div className="flex flex-wrap items-center justify-center md:justify-between gap-3 mt-8">
        {myFriendArr.map((obj, index) => (
          <FriendDetailsBox key={index} />
        ))}
      </div>
    </div>
  );
};

export default MyFriend;
