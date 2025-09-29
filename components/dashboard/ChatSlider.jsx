/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "../../styles/dashboard/index.module.css";
import { Loader } from "../common/Icons";
import { FaRegFileImage } from "react-icons/fa";
import Cookies from "js-cookie";
import { getFormatedTime } from "../../utils/helpers/getTime";
import { createGroupId, seenAllMessages } from "../../utils/api/chatModule";

export const ChatSlider = ({
  currentHeight,
  setmobiletouch,
  chatGroups,
  isLoading,
  setGroupId,
  groupId,
  setSearchUser,
}) => {
  const [search, setSearch] = useState("");
  const userString = Cookies.get("token");
  const user = userString && JSON.parse(userString);
  const seenMessages = seenAllMessages();
  const createUserGroup = createGroupId();

  const handleSelectId = (e, group) => {
    console.log(group, "group");
    setmobiletouch(true);
    setGroupId(group);
    seenMessages.mutate(group?._id);
  };
  const handeleUnfriendGroupId = (e, group) => {
    createUserGroup.mutate(group?._id);
  };
  const getProfileImage = (members) => {
    const member = members?.find((member) => member?._id !== user?._id);
    return member?.profileImage
      ? member?.profileImage
      : "/images/home/user.svg";
  };
  const getName = (members) => {
    const member = members?.find((member) => member?._id !== user?._id);
    return member?.name;
  };
  const filteredChats = chatGroups?.data?.allGroups?.filter(
    (group) =>
      group?.groupName?.toLowerCase().includes(search.toLowerCase()) ||
      group?.otherUser?.userName?.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className={`flex-1 relative ${styles.chatcontainerusers}`}>
      <div
        className={`${styles.chatsearchbarwrapper}  pt-8 absolute w-full pb-3`}
      >
        <div
          className={`${styles.chatsearchbar}  flex h-10 rounded-full  items-center`}
        >
          <img src="/images/chat/search.svg" alt="" />
          <input
            type="text"
            placeholder="Search by name, chat etc."
            className="font-satoshi-regular h-full bg-transparent border-0 outline-none ml-2"
            onChange={(e) => {
              setSearchUser(e.target.value);
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>
      {isLoading ? (
        <div className="flex justify-center">
          <Loader color="#faf089" />
        </div>
      ) : (
        <>
          {filteredChats?.length === 0 ? (
            <p
              className="pt-24 text-center font-satoshi-medium"
              style={{ height: `${currentHeight}px` }}
            >
              No chat history found.
            </p>
          ) : (
            <ul
              className={`${styles.usersWrapper} pt-24`}
              style={{ height: `${currentHeight}px` }}
            >
              {filteredChats?.map((group, index) => (
                <li
                  key={index}
                  onClick={(e) => handleSelectId(e, group)}
                  className={`${styles.chatrow} ${
                    groupId?._id === group?._id && `${styles.active}`
                  } relative mb-1 w-full flex items-center p-4 bg-[#201F25]`}
                >
                  {group?.otherUser?.isOnline && (
                    <span className="block w-3 h-3 border-2 rounded-full mr-2 bg-green-400 absolute top-11 left-11"></span>
                  )}
                  <img
                    src={
                      group?.type === "group"
                        ? group?.tournamentId?.tournamentImage
                        : group?.type === "1:1"
                        ? getProfileImage(group?.members)
                        : "/images/home/user.svg"
                    }
                    alt="Not found"
                    className="mr-3 h-10 w-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h1 className={`font-satoshi-bold`}>
                        {group?.type === "group"
                          ? group?.groupName
                          : getName(group?.members)}
                      </h1>
                      {group?.lastMessage && (
                        <p className={`font-satoshi-medium`}>
                          {getFormatedTime(group?.lastMessage?.createdAt)}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-1 items-center mt-1">
                      <p className="font-satoshi-medium text-[#838091]">
                        {group?.type === "group" &&
                          group?.lastMessage?.senderId?.userName &&
                          `${group?.lastMessage?.senderId?.userName}:`}
                      </p>
                      {group?.lastMessage?.file ? (
                        <FaRegFileImage size={20} className="text-[#838091]" />
                      ) : (
                        <div className="w-full flex justify-between items-center">
                          <p
                            className={`${styles.messageshort} font-satoshi-medium`}
                          >
                            {group?.lastMessage?.message &&
                              (group.lastMessage.message.length > 20
                                ? `${group.lastMessage.message.substring(
                                    0,
                                    20
                                  )} ...`
                                : group.lastMessage.message)}
                          </p>
                          {group?.unseenMessages > 0 && (
                            <p className="primary-gradient p-1 w-fit min-w-[20px] text-center rounded-full font-satoshi-medium text-xs">
                              {group?.unseenMessages}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}

              {chatGroups?.data?.matchedUsers &&
                chatGroups?.data?.matchedUsers.length > 0 &&
                chatGroups?.data?.matchedUsers?.map((group, index) => (
                  <li
                    key={index}
                    onClick={(e) => handeleUnfriendGroupId(e, group)}
                    className={`${styles.chatrow} ${
                      groupId?._id === group?._id && `${styles.active}`
                    } relative mb-1 w-full flex items-center p-4 bg-[#201F25]`}
                  >
                    {group?.isOnline && (
                      <span className="block w-3 h-3 border-2 rounded-full mr-2 bg-green-400 absolute top-11 left-11"></span>
                    )}
                    <img
                      src={
                        group?.profileImage
                          ? group?.profileImage
                          : "/images/home/user.svg"
                      }
                      alt="Not found"
                      className="mr-3 h-10 w-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h1 className={`font-satoshi-bold`}>{group.name}</h1>
                        {group?.lastMessage && (
                          <p className={`font-satoshi-medium`}>
                            {getFormatedTime(group?.lastMessage?.createdAt)}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};
