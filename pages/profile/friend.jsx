import React from "react";
import Layout from "../../components/common/Layout";
import Hero from "../../components/Hero";
import Profile from "../../components/Profile";
import Gallerys from "../../components/Gallerys";
import Footer from "../../components/Footer";
import ManagementOrganization from "../../components/team/ManagementOrganization";
import MyFriend from "../../components/friend/MyFriend";
import FriendProfileWrapper from "../../components/FriendProfileWrapper";
import CommonProfile from "../../components/common/CommonProfile";
import GalleryProfileTabsCommon from "../../components/GalleryProfileTabsCommon";

const Friend = () => {
  return (
    <>
      <Layout>
        <div className=""></div>

        <Hero />
        <CommonProfile />
        <GalleryProfileTabsCommon />

        <MyFriend />
      </Layout>
      <Footer />
    </>
  );
};

export default Friend;
