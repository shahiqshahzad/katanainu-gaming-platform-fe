"use client";

import Image from "next/image";
import { ScrollLoader } from "../../common/Icons";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { format, differenceInDays } from "date-fns";
import { FiUsers } from "react-icons/fi";
import {
  getUserTeam,
  joinTournamentMutation,
} from "../../../utils/api/tournamentModule";
import ProgressBar from "../../tournament/ProgressBar";
import { toast } from "react-toastify";
// import { Trophy } from "lucide-react";

export default function UpcomingTornaments({ data, isLoading }) {
  const { data: userTeam } = getUserTeam();
  const joinTournament = joinTournamentMutation();

  const handleJoinTournament = (teamId, tournamentId) => {
    if (userTeam?.data) {
      const data = {
        teamId,
        tournamentId,
      };
      joinTournament.mutate(data);
    } else {
      toast.error("User must be in a team to join a tournament.");
    }
  };
  return (
    <div className=" text-white mt-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            UPCOMING <span className="text-purple-500">TOURNAMENT</span>
          </h2>
          <button className="text-sm hover:underline">View All</button>
        </div>
        {isLoading ? (
          <div className="w-full flex justify-center">
            <ScrollLoader />
          </div>
        ) : data.length === 0 ? (
          <p className="font-satoshi-regular text-center mt-3">
            No upcoming tournaments found
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {data.map((upcommingTor) => (
              <div
                className="bg-[#111116] rounded-lg overflow-hidden"
                key={upcommingTor._id}
              >
                <div className="relative h-48">
                  <Image
                    src={upcommingTor?.tournamentImage}
                    alt="APEX LEGENDS"
                    width={384}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-purple-500 text-white py-1 px-3 rounded-full flex items-center text-sm">
                    Prize:{upcommingTor?.prize}$
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20" />
                  <div className="absolute bottom-3 left-3">
                    <h3 className="text-3xl font-bold tracking-wider">
                      {upcommingTor?.name}
                    </h3>
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex items-center text-gray-400 text-sm">
                    <HiOutlineCalendarDateRange size={18} className="mr-1" />
                    <span className="mx-1">Starts:</span>
                    {format(upcommingTor?.startDate, "yyyy-MM-dd, HH:mm")}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <FiUsers size={18} className="mx-1" />
                    {upcommingTor?.description}
                    <div className="flex -space-x-2 ml-2">
                      {upcommingTor.teams.map((team, i) => (
                        <div
                          key={i}
                          className={`w-5 h-5 rounded-full border border-gray-800`}
                        >
                          <Image
                            src={team.teamImage}
                            alt={team.teamName}
                            height={20}
                            width={20}
                            className="rounded-full object-cover w-full h-full"
                          />
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-gray-400">
                      {upcommingTor.teams.length > 12
                        ? 12 + "+ Joined"
                        : upcommingTor.teams.length + "Joined"}
                    </span>
                  </div>
                  <ProgressBar
                    startDate={upcommingTor.enrollmentStartDate}
                    endDate={upcommingTor.enrollmentEndDate}
                  />
                  <div className="flex justify-between items-center pt-2">
                    <div className="text-gray-400">
                      Entry: <span className="text-white">Free</span>
                    </div>
                    <button
                      className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-8 rounded-md transition-colors"
                      onClick={() =>
                        handleJoinTournament(
                          userTeam?.data?._id,
                          upcommingTor?._id
                        )
                      }
                    >
                      Join
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
