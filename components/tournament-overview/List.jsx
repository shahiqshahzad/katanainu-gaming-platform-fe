import React, { useEffect, useState } from "react";
import styles from "../../styles/tournament-overview/index.module.css";
import { ListContent } from "./ListContent";
import { useRouter } from "next/router";
import { tournamentMatches } from "../../utils/api/tournamentModule";
import { ScrollLoader } from "../common/Icons";

export const List = () => {
  const router = useRouter();
  const { id } = router.query;
  const [active, setActive] = useState("All Matches");
  const [matches, setMatches] = useState([]);
  const { data, isLoading } = tournamentMatches(id);
  const completedMatches = data?.data?.filter(
    (match) => match?.status === "completed"
  );
  const upcomingMatches = data?.data?.filter(
    (match) => match?.status === "pending"
  );
  const handleFilterMatches = (data, filterStatus) => {
    setMatches(data);
    setActive(filterStatus);
  };
  useEffect(() => {
    if (data) {
      setMatches(data?.data);
    }
  }, [data]);

  return (
    <div className={`${styles.teamoverview} mb-20 mt-20`}>
      <div className={`flex items-center justify-between`}>
        <ul className={`flex items-center ${styles.list}`}>
          <li
            className={`mr-14 font-satoshi-medium ${
              active === "All Matches" && `${styles.active}`
            }`}
            onClick={() => handleFilterMatches(data?.data, "All Matches")}
          >
            ALL MATCHES
          </li>
          <li
            className={`mr-14 font-satoshi-medium ${
              active === "Upcoming Matches" && `${styles.active}`
            }`}
            onClick={() =>
              handleFilterMatches(upcomingMatches, "Upcoming Matches")
            }
          >
            UPCOMING
          </li>
          <li
            className={`font-satoshi-medium ${
              active === "Finished Matches" && `${styles.active}`
            }`}
            onClick={() =>
              handleFilterMatches(completedMatches, "Finished Matches")
            }
          >
            FINISHED
          </li>
        </ul>

        <h2 className={`font-bebas-neue transform translate-y-8`}>List</h2>
      </div>

      {isLoading ? (
        <div className="flex justify-center">
          <ScrollLoader />
        </div>
      ) : (
        <>
          {matches?.length === 0 ? (
            <p className="w-full text-center font-satoshi-medium">
              No match found.
            </p>
          ) : (
            <>
              {matches?.map((match, index) => (
                <ListContent match={match} key={index} />
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};
