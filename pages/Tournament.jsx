import Footer from "../components/Footer";
import Layout from "../components/common/Layout";
import { useEffect } from "react";
import { DashboardSidebar } from "../components/dashboard/DashboardSidebar";
import { TournamentPage } from "../components/dashboard/TournamentPage";
import styles from "../styles/dashboard/index.module.css";
export default function Tournament() {
  useEffect(() => {
    // Trigger AOS animation when the component mounts
    window.dispatchEvent(new Event("load"));
  }, []);
  return (
    <>
      <Layout nosidebar noupbar>
        <div className={`flex items-start ${styles.TournamentPageWrapper}`}>
          <DashboardSidebar active={3} />
          <TournamentPage />
        </div>
      </Layout>
      <Footer />
    </>
  );
}
