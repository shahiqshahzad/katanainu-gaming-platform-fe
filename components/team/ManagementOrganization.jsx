/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import TeamDetails from "./TeamDetails";
import PlayerDetailsBox from "./PlayerDetailsBox";
import MainTitle from "../common/MainTitle";
import CreateTeam from "../dashboard/CreateTeam";
import TeamsListing from "./TeamsListing";
import {
  deleteTeamMutation,
  getUserTeam,
  inviteUserMutation,
  leaveTeamMutation,
} from "../../utils/api/tournamentModule";
import axios from "../../utils/api/interceptor";
import API_END_POINTS from "../../utils/api/api_endpoints";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";

const ManagementOrganization = () => {
  const { data: userTeam } = getUserTeam();
  const [isInvite, setIsInvite] = useState(false);
  const [search, setSearch] = useState("");
  const usersPopup = useRef(null);
  const { isLoading, data: users } = useQuery({
    queryKey: ["users", search],
    queryFn: () =>
      axios.get(`${API_END_POINTS.GET_ALL_USERS}?search=${search}`),
    enabled: !!search,
    refetchOnWindowFocus: false,
  });
  const leaveTeam = leaveTeamMutation();
  const handleLeaveTeam = (teamId) => {
    leaveTeam.mutate(teamId);
  };
  const inviteUser = inviteUserMutation();
  const handleInviteUser = (teamId, userId) => {
    const data = {
      teamId,
      userId,
    };
    inviteUser.mutate(data);
  };
  const deleteTeam = deleteTeamMutation();
  const handleDeleteTeam = (teamId) => {
    deleteTeam.mutate(teamId);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (usersPopup.current && !usersPopup.current.contains(event.target)) {
        setSearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [users?.data?.data]);

  return (
    <div className="">
      <div className="mb-6 flex justify-end">
        {userTeam?.data ? (
          <div className="flex gap-5 relative">
            {isInvite ? (
              <>
                <input
                  type="search"
                  className="bg-transparent border border-purple-400 outline-none rounded-lg p-2 w-60"
                  placeholder="Search Friend"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
                {search && (
                  <div
                    className="w-fit lg:w-96 h-fit max-h-96 overflow-y-scroll bg-neutral-bg-02 p-5 absolute top-14 left-0 rounded-lg"
                    ref={usersPopup}
                  >
                    {users?.data?.data?.documents.length === 0 ? (
                      <p className="text-center">No user found</p>
                    ) : (
                      <div className="grid grid-cols-1 gap-5 w-full">
                        {users?.data?.data?.documents?.map((user, index) => (
                          <>
                            <div
                              key={index}
                              className="flex justify-between items-center text-white border border-neutral-tertiary rounded-lg overflow-hidden px-3 gap-5 w-full"
                            >
                              <Link
                                href={`/profile/profile?id=${user?._id}`}
                                className="w-fit"
                              >
                                {user?.profileImage ? (
                                  <img
                                    src={user?.profileImage}
                                    className="w-14 h-12 rounded-full"
                                  />
                                ) : (
                                  <FaCircleUser className="w-12 h-12" />
                                )}
                              </Link>
                              <div
                                className="w-full py-3 px-0 md:px-3 space-y-3 ms-3 md:ms-0 flex flex-col"
                                data-aos="zoom-in"
                                data-aos-duration="1500"
                              >
                                <Link href={`/profile/profile?id=${user?._id}`}>
                                  {user?.name}
                                </Link>

                                <button
                                  className="text-[14px] hover:scale-90 transition duration-300 ease-in-out w-[116px] h-[40px] font-bold leading-5 text-[#D136F6] font-satoshi-bold rounded-[4px] border border-purple-400"
                                  onClick={() =>
                                    handleInviteUser(
                                      userTeam?.data?._id,
                                      user?._id
                                    )
                                  }
                                >
                                  Invite To Team
                                </button>
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </>
            ) : (
              <button
                className="text-[14px] hover:scale-90 transition duration-300 ease-in-out w-[116px] h-[40px] font-bold leading-5 text-[#D136F6] font-satoshi-bold rounded-[4px] border border-purple-400"
                onClick={() => setIsInvite(!isInvite)}
              >
                + Invite
              </button>
            )}
            <button
              className="text-[14px] hover:scale-90 transition duration-300 ease-in-out  w-[116px] h-[40px] font-bold leading-5 text-white font-satoshi-bold rounded-[4px] primary-gradient backdrop-blur-[8px]"
              onClick={() => handleLeaveTeam(userTeam?.data?._id)}
            >
              Leave Team
            </button>
            <button
              className="text-[14px] hover:scale-90 transition duration-300 ease-in-out w-[116px] h-[40px] font-bold leading-5 text-red-500 font-satoshi-bold rounded-[4px] border border-red-500"
              onClick={() => handleDeleteTeam(userTeam?.data?._id)}
            >
              Delete Team
            </button>
            <CreateTeam isUpdate={true} team={userTeam?.data} />
          </div>
        ) : (
          <CreateTeam />
        )}
      </div>
      {userTeam?.data && (
        <>
          <TeamDetails team={userTeam} />
          <div className="mt-10">
            <MainTitle firstWord="Management &" lastWord="Organization" />
            <div className="flex flex-wrap items-center gap-5 mt-8 ">
              <PlayerDetailsBox member={userTeam?.data?.teamLeader} />
            </div>
          </div>
          <div className="mt-10">
            <MainTitle firstWord="Team" lastWord="Players" />
            <div className="flex flex-wrap items-center gap-5 mt-8 ">
              {userTeam?.data?.teamMembers
                ?.filter(
                  (member) => member?._id !== userTeam?.data?.teamLeader?._id
                )
                .map((member, index) => (
                  <PlayerDetailsBox
                    key={index}
                    member={member}
                    leader={userTeam?.data?.teamLeader}
                    teamId={userTeam?.data?._id}
                  />
                ))}
            </div>
          </div>
        </>
      )}
      <div className="mt-10">
        <MainTitle firstWord="Other " lastWord="Teams" />
        <div className="mt-8">
          <TeamsListing />
        </div>
      </div>
    </div>
  );
};

export default ManagementOrganization;
