import { useEffect } from "react";

import { Controller } from "react-scrollmagic";
import Layout from "../common/Layout";
import Profile from "./Profile";
import FeaturedMedia from "./FeaturedMedia";
import Tabs from "./Tabs";
import Footer from "../Footer";

export default function FanPage() {
  useEffect(() => {
    window.dispatchEvent(new Event("load"));
  }, []);
  return (
    <>
      <Layout>
        <div className="mr-5 space-y-5">
          <Profile />
          <FeaturedMedia />
          <Tabs />
        </div>
      </Layout>
      <Footer />
    </>
  );
}
