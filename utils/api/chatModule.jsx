import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import API_END_POINTS from "./api_endpoints";
import { toast } from "react-toastify";
import axios from "./interceptor";

// user all groups
export function userAllGroups(searchUser) {
  return useQuery({
    queryKey: ["userAllGroups", searchUser],
    queryFn: async () => {
      const response = await axios.get(
        `${API_END_POINTS.USER_ALL_GROUPS}?userName=${searchUser}`
      );
      return response.data;
    },
  });
}

// send group message
export function sendGroupMessageMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      try {
        const response = await axios.post(
          `${API_END_POINTS.SEND_MESSAGE_IN_GROUP}`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        queryClient.invalidateQueries({ queryKey: ["chatMessages"] });
        return response.data;
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
}

// user chat messages
export function getChatMessages(groupId) {
  return useQuery({
    queryKey: ["chatMessages", groupId],
    queryFn: async () => {
      const response = await axios.get(
        `${API_END_POINTS.USER_CHAT_MESSAGES}/${groupId}`
      );
      return response.data;
    },
    enabled: !!groupId,
    refetchOnWindowFocus: false,
  });
}

// send message to user
export function sendUserMessageMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      try {
        const response = await axios.post(
          `${API_END_POINTS.SEND_MESSAGE_TO_USER}`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        queryClient.invalidateQueries({ queryKey: ["chatMessages"] });
        return response.data;
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
}

// seen all messages
export function seenAllMessages() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (groupId) => {
      const response = await axios.get(
        `${API_END_POINTS.SEEN_ALL_MESSAGES}/${groupId}`
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userAllGroups"] });
    },
    onError: (error) => {
      console.log(error?.response?.data?.message);
    },
  });
}
export function createGroupId() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId) => {
      const response = await axios.post(
        `${API_END_POINTS.CREATE_USER_GROUP_ID}`,
        { otherUserId: userId }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userAllGroups"] });
    },
    onError: (error) => {
      console.log(error?.response?.data?.message);
    },
  });
}
// change user status
export function changeUserStatus() {
  return useMutation({
    mutationFn: async (isOnline) =>
      axios.patch(`${API_END_POINTS.CHANGE_USER_STATUS}`, isOnline),
  });
}
