/* eslint-disable @next/next/no-img-element */
import React from "react";
import AchievementButton from "./AchievementButton";
import SearchInput from "./SearchInput";
import NotificationButtons from "./NotificationButtons";
import MessageButton from "./MessageButton";
import ConnectWalletButton from "./ConnectWalletButton";
import UserBlock from "./UserBlock";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="flex justify-center py-8">
        <a href="">
          <img className="w-[112px]" src="/images\logo.png" alt="logo" />
        </a>
      </div>

      <div className="flex xl:hidden justify-center items-center space-x-2">
        <AchievementButton />
      </div>

      <div className="flex xl:hidden px-4 mt-6 justify-center">
        <SearchInput />
      </div>
      <div className="flex flex-col xl:hidden px-4 mt-6 justify-center">
        <div className="flex space-x-4 justify-center">
          <MessageButton />
          <NotificationButtons />
        </div>
        <div className="flex flex-col space-y-5 justify-center items-center mt-6">
          <ConnectWalletButton />
          <UserBlock />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
