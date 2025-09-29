import Footer from "../components/Footer";
import Layout from "../components/common/Layout";
import { useEffect } from "react";
import { OverviewBanner } from "../components/tournament-overview/OverviewBanner";
import { TournamentAbout } from "../components/tournament-overview/TournamentAbout";
import { GeneralAnalyticsContact } from "../components/dashboard/GeneralAnalyticsContact";
import { Branding } from "../components/tournament-overview/Branding";
import { Team } from "../components/tournament-overview/Team";
import { List } from "../components/tournament-overview/List";
import { Controller } from "react-scrollmagic";
import { useRouter } from "next/router";

export default function TournamentOverview() {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    // Trigger AOS animation when the component mounts
    window.dispatchEvent(new Event("load"));
  }, []);

  return (
    <>
      <Layout>
        <OverviewBanner />
        <TournamentAbout id={id} />
        <List />
        <Team />
        <GeneralAnalyticsContact />
        <Controller>
          <Branding />
        </Controller>
      </Layout>
      <Footer />
    </>
  );
}
