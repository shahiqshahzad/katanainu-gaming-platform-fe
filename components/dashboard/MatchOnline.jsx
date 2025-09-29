import React from "react";
import styles from "../../styles/dashboard/index.module.css";
export const MatchOnline = () => {
  return (
    <div className={`${styles.MatchOnline}`}>
      <h1 className={`font-bebas-neue mb-10`}>
        Match <span>online</span>
      </h1>

      <div className={`${styles.matchBoxArea}`}>
        <div className={`${styles.matchboxtop} grid grid-cols-3`}>
          <div
            className={`${styles.matchboxtopbox} flex flex-col items-center justify-center`}
          >
            <img src="/images/tournaments/team1.svg" alt="" />
            <h1 className={`font-bebas-neue mt-4`}>Ninja squad</h1>
            <p className={`font-satoshi-medium`}>1 teams</p>
          </div>
          <div
            className={`${styles.matchboxtopbox} flex flex-col items-center justify-center`}
          >
            <img src="/images/tournaments/royal.svg" alt="" />
            <h1 className={`font-bebas-neue mt-4`}>Match</h1>
            <p className={`font-satoshi-medium`}>02 teams</p>
          </div>
          <div
            className={`${styles.matchboxtopbox} flex flex-col items-center justify-center`}
          >
            <img src="/images/tournaments/team2.svg" alt="" />
            <h1 className={`font-bebas-neue mt-4`}>Ninja squad</h1>
            <p className={`font-satoshi-medium`}>1 teams</p>
          </div>
        </div>

        <div
          className={`${styles.matchboxessmall} flex items-center justify-between`}
        >
          <div className="flex items-center">
            <div className="smallboxes mr-2 w-14 flex flex-col items-center justify-center">
              <img src="/images/tournaments/badge.svg" alt="" />
              <h1 className={`font-bebas-neue mt-2`}>250</h1>
            </div>
            <div className="smallboxes mr-2 w-14 flex flex-col items-center justify-center">
              <img src="/images/tournaments/badge.svg" alt="" />
              <h1 className={`font-bebas-neue mt-2`}>250</h1>
            </div>
            <div className="smallboxes mr-2 w-14 flex flex-col items-center justify-center">
              <img src="/images/tournaments/badge.svg" alt="" />
              <h1 className={`font-bebas-neue mt-2`}>250</h1>
            </div>
            <div className="smallboxes mr-2 w-14 flex flex-col items-center justify-center">
              <img src="/images/tournaments/badge.svg" alt="" />
              <h1 className={`font-bebas-neue mt-2`}>250</h1>
            </div>
            <div className="smallboxes mr-2 w-14 flex flex-col items-center justify-center">
              <img src="/images/tournaments/badge.svg" alt="" />
              <h1 className={`font-bebas-neue mt-2`}>250</h1>
            </div>
          </div>
          <div className="flex items-center">
            <div className="smallboxes mr-2 w-14 flex flex-col items-center justify-center">
              <img src="/images/tournaments/badge.svg" alt="" />
              <h1 className={`font-bebas-neue mt-2`}>250</h1>
            </div>
            <div className="smallboxes mr-2 w-14 flex flex-col items-center justify-center">
              <img src="/images/tournaments/badge.svg" alt="" />
              <h1 className={`font-bebas-neue mt-2`}>250</h1>
            </div>
            <div className="smallboxes mr-2 w-14 flex flex-col items-center justify-center">
              <img src="/images/tournaments/badge.svg" alt="" />
              <h1 className={`font-bebas-neue mt-2`}>250</h1>
            </div>
            <div className="smallboxes mr-2 w-14 flex flex-col items-center justify-center">
              <img src="/images/tournaments/badge.svg" alt="" />
              <h1 className={`font-bebas-neue mt-2`}>250</h1>
            </div>
            <div className="smallboxes mr-2 w-14 flex flex-col items-center justify-center">
              <img src="/images/tournaments/badge.svg" alt="" />
              <h1 className={`font-bebas-neue mt-2`}>250</h1>
            </div>
          </div>
        </div>

        <div
          className={`${styles.matchboxbottomarea} flex items-center justify-between `}
        >
          <div className="flex items-center px-3 py-2">
            <img src="/images/tournaments/poland.svg" className="mr-1" alt="" />
            <h1 className="font-satoshi-medium mr-3">Poland</h1>
            <div className={`${styles.percentagearea} mr-3`}>
              <span className="rounded block h-1 w-full"></span>
            </div>

            <h1 className="font-bebas-neue">54.4K</h1>
          </div>
          <div className="flex items-center px-3 py-2">
            <img src="/images/tournaments/china.svg" className="mr-1" alt="" />
            <h1 className="font-satoshi-medium mr-3">China</h1>
            <div className={`${styles.percentagearea} mr-3`}>
              <span
                className="rounded block h-1 w-full"
                style={{
                  backgroundColor: "#D136F6",
                }}
              ></span>
            </div>

            <h1 className="font-bebas-neue">44.4K</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
