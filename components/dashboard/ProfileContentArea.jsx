import React from "react";
import styles from "../../styles/dashboard/index.module.css";
import Link from "next/link";
import { AboutProfile } from "./AboutProfile";
import { RosterTeam } from "./RosterTeam";
import { RecentMatch } from "./RecentMatch";
import { PopularStreamSlider } from "./PopularStreamSlider";
import { ProfileUserSidebar } from "./ProfileUserSidebar";
import { ProfileTeamSidebar } from "./ProfileTeamSidebar";
export const ProfileContentArea = () => {
  return (
    <div className={`${styles.ProfileContentArea} mt-28 ProfileContentArea `}>
      <nav className={`flex items-center mb-6`}>
        <Link
          href="#"
          className={`py-2 ${styles.active} rounded-lg px-6 font-satoshi-medium`}
        >
          All
        </Link>
        <Link href="#" className={`py-2 px-6 font-satoshi-medium`}>
          Stream Video
        </Link>
        <Link href="#" className={`py-2 px-6 font-satoshi-medium`}>
          Video
        </Link>
        <Link href="#" className={`py-2 px-6 font-satoshi-medium`}>
          About
        </Link>
        <Link
          href="/profile/friend"
          className={`py-2 px-6 font-satoshi-medium`}
        >
          Stories
        </Link>
        <Link href="#" className={`py-2 px-6 font-satoshi-medium`}>
          Schedules
        </Link>
      </nav>
      <div className={`flex items-start gap-6 ${styles.wrappercontentprofile}`}>
        <div>
          <AboutProfile />
          <RosterTeam />
          <RecentMatch />
        </div>
        <div className={`${styles.rightsidebarprofilecontent}`}>
          <ProfileUserSidebar />
          <ProfileTeamSidebar />
        </div>
      </div>

      <PopularStreamSlider />
    </div>
  );
};
