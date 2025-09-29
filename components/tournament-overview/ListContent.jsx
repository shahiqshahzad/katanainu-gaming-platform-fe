import React from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { format } from "date-fns";
import ViewLobby from "./ViewLobby";
import CreateLobby from "./CreateLobby";
import CreateMatch from "./CreateMatch";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteMatch } from "../../utils/api/tournamentModule";
import styles from "../../styles/tournament-overview/index.module.css";

export const ListContent = ({ match }) => {
  const userString = Cookies.get("token");
  const user = userString && JSON.parse(userString);
  const deleteGameMutation = deleteMatch();
  const handleDeleteMatch = (matchId) => {
    deleteGameMutation.mutate(matchId);
  };

  if (!match) return null;
  return (
    <div className={`flex items-center my-20 ${styles.ListContentContainer}`}>
      <div className={`${styles.ListContent} flex-1 relative`}>
        <div>
          <img
            src={match?.teamA?.teamImage}
            className="absolute left-10 top-3 h-full w-full lg:h-24 lg:w-24 rounded-full"
            alt=""
          />
          <h1 className={`font-bebas-neue`}>{match?.teamA?.teamName}</h1>
        </div>

        <img
          src="/images/tournament/list-bg.svg"
          alt=""
          style={{ height: 83 }}
          className="absolute left-0 top-0 w-full"
        />

        <div
          className={`flex items-center absolute bottom-0 right-5 ${styles.bottomlistcard}`}
        >
          <img src="/images/tournament/avatar1.svg" alt="" />
          <img src="/images/tournament/avatar2.svg" className="ml-2" alt="" />
          <img src="/images/tournament/avatar3.svg" className="ml-2" alt="" />

          <h2 className={`flex items-center ml-3 font-satoshi-medium`}>
            <Link href="#">Watch</Link>
            <img src="/images/tournament/youtube.svg" className="ml-2" alt="" />
          </h2>

          <h2 className={`flex items-center ml-3 font-satoshi-medium`}>
            <Link href="#">Comments</Link>

            <img src="/images/tournament/message.svg" className="ml-2" alt="" />
          </h2>
        </div>
      </div>
      <div className={`${styles.contentwidht} flex flex-col items-center`}>
        <h1 className={`font-bebas-neue`}>
          {match?.startTime ? format(new Date(match?.startTime), "HH:mm") : ""}{" "}
          {""}
        </h1>
        <p className={`font-satoshi-medium`}>
          {match?.startTime ? format(new Date(match?.startTime), "HH:mm") : ""}{" "}
          {""}
          {match?.startTime
            ? format(new Date(match?.startTime), "do MMMM yyyy")
            : ""}
        </p>
      </div>
      <div className={`${styles.ListContent} flex-1 relative`}>
        {user?.role === "admin" && (
          <div className="absolute right-5 -top-10 text-neutral-tertiary flex items-center gap-5">
            <button
              className="text-red-600"
              onClick={() => handleDeleteMatch(match?._id)}
            >
              <AiOutlineDelete size={30} />
            </button>
            <CreateMatch
              tournament={match?.tournamentId}
              update={true}
              match={match}
            />
            <CreateLobby matchId={match?._id} />
            <ViewLobby matchId={match?._id} />
          </div>
        )}
        <div>
          <img
            src={match?.teamB?.teamImage}
            className="absolute left-10 top-3 h-full w-full lg:h-24 lg:w-24 rounded-full"
            alt=""
          />
          <h1 className={`font-bebas-neue`}>{match?.teamB?.teamName}</h1>
        </div>
        <img
          src="/images/tournament/list-bg.svg"
          alt=""
          className="absolute left-0 top-0 w-full"
        />
        <div
          className={`flex items-center absolute bottom-0 right-5 ${styles.bottomlistcard}`}
        >
          <img src="/images/tournament/avatar1.svg" alt="" />
          <img src="/images/tournament/avatar2.svg" className="ml-2" alt="" />
          <img src="/images/tournament/avatar3.svg" className="ml-2" alt="" />

          <h2 className={`flex items-center ml-3 font-satoshi-medium`}>
            <Link href="#">Watch</Link>
            <img src="/images/tournament/youtube.svg" className="ml-2" alt="" />
          </h2>

          <h2 className={`flex items-center ml-3 font-satoshi-medium`}>
            <Link href="#">Comments</Link>

            <img src="/images/tournament/message.svg" className="ml-2" alt="" />
          </h2>
        </div>
      </div>
    </div>
  );
};
