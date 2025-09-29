import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import PostActions from "../profile/PostActions";

const Tabs = () => {
  return (
    <TabGroup>
      <TabList className="w-full grid grid-cols-6 border-b-2 border-[#24222A]">
        <Tab className="data-[selected]:border-b-2 border-pink data-[selected]:text-pink data-[hover]:text-pink focus:outline-none py-2 text-neutral-tertiary leading-[20px] font-medium text-[14px]">
          Post
        </Tab>
        <Tab className="data-[selected]:border-b-2 border-pink data-[selected]:text-pink data-[hover]:text-pink focus:outline-none py-2 text-neutral-tertiary leading-[20px] font-medium text-[14px]">
          Photos
        </Tab>
        <Tab className="data-[selected]:border-b-2 border-pink data-[selected]:text-pink data-[hover]:text-pink focus:outline-none py-2 text-neutral-tertiary leading-[20px] font-medium text-[14px]">
          Videos
        </Tab>
        <Tab className="data-[selected]:border-b-2 border-pink data-[selected]:text-pink data-[hover]:text-pink focus:outline-none py-2 text-neutral-tertiary leading-[20px] font-medium text-[14px]">
          Reels
        </Tab>
        <Tab className="data-[selected]:border-b-2 border-pink data-[selected]:text-pink data-[hover]:text-pink focus:outline-none py-2 text-neutral-tertiary leading-[20px] font-medium text-[14px]">
          Featured
        </Tab>
        <Tab className="data-[selected]:border-b-2 border-pink data-[selected]:text-pink data-[hover]:text-pink focus:outline-none py-2 text-neutral-tertiary leading-[20px] font-medium text-[14px]">
          About
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <div className="border border-[#24222A] mx-5 lg:mx-32">
            <div className=" flex md:flex-row  flex-col items-center md:items-start gap-4  px-4 py-4 w-full pt-6">
              <div>
                <img
                  className="w-[80px] md:w-[48px] h-auto md:h-11 rounded-full bg-[#201F25]"
                  src={"/images/home/user.svg"}
                  alt="Image Not Found"
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex justify-between  ">
                  <div className="flex flex-col">
                    <div className="flex gap-2 ">
                      <h3 className="text-[20px] font-bebas-neue uppercase">
                        battlefield
                      </h3>
                    </div>
                    <p className="text-[12px] font-satoshi-regular text-neutral-tertiary">
                      11 Nov
                    </p>
                  </div>
                  <div className="relative">
                    <button>
                      <span className="cursor-pointer">
                        <svg
                          width="16"
                          height="4"
                          viewBox="0 0 16 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4C1.46957 4 0.960859 3.78929 0.585786 3.41421C0.210714 3.03914 0 2.53043 0 2C0 1.46957 0.210714 0.96086 0.585786 0.585787C0.960859 0.210714 1.46957 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585787C3.78929 0.96086 4 1.46957 4 2ZM10 2C10 2.53043 9.78929 3.03914 9.41421 3.41421C9.03914 3.78929 8.53043 4 8 4C7.46957 4 6.96086 3.78929 6.58579 3.41421C6.21071 3.03914 6 2.53043 6 2C6 1.46957 6.21071 0.96086 6.58579 0.585787C6.96086 0.210714 7.46957 0 8 0C8.53043 0 9.03914 0.210714 9.41421 0.585787C9.78929 0.96086 10 1.46957 10 2ZM14 4C14.5304 4 15.0391 3.78929 15.4142 3.41421C15.7893 3.03914 16 2.53043 16 2C16 1.46957 15.7893 0.96086 15.4142 0.585787C15.0391 0.210714 14.5304 0 14 0C13.4696 0 12.9609 0.210714 12.5858 0.585787C12.2107 0.96086 12 1.46957 12 2C12 2.53043 12.2107 3.03914 12.5858 3.41421C12.9609 3.78929 13.4696 4 14 4Z"
                            fill="#9D99AD"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="mt-5 flex flex-col items-center md:items-start">
                  <h3 className="flex flex-col  max-w-[560px] text-center md:text-start text-[16px] font-satoshi-regular leading-[24px] text-neutral-tertiary">
                    <span>30 Minutes of Season 5's New Map</span>
                  </h3>
                </div>

                <div className="mt-5 flex justify-center">
                  <img
                    src={"/images/profile5.png"}
                    className="rounded-xl w-full"
                    alt="Not found"
                  />
                </div>
              </div>
            </div>

            {/* like, dislike, share, Recommended */}
            <PostActions />

            {/* comments */}
            {/* <div className="second-profile border-b-[0.5px] border-[rgba(228,228,228,0.10)] pb-3">
              <div className=" flex md:flex-row  flex-col items-center  gap-4 md:items-center px-4 py-4 w-full">
                <div>
                  <img
                    className="w-[80px] md:w-[48px] h-auto md:h-11 rounded-full bg-[#201F25]"
                    src={"/images/home/user.svg"}
                    alt="Image Not Found"
                  />
                </div>
                <div className="flex flex-col w-full ">
                  <input
                    className="bg-[#201F25] cursor-text rounded-[24px] py-3 px-3 outline-none w-full placeholder-neutral-tertiary placeholder-[14px] font-satoshi-medium text-neutral-tertiary"
                    type="text"
                    placeholder="Write a public comment"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start px-5 py-3">
                <Link
                  href={`#`}
                  className="text-[16px] font-satoshi-medium leading-[24px] hover:text-[#D136F6] transition-all duration-150 ease-in-out"
                >
                  View more comments{" "}
                </Link>
              </div>
            </div> */}
          </div>
        </TabPanel>
        <TabPanel>Photos</TabPanel>
        <TabPanel>Videos</TabPanel>
        <TabPanel>Reels</TabPanel>
        <TabPanel>Featured</TabPanel>
        <TabPanel>About</TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export default Tabs;
