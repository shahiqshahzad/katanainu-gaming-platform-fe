import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const GalleryProfileTabs = () => {
  const router = useRouter();
  const [active, setactive] = useState(5);

  return (
    <div>
      <div className=" w-full  overflow-x-scroll hide_scroll_bar pb-3 xl:visible flex gap-6 whitespace-nowrap px-[24px] justify-between mt-4 lg:mt-[20px] ">
        <Link
          href="/profile/profile"
          className={`font-satoshi-medium font-medium relative after:absolute   after:border-b-[3px]   after:left-0 after:bottom-[-8px] after:rounded-[2px_2px_0px_0px] text-[14px]  leading-[20px] text-neutral-tertiary border-transparent
          
          ${
            active == 1 &&
            "profile_tabs_active after:w-full after:border-[#6C5DD3]"
          }
          
          `}
          onClick={(e) => {
            e.preventDefault();
            setactive(1);
          }}
        >
          Profile
        </Link>
        <Link
          href="/profile/activation"
          className={`font-satoshi-medium font-medium relative after:absolute   after:border-b-[3px]   after:left-0 after:bottom-[-8px] after:rounded-[2px_2px_0px_0px] text-[14px]  leading-[20px] text-neutral-tertiary border-transparent
          
          ${
            active == 2 &&
            "profile_tabs_active after:w-full after:border-[#6C5DD3]"
          }
          `}
          onClick={(e) => {
            e.preventDefault();
            setactive(2);
          }}
        >
          Activation
        </Link>
        <Link
          href="/profile/upload"
          className={`font-satoshi-medium font-medium relative after:absolute   after:border-b-[3px]   after:left-0 after:bottom-[-8px] after:rounded-[2px_2px_0px_0px] text-[14px]  leading-[20px] text-neutral-tertiary border-transparent
          
          ${
            active == 3 &&
            "profile_tabs_active after:w-full after:border-[#6C5DD3]"
          }
          `}
          onClick={(e) => {
            e.preventDefault();
            setactive(3);
          }}
        >
          Upload
        </Link>
        <Link
          href="/profile/gallery"
          className={`font-satoshi-medium font-medium relative after:absolute   after:border-b-[3px]   after:left-0 after:bottom-[-8px] after:rounded-[2px_2px_0px_0px] text-[14px]  leading-[20px] text-neutral-tertiary border-transparent
                 ${
                   active == 4 &&
                   "profile_tabs_active after:w-full after:border-[#6C5DD3]"
                 }
          `}
          onClick={(e) => {
            e.preventDefault();
            setactive(4);
          }}
        >
          Gallery
        </Link>

        <Link
          href="/profile/multiplayer-game"
          className={`font-satoshi-medium font-medium relative after:absolute   after:border-b-[3px]   after:left-0 after:bottom-[-8px] after:rounded-[2px_2px_0px_0px] text-[14px]  leading-[20px] text-neutral-tertiary border-transparent
          ${
            active == 5 &&
            "profile_tabs_active after:w-full after:border-[#6C5DD3]"
          }
          
          `}
          onClick={(e) => {
            e.preventDefault();
            setactive(5);
          }}
        >
          Multiplayer Games
        </Link>
        <Link
          href="/profile-dashboard"
          className={`font-satoshi-medium font-medium relative after:absolute   after:border-b-[3px]   after:left-0 after:bottom-[-8px] after:rounded-[2px_2px_0px_0px] text-[14px]  leading-[20px] text-neutral-tertiary border-transparent
          ${
            active == 6 &&
            "profile_tabs_active after:w-full after:border-[#6C5DD3]"
          }
          
          `}
          onClick={(e) => {
            e.preventDefault();
            setactive(6);
          }}
        >
          Browser Games
        </Link>
        <Link
          href="/profile/items"
          className={`font-satoshi-medium font-medium relative after:absolute   after:border-b-[3px]   after:left-0 after:bottom-[-8px] after:rounded-[2px_2px_0px_0px] text-[14px]  leading-[20px] 
          text-neutral-tertiary border-transparent
          ${
            active == 7 &&
            "profile_tabs_active after:w-full after:border-[#6C5DD3]"
          }
          `}
          onClick={(e) => {
            e.preventDefault();
            setactive(7);
          }}
        >
          Items
        </Link>
      </div>
    </div>
  );
};

export default GalleryProfileTabs;
