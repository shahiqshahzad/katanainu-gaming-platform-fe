import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ModalCreatePost from "./profile/ModalCreatePost";

const Tabs = [
  {
    title: "Profile",
    route: "/profile/profile",
  },
  {
    title: "Activation",
    route: "/profile/activation",
  },
  {
    title: "Upload",
    route: "/profile/upload",
  },
  {
    title: "Gallery",
    route: `/profile/gallery`,
  },
  {
    title: "Multiplayer Games",
    route: "/profile/multiplayer-game",
  },
  {
    title: "Browser Games",
    route: "/profile/profile-dashboard",
  },
  {
    title: "Items",
    route: "/profile/items",
  },
];

const GalleryProfileTabsCommon = () => {
  const router = useRouter();
  const [modalCreatePost, setModalCreatePost] = useState(false);
  const { id } = router.query;

  function closeModal() {
    setModalCreatePost(false);
  }
  const handleTabClick = (e, route) => {
    if (
      route === "/profile/activation" ||
      route === "/profile/upload" ||
      route === "/profile/profile-dashboard" ||
      route === "/profile/items"
    ) {
      e.preventDefault();
      if (route === "/profile/upload") {
        setModalCreatePost(true);
      }
    }
  };

  return (
    <div>
      <div className=" w-full mb-10  overflow-x-scroll hide_scroll_bar pb-3 xl:visible flex gap-6 whitespace-nowrap px-[24px] justify-between mt-4 lg:mt-[20px] ">
        {Tabs.map((tab) => (
          <Link
            href={`${tab.route}?id=${id}`}
            className={`font-satoshi-medium font-medium relative after:absolute   after:border-b-[3px]   after:left-0 after:bottom-[-8px] after:rounded-[2px_2px_0px_0px] text-[14px]  leading-[20px] text-neutral-tertiary border-transparent
          
          ${
            router.pathname == tab.route &&
            "profile_tabs_active after:w-full after:border-[#6C5DD3]"
          }`}
            onClick={(e) => {
              handleTabClick(e, tab.route);
            }}
          >
            {tab.title}
          </Link>
        ))}
      </div>
      <ModalCreatePost
        modalCreatePost={modalCreatePost}
        closeModal={closeModal}
      />
    </div>
  );
};

export default GalleryProfileTabsCommon;
