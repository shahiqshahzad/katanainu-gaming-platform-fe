import Link from "next/link";
import {
  getAllTeams,
  joinTeamMutation,
} from "../../utils/api/tournamentModule";

export default function TeamsListing() {
  const { data, isLoading } = getAllTeams();
  const joinTeam = joinTeamMutation();
  const handleJoinTeam = (teamId) => {
    joinTeam.mutate(teamId);
  };

  return (
    <>
      {data?.data?.documents.length === 0 ? (
        <p className="w-full text-center">No other teams</p>
      ) : (
        <div className="flex flex-wrap gap-5">
          <>
            {data?.data?.documents?.map((team, index) => (
              <div
                className="w-fit h-auto bg-[radial-gradient(1199.24%_50%_at_50%_48.72%,rgba(209,54,246,0.04)_0%,rgba(108,93,211,0.04)_100%)] rounded-[4px] gap-3 flex flex-col justify-center items-center"
                key={index}
                // href={"/about-team"}
              >
                <div className="px-4 pt-4">
                  <img
                    src={team?.teamImage}
                    alt="No image"
                    className="h-auto w-auto lg:h-52 lg:w-64"
                  />
                </div>
                <p className="text-[20px] sm:text-[24px] font-bebas-neue uppercase bg-[linear-gradient(0deg,_rgba(108,93,211,0.00)_0.16%,_rgba(209,54,246,0.04)_96.75%)] backdrop-blur-[12px] rounded-[4px] w-full text-center py-2">
                  {team?.teamName}
                </p>
                <button
                  className="text-[20px] sm:text-[24px] font-bebas-neue uppercase primary-gradient rounded-[4px] w-full text-center py-2"
                  onClick={() => handleJoinTeam(team?._id)}
                >
                  Join Team
                </button>
              </div>
            ))}
          </>
        </div>
      )}
    </>
  );
}
