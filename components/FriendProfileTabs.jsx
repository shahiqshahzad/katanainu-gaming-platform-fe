import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const FriendProfileTabs = () => {
  const router = useRouter();

  return (
    <div>
      <div className=" w-full  overflow-x-scroll hide_scroll_bar pb-3 xl:visible flex gap-6 whitespace-nowrap px-[24px] justify-between mt-4 lg:mt-[20px] ">
        <Link
          href="/profile/friend"
          className={`font-satoshi-medium font-medium relative after:absolute   after:border-b-[3px]   after:left-0 after:bottom-[-8px] after:rounded-[2px_2px_0px_0px] text-[14px]  leading-[20px] ${
            router.pathname === "/profile/friend"
              ? "profile_tabs_active after:w-full after:border-[#6C5DD3]"
              : "text-neutral-tertiary border-transparent"
          }`}
        >
          All Friends
        </Link>
        <Link
          href="/profile/team"
          className={`font-satoshi-medium font-medium relative after:absolute   after:border-b-[3px]   after:left-0 after:bottom-[-8px] after:rounded-[2px_2px_0px_0px] text-[14px]  leading-[20px] ${
            router.pathname === "/profile/recently-added"
              ? "profile_tabs_active after:w-full after:border-[#6C5DD3]"
              : "text-neutral-tertiary border-transparent"
          }`}
        >
          Recently Added
        </Link>
        <Link
          href="/profile/sent-request"
          className={`font-satoshi-medium font-medium relative after:absolute   after:border-b-[3px]   after:left-0 after:bottom-[-8px] after:rounded-[2px_2px_0px_0px] text-[14px]  leading-[20px] ${
            router.pathname === "/profile/sent-request"
              ? "profile_tabs_active after:w-full after:border-[#6C5DD3]"
              : "text-neutral-tertiary border-transparent"
          }`}
        >
          Sent Request
        </Link>
        <Link
          href="/profile/birthdays"
          className={`font-satoshi-medium font-medium relative after:absolute   after:border-b-[3px]   after:left-0 after:bottom-[-8px] after:rounded-[2px_2px_0px_0px] text-[14px]  leading-[20px] ${
            router.pathname === "/profile/birthdays"
              ? "profile_tabs_active after:w-full after:border-[#6C5DD3]"
              : "text-neutral-tertiary border-transparent"
          }`}
        >
          Birthdays
        </Link>
      </div>
    </div>
  );
};

export default FriendProfileTabs;
