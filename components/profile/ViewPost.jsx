import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import {
  getPost,
  useAllComments,
  useaddCommentMutation,
} from "../../utils/api/postModule";
import PostActions from "./PostActions";
import { format } from "date-fns";
import { ScrollLoader } from "../common/Icons";
import SingleComment from "./SingleComment";
import Link from "next/link";

const ViewPost = ({ id, isShared }) => {
  const [comment, setComment] = useState("");
  const userString = Cookies.get("token");
  const user = userString && JSON.parse(userString);
  const { data: post, isLoading, refetch } = getPost(id);
  const { data: sharedPost } = getPost(post?.data?.sharedPostId);

  const {
    data: comments,
    isLoading: loadingComments,
    refetch: refetchComments,
  } = useAllComments(post?.data?._id);

  // addComment
  const addCommentMutation = useaddCommentMutation();
  const handleAddComment = (postId, text) => {
    let data = {
      postId,
      text,
    };
    addCommentMutation.mutateAsync(data);
    refetch();
  };
  useEffect(() => {
    if (addCommentMutation.isSuccess) {
      setComment("");
    }
  }, [addCommentMutation.isSuccess]);

  return (
    <div className="flex justify-center">
      <Link
        href={`/post?id=${id}`}
        className={`${
          isShared ? "w-full cursor-pointer" : "w-full lg:w-2/4 cursor-default"
        } flex md:flex-row  flex-col items-center md:items-start gap-4  px-4 py-4 pt-6 border border-neutral-tertiary rounded my-5`}
      >
        <div>
          <img
            className="w-[80px] md:w-[48px] h-auto md:h-11 rounded-full"
            src={
              post?.data?.userId?.profileImage
                ? post?.data?.userId?.profileImage
                : "/images/profile.png"
            }
            alt="Image Not Found"
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex justify-between  ">
            <div className="flex flex-col">
              <div className="flex gap-2 ">
                <h3 className="text-[20px] font-bebas-neue">
                  {post?.data?.userId?.name}
                </h3>
                <span className="text-[14px] font-satoshi-medium text-neutral-tertiary">
                  (@{post?.data?.userId?.userName})
                </span>
              </div>
              {post?.data?.createdAt && (
                <p className="text-[12px] font-satoshi-regular text-neutral-tertiary">
                  {format(post?.data?.createdAt, "d MMMM")} at{" "}
                  {format(post?.data?.createdAt, "hh:mm a")}
                </p>
              )}
            </div>
          </div>
          <div className="mt-5 flex flex-col items-center md:items-start">
            <h3 className="flex flex-col  max-w-[560px] text-center md:text-start text-[16px] font-satoshi-regular leading-[24px] text-neutral-tertiary">
              <span>{post?.data?.content}</span>
            </h3>
          </div>
          {post?.data?.mediaUrl && (
            <>
              {post?.data?.mediaType === "video" ? (
                <video className="h-full max-h-[600px]" controls>
                  <source src={post?.data?.mediaUrl} type="video/mp4" />
                </video>
              ) : (
                <div className="mt-5">
                  <img
                    src={post?.data?.mediaUrl}
                    className="rounded-xl"
                    alt="Not found"
                  />
                </div>
              )}
            </>
          )}

          {sharedPost && (
            <div className="border border-neutral-tertiary rounded my-3 p-3">
              <p className="font-satoshi-regular text-neutral-tertiary">
                {sharedPost?.data?.content}
              </p>
              {sharedPost?.data?.mediaUrl && (
                <>
                  {sharedPost?.data?.mediaType === "video" ? (
                    <video className="h-full max-h-[600px] w-full" controls>
                      <source
                        src={sharedPost?.data?.mediaUrl}
                        type="video/mp4"
                      />
                    </video>
                  ) : (
                    <div className={`${sharedPost?.data?.content && "mt-5"}`}>
                      <img
                        src={sharedPost?.data?.mediaUrl}
                        className="rounded-xl w-full"
                        alt="Not found"
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {!isShared && (
            <>
              <hr className="mt-3 border border-neutral-tertiary" />
              <PostActions
                post={post?.data}
                viewPost={true}
                refetch={refetch}
              />
              <hr className="border border-neutral-tertiary" />
              <div className=" flex md:flex-row flex-col items-center gap-4 py-4 w-full">
                <div>
                  <img
                    className="w-[80px] md:w-[48px] h-auto md:h-11 rounded-full"
                    src={
                      user?.profileImage
                        ? user?.profileImage
                        : "/images/profile.png"
                    }
                    alt="Image Not Found"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <input
                    className="bg-[#201F25] cursor-pointer rounded-[24px] py-3 px-3 outline-none w-full placeholder-neutral-tertiary placeholder-[14px] font-satoshi-medium text-neutral-tertiary"
                    type="text"
                    placeholder="Write a public comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleAddComment(post?.data?._id, comment);
                      }
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-3 mt-3">
                {loadingComments ? (
                  <div className="flex justify-center items-center">
                    <ScrollLoader />
                  </div>
                ) : comments?.data?.documents?.length === 0 ? (
                  <p className="text-white text-center">No comments</p>
                ) : (
                  <>
                    {comments?.data?.documents.map((comment) => (
                      <SingleComment
                        comment={comment}
                        refetch={refetchComments}
                        fullwidth={true}
                      />
                    ))}
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ViewPost;
