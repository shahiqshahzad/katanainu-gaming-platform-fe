import { useQuery, useMutation } from "@tanstack/react-query";
import API_END_POINTS from "./api_endpoints";
import axios from "./interceptor";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

// getAllUsers
export function getAllUsers(page, search) {
  return useQuery({
    queryKey: ["usersList", page],
    queryFn: async () => {
      const response = await axios.get(
        `${API_END_POINTS.GET_ALL_USERS}?search=${search}&pageNumber=${page}`
      );
      return response.data;
    },
    refetchOnWindowFocus: false,
  });
}

// getSingleUser
export function getSingleUser(userId) {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      const response = await axios.get(
        `${API_END_POINTS.GET_SINGLE_USER}/${userId}`
      );
      return response.data;
    },
    enabled: !!userId,
    refetchOnWindowFocus: false,
  });
}

// editProfile
export function editProfile({ onSuccessCallback, onErrorCallback }) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (formData) =>
      axios.patch(`${API_END_POINTS.EDIT_PROFILE}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.invalidateQueries({ queryKey: ["userPosts"] });
      if (onSuccessCallback) onSuccessCallback();
    },
    onError: () => {
      if (onErrorCallback) onErrorCallback();
    },
  });
}

export function connectWalletAddress() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (address) => {
      const response = await axios.post(
        `${API_END_POINTS.CONNECT_WALLET_ADDRESS}`,
        { walletAddress: address }
      );
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => {
      // toast.error(err.response.data.message);
    },
  });
}

// update profile
export function updateProfileMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (formData) => {
      try {
        const response = await axios.post(
          `${API_END_POINTS.UPDATE_PROFILE}`,
          formData
        );
        toast.success("Profile Updated successfully");
        queryClient.invalidateQueries({ queryKey: ["user"] });
        return response.data;
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
}

export function connectWithSteam() {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: async (data) => {
      const response = await axios.post(
        `${API_END_POINTS.CONNECT_STEAM}`,
        data
      );
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      router.push("/");
    },
    onError: (err) => {
      router.push("/");
      toast.error(err.response.data.message);
    },
  });
}

export function blockUser() {
  return useMutation({
    mutationFn: async (userId) => {
      try {
        const response = await axios.post(
          `${API_END_POINTS.BLOCK_USER}/${userId}`
        );
        return response.data;
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    },
  });
}
