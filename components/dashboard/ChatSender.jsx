import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/dashboard/index.module.css";
import { useRouter } from "next/router";
import {
  sendGroupMessageMutation,
  sendUserMessageMutation,
} from "../../utils/api/chatModule";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Cookies from "js-cookie";

export const ChatSender = ({ group }) => {
  const router = useRouter();
  const fileInput = useRef(null);
  const emojiPickerRef = useRef(null);
  const userString = Cookies.get("token");
  const user = userString && JSON.parse(userString);
  const [showEmojis, setShowEmojis] = useState(false);
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [cursorPosition, setCursorPosition] = useState(null);
  const sendMessage = sendGroupMessageMutation();
  const sendUserMessage = sendUserMessageMutation();

  const handleSendMessage = () => {
    const receiver = group?.members.find((member) => member?._id !== user?._id);
    const data = new FormData();
    data.append("groupId", group?._id);
    data.append("content", content);
    data.append("file", file);
    {
      group?.type === "1:1" &&
        // data.append("receiverId", group?.members[1]?._id);
        data.append("receiverId", receiver?._id);
    }
    if (group?.type === "group") {
      sendMessage.mutate(data);
    } else {
      sendUserMessage.mutate(data);
    }
    setContent("");
    setFile(null);
  };

  const handleEmojiSelect = (emoji) => {
    const text = `${content.substring(0, cursorPosition)}${
      emoji.native
    }${content.substring(cursorPosition)}`;
    setContent(text);
    setCursorPosition(cursorPosition + emoji.native.length);
  };

  const handleInputChange = (e) => {
    setContent(e.target.value);
    setCursorPosition(e.target.selectionStart);
  };

  const handleInputClick = (e) => {
    setCursorPosition(e.target.selectionStart);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target) &&
        event.target.getAttribute("src") !== "/images/chat/emoji.svg"
      ) {
        setShowEmojis(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${styles.chatsender} absolute w-full bottom-0 h-20 flex items-center px-8`}
    >
      {group && (
        <>
          <div className="flex justify-end">
            <div style={{ position: "relative", overflow: "hidden" }}>
              <button
                type="button"
                className="custom-button text-white flex items-center gap-1"
                onClick={() => setFile(fileInput.current.click())}
              >
                <img
                  src="/images/chat/file.svg"
                  className="mr-2 cursor-pointer"
                  alt=""
                />
              </button>
              <input
                type="file"
                name="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="hidden"
                ref={fileInput}
              />
            </div>
          </div>
          <img
            src="/images/chat/emoji.svg"
            className="mr-2 cursor-pointer"
            alt=""
            onClick={() => setShowEmojis(!showEmojis)}
          />
          {showEmojis && (
            <div className="absolute left-0 bottom-20" ref={emojiPickerRef}>
              <Picker
                data={data}
                onEmojiSelect={handleEmojiSelect}
                theme="dark"
              />
            </div>
          )}
          <input
            type="text"
            value={content}
            onChange={handleInputChange}
            onClick={handleInputClick}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
            placeholder="Send your message"
            className="mx-6 flex-1 h-11 font-satoshi-medium px-5 rounded-lg outline-none"
            autoFocus
          />
          <img
            src="/images/chat/send.svg"
            className="cursor-pointer"
            alt=""
            onClick={handleSendMessage}
          />
          {file && (
            <div className="absolute bg-neutral-bg-02 w-fit p-4 rounded-md bottom-20 flex flex-col items-end">
              <button
                onClick={() => setFile(null)}
                className="w-fit absolute -top-6 right-2"
              >
                X
              </button>
              {file?.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt="No image"
                  className="h-36"
                />
              ) : (
                <video
                  src={URL.createObjectURL(file)}
                  controls
                  className="w-36 h-36"
                />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};
