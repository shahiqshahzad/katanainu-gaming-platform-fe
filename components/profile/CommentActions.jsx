import React, { useEffect, useState } from "react";
import {
  disLikeOnComment,
  likeOnComment,
  useReplyMutation,
} from "../../utils/api/postModule";

const CommentActions = ({ comment, refetch }) => {
  const [reply, setReply] = useState(false);
  const [replyText, setReplyText] = useState("");

  const likeCommentMutation = likeOnComment();
  const handleLikeComment = (commentId) => {
    likeCommentMutation.mutateAsync(commentId);
  };

  const dislikeCommentMutation = disLikeOnComment();
  const handleDisLikeComment = (commentId) => {
    dislikeCommentMutation.mutateAsync(commentId);
  };

  const addReplyMutation = useReplyMutation();
  const handleAddReply = (commentId, text) => {
    let data = {
      commentId,
      text,
    };
    addReplyMutation.mutateAsync(data);
  };

  useEffect(() => {
    if (
      likeCommentMutation?.isSuccess ||
      dislikeCommentMutation.isSuccess ||
      addReplyMutation.isSuccess
    ) {
      refetch();
      setReplyText("");
    }
  }, [
    likeCommentMutation.isSuccess,
    dislikeCommentMutation.isSuccess,
    addReplyMutation.isSuccess,
  ]);

  return (
    <div>
      <div className="flex items-center gap-5 justify-center md:justify-start py-3">
        <h3 className=" space-x-2">
          <button
            className="font-satoshi-medium text-[14px] leading-[16px] tracking-[0.25px] text-neutral-tertiary"
            onClick={() => handleLikeComment(comment?._id)}
          >
            Like
          </button>
          <span className="font-bebas-neue text-[12px] leading-[16px] tracking-[0.25px]">
            {comment?.likedBy?.length}
          </span>
        </h3>
        <h3 className=" space-x-2">
          <button
            className="font-satoshi-medium text-[14px] leading-[16px] tracking-[0.25px] text-neutral-tertiary"
            onClick={() => handleDisLikeComment(comment?._id)}
          >
            Dislike
          </button>
          <span className="font-bebas-neue text-[12px] leading-[16px] tracking-[0.25px]">
            {comment?.disLikedBy?.length}
          </span>
        </h3>
        <h3 className=" space-x-2">
          <button
            className="font-satoshi-medium text-[14px] leading-[16px] tracking-[0.25px] text-neutral-tertiary"
            onClick={() => setReply(!reply)}
          >
            Reply
          </button>
          <span className="font-bebas-neue text-[12px] leading-[16px] tracking-[0.25px]">
            {comment?.replies?.length}
          </span>
        </h3>
      </div>

      {reply && (
        <>
          {" "}
          <input
            className="bg-[#0e0c15] cursor-pointer rounded-[24px] py-3 px-3 outline-none w-full placeholder-neutral-tertiary placeholder-[14px] font-satoshi-medium text-neutral-tertiary"
            type="text"
            placeholder="Write a reply"
            value={replyText}
            autoFocus
            onChange={(e) => setReplyText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddReply(comment?._id, replyText);
              }
            }}
          />
          <div className="flex flex-col gap-2 mt-5 text-neutral-tertiary">
            {comment?.replies
              .slice()
              .reverse()
              .map((reply) => (
                <div className="w-fit">
                  <div className="flex items-start gap-3">
                    <img
                      src={
                        reply?.userId?.profileImage
                          ? reply?.userId?.profileImage
                          : "/images/home/user.svg"
                      }
                      alt="No image"
                      className="h-12 w-12 rounded-full bg-gray-500"
                    />
                    <div className="p-2 w-full rounded-lg bg-[#171322]">
                      <p className="font-bebas-neue text-white">
                        {reply?.userId?.name}
                      </p>
                      <h1 className="text-[16px] font-satoshi-regular text-neutral-tertiary leading-[24px]">
                        {reply?.text}
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CommentActions;
