import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { GrHomeRounded } from "react-icons/gr";
import { BsTrophy } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";
import { VscSignOut } from "react-icons/vsc";
import Link from "next/link";
import Cookies from "js-cookie";
import { useDisconnect, useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { logout } from "../../utils/api/authModule";

export const AdminSidebar = () => {
  const router = useRouter();
  const path = usePathname();
  const Logout = logout();
  const { disconnect } = useDisconnect();
  const { isConnected } = useWeb3ModalAccount();
  const handleLogout = () => {
    if (isConnected) {
      disconnect();
    }
    Logout.mutate();
  };

  return (
    <div
      className={`min-w-[312px] border border-l-0 border-t-0 border-b-0 border-r-[#23222a] pr-5 pl-2 pt-14 pb-8 h-screen flex flex-col justify-between sticky top-0`}
    >
      <div>
        <Link
          href={"/"}
          className={`flex font-satoshi-medium rounded-xl items-center h-14 px-6 ${
            path === "/" ? "primary-gradient text-white" : "text-[#838091]"
          }`}
        >
          <GrHomeRounded size={20} />
          <p className="ml-4">Home</p>
        </Link>
        <Link
          href={"/admin_dashboard"}
          className={`flex font-satoshi-medium rounded-xl items-center h-14 px-6 ${
            path === "/admin_dashboard"
              ? "primary-gradient text-white"
              : "text-[#838091]"
          }`}
        >
          <IoGameControllerOutline size={22} />
          <p className="ml-4">Games</p>
        </Link>

        <Link
          className={`flex font-satoshi-medium rounded-xl items-center h-14 px-6 ${
            path === "/tournaments"
              ? "primary-gradient text-white"
              : "text-[#838091]"
          }`}
          href={"/tournaments"}
        >
          <BsTrophy size={20} />

          <p className="ml-4">Tournaments</p>
        </Link>
        <Link
          className={`flex font-satoshi-medium rounded-xl items-center h-14 px-6 ${
            path === "/requests"
              ? "primary-gradient text-white"
              : "text-[#838091]"
          }`}
          href={"/requests"}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 6.25C2 5.65326 2.23705 5.08097 2.65901 4.65901C3.08097 4.23705 3.65326 4 4.25 4H19.75C20.3467 4 20.919 4.23705 21.341 4.65901C21.7629 5.08097 22 5.65326 22 6.25V17.75C22 18.0455 21.9418 18.3381 21.8287 18.611C21.7157 18.884 21.5499 19.1321 21.341 19.341C21.1321 19.5499 20.884 19.7157 20.611 19.8287C20.3381 19.9418 20.0455 20 19.75 20H4.25C3.95453 20 3.66194 19.9418 3.38896 19.8287C3.11598 19.7157 2.86794 19.5499 2.65901 19.341C2.45008 19.1321 2.28434 18.884 2.17127 18.611C2.0582 18.3381 2 18.0455 2 17.75V6.25ZM4.25 5.5C4.05109 5.5 3.86032 5.57902 3.71967 5.71967C3.57902 5.86032 3.5 6.05109 3.5 6.25V17.75C3.5 18.164 3.836 18.5 4.25 18.5H19.75C19.9489 18.5 20.1397 18.421 20.2803 18.2803C20.421 18.1397 20.5 17.9489 20.5 17.75V6.25C20.5 6.05109 20.421 5.86032 20.2803 5.71967C20.1397 5.57902 19.9489 5.5 19.75 5.5H4.25Z"
              fill="#808191"
            />
            <path
              d="M6.99597 15.995C6.99597 16.2597 6.89083 16.5135 6.70366 16.7007C6.5165 16.8879 6.26266 16.993 5.99797 16.993C5.73329 16.993 5.47944 16.8879 5.29228 16.7007C5.10512 16.5135 4.99997 16.2597 4.99997 15.995C4.99997 15.7303 5.10512 15.4765 5.29228 15.2893C5.47944 15.1021 5.73329 14.997 5.99797 14.997C6.26266 14.997 6.5165 15.1021 6.70366 15.2893C6.89083 15.4765 6.99597 15.7303 6.99597 15.995ZM4.99597 12.75C4.99597 12.5511 5.07499 12.3603 5.21564 12.2197C5.35629 12.079 5.54706 12 5.74597 12C6.30378 12 6.85612 12.1099 7.37146 12.3234C7.88679 12.5369 8.35502 12.8498 8.74941 13.2443C9.14379 13.6387 9.4566 14.1071 9.66998 14.6224C9.88335 15.1378 9.9931 15.6902 9.99297 16.248C9.99297 16.4469 9.91395 16.6377 9.7733 16.7783C9.63265 16.919 9.44188 16.998 9.24297 16.998C9.04406 16.998 8.85329 16.919 8.71264 16.7783C8.57199 16.6377 8.49297 16.4469 8.49297 16.248C8.4931 15.8872 8.42215 15.5299 8.28416 15.1965C8.14617 14.8631 7.94384 14.5601 7.68875 14.3049C7.43365 14.0497 7.13078 13.8473 6.79743 13.7092C6.46409 13.5711 6.1068 13.5 5.74597 13.5C5.54706 13.5 5.35629 13.421 5.21564 13.2803C5.07499 13.1397 4.99597 12.9489 4.99597 12.75Z"
              fill="#808191"
            />
            <path
              d="M4.99597 9.7439C4.99597 9.54498 5.07499 9.35422 5.21564 9.21357C5.35629 9.07291 5.54706 8.9939 5.74597 8.9939C7.66985 8.9939 9.51494 9.75815 10.8753 11.1185C12.2357 12.4789 13 14.324 13 16.2479C13 16.4468 12.921 16.6376 12.7803 16.7782C12.6396 16.9189 12.4489 16.9979 12.25 16.9979C12.0511 16.9979 11.8603 16.9189 11.7196 16.7782C11.579 16.6376 11.5 16.4468 11.5 16.2479C11.5 14.7218 10.8937 13.2583 9.81466 12.1792C8.73558 11.1001 7.27203 10.4939 5.74597 10.4939C5.54706 10.4939 5.35629 10.4149 5.21564 10.2742C5.07499 10.1336 4.99597 9.94281 4.99597 9.7439Z"
              fill="#808191"
            />
          </svg>

          <p className="ml-4">Requests</p>
        </Link>
      </div>

      <div>
        <button
          className={`flex font-satoshi-medium rounded-xl items-center h-14 px-6 text-[#838091]`}
          onClick={handleLogout}
        >
          <VscSignOut size={20} />
          <p className="ml-4">Sign Out</p>
        </button>
      </div>
    </div>
  );
};
