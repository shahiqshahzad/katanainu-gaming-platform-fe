import React, { useRef, useEffect, useState } from "react";
import styles from "../../styles/dashboard/index.module.css";
import { ChatSlider } from "./ChatSlider";
import { ChatHeader } from "./ChatHeader";
import { ChatSender } from "./ChatSender";
import { ChatMessages } from "./ChatMessages";
import { userAllGroups } from "../../utils/api/chatModule";
import { useQueryClient } from "@tanstack/react-query";
import socket from "../../utils/socket";

export const ChatPage = () => {
  const queryClient = useQueryClient();
  const ref = useRef(null);
  const [currentHeight, setcurrentHeight] = useState(false);
  const [mobiletouch, setmobiletouch] = useState(false);
  const [searchUser, setSearchUser] = useState("");
  const { data: chatGroups, isLoading } = userAllGroups(searchUser);
  const [groupId, setGroupId] = useState(null);
  const handleResize = (e) => {
    let windowheight = window.innerHeight - 80;
    if (ref.current) {
      ref.current.style.height = `${windowheight}px`;
    }
    setcurrentHeight(windowheight);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    chatGroups?.data?.allGroups?.forEach((groups) => {
      if (socket && socket.connected) {
        socket.on(`newGroupMessage-${groups?._id}`, (message) => {
          queryClient.invalidateQueries({ queryKey: ["userAllGroups"] });
          queryClient.invalidateQueries({ queryKey: ["chatMessages"] });
          queryClient.invalidateQueries({ queryKey: ["messageNotifications"] });
        });

        return () => {
          socket.off(`newGroupMessage-${groups?._id}`);
        };
      }
    });
  }, [socket, groupId, chatGroups]);

  return (
    <div
      className={`flex-1 flex items-start overflow-x-hidden ${styles.chatpage}`}
      ref={ref}
    >
      <div className={`${styles.chatsliderwrapper} px-4`}>
        <ChatSlider
          currentHeight={currentHeight}
          setmobiletouch={setmobiletouch}
          chatGroups={chatGroups}
          isLoading={isLoading}
          setGroupId={setGroupId}
          groupId={groupId}
          setSearchUser={setSearchUser}
        />
      </div>
      <div
        className={`flex-1 relative ${styles.chatcontentarea} ${
          mobiletouch && styles.activemobile
        }`}
      >
        <ChatHeader group={groupId} />
        <ChatMessages currentHeight={currentHeight} groupId={groupId} />
        <ChatSender group={groupId} />
      </div>
    </div>
  );
};
