import Footer from "../components/Footer";
import Layout from "../components/common/Layout";
import { useEffect } from "react";
import { DashboardSidebar } from "../components/dashboard/DashboardSidebar";
import { GeneralAnalyticsPage } from "../components/dashboard/GeneralAnalyticsPage";

export default function GeneralAnalytics() {
  useEffect(() => {
    // Trigger AOS animation when the component mounts
    window.dispatchEvent(new Event("load"));
  }, []);
  return (
    <>
      <Layout nosidebar noupbar>
        <div className="flex items-start">
          <img
            src="/images/general-analytics/bg-general-analytics.png"
            className="absolute left-0 top-0 -z-10"
            alt=""
          />
          <DashboardSidebar active={2.1} />
          <GeneralAnalyticsPage />
        </div>
      </Layout>
      <Footer />
    </>
  );
}
