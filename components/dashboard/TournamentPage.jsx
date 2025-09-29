import React from "react";
import { TournamentBanner } from "./TournamentBanner";
import { MatchOnline } from "./MatchOnline";
import { TopGames } from "./TopGames";
import { PastTournaments } from "./PastTournaments";
// import { TournamentRight } from "./TournamentRight";
import TournamentListing from "../../components/admindashboard/tournaments/TournamentListing";
import styles from "../../styles/dashboard/index.module.css";
import OngoingTornaments from "../admindashboard/tournaments/OngoingTornaments";
import UpcomingTornaments from "../admindashboard/tournaments/UpcomingTornaments";
import { getCategorizedTournaments } from "../../utils/api/tournamentModule";
export const TournamentPage = () => {
  const { isLoading, data } = getCategorizedTournaments();
  console.log(data?.data, "data");

  return (
    <div className={`flex-1 p-10 TournamentPage ${styles.TournamentPage}`}>
      <TournamentBanner />
      <div className={`flex mt-10 gap-10 ${styles.TournamentPageInnerWrapper}`}>
        <div className="flex-1">
          <OngoingTornaments data={data?.data?.ongoing} isLoading={isLoading} />
          <UpcomingTornaments
            data={data?.data?.upcoming}
            isLoading={isLoading}
          />
          {/* <MatchOnline /> */}
          {/* <TournamentListing /> */}
          {/* <TopGames /> */}
          <PastTournaments
            pastTournaments={data?.data?.past}
            isLoading={isLoading}
          />
        </div>
        {/* <TournamentRight /> */}
      </div>
    </div>
  );
};
