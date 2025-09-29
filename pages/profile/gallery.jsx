import Footer from "../../components/Footer";
import Gallerys from "../../components/Gallerys";
import Hero from "../../components/Hero";
import Profile from "../../components/Profile";
import Layout from "../../components/common/Layout";
import ThreeDots from "../../components/common/ThreeDots";
import { useEffect } from "react";
import ManagementOrganization from "../../components/team/ManagementOrganization";
import GalleryProfileWrapper from "../../components/GalleryProfileWrapper";
import CommonProfile from "../../components/common/CommonProfile";
import GalleryProfileTabsCommon from "../../components/GalleryProfileTabsCommon";

export default function Home() {
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

        <Gallerys />
      </Layout>
      <Footer />
    </>
  );
}
