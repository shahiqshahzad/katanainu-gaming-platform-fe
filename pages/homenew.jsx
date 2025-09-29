import Footer from "../components/Footer";
import Layout from "../components/common/Layout";
import { useEffect } from "react";
import { DashboardSidebar } from "../components/dashboard/DashboardSidebar";
import { HomePage } from "../components/dashboard/HomePage";
import styles from "../styles/dashboard/index.module.css";
export default function home() {
  useEffect(() => {
    // Trigger AOS animation when the component mounts
    window.dispatchEvent(new Event("load"));
  }, []);
  return (
    <>
      <Layout nosidebar noupbar>
        <div className={`flex items-start ${styles.homedashboard}`}>
          <DashboardSidebar active={1} />
          <HomePage />
        </div>
      </Layout>
      <Footer />
    </>
  );
}
