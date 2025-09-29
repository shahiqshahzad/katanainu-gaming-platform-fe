import DashboardLayout from "../components/admindashboard/DashboardLayout";
import AddGame from "../components/admindashboard/home/AddGame";
import GameListing from "../components/admindashboard/home/GameListing";

export default function Admin() {
  return (
    <DashboardLayout>
      <div className="text-white">
        <div className="flex justify-between items-center">
          <p>Games</p>
          <AddGame />
        </div>
        <GameListing />
      </div>
    </DashboardLayout>
  );
}
