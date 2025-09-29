import React from "react";
import Footer from "../components/Footer";
import Layout from "../components/common/Layout";
import styles from "../styles/landing/index.module.css";
import BracketsPage from "../components/tournament-overview/Brackets";
import { DashboardSidebar } from "../components/dashboard/DashboardSidebar";

const tournamentbrackets = () => {
  return (
    <>
      <Layout nosidebar noupbar>
        <div className={`flex items-start ${styles.homedashboard}`}>
          <DashboardSidebar active={1} />
          <BracketsPage />
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default tournamentbrackets;
