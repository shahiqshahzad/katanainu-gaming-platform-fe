import { useMutation, useQuery } from "@tanstack/react-query";
import API_END_POINTS from "./api_endpoints";
import { toast } from "react-toastify";
import axios from "./interceptor";
import { useQueryClient } from "@tanstack/react-query";

// sendRequest
export function sendFriendRequest() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId) => {
      try {
        const response = await axios.get(
          `${API_END_POINTS.SEND_FRIEND_REQUEST}/${userId}`
        );
        toast.success(response?.data?.message);
        queryClient.invalidateQueries({ queryKey: ["usersList"] });
        return response.data;
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
}

// acceptRequest
export function acceptFriendRequest() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId) => {
      const response = await axios.get(
        `${API_END_POINTS.ACCEPT_REQUEST}/${userId}`
      );
      return response.data;
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usersList"] });
    },
  });
}

// cancelRequest
export function cancelFriendRequest() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId) => {
      const response = await axios.get(
        `${API_END_POINTS.CANCEL_REQUEST}/${userId}`
      );
      return response.data;
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usersList"] });
    },
  });
}

// sendFollowRequest
export function sendFollowRequest() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId) => {
      const response = await axios.get(
        `${API_END_POINTS.SEND_FOLLOW_REQUEST}/${userId}`
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
}

// acceptFollowRequest
export function acceptFollowRequest() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId) => {
      const response = await axios.get(
        `${API_END_POINTS.ACCEPT_FOLLOW_REQUEST}/${userId}`
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
}

// rejectFollowRequest
export function rejectFollowRequest() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId) => {
      const response = await axios.get(
        `${API_END_POINTS.REJECT_FOLLOW_REQUEST}/${userId}`
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
}

// unFollowRequest
export function unFollowRequest() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId) => {
      const response = await axios.delete(
        `${API_END_POINTS.UNFOLLOW_REQUEST}/${userId}`
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
}

//photos from friends
export function getPhotos(id) {
  return useQuery({
    queryKey: ["photosFromFriends", id],
    queryFn: async () => {
      const response = await axios.get(
        `${API_END_POINTS.PHOTOS_FROM_FRIENDS}/${id}`
      );
      return response.data;
    },
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
}

//friend list
export function getFriends() {
  return useQuery({
    queryKey: ["friendList"],
    queryFn: async () => {
      const response = await axios.get(`${API_END_POINTS.FRIEND_LIST}`);
      return response.data;
    },
    refetchOnWindowFocus: false,
  });
}

// remove friend
export function removeFriend() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId) => {
      const response = await axios.delete(
        `${API_END_POINTS.REMOVE_FRIEND}/${userId}`
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["friendList"] });
    },
  });
}

//videos from friends
export function getVideos(id) {
  return useQuery({
    queryKey: ["videosFromFriends", id],
    queryFn: async () => {
      const response = await axios.get(
        `${API_END_POINTS.VIDEOS_FROM_FRIENDs}/${id}`
      );
      return response.data;
    },
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
}
