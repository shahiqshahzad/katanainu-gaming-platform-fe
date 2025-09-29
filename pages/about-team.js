import React from "react";
import Layout from "../components/common/Layout";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import Hero from "../components/tournament/Hero";
import Tournament from "../components/tournament/Tournament";
import Ourteam from "../components/tournament/Ourteam";
import OurteamStreams from "../components/tournament/OurteamStreams";
import LogoCards from "../components/tournament/LogoCards";

function AboutTeam() {
  return (
    <>
      <Layout>
        <div className=""></div>
        <Hero />
        <Tournament />
        <Ourteam />
        <OurteamStreams />
        <LogoCards />
      </Layout>
      <Footer />
    </>
  );
}

export default AboutTeam;
