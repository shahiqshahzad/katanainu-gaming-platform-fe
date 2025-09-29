import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Layout from "../../components/common/Layout";
import { useEffect } from "react";

import MutiplayerGameWrapper from "../../components/multiplayerGame/MutiplayerGameWrapper";
import Recently from "../../components/multiplayerGame/Recently";
import CommonProfile from "../../components/common/CommonProfile";
import GalleryProfileTabs from "../../components/GalleryProfileTabs";
import GalleryProfileTabsCommon from "../../components/GalleryProfileTabsCommon";

export default function MultiplayerGame() {
  useEffect(() => {
    // Trigger AOS animation when the component mounts
    window.dispatchEvent(new Event("load"));
  }, []);
  return (
    <>
      <Layout>
        <Hero />
        <CommonProfile />
        <GalleryProfileTabsCommon />
        <Recently />
        <MutiplayerGameWrapper />
        <MutiplayerGameWrapper />
      </Layout>
      <Footer />
    </>
  );
}
