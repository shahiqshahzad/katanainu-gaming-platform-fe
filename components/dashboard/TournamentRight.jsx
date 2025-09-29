import React from "react";
import styles from "../../styles/dashboard/index.module.css";
export const TournamentRight = () => {
  return (
    <div className={`${styles.TournamentRight} px-5`}>
      <div
        className={`${styles.TournamentRightTop} pl-6 flex flex-col justify-center `}
      >
        <h1 className={`font-bebas-neue ${styles.headingStyle}`}>
          Popular <span>Team</span>
        </h1>
        <p className={`flex items-center font-satoshi-regular`}>
          <span className="w-2 h-2 mr-1 rounded-full block"></span>
          Online
        </p>
      </div>

      <div
        className={`mt-6 ${styles.TournamentRightBoxes} grid grid-cols-2  gap-6`}
      >
        <div
          className={`${styles.TournamentRightBox} flex flex-col items-center `}
        >
          <div
            className={`${styles.boxwrapperteam} flex items-center justify-center`}
          >
            <img src="/images/player/team1.svg" alt="" />
          </div>
          <h1 className={`font-bebas-neue mt-1`}>Ninja squad</h1>
          <p className={`font-satoshi-medium mt-1`}>1 teams</p>
        </div>
        <div
          className={`${styles.TournamentRightBox} flex flex-col items-center `}
        >
          <div
            className={`${styles.boxwrapperteam} flex items-center justify-center`}
          >
            <img src="/images/player/team2.svg" alt="" />
          </div>
          <h1 className={`font-bebas-neue mt-1`}>Ninja squad</h1>
          <p className={`font-satoshi-medium mt-1`}>1 teams</p>
        </div>
        <div
          className={`${styles.TournamentRightBox} flex flex-col items-center `}
        >
          <div
            className={`${styles.boxwrapperteam} flex items-center justify-center`}
          >
            <img src="/images/player/team3.svg" alt="" />
          </div>
          <h1 className={`font-bebas-neue mt-1`}>Ninja squad</h1>
          <p className={`font-satoshi-medium mt-1`}>1 teams</p>
        </div>{" "}
        <div
          className={`${styles.TournamentRightBox} flex flex-col items-center `}
        >
          <div
            className={`${styles.boxwrapperteam} flex items-center justify-center`}
          >
            <img src="/images/player/team4.svg" alt="" />
          </div>
          <h1 className={`font-bebas-neue mt-1`}>Ninja squad</h1>
          <p className={`font-satoshi-medium mt-1`}>1 teams</p>
        </div>{" "}
        <div
          className={`${styles.TournamentRightBox} flex flex-col items-center `}
        >
          <div
            className={`${styles.boxwrapperteam} flex items-center justify-center`}
          >
            <img src="/images/player/team2.svg" alt="" />
          </div>
          <h1 className={`font-bebas-neue mt-1`}>Ninja squad</h1>
          <p className={`font-satoshi-medium mt-1`}>1 teams</p>
        </div>{" "}
        <div
          className={`${styles.TournamentRightBox} flex flex-col items-center `}
        >
          <div
            className={`${styles.boxwrapperteam} flex items-center justify-center`}
          >
            <img src="/images/player/team3.svg" alt="" />
          </div>
          <h1 className={`font-bebas-neue mt-1`}>Ninja squad</h1>
          <p className={`font-satoshi-medium mt-1`}>1 teams</p>
        </div>{" "}
        <div
          className={`${styles.TournamentRightBox} flex flex-col items-center `}
        >
          <div
            className={`${styles.boxwrapperteam} flex items-center justify-center`}
          >
            <img src="/images/player/team3.svg" alt="" />
          </div>
          <h1 className={`font-bebas-neue mt-1`}>Ninja squad</h1>
          <p className={`font-satoshi-medium mt-1`}>1 teams</p>
        </div>{" "}
        <div
          className={`${styles.TournamentRightBox} flex flex-col items-center `}
        >
          <div
            className={`${styles.boxwrapperteam} flex items-center justify-center`}
          >
            <img src="/images/player/team1.svg" alt="" />
          </div>
          <h1 className={`font-bebas-neue mt-1`}>Ninja squad</h1>
          <p className={`font-satoshi-medium mt-1`}>1 teams</p>
        </div>{" "}
        <div
          className={`${styles.TournamentRightBox} flex flex-col items-center `}
        >
          <div
            className={`${styles.boxwrapperteam} flex items-center justify-center`}
          >
            <img src="/images/player/team4.svg" alt="" />
          </div>
          <h1 className={`font-bebas-neue mt-1`}>Ninja squad</h1>
          <p className={`font-satoshi-medium mt-1`}>1 teams</p>
        </div>
        <div
          className={`${styles.TournamentRightBox} flex flex-col items-center `}
        >
          <div
            className={`${styles.boxwrapperteam} flex items-center justify-center`}
          >
            <img src="/images/player/team2.svg" alt="" />
          </div>
          <h1 className={`font-bebas-neue mt-1`}>Ninja squad</h1>
          <p className={`font-satoshi-medium mt-1`}>1 teams</p>
        </div>
      </div>

      <div
        className={`${styles.gameEnd} my-6 px-3 py-4 w-full justify-between flex items-center`}
      >
        <h1 className={`font-satoshi-medium`}>Game End in</h1>
        <h1
          className={`font-bebas-neue h-16 flex items-center justify-end pr-4 flex-1`}
        >
          45.42.02
        </h1>
      </div>

      <button className={`font-satoshi-medium w-full h-12 rounded-lg`}>
        Participate
      </button>
    </div>
  );
};
