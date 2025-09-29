import React from "react";

// components
import Layout from "../components/common/Layout";

// css
import "@splidejs/react-splide/css";
import Footer from "../components/Footer";
import style from "../styles/personalAccount/personalAccount.module.css";
import { MatchCard } from "../components/personalAccount/MatchCard";
import { EarnPlaying } from "../components/matchLinga/EarnPlaying";
import { ProfileAccont } from "../components/personalAccount/ProfileAccont";
import { PlayerBattle } from "../components/personalAccount/PlayerBattle";

const personalAccount = () => {
  return (
    <>
      <Layout>
        <div>
          <ProfileAccont />
          <div className={`grid grid-cols-2 gap-6 ${style.cardMatchWrapper}`}>
            <MatchCard
              heading={["PROFANE", "UNION"]}
              id={1}
              bgcard="/images/personalAccount/card-bg-1.png"
              frontcard="/images/personalAccount/person1.png"
            />
            <MatchCard
              heading={["CROWN OF", "TEARS"]}
              id={2}
              bgcard="/images/personalAccount/card-bg-2.png"
              frontcard="/images/personalAccount/person2.png"
            />
          </div>
          <PlayerBattle />
          <EarnPlaying />
        </div>
      </Layout>
      <Footer />
    </>
  );
};
export default personalAccount;
