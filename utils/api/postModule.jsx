import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import API_END_POINTS from "./api_endpoints";
import { toast } from "react-toastify";
import axios from "./interceptor";

// getSinglePost
export function getPost(id) {
  return useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const response = await axios.get(`${API_END_POINTS.GET_POST}/${id}`);
      return response.data;
    },
    enabled: !!id,
    refetchOnWindowFocus: false,
  });
}

// readNotification
export function readNotification() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (notificationId) => {
      const response = await axios.patch(
        `${API_END_POINTS.READ_NOTIFICATION}/${notificationId}`
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });
}

// createPost
export function usePostMutation() {
  return useMutation({
    mutationFn: async (formData) => {
      const response = await axios.post(
        `${API_END_POINTS.CREATE_POST}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success("Post uploaded successfully");
      // closeModal();
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
}

// addComment
export function useaddCommentMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      const response = await axios.post(`${API_END_POINTS.ADD_COMMENT}`, {
        postId: data.postId,
        text: data.text,
      });
      return response.data;
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userPosts"] });
    },
  });
}

// getAllComments
export function useAllComments(postId) {
  return useQuery({
    queryKey: ["postComments"],
    queryFn: async () => {
      const response = await axios.get(
        `${API_END_POINTS.GET_ALL_COMMENST}/${postId}`
      );
      return response.data;
    },
    refetchOnWindowFocus: false,
    enabled: !!postId,
  });
}

// recommendPost
export function useRecommedMutation() {
  return useMutation({
    mutationFn: async (postId) => {
      const response = await axios.get(
        `${API_END_POINTS.RECOMMEND_POST}/${postId}`
      );
      return response.data;
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
}

// likeOnComment
export function likeOnComment() {
  return useMutation({
    mutationFn: async (commentId) => {
      const response = await axios.patch(
        `${API_END_POINTS.LIKE_ON_COMMENT}/${commentId}`
      );
      return response.data;
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
}

// disLikeOnComment
export function disLikeOnComment() {
  return useMutation({
    mutationFn: async (commentId) => {
      const response = await axios.patch(
        `${API_END_POINTS.DISLIKE_ON_COMMENT}/${commentId}`
      );
      return response.data;
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
}

// addReplyOnComment
export function useReplyMutation() {
  return useMutation({
    mutationFn: async (data) => {
      const response = await axios.post(`${API_END_POINTS.REPLY_ON_COMMENT}`, {
        commentId: data.commentId,
        text: data.text,
      });
      return response.data;
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
}

// deleteComment
export function deleteCommentMutation() {
  return useMutation({
    mutationFn: async (commentId) =>
      axios.delete(`${API_END_POINTS.DELETE_COMMENT}/${commentId}`),
    onSuccess: (data) => {
      toast.success("Comment deleted successfully.");
      // refetch();
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
}

// edit comment
export function editCommentMutation() {
  return useMutation({
    mutationFn: async (data) => {
      const response = await axios.patch(`${API_END_POINTS.EDIT_COMMENT}`, {
        commentId: data.commentId,
        text: data.text,
      });
      return response.data;
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
}

export function getAllPostGallery(userId, filter) {
  return useQuery({
    queryKey: ["allPostGallery", userId],
    queryFn: async () => {
      const response = await axios.get(
        `${API_END_POINTS.GET_ALL_POST_GALLERY}/${userId}?mediaType=${filter}`
      );
      return response.data;
    },
    refetchOnWindowFocus: false,
    enabled: !!userId,
  });
}
