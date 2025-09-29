import React from "react";
import styles from "../../styles/dashboard/index.module.css";

// css
import "@splidejs/react-splide/css";
import Image from "next/image";
import { FiUsers } from "react-icons/fi";
import { format, parseISO } from "date-fns";
import { ScrollLoader } from "../common/Icons";
export const PastTournaments = ({ pastTournaments, isLoading }) => {
  return (
    <div
      className={` relative ${styles.PastTournaments} ${styles.PastTournamentsNew} mt-3`}
    >
      <div
        className={`flex items-center   justify-between ${styles.toppasttournaments}`}
      >
        <h1 className={`font-bebas-neue ${styles.headingStyle}`}>
          Past <span>Tournaments</span>
        </h1>

        <button
          className={`flex items-center h-10 px-4 rounded-lg font-satoshi-medium`}
        >
          Show More
          <svg
            className="ml-2"
            width="23"
            height="23"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="28"
              height="28"
              rx="14"
              fill="#0E0C15"
              fill-opacity="0.24"
            />
            <path
              d="M19 9.00002V14C19 14.46 18.6275 14.8334 18.1667 14.8334C17.7059 14.8334 17.3334 14.46 17.3334 14V11.0117L9.58923 18.7559C9.42673 18.9184 9.21337 19 9.00004 19C8.78671 19 8.57335 18.9184 8.41085 18.7559C8.08502 18.43 8.08502 17.9033 8.41085 17.5775L16.155 9.83335H13.1667C12.7059 9.83335 12.3334 9.46002 12.3334 9.00002C12.3334 8.54002 12.7059 8.16669 13.1667 8.16669H18.1667C18.275 8.16669 18.3834 8.18911 18.4851 8.23077C18.6893 8.31494 18.8518 8.47745 18.936 8.68162C18.9785 8.78329 19 8.89169 19 9.00002Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      {isLoading ? (
        <div className="w-full flex justify-center">
          <ScrollLoader />
        </div>
      ) : pastTournaments.length === 0 ? (
        <p className="font-satoshi-regular text-center mt-3">
          No past tournaments found
        </p>
      ) : (
        pastTournaments?.map((pastTournaments, index) => (
          <div
            className="grid grid-cols-5 pl-3 bg-[#18161F] rounded-lg py-4 my-2"
            key={index}
          >
            <div className="flex col-span-2 gap-x-4 place-items-center ">
              <Image
                src={pastTournaments?.tournamentImage}
                height={80}
                width={80}
                quality={100}
                alt="image"
                className="bg-blue-500 w-20 h-20 [clip-path:polygon(50%_0%,_100%_38%,_82%_100%,_18%_100%,_0%_38%)] "
              />
              <div>
                <h4 className="text-center font-bold font-bebas">
                  {pastTournaments?.name}
                </h4>
                <div className="flex items-center pt-2">
                  <div className="flex items-center">
                    <span>
                      <FiUsers size={18} />
                    </span>
                    <span className="text-xs text-primary-400 ml-1">
                      {pastTournaments?.description}
                    </span>
                    <span className="text-purple-500 font-bold mx-1">•</span>
                    <div className="flex ml-1 ">
                      {pastTournaments.teams.map((team, i) => (
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
                  <span className="text-xs text-gray-400 pl-2">
                    {pastTournaments.teams.length > 12
                      ? 12 + "+ Joined"
                      : pastTournaments.teams.length + "Joined"}
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 ">
              <div>
                <Image
                  src={pastTournaments?.winnerTeam?.teamImage}
                  height={64}
                  width={64}
                  alt={pastTournaments?.winnerTeam?.teamName}
                  className="w-[64px] h-[64px] rounded-full object-cover"
                />
                <div className="text-center">Winner</div>
                {/* <div className="w-[100px] border-t border-black rotate-[-112deg] origin-left"></div> */}
              </div>
            </div>
            <div className=" self-center">
              <div>Time</div>
              <div className="font-sm text-gray-500">
                {format(
                  parseISO(pastTournaments?.enrollmentStartDate),
                  "dd MMM yyyy"
                )}
                <span className="mx-0.3"> to </span>
                {format(
                  parseISO(pastTournaments?.enrollmentEndDate),
                  "dd MMM yyyy"
                )}
              </div>
            </div>
            <div className="flex justify-center items-center font-bold text-lg">
              <div>Price :</div>
              <div>{pastTournaments?.prize}</div>
            </div>
          </div>
        ))
      )}
      {/* {pastTournaments?.map((tournament, index) => (
        <div key={index}>
          <div
            className={`${styles.tournamentrow} mb-2 relative px-6 rounded-lg h-20 flex items-center justify-between`}
          >
            <div className={`flex items-center`}>
              <img src={tournament?.tournamentImage} className="w-12" alt="" />
              <div className="ml-5">
                <h1 className={`font-bebas-neue`}>{tournament?.name}</h1>
                <p className={`font-satoshi-medium mt-1`}>
                  {tournament?.minTeamSize * tournament?.teams?.length} people
                </p>
              </div>
            </div>
            <div>
              <h1 className={`font-bebas-neue`}>{tournament?.name}</h1>
              <p className={`font-satoshi-medium mt-1`}>
                {tournament?.minTeamSize * tournament?.teams?.length} people
              </p>
            </div>
            <div className={`flex items-center`}>
              <img src={tournament?.tournamentImage} className="w-12" alt="" />
              <div className="ml-5">
                <h1 className={`font-bebas-neue`}>{tournament?.name}</h1>
                <p className={`font-satoshi-medium mt-1`}>
                  {tournament?.minTeamSize * tournament?.teams?.length} people
                </p>
              </div>
            </div>
            <h1 className={`font-bebas-neue`}>win</h1>

            <img
              src="/images/tournaments/wave.png"
              className="absolute right-0 rounded-tr-lg rounded-br-lg"
              alt=""
            />
          </div>
        </div>
      ))} */}
    </div>
  );
};
