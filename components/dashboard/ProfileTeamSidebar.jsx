import React from "react";
import styles from "../../styles/dashboard/index.module.css";
export const ProfileTeamSidebar = () => {
  return (
    <div className={`p-8 rounded-xl mt-8 ${styles.ProfileTeamSidebar}`}>
      <h1 className={`font-anton `}>My Team</h1>

      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="team-card flex flex-col items-center">
          <img src="/images/profile-new/team1.png" alt="" />
          <h1 className={`font-bebas-neue`}>over quantity</h1>
          <p className={`font-bebas-neue`}>Online</p>
        </div>
        <div className="team-card flex flex-col items-center">
          <img src="/images/profile-new/team2.png" alt="" />
          <h1 className={`font-bebas-neue`}>over quantity</h1>
          <p className={`font-bebas-neue`}>Online</p>
        </div>
        <div className="team-card flex flex-col items-center">
          <img src="/images/profile-new/team3.png" alt="" />
          <h1 className={`font-bebas-neue`}>over quantity</h1>
          <p className={`font-bebas-neue`}>Online</p>
        </div>
        <div className="team-card flex flex-col items-center">
          <img src="/images/profile-new/team4.png" alt="" />
          <h1 className={`font-bebas-neue`}>over quantity</h1>
          <p className={`font-bebas-neue`}>Online</p>
        </div>
      </div>

      <h2
        className={`my-5 h-10 text-center font-anton rounded flex items-center justify-center`}
      >
        TO invite a friend
      </h2>

      <div className={`flex items-center mb-3 ${styles.teamsidebarbox}`}>
        <img src="/images/profile-new/team1.png" className="w-14 mr-3" alt="" />
        <div>
          <h1 className={`font-satoshi-medium`}>
            All rights Our game are reserved
          </h1>
          <div className="flex justify-between items-center mt-3">
            <p
              className={`font-bebas-neue h-6 flex items-center justify-center`}
            >
              Online
            </p>
            <p
              className={`font-bebas-neue h-6 flex items-center justify-center`}
            >
              Click Match
            </p>
          </div>
        </div>
      </div>
      <div className={`flex items-center mb-3 ${styles.teamsidebarbox}`}>
        <img src="/images/profile-new/team2.png" className="w-14 mr-3" alt="" />
        <div>
          <h1 className={`font-satoshi-medium`}>
            All rights Our game are reserved
          </h1>
          <div className="flex justify-between items-center mt-3">
            <p
              className={`font-bebas-neue h-6 flex items-center justify-center`}
            >
              Online
            </p>
            <p
              className={`font-bebas-neue h-6 flex items-center justify-center`}
            >
              Click Match
            </p>
          </div>
        </div>
      </div>
      <div className={`flex items-center mb-3 ${styles.teamsidebarbox}`}>
        <img src="/images/profile-new/team3.png" className="w-14 mr-3" alt="" />
        <div>
          <h1 className={`font-satoshi-medium`}>
            All rights Our game are reserved
          </h1>
          <div className="flex justify-between items-center mt-3">
            <p
              className={`font-bebas-neue h-6 flex items-center justify-center`}
            >
              Online
            </p>
            <p
              className={`font-bebas-neue h-6 flex items-center justify-center`}
            >
              Click Match
            </p>
          </div>
        </div>
      </div>
      <div className={`flex items-center  ${styles.teamsidebarbox}`}>
        <img src="/images/profile-new/team4.png" className="w-14 mr-3" alt="" />
        <div>
          <h1 className={`font-satoshi-medium`}>
            All rights Our game are reserved
          </h1>
          <div className="flex justify-between items-center mt-3">
            <p
              className={`font-bebas-neue h-6 flex items-center justify-center`}
            >
              Online
            </p>
            <p
              className={`font-bebas-neue h-6 flex items-center justify-center`}
            >
              Click Match
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
