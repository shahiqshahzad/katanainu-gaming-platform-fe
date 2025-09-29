import React from "react";
import Layout from "../../components/common/Layout";
import Hero from "../../components/Hero";
import Profile from "../../components/Profile";
import Gallerys from "../../components/Gallerys";
import Footer from "../../components/Footer";
import ManagementOrganization from "../../components/team/ManagementOrganization";
import GalleryProfileWrapper from "../../components/GalleryProfileWrapper";
import GalleryProfileTabsCommon from "../../components/GalleryProfileTabsCommon";
import CommonProfile from "../../components/common/CommonProfile";
import { useRouter } from "next/router";

const team = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Layout>
        <div className=""></div>
        <Hero userId={id} />
        <CommonProfile userId={id} />
        <GalleryProfileTabsCommon />

        <ManagementOrganization />
      </Layout>
      <Footer />
    </>
  );
};

export default team;
