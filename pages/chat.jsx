import Layout from "../components/common/Layout";
import { useEffect } from "react";
import { DashboardSidebar } from "../components/dashboard/DashboardSidebar";
import { ChatPage } from "../components/dashboard/ChatPage";

export default function chat() {
  useEffect(() => {
    // Trigger AOS animation when the component mounts
    window.dispatchEvent(new Event("load"));
  }, []);
  return (
    <>
      <Layout nosidebar noupbar>
        <div className="flex items-start">
          <DashboardSidebar small active={5} />
          <ChatPage />
        </div>
      </Layout>
    </>
  );
}
