import Footer from "../components/Footer";
import Layout from "../components/common/Layout";
import { useEffect } from "react";
import { DashboardSidebar } from "../components/dashboard/DashboardSidebar";
import { ProfiledashboardPage } from "../components/dashboard/ProfiledashboardPage";
import styles from "../styles/dashboard/index.module.css";
export default function profile() {
  useEffect(() => {
    // Trigger AOS animation when the component mounts
    window.dispatchEvent(new Event("load"));
  }, []);
  return (
    <>
      <Layout nosidebar noupbar>
        <div className={`flex items-start ${styles.profiledashboardwrapper}`}>
          <DashboardSidebar />
          <ProfiledashboardPage />
        </div>
      </Layout>
      <Footer />
    </>
  );
}
