import React from "react";

// components
import Layout from "../components/common/Layout";

// css
import "@splidejs/react-splide/css";
import Footer from "../components/Footer";
import { EarnPlaying } from "../components/matchLinga/EarnPlaying";
import { MatchCard } from "../components/matchLinga/MatchCard";
import style from "../styles/matchLings/matchLings.module.css";
import { MatchLingaFortnite } from "../components/matchLinga/MatchLingaFortnite";
const matchLinga = () => {
  return (
    <>
      <Layout>
        <div className="player-wrapper match-linga">
          <div className={`grid  grid-cols-2 gap-6 ${style.matchlingagrid}`}>
            <MatchLingaFortnite />
            <div
              className={`${style.matchCardWrapper} grid gap-5 rounded-2xl p-10 w-full`}
            >
              <MatchCard />
              <MatchCard />
              <MatchCard />
            </div>
          </div>
          <EarnPlaying />
        </div>
      </Layout>
      <Footer />
    </>
  );
};
export default matchLinga;
