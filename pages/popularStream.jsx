import Layout from "../components/common/Layout";
import { useEffect } from "react";
import { DashboardSidebar } from "../components/dashboard/DashboardSidebar";
import { StreamPage } from "../components/dashboard/StreamPage";
import Footer from "../components/Footer";
import styles from "../styles/dashboard/index.module.css";
export default function popularStream() {
  useEffect(() => {
    // Trigger AOS animation when the component mounts
    window.dispatchEvent(new Event("load"));
  }, []);
  return (
    <div className="TournamentPage">
      <Layout nosidebar noupbar>
        <div className={`flex items-start ${styles.popularStreamwrapper}`}>
          <DashboardSidebar active={2} />
          <StreamPage />
        </div>
      </Layout>
      <Footer />
    </div>
  );
}
