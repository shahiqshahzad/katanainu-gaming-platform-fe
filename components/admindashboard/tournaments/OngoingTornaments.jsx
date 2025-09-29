import Image from "next/image";
import Link from "next/link";
import { LuCalendarDays } from "react-icons/lu";
import { ScrollLoader } from "../../common/Icons";
import { format } from "date-fns";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";

export default function OngoingTornaments({ data, isLoading }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">
          <span className="text-white">ONGOING</span>{" "}
          <span className="text-purple-500">TOURNAMENT</span>
        </h2>
        <Link href="#" className="text-sm text-white hover:text-purple-400">
          View All
        </Link>
      </div>
      {isLoading ? (
        <div className="w-full flex justify-center">
          <ScrollLoader />
        </div>
      ) : data?.length == 0 ? (
        <p className="font-satoshi-regular text-center mt-3">
          No tournaments found
        </p>
      ) : (
        <div className=" text-white ">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
              {/* Valorant Card */}
              {data.map((tournament) => (
                <div
                  className="bg-gray-900 rounded-lg overflow-hidden"
                  key={tournament._id}
                >
                  <div className="relative">
                    <Image
                      src={tournament?.tournamentImage}
                      alt={tournament.name}
                      width={400}
                      height={200}
                      className="w-full h-[150px] object-cover"
                    />
                    <div className="absolute top-[-1px] right-[-1px] bg-purple-600 text-white text-xs px-3 py-3  flex items-center rounded-bl-[8px]">
                      Prize:{tournament?.prize}$
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold uppercase mb-1">
                      {tournament?.name}
                    </h3>
                    <div className="flex items-center text-gray-400 text-xs mb-2">
                      <HiOutlineCalendarDateRange size={18} />
                      <span className="mx-1">Starts:</span>
                      <span>
                        {format(tournament?.startDate, "yyyy-MM-dd, HH:mm")}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span>
                          <FiUsers size={18} />
                        </span>
                        <span className="text-xs text-primary-400 mx-2">
                          {tournament?.description}
                        </span>
                        <span className="text-purple-500 font-bold mx-1">
                          •
                        </span>
                        <div className="flex -space-x-2">
                          {tournament.teams.map((team, i) => (
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
                      </div>
                      <span className="text-xs text-gray-400">
                        {tournament.teams.length > 12
                          ? 12 + "+ Joined"
                          : tournament.teams.length + "Joined"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
