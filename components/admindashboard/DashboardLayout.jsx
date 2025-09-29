import Link from "next/link";
import { DashboardSidebar } from "../dashboard/DashboardSidebar";
import { AdminSidebar } from "./AdminSidebar";
import DashboardHeader from "./DashboardHeader";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className={`text-white flex`}>
        <AdminSidebar />
        <div className="flex flex-col w-full">
          <DashboardHeader />
          <main className="lg:h-full lg:min-w-[600px] w-full scrollbar-hide p-4">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
