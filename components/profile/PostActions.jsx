import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import API_END_POINTS from "../../utils/api/api_endpoints";
import { useRecommedMutation } from "../../utils/api/postModule";
import ModalCreatePost from "./ModalCreatePost";
import axios from "../../utils/api/interceptor";
import {
  CommentPostIcon,
  DislikePostIcon,
  LikePostIcon,
  RecommendPostIcon,
  SharePostIcon,
} from "../common/Icons";
import Link from "next/link";

const PostActions = ({ post, refetch, index, setPage, viewPost }) => {
  const [modalCreatePost, setModalCreatePost] = useState(false);
  const page = Math.ceil(index / 30);

  const closeModalPost = () => {
    setModalCreatePost(false);
  };

  // like post
  const likePostMutation = useMutation({
    mutationFn: (postId) => axios.get(`${API_END_POINTS.LIKE_POST}/${postId}`),
    onSuccess: (data) => {
      refetch();
    },
  });
  const handleLikePost = (postId) => {
    if (!viewPost) {
      setPage(page);
    }
    likePostMutation.mutate(postId);
  };

  // dislike post
  const dislikePostMutation = useMutation({
    mutationFn: (postId) =>
      axios.get(`${API_END_POINTS.DISLIKE_POST}/${postId}`),
    onSuccess: (data) => {
      refetch();
    },
  });
  const handleDislikePost = (postId) => {
    if (!viewPost) {
      setPage(page);
    }
    dislikePostMutation.mutate(postId);
  };

  //   recommend post
  const recommendMutation = useRecommedMutation();
  const handleRecommend = (postId) => {
    recommendMutation.mutateAsync(postId);
  };

  useEffect(() => {
    if (recommendMutation.isSuccess) {
      refetch();
    }
  }, [recommendMutation.isSuccess]);

  return (
    <div className="flex gap-6 justify-between items-center px-3 py-3 overflow-auto] ">
      <div className="flex items-center gap-3 ">
        <div className="flex items-center gap-1">
          <button
            className="cursor-pointer"
            onClick={() => handleLikePost(post?._id)}
          >
            <LikePostIcon liked={post?.postLikedByUser} />
          </button>
          <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
            Like
          </p>
        </div>
        <div className="pt-1">
          <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px] ">
            {post?.likesCount}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <button
            className="cursor-pointer"
            onClick={() => handleDislikePost(post?._id)}
          >
            <DislikePostIcon disliked={post?.postDisLikedByUser} />
          </button>
          <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
            Dislike
          </p>
        </div>
        <div className="pt-1">
          <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px]">
            {post?.disLikesCount}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <span className="cursor-pointer">
            <CommentPostIcon />
          </span>
          <Link
            href={`/post?id=${post?._id}`}
            className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]"
          >
            Comments
          </Link>
        </div>
        <div className="pt-1">
          <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px]">
            {post?.commentsCount}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div
          className="flex items-center gap-1"
          onClick={() => handleRecommend(post._id)}
        >
          <button className="cursor-pointer">
            <RecommendPostIcon recommeded={post?.postRecommendedByUser} />
          </button>
          <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
            Recommended
          </p>
        </div>
        <div className="pt-1">
          <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px]">
            {post?.recommendationsCount}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          className="flex items-center gap-1"
          onClick={() => setModalCreatePost(true)}
        >
          <span className="cursor-pointer">
            <SharePostIcon />
          </span>
          <p className="text-[14px] font-satoshi-medium text-neutral-tertiary leading-[16px] tracking-[0.25px]">
            Share
          </p>
        </button>
        <div className="pt-1">
          <p className="text-[12px] font-bebas-neue leading-[16px] tracking-[0.25px]">
            {post?.sharesCount}
          </p>
        </div>
      </div>
      <ModalCreatePost
        modalCreatePost={modalCreatePost}
        closeModal={closeModalPost}
        post={post}
        hasNoFile={true}
      />
    </div>
  );
};

export default PostActions;
