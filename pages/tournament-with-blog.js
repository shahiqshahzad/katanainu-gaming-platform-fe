import React from "react";
import Layout from "../components/common/Layout";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import Tournament from "../components/tournament/Tournament";
import OurteamStreams from "../components/tournament/OurteamStreams";
import LogoCards from "../components/tournament/LogoCards";
import Hero from "../components/blog/Hero";
import FourCards from "../components/blog/FourCards";
import OurBestBlog from "../components/blog/OurBestBlog";

function TournamentWithBlog() {
  return (
    <>
      <Layout>
        <div className=""></div>
        <Hero />
        <Tournament />
        <FourCards />
        <OurteamStreams />
        <OurBestBlog />
        <LogoCards />
      </Layout>
      <Footer />
    </>
  );
}

export default TournamentWithBlog;
