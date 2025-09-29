/* eslint-disable @next/next/no-img-element */
import { format } from "date-fns";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { HiDotsHorizontal } from "react-icons/hi";
import {
  assignLeadershipMutation,
  removeTeamMemberMutation,
} from "../../utils/api/tournamentModule";

const PlayerDetailsBox = ({ member, leader, teamId }) => {
  const navigagte = useRouter();
  const userString = Cookies.get("token");
  const user = userString && JSON.parse(userString);
  const [openMenu, setOpenMenu] = useState(false);
  const assignLeadership = assignLeadershipMutation();
  const handleLeadership = (teamId, teamLeaderId) => {
    const data = {
      teamId,
      teamLeaderId,
    };
    assignLeadership.mutate(data);
  };

  const removeTeamMember = removeTeamMemberMutation();
  const handleRemoveMember = (teamId, memberId) => {
    const data = {
      teamId,
      memberId,
    };
    removeTeamMember.mutate(data);
    setOpenMenu(false);
  };

  const toggleMenu = (leaderId) => {
    setOpenMenu(openMenu === leaderId ? false : leaderId);
  };

  return (
    <div className="w-[90%] sm:w-[49%] md:w-[32%] mb-3 h-auto  bg-[radial-gradient(1199.24%_50%_at_50%_48.72%,rgba(209,54,246,0.04)_0%,rgba(108,93,211,0.04)_100%)] rounded-[4px] py-4">
      {leader?._id === user._id && (
        <div className="relative flex justify-end mr-5">
          <button onClick={() => toggleMenu(leader?._id)}>
            <span className="cursor-pointer text-[#9D99AD]">
              <HiDotsHorizontal size={20} />
            </span>
          </button>
          {openMenu === leader?._id && (
            <div className="absolute top-6 right-0 p-2 rounded-md border border-[#D136F6] flex flex-col z-10 gap-3">
              <button
                onClick={() => handleLeadership(teamId, member?._id)}
                className="bg-[#D136F6] px-4 py-2 rounded-md"
              >
                Assign Leadership
              </button>
              <button
                onClick={() => handleRemoveMember(teamId, member?._id)}
                className="px-4 py-2 bg-red-500 rounded-md"
              >
                Remove Member
              </button>
            </div>
          )}
        </div>
      )}
      <div className="flex gap-4 items-center">
        {member?.profileImage ? (
          <img
            className="w-[50px] h-[50px] ml-5 rounded-full"
            src={member?.profileImage}
            alt="No image found"
          />
        ) : (
          <div className="bg-gray-500 rounded-full ml-5">
            <img
              src="/images/home/user.svg"
              className="w-[50px] h-[50px] rounded-full"
              alt="Profile"
            />
          </div>
          // <img
          //   className="w-[80px] "
          //   src="/images/management-card-img-1.png"
          //   alt=""
          // />
        )}
        <h2 className="text-[20px] sm:text-[24px] font-bebas-neue uppercase">
          {member?.name}
        </h2>
      </div>
      <div className="bg-[linear-gradient(0deg,_rgba(108,93,211,0.00)_0.16%,_rgba(209,54,246,0.04)_96.75%)] backdrop-blur-[12px] rounded-[4px] mt-6 ">
        <div className="border-b border-[#2C2142] py-3">
          <div
            className="flex justify-between cursor-pointer  items-center  px-5 "
            onClick={(e) => {
              navigagte.push("/");
            }}
          >
            <div className="w-[50%]">
              <h2 className="text-[14px] font-bebas-neue text-[#9D99AD] leading-[100%] uppercase">
                Age
              </h2>
            </div>
            <div className=" w-[50%] pl-3">
              <span className="text-[12px] text-start font-satoshi-medium leading-[100%] text-[#9D99AD] ">
                {member?.age}
              </span>
            </div>
          </div>
        </div>
        <div className="border-b border-[#2C2142] py-3">
          <div className="flex justify-between  items-center  px-5 ">
            <div className="w-[50%]">
              <h2 className="text-[14px] text-[#9D99AD] font-bebas-neue leading-[100%] uppercase">
                City
              </h2>
            </div>
            <div className=" w-[50%] pl-3">
              <span className="text-[12px] text-start font-satoshi-medium leading-[100%] text-[#9D99AD] ">
                {member?.city}
              </span>
            </div>
          </div>
        </div>
        <div className="border-b border-[#2C2142] py-3">
          <div className="flex justify-between  items-center  px-5 ">
            <div className="w-[50%]">
              <h2 className="text-[14px] text-[#9D99AD] font-bebas-neue leading-[100%] uppercase">
                Country
              </h2>
            </div>
            <div className=" w-[50%] pl-3">
              <span className="text-[12px] text-start font-satoshi-medium leading-[100%] text-[#9D99AD] ">
                {member?.country}
              </span>
            </div>
          </div>
        </div>
        <div className="border-b border-[#2C2142] py-3">
          <div className="flex justify-between  items-center  px-5 ">
            <div className="w-[50%]">
              <h2 className="text-[14px] text-[#9D99AD] font-bebas-neue leading-[100%] uppercase">
                Member since
              </h2>
            </div>
            <div className=" w-[50%] pl-3">
              <span className="text-[12px] text-start font-satoshi-medium leading-[100%] text-[#9D99AD] ">
                {member?.joinedTeam}
                {/* 04-Jun-21 */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetailsBox;
