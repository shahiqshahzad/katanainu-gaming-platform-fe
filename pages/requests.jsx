import DashboardLayout from "../components/admindashboard/DashboardLayout";
import {
  acceptTournamentRequest,
  getTournamentRequests,
  rejectTournamentRequest,
} from "../utils/api/tournamentModule";
import { ScrollLoader } from "../components/common/Icons";

export default function Requests() {
  const { data: requests, isLoading } = getTournamentRequests();
  const rejectRequest = rejectTournamentRequest();
  const handleRejectRequest = (tournamentRequestId) => {
    rejectRequest.mutate(tournamentRequestId);
  };
  const acceptRequest = acceptTournamentRequest();
  const handleAcceptRequest = (tournamentRequestId) => {
    acceptRequest.mutate(tournamentRequestId);
  };

  return (
    <DashboardLayout>
      <div className="text-white">
        <p className="text-lg lg:text-xl">Requests</p>
        {isLoading ? (
          <div className="flex justify-center">
            <ScrollLoader />
          </div>
        ) : (
          <>
            {requests?.data?.length === 0 ? (
              <p className="mt-5 text-center text-lg lg:text-xl font-semibold">
                No request
              </p>
            ) : (
              <table class="table-auto w-full border-separate border-spacing-y-5 mt-5 border border-neutral-tertiary rounded-lg">
                <thead>
                  <tr>
                    <th className="text-start pl-2">Tournament Name</th>
                    <th className="text-left">Team Name</th>
                    <th className="text-left">Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {requests?.data?.map((request, index) => (
                    <tr
                      className="bg-neutral-bg-03 text-neutral-tertiary"
                      key={index}
                    >
                      <td className="text-start py-5 pl-2">
                        {request?.tournamentId?.name}
                      </td>
                      <td className="py-5">{request?.teamId?.teamName}</td>
                      <td className="py-5">
                        <span
                          className={`${
                            request?.status === "pending"
                              ? "bg-[#F7CB73] text-black"
                              : "bg-green-500 text-white"
                          } px-4 py-1 rounded-lg`}
                        >
                          {request?.status}
                        </span>
                      </td>
                      <td className="text-center py-5 space-x-5">
                        <button
                          className="text-green-600 border border-green-600 px-3 py-1 rounded-lg"
                          onClick={() => handleAcceptRequest(request?._id)}
                        >
                          Accept
                        </button>
                        <button
                          className="text-red-600 border border-red-600 px-3 py-1 rounded-lg"
                          onClick={() => handleRejectRequest(request?._id)}
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
