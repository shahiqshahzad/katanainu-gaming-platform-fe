import Footer from "../components/Footer";
import Gallerys from "../components/Gallerys";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Layout from "../components/common/Layout";

import { useEffect } from "react";

export default function old() {
  useEffect(() => {
    // Trigger AOS animation when the component mounts
    window.dispatchEvent(new Event("load"));
  }, []);
  return (
    <>
      <Layout>
        <Hero />
        <Profile />
        <Gallerys />
      </Layout>
      <Footer />
    </>
  );
}
