/* eslint-disable @next/next/no-img-element */
import React from "react";

import AchievementButton from "./AchievementButton";
import SearchInput from "./SearchInput";
import NotificationButtons from "./NotificationButtons";
import { Achievement, Batch, Coins, MenuIcon, Trophy } from "./Icons";
import MessageButton from "./MessageButton";
import ConnectWalletButton from "./ConnectWalletButton";
import UserBlock from "./UserBlock";
import Link from "next/link";
import ConnectSteamButton from "./ConnectSteamButton";
const Header = () => {
  const toggleSidebar = () => {
    document.body.classList.toggle("show-sidebar");
  };
  return (
    <>
      <div
        onClick={toggleSidebar}
        className="sidebar-overlay cursor-pointer"
      ></div>
      <section className="header px-4 border-b border-[#1F1D26] sm:h-[80px] h-[70px] flex items-center">
        <div className="flex justify-between items-center w-full">
          <Link href="/admin_dashboard">
            <img className="w-[112px]" src="/images\logo.png" alt="logo" />
          </Link>

          <div className="xl:flex hidden items-center space-x-2">
            <AchievementButton />
          </div>

          <div className="hidden xl:flex">
            <SearchInput />
          </div>
          <div className="hidden xl:flex items-center space-x-2 ">
            <MessageButton />

            <NotificationButtons />

            <ConnectWalletButton />

            <ConnectSteamButton />

            <UserBlock />
          </div>

          <div onClick={toggleSidebar} className="xl:hidden cursor-pointer">
            <MenuIcon />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
