/* eslint-disable @next/next/no-img-element */
import { Coins } from "./Icons";
import Cookies from "js-cookie";
import UpdateProfile from "./UpdateProfile";
import { logout } from "../../utils/api/authModule";
import { getSingleUser } from "../../utils/api/userModule";
import React, { useEffect, useState } from "react";
import { useDisconnect, useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useRouter } from "next/router";

const UserBlock = () => {
  const router = useRouter();
  const userString = Cookies.get("token");
  const user = userString && JSON.parse(userString);
  const Logout = logout();
  const { disconnect } = useDisconnect();
  const { isConnected } = useWeb3ModalAccount();
  const handleLogout = () => {
    if (isConnected) {
      disconnect();
    }
    Logout.mutate();
  };
  const { data } = getSingleUser(user?._id);
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isUpdateProfile, setIsUpdateProfile] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleUpdateProfileClick = () => {
    setIsUpdateProfile(true);
    setIsOpen(false);
  };

  if (!isClient) {
    return (
      <div className="w-52 text-right">
        <div className="inline-flex items-center gap-2 rounded-md">
          <span className="w-10 h-10 absolute right-0 top-0">
            <img
              src="/images/home/user.svg"
              className="rounded-full h-full w-full"
              alt="Profile"
            />
          </span>
        </div>
      </div>
    );
  }

  const profileImage = data?.data?.profileImage
    ? data?.data?.profileImage
    : "/images/home/user.svg";

  return (
    <button className="coins flex items-center text-sm font-source-code font-medium leading-5 text-neutral-primary gap-1 rounded-[20px] w-[114px] py-2 relative">
      <span className="p-1">
        <Coins />
      </span>
      <span className="ml-[2px] font-satoshi-regular">784</span>
      <div className="w-52 text-right">
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md">
            <span className="w-10 h-10 absolute right-0 top-0">
              <img
                src={profileImage}
                className="rounded-full h-full w-full"
                alt="Profile"
              />
            </span>
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="w-52 mt-6 origin-top-right rounded-xl border border-white/5 bg-neutral-bg-02 p-4 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 flex flex-col gap-3 justify-start"
          >
            <MenuItem>
              <button
                className="font-satoshi-medium text-[#808191]"
                onClick={handleUpdateProfileClick}
              >
                Update Profile
              </button>
            </MenuItem>{" "}
            <MenuItem>
              <button
                onClick={() => router.push(`/profile/profile?id=${user?._id}`)}
                className="font-satoshi-medium text-[#808191]"
              >
                View Profile
              </button>
            </MenuItem>
            <MenuItem>
              <button className="font-satoshi-medium text-[#808191]">
                Settings
              </button>
            </MenuItem>{" "}
            <MenuItem>
              <button
                onClick={() => router.push(`/profile/team?id=${user?._id}`)}
                className="font-satoshi-medium text-[#808191]"
              >
                My Team
              </button>
            </MenuItem>
            <MenuItem>
              <button className="font-satoshi-medium text-[#808191] mt-6">
                Feedback
              </button>
            </MenuItem>
            <MenuItem>
              <button className="font-satoshi-medium text-[#808191]">
                Support
              </button>
            </MenuItem>
            <MenuItem>
              <button
                onClick={handleLogout}
                className="text-[14px] hover:scale-90 transition duration-300 ease-in-out h-[40px] font-bold leading-5 text-white font-satoshi-bold rounded-[4px] bg-[linear-gradient(90deg,#D136F6_0%,#6C5DD3_100%)] backdrop-blur-[8px] w-full mt-6"
              >
                Logout
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
      <UpdateProfile
        user={data?.data}
        setIsOpen={setIsUpdateProfile}
        isUpdateProfile={isUpdateProfile}
      />
    </button>
  );
};

export default UserBlock;
