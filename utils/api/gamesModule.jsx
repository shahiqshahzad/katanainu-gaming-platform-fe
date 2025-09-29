import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import API_END_POINTS from "./api_endpoints";
import { toast } from "react-toastify";
import axios from "./interceptor";

// add game
export function addGameMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (formData) => {
      try {
        const response = await axios.post(
          `${API_END_POINTS.CREATE_GAME}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success("Game uploaded successfully");
        queryClient.invalidateQueries({ queryKey: ["games"] });
        return response.data;
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
}

// getAllGames
export function getAllGames(page) {
  return useQuery({
    queryKey: ["games", page],
    queryFn: async () => {
      const response = await axios.get(
        `${API_END_POINTS.GET_ALL_GAMES}?pageNumber=${page}`
      );
      return response.data;
    },
    refetchOnWindowFocus: false,
  });
}

// delete game
export function deleteGame() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (gameId) => {
      const response = await axios.delete(
        `${API_END_POINTS.DELETE_GAME}/${gameId}`
      );
      return response.data;
    },
    onSuccess: () => {
      toast.error("Game deleted successfully.");
      queryClient.invalidateQueries({ queryKey: ["games"] });
    },
  });
}

// update Game
export function updateGame() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (updatedData) =>
      axios.patch(
        `${API_END_POINTS.UPDATE_GAME}/${updatedData.gameId}`,
        updatedData.formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      ),
    onSuccess: () => {
      toast.success("Game edited successfully.");
      queryClient.invalidateQueries({ queryKey: ["games"] });
    },
  });
}
