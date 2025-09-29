import Footer from "../components/Footer";
import Layout from "../components/common/Layout";
import { useEffect } from "react";
import styles from "../styles/landing/index.module.css";
import { DashboardSidebar } from "../components/dashboard/DashboardSidebar";
import { HomePageNew } from "../components/dashboard/HomePageNew";

export default function Home() {
  useEffect(() => {
    // Trigger AOS animation when the component mounts
    window.dispatchEvent(new Event("load"));
  }, []);

  return (
    <>
      <Layout nosidebar noupbar>
        <div className={`flex items-start ${styles.homedashboard}`}>
          <DashboardSidebar active={1} />
          <HomePageNew />
        </div>
      </Layout>
      <Footer />
    </>
  );
}
