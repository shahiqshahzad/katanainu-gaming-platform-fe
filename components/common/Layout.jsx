/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Header from "./Header";
import SidebarGroupItems from "./SidebarGroupItems";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import TabsWrapper2 from "../tournament/TabsWrapper2";

const Layout = ({
  children,
  nosidebar = null,
  noupbar = null,
  nopadding = null,
}) => {
  const router = useRouter();

  return (
    <>
      <div
        className={`text-white flex flex-col  2xl:px-4  ${nosidebar && "px-0"}`}
        style={noupbar ? { padding: 0 } : nopadding ? { padding: 0 } : {}}
      >
        <Header />
        {!noupbar && <TabsWrapper2 />}
        <div
          className={`lg:flex relative grow space-y-20  lg:space-y-0 h-full py-4 px-4 scrollbar-hide  justify-between  ${
            nosidebar && "px-0"
          }`}
          style={noupbar ? { padding: 0 } : nopadding ? { padding: 0 } : {}}
        >
          <main className="lg:h-full lg:min-w-[600px] w-full scrollbar-hide ">
            {children}
          </main>
          {!nosidebar && <SidebarGroupItems />}
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Layout;
