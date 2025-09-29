import React, { useState } from "react";

const ProfileAllTabs = () => {
  const [active, setActive] = useState("Gallery");
  return (
    <div>
      <div className=" w-full  overflow-x-scroll hide_scroll_bar pb-3 xl:visible flex gap-6 whitespace-nowrap px-[24px] justify-between mt-4 lg:mt-[20px] ">
        <button
          onClick={() => setActive("Profile")}
          className={`font-satoshi-medium font-medium relative after:absolute   after:border-b-[3px]   after:left-0 after:bottom-[-8px] after:rounded-[2px_2px_0px_0px] text-[14px]  leading-[20px] ${
            active === "Profile"
              ? "profile_tabs_active after:w-full after:border-[#6C5DD3]"
              : "text-neutral-tertiary border-transparent"
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setActive("Activation")}
          className={`font-satoshi-medium font-medium relative after:absolute   after:border-b-[3px]   after:left-0 after:bottom-[-8px] after:rounded-[2px_2px_0px_0px] text-[14px]  leading-[20px] ${
            active === "Activation"
              ? "profile_tabs_active after:w-full after:border-[#6C5DD3]"
              : "text-neutral-tertiary border-transparent"
          }`}
        >
          Activation
        </button>
        <button
          onClick={() => setActive("Upload")}
          className={`font-satoshi-medium font-medium relative after:absolute   after:border-b-[3px]   after:left-0 after:bottom-[-8px] after:rounded-[2px_2px_0px_0px] text-[14px]  leading-[20px] ${
            active === "Upload"
              ? "profile_tabs_active after:w-full after:border-[#6C5DD3]"
              : "text-neutral-tertiary border-transparent"
          }`}
        >
          Upload
        </button>
        <button
          onClick={() => setActive("Gallery")}
          className={`font-satoshi-medium font-medium relative after:absolute   after:border-b-[3px]   after:left-0 after:bottom-[-8px] after:rounded-[2px_2px_0px_0px] text-[14px]  leading-[20px] ${
            active === "Gallery"
              ? "profile_tabs_active after:w-full after:border-[#6C5DD3]"
              : "text-neutral-tertiary border-transparent"
          }`}
        >
          Gallery
        </button>

        <button
          onClick={() => setActive("Multiplayer Games")}
          className={`font-satoshi-medium font-medium relative after:absolute   after:border-b-[3px]   after:left-0 after:bottom-[-8px] after:rounded-[2px_2px_0px_0px] text-[14px]  leading-[20px] ${
            active === "Multiplayer Games"
              ? "profile_tabs_active after:w-full after:border-[#6C5DD3]"
              : "text-neutral-tertiary border-transparent"
          }`}
        >
          Multiplayer Games
        </button>
        <button
          onClick={() => setActive("Browser Games")}
          className={`font-satoshi-medium font-medium relative after:absolute   after:border-b-[3px]   after:left-0 after:bottom-[-8px] after:rounded-[2px_2px_0px_0px] text-[14px]  leading-[20px] ${
            active === "Browser Games"
              ? "profile_tabs_active after:w-full after:border-[#6C5DD3]"
              : "text-neutral-tertiary border-transparent"
          }`}
        >
          Browser Games
        </button>
        <button
          onClick={() => setActive("Items")}
          className={`font-satoshi-medium font-medium relative after:absolute   after:border-b-[3px]   after:left-0 after:bottom-[-8px] after:rounded-[2px_2px_0px_0px] text-[14px]  leading-[20px] ${
            active === "Items"
              ? "profile_tabs_active after:w-full after:border-[#6C5DD3]"
              : "text-neutral-tertiary border-transparent"
          }`}
        >
          Items
        </button>
      </div>
    </div>
  );
};

export default ProfileAllTabs;
