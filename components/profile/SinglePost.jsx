import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { format } from "date-fns";
import API_END_POINTS from "../../utils/api/api_endpoints";
import ModalEditPost from "./ModalEditPost";
import { toast } from "react-toastify";
import { useaddCommentMutation } from "../../utils/api/postModule";
import axios from "../../utils/api/interceptor";
import PostActions from "./PostActions";
import SingleComment from "./SingleComment";
import ViewPost from "./ViewPost";
import Link from "next/link";
import { getSingleUser } from "../../utils/api/userModule";

const SinglePost = ({ post, refetch, index, setPage }) => {
  const [comment, setComment] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const userString = Cookies.get("token");
  const user = userString && JSON.parse(userString);
  const { data } = getSingleUser(user?._id);
  const page = Math.ceil(index / 30);
  const queryClient = useQueryClient();

  const toggleMenu = (postId) => {
    setOpenMenu(openMenu === postId ? null : postId);
  };

  const closeModal = () => {
    setModalIsOpen(!modalIsOpen);
    setOpenMenu(false);
  };

  // delete post
  const deleteMutation = useMutation({
    mutationFn: (postId) =>
      axios.delete(`${API_END_POINTS.DELETE_POST}/${postId}`),
    onSuccess: (data) => {
      toast.success("Post deleted successfully.");
      setPage(page);
      refetch();
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });
  const handleDeletePost = (postId) => {
    deleteMutation.mutate(postId);
  };

  // addComment
  const addCommentMutation = useaddCommentMutation();
  const handleAddComment = (postId, text) => {
    let data = {
      postId,
      text,
    };
    addCommentMutation.mutateAsync(data);
    setPage(page);
    refetch();
  };
  useEffect(() => {
    if (addCommentMutation.isSuccess) {
      setComment("");
    }
  }, [addCommentMutation.isSuccess]);

  return (
    <>
      <div className=" flex md:flex-row  flex-col items-center md:items-start gap-4  px-4 py-4 w-full pt-6">
        <div>
          <img
            className="w-[80px] md:w-[48px] h-auto md:h-11 rounded-full bg-[#201F25]"
            src={
              post?.userId?.profileImage
                ? post?.userId?.profileImage
                : "/images/home/user.svg"
            }
            alt="Image Not Found"
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex justify-between  ">
            <div className="flex flex-col">
              <div className="flex gap-2 ">
                <h3 className="text-[20px] font-bebas-neue">
                  {post?.userId?.name}
                </h3>
                <span className="text-[14px] font-satoshi-medium text-neutral-tertiary">
                  (@{post?.userId?.userName})
                </span>
              </div>
              <p className="text-[12px] font-satoshi-regular text-neutral-tertiary">
                {format(post?.createdAt, "d MMMM")} at{" "}
                {format(post?.createdAt, "hh:mm a")}
              </p>
            </div>
            {post?.userId?._id === user?._id && (
              <div className="relative">
                <button onClick={() => toggleMenu(post?._id)}>
                  <span className="cursor-pointer">
                    <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4C1.46957 4 0.960859 3.78929 0.585786 3.41421C0.210714 3.03914 0 2.53043 0 2C0 1.46957 0.210714 0.96086 0.585786 0.585787C0.960859 0.210714 1.46957 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585787C3.78929 0.96086 4 1.46957 4 2ZM10 2C10 2.53043 9.78929 3.03914 9.41421 3.41421C9.03914 3.78929 8.53043 4 8 4C7.46957 4 6.96086 3.78929 6.58579 3.41421C6.21071 3.03914 6 2.53043 6 2C6 1.46957 6.21071 0.96086 6.58579 0.585787C6.96086 0.210714 7.46957 0 8 0C8.53043 0 9.03914 0.210714 9.41421 0.585787C9.78929 0.96086 10 1.46957 10 2ZM14 4C14.5304 4 15.0391 3.78929 15.4142 3.41421C15.7893 3.03914 16 2.53043 16 2C16 1.46957 15.7893 0.96086 15.4142 0.585787C15.0391 0.210714 14.5304 0 14 0C13.4696 0 12.9609 0.210714 12.5858 0.585787C12.2107 0.96086 12 1.46957 12 2C12 2.53043 12.2107 3.03914 12.5858 3.41421C12.9609 3.78929 13.4696 4 14 4Z"
                        fill="#9D99AD"
                      />
                    </svg>
                  </span>
                </button>
                {openMenu === post._id && (
                  <div className="absolute top-6 right-0 bg-purple-600 px-4 py-2 rounded-md">
                    <button onClick={closeModal}>Edit</button>
                    <button onClick={() => handleDeletePost(post?._id)}>
                      Delete
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="mt-5 flex flex-col items-center md:items-start">
            <h3 className="flex flex-col  max-w-[560px] text-center md:text-start text-[16px] font-satoshi-regular leading-[24px] text-neutral-tertiary">
              <span>{post?.content}</span>
              {/* hashtags */}
            </h3>
          </div>
          {post?.mediaUrl && (
            <>
              {post?.mediaType === "video" ? (
                <video className="h-full max-h-[600px]" controls>
                  <source src={post?.mediaUrl} type="video/mp4" />
                </video>
              ) : (
                <div className="mt-5">
                  <img
                    src={post?.mediaUrl}
                    className="rounded-xl"
                    alt="Not found"
                  />
                </div>
              )}
            </>
          )}
          {post?.sharedPostId && (
            <ViewPost id={post?.sharedPostId} isShared={true} />
          )}
        </div>
      </div>

      {/* like, dislike, share, Recommended */}
      <PostActions
        post={post}
        refetch={refetch}
        index={index}
        setPage={setPage}
      />

      {/* comments */}
      <div className="second-profile border-b-[0.5px] border-[rgba(228,228,228,0.10)] pb-3">
        <div className=" flex md:flex-row  flex-col items-center  gap-4 md:items-center px-4 py-4 w-full">
          <div>
            <img
              className="w-[80px] md:w-[48px] h-auto md:h-11 rounded-full bg-[#201F25]"
              src={
                data?.data?.profileImage
                  ? data?.data?.profileImage
                  : "/images/home/user.svg"
              }
              alt="Image Not Found"
            />
          </div>
          <div className="flex flex-col w-full ">
            <input
              className="bg-[#201F25] cursor-text rounded-[24px] py-3 px-3 outline-none w-full placeholder-neutral-tertiary placeholder-[14px] font-satoshi-medium text-neutral-tertiary"
              type="text"
              placeholder="Write a public comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAddComment(post._id, comment);
                }
              }}
            />
          </div>
        </div>
        {post?.commentsCount > 0 && (
          <div className=" flex md:flex-row  flex-col items-center md:items-start gap-4 px-4  w-full ">
            <SingleComment comment={post?.latestComment} refetch={refetch} />
          </div>
        )}
        {post?.commentsCount > 1 && (
          <div className="flex items-center justify-center md:justify-start px-5 py-3">
            <Link
              href={`/post?id=${post?._id}`}
              className="text-[16px] font-satoshi-medium leading-[24px] hover:text-[#D136F6] transition-all duration-150 ease-in-out"
            >
              View more comments{" "}
            </Link>
          </div>
        )}
      </div>
      <ModalEditPost
        postId={post?._id}
        content={post?.content}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        refetch={refetch}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default SinglePost;
