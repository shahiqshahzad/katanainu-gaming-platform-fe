import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import API_END_POINTS from "./api_endpoints";
import { toast } from "react-toastify";
import axios from "./interceptor";

// create Tournament
export function createTournamentMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      try {
        const response = await axios.post(
          `${API_END_POINTS.CREATE_TOURNAMENT}`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success("Tournament Created Successfully.");
        queryClient.invalidateQueries({ queryKey: ["tournaments"] });
        return response.data;
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
}

// getAllTournaments
export function getAllTournaments() {
  return useQuery({
    queryKey: ["tournaments"],
    queryFn: async () => {
      const response = await axios.get(`${API_END_POINTS.ALL_TOURNAMENTS}`);
      return response.data;
    },
    refetchOnWindowFocus: false,
  });
}
// categorizedTournaments
export function getCategorizedTournaments() {
  return useQuery({
    queryKey: ["categoryTornaments"],
    queryFn: async () => {
      const response = await axios.get(`${API_END_POINTS.CATEGORY_TORNAMENTS}`);
      return response.data;
    },
    refetchOnWindowFocus: false,
  });
}
// delete tournament
export function deleteTournamentMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      const response = await axios.delete(
        `${API_END_POINTS.DELETE_TOURNAMENT}/${id}`
      );
      return response.data;
    },
    onSuccess: () => {
      toast.error("Tournament deleted successfully.");
      queryClient.invalidateQueries({ queryKey: ["tournaments"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

// update Tournament
export function updateTournamentMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (updatedData) =>
      axios.patch(
        `${API_END_POINTS.UPDATE_TOURNAMENT}/${updatedData.tournamentId}`,
        updatedData.formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      ),
    onSuccess: () => {
      toast.success("Tournament updated successfully.");
      queryClient.invalidateQueries({ queryKey: ["tournaments"] });
    },
  });
}

// create team
export function createTeamMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (formData) => {
      try {
        const response = await axios.post(
          `${API_END_POINTS.CREATE_TEAM}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success("Team Created successfully");
        queryClient.invalidateQueries({ queryKey: ["teams"] });
        queryClient.invalidateQueries({ queryKey: ["userTeam"] });
        return response.data;
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
}

// getAllTeams
export function getAllTeams() {
  return useQuery({
    queryKey: ["teams"],
    queryFn: async () => {
      const response = await axios.get(`${API_END_POINTS.ALL_TEAMS}`);
      return response.data;
    },
    refetchOnWindowFocus: false,
  });
}

// get user team
export function getUserTeam() {
  return useQuery({
    queryKey: ["userTeam"],
    queryFn: async () => {
      const response = await axios.get(`${API_END_POINTS.GET_USERTEAM}`);
      return response.data;
    },
    refetchOnWindowFocus: false,
  });
}

// leave team
export function leaveTeamMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (teamId) => {
      const response = await axios.get(
        `${API_END_POINTS.LEAVE_TEAM}/${teamId}`
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userTeam"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

// invite user to team
export function inviteUserMutation() {
  return useMutation({
    mutationFn: async (data) => {
      const response = await axios.get(
        `${API_END_POINTS.INVITE_USER_TO_TEAM}/${data.teamId}/${data.userId}`
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success("Invitation sent successfully");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

// accept team invite
export function acceptTeamInvitation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (teamId) => {
      const response = await axios.get(
        `${API_END_POINTS.ACCEPT_TEAM_INVITE}/${teamId}`
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success("Invitation accepted");
      queryClient.invalidateQueries({ queryKey: ["userTeam"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

// delete team
export function deleteTeamMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (teamId) => {
      const response = await axios.delete(
        `${API_END_POINTS.DELETE_TEAM}/${teamId}`
      );
      return response.data;
    },
    onSuccess: () => {
      toast.error("Team deleted successfully.");
      queryClient.invalidateQueries({ queryKey: ["userTeam"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

// assign leadership
export function assignLeadershipMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      const response = await axios.get(
        `${API_END_POINTS.ASSIGN_LEADER}/${data.teamId}/${data.teamLeaderId}`
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userTeam"] });
      toast.success("Leadership assigned successfully");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

// update Team
export function updateTeamMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (updatedData) => {
      try {
        const response = await axios.patch(
          `${API_END_POINTS.UPDATE_TEAM}/${updatedData.teamId}`,
          updatedData.formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success("Team updated successfully.");
        queryClient.invalidateQueries({ queryKey: ["userTeam"] });
        return response.data;
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
}

// remove member from team
export function removeTeamMemberMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      const response = await axios.get(
        `${API_END_POINTS.REMOVE_TEAM_MEMBER}/${data.teamId}/${data.memberId}`
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userTeam"] });
      toast.success("Member removed successfully");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

// join tounament
export function joinTournamentMutation() {
  return useMutation({
    mutationFn: async (data) => {
      const response = await axios.get(
        `${API_END_POINTS.JOIN_TOURNAMENT}/${data.teamId}/${data.tournamentId}`
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success("Request to join tournament sent successfully");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

// get all join tournaments
export function getTournamentRequests() {
  return useQuery({
    queryKey: ["tournamentRequests"],
    queryFn: async () => {
      const response = await axios.get(`${API_END_POINTS.TOURNAMENT_REQUESTS}`);
      return response.data;
    },
    refetchOnWindowFocus: false,
  });
}

// accept tournament request
export function acceptTournamentRequest() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (tournamentRequestId) => {
      const response = await axios.get(
        `${API_END_POINTS.ACCEPT_TOURNAMENT_REQUEST}/${tournamentRequestId}`
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tournamentRequests"] });
      toast.success("Request Accepted.");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

// reject tournament request
export function rejectTournamentRequest() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (tournamentRequestId) => {
      const response = await axios.get(
        `${API_END_POINTS.REJECT_TOURNAMENT_REQUEST}/${tournamentRequestId}`
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tournamentRequests"] });
      toast.success("Request rejected.");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

// get single tournament
export function getTournament(id) {
  return useQuery({
    queryKey: ["singleTournament", id],
    queryFn: async () => {
      const response = await axios.get(
        `${API_END_POINTS.GET_SINGLE_TOURNAMENT}/${id}`
      );
      return response.data;
    },
    enabled: !!id,
    refetchOnWindowFocus: false,
  });
}

// create Match
export function createMatchMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (formData) => {
      try {
        const response = await axios.post(
          `${API_END_POINTS.CREATE_MATCH}`,
          formData
        );
        toast.success("Match created successfully");
        queryClient.invalidateQueries({ queryKey: ["tournamentMatches"] });
        return response.data;
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
}

// get all matches
export function tournamentMatches(id) {
  return useQuery({
    queryKey: ["tournamentMatches", id],
    queryFn: async () => {
      const response = await axios.get(
        `${API_END_POINTS.ALL_MATCHES_OF_TOURNAMENT}/${id}`
      );
      return response.data;
    },
    enabled: !!id,
    refetchOnWindowFocus: false,
  });
}

// send request to join team
export function joinTeamMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (teamId) => {
      const response = await axios.get(`${API_END_POINTS.JOIN_TEAM}/${teamId}`);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Request has been sent.");
      queryClient.invalidateQueries({ queryKey: ["teams"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

// accept request to join team
export function acceptRequestToJoinTeam() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      const response = await axios.get(
        `${API_END_POINTS.ACCEPT_TEAM_INVITATION}/${data.teamId}/${data.userId}`
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

// update Match
export function updateMatchMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (updatedData) => {
      try {
        const response = await axios.patch(
          `${API_END_POINTS.UPDATE_MATCH}/${updatedData.matchId}`,
          updatedData.formData
        );
        toast.success("Match updated successfully.");
        queryClient.invalidateQueries({ queryKey: ["tournamentMatches"] });
        return response.data;
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
}

// delete match
export function deleteMatch() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (matchId) => {
      const response = await axios.delete(
        `${API_END_POINTS.DELETE_MATCH}/${matchId}`
      );
      return response.data;
    },
    onSuccess: () => {
      toast.error("Match deleted successfully.");
      queryClient.invalidateQueries({ queryKey: ["tournamentMatches"] });
    },
  });
}

// create Lobby
export function createLobby() {
  return useMutation({
    mutationFn: async (data) => {
      try {
        const response = await axios.post(
          `${API_END_POINTS.CREATE_LOBBY}/${data.matchId}`,
          data.formData
        );
        return response.data;
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
}

// get match lobby
export function getMatchLobby(matchId) {
  return useQuery({
    queryKey: ["matchLobby", matchId],
    queryFn: async () => {
      const response = await axios.get(
        `${API_END_POINTS.MATCH_LOBBY}/${matchId}`
      );
      return response.data;
    },
    enabled: !!matchId,
    refetchOnWindowFocus: false,
  });
}

// add player in lobby
export function addPlayerInLobby() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (lobbyData) => {
      try {
        const response = await axios.post(
          `${API_END_POINTS.ADD_PLAYER_IN_LOBBY}/${lobbyData.data.data._id}`,
          lobbyData.formData
        );
        queryClient.invalidateQueries({ queryKey: ["matchLobby"] });
        return response.data;
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
}

// remove player from lobby
export function removePlayerFromLobby() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userData) => {
      try {
        const response = await axios.post(
          `${API_END_POINTS.REMOVE_PLAYER_FROM_LOBBY}/${userData.lobbyId}/${userData.userId}`
        );
        queryClient.invalidateQueries({ queryKey: ["matchLobby"] });
        return response.data;
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
}

export function getPastTournaments() {
  return useQuery({
    queryKey: ["pastTournaments"],
    queryFn: async () => {
      const response = await axios.get(`${API_END_POINTS.PAST_TOURNAMENTS}`);
      return response.data;
    },
    refetchOnWindowFocus: false,
  });
}
