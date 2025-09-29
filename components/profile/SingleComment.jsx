import React, { useEffect, useState } from "react";
import {
  deleteCommentMutation,
  editCommentMutation,
} from "../../utils/api/postModule";

import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";
import { HorizontalMenuIcon } from "../common/Icons";
import CommentActions from "./CommentActions";

const EditText = ({ comment, id, refetch, setIsEdit, setOpenMenu }) => {
  const [text, setText] = useState(comment);
  const editComment = editCommentMutation();
  const handleEditComment = (commentId, text) => {
    let data = {
      commentId,
      text,
    };
    editComment.mutateAsync(data);
  };
  useEffect(() => {
    if (editComment.isSuccess) {
      refetch();
      setText("");
      setIsEdit(null);
    }
  }, [editComment.isSuccess]);
  useEffect(() => {
    setOpenMenu(null);
  }, []);

  return (
    <input
      className="bg-[#0e0c15] cursor-text rounded-[24px] py-3 px-3 outline-none w-full placeholder-neutral-tertiary placeholder-[14px] font-satoshi-medium text-neutral-tertiary"
      type="text"
      placeholder="Write a reply"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleEditComment(id, text);
        }
      }}
    />
  );
};

const SingleComment = ({ comment, refetch, fullwidth }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isEdit, setIsEdit] = useState(null);

  const toggleMenu = (commentId) => {
    setOpenMenu(openMenu === commentId ? null : commentId);
  };

  const deleteComment = deleteCommentMutation();
  const handleDeleteComment = (commentId) => {
    deleteComment.mutate(commentId);
  };
  useEffect(() => {
    if (deleteComment.isSuccess) {
      refetch();
    }
  }, [deleteComment.isSuccess]);

  return (
    <div className={`text-white flex gap-3 ${fullwidth ? "w-full" : "w-96"}`}>
      <img
        src={
          comment?.userId?.profileImage
            ? comment?.userId?.profileImage
            : "/images/home/user.svg"
        }
        alt="No image"
        className="bg-gray-500 h-12 w-12 rounded-full"
      />
      <h3 className="flex justify-between items-start px-4 py-3 bg-[#201F25] rounded-[16px] text-[16px] relative w-full">
        <div className="w-full">
          <div className="space-x-3">
            <span className="font-bebas-neue">{comment?.userId?.name}</span>
            <span className="font-satoshi-medium text-[14px] text-neutral-tertiary">
              {differenceInHours(new Date(), comment?.createdAt) < 1
                ? `${differenceInMinutes(new Date(), comment?.createdAt)}m ago`
                : differenceInHours(new Date(), comment?.createdAt) < 24
                ? `${differenceInHours(new Date(), comment?.createdAt)}h ago`
                : `${differenceInDays(new Date(), comment?.createdAt)}d ago`}
            </span>
          </div>
          {isEdit === comment?._id ? (
            <EditText
              comment={comment?.text}
              id={comment?._id}
              refetch={refetch}
              setIsEdit={setIsEdit}
              setOpenMenu={setOpenMenu}
            />
          ) : (
            <p className="text-[16px] font-satoshi-regular text-neutral-tertiary leading-[24px] pt-3">
              {comment?.text}
            </p>
          )}
          <CommentActions comment={comment} refetch={refetch} />
        </div>
        <button onClick={() => toggleMenu(comment?._id)}>
          <span className="cursor-pointer">
            <HorizontalMenuIcon />
          </span>
        </button>
        {openMenu === comment._id && (
          <div className="flex flex-col absolute top-6 right-3 bg-purple-600 px-2 py-1 rounded-md">
            <button
              className="text-left"
              onClick={() => setIsEdit(comment?._id)}
            >
              Edit
            </button>
            <button
              className="text-left"
              onClick={() => handleDeleteComment(comment?._id)}
            >
              Delete
            </button>
          </div>
        )}
      </h3>
    </div>
  );
};

export default SingleComment;
