import Link from "next/link";
import { format } from "date-fns";
import { toast } from "react-toastify";
import { MdOutlineTimer } from "react-icons/md";
import CreateTournament from "./CreateTornament";
import { AiOutlineDelete } from "react-icons/ai";
import { ScrollLoader } from "../../common/Icons";
import styles from "../../../styles/dashboard/index.module.css";
import {
  deleteTournamentMutation,
  getAllTournaments,
  getUserTeam,
  joinTournamentMutation,
} from "../../../utils/api/tournamentModule";

export default function TournamentListing({ isAdmin }) {
  const { isLoading, data } = getAllTournaments();
  const { data: userTeam } = getUserTeam();
  const deleteTournament = deleteTournamentMutation();
  const joinTournament = joinTournamentMutation();
  const handleDeleteTournament = (id) => {
    deleteTournament.mutate(id);
  };

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
    <>
      {isLoading ? (
        <div className="w-full flex justify-center">
          <ScrollLoader />
        </div>
      ) : (
        <>
          {!isAdmin && (
            <h1
              className={`font-bebas-neue mt-8 lg:mt-16 ${styles.headingStyle}`}
            >
              <span>Tournaments</span>
            </h1>
          )}
          {data?.data?.length === 0 ? (
            <p className="font-satoshi-regular text-center mt-3">
              No tournaments found
            </p>
          ) : (
            <div
              className={`grid grid-cols-1 ${
                !isAdmin ? "md:grid-cols-2 xl:grid-cols-1" : "md:grid-cols-2"
              } gap-5 w-full mt-5 lg:mt-8`}
            >
              {data?.data?.map((tournament, index) => (
                <div className="bg-[#201F25] p-2 rounded-lg" key={index}>
                  {isAdmin && (
                    <div className="flex justify-end gap-2">
                      <CreateTournament isEdit={true} tournament={tournament} />
                      <button
                        className="text-red-600"
                        onClick={() => handleDeleteTournament(tournament?._id)}
                      >
                        <AiOutlineDelete size={20} />
                      </button>
                    </div>
                  )}
                  <div
                    key={index}
                    className="flex justify-between items-center text-white w-full gap-4"
                  >
                    <div className="relative">
                      <div className="font-satoshi-regular bg-green-400 absolute top-0 right-0 text-black bg-opacity-90 p-2 rounded italic text-md lg:text-lg">
                        Prize:{tournament?.prize}$
                      </div>
                      <img
                        src={tournament?.tournamentImage}
                        alt="Not found"
                        className={`w-60 lg:w-80 h-auto lg:h-48`}
                      />
                    </div>
                    <div
                      className={`font-satoshi-regular w-full space-y-3 ${
                        !isAdmin && "ml-5 lg:ml-8"
                      }`}
                    >
                      <p className="text-lg lg:text-3xl font-satoshi-bold">
                        {tournament?.name}
                      </p>
                      <p className="text-md text-neutral-tertiary">
                        {tournament?.description}
                      </p>
                      <div className="flex gap-4 lg:gap-8 items-center">
                        <p>
                          <span className="text-red-500">Team Size:</span>{" "}
                          {tournament?.minTeamSize}
                        </p>
                        <p>
                          <span className="text-red-500">Max teams:</span>{" "}
                          {tournament?.maxTeams}
                        </p>
                        <p>
                          <span className="text-red-500">Rounds:</span>{" "}
                          {tournament?.rounds}
                        </p>
                      </div>
                      <div className="text-red-500 flex gap-2 items-center text-lg">
                        <MdOutlineTimer size={25} />
                        <p>
                          Starts At{" "}
                          {format(tournament?.startDate, "yyyy-MM-dd HH:mm:ss")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start items-start ml-64 mt-3 gap-8">
                    {!isAdmin && (
                      <button
                        className="primary-gradient py-3 rounded-lg w-fit px-4 font-satoshi-medium font-medium leading-[156%] text-base"
                        onClick={() =>
                          handleJoinTournament(
                            userTeam?.data?._id,
                            tournament?._id
                          )
                        }
                      >
                        Join Tournament
                      </button>
                    )}
                    <Link
                      href={`/TournamentOverview?id=${tournament?._id}`}
                      className="px-4 py-3 rounded-lg font-satoshi-medium font-medium leading-[156%] text-base w-fit text-center border text-neutral-tertiary border-neutral-tertiary"
                    >
                      View Detail
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
