import DashboardLayout from "../components/admindashboard/DashboardLayout";
import CreateTournament from "../components/admindashboard/tournaments/CreateTornament";
import TournamentListing from "../components/admindashboard/tournaments/TournamentListing";

export default function Tournaments() {
  return (
    <DashboardLayout>
      <div className="text-white">
        <div className="flex justify-between items-center">
          <p>Upcoming Tournaments</p>
          <CreateTournament />
        </div>
        <TournamentListing isAdmin={true} />
      </div>
    </DashboardLayout>
  );
}
