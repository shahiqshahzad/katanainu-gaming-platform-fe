import Modal from "react-modal";
import UserStream from "./UserStreams";
import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const customStyles = {
  content: {
    margin: "auto",
    height: "fit-content",
    width: "fit-content",
    minWidth: "500px",
    backgroundColor: "#201F25",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgb(0, 0, 0, 0.7)",
  },
};

const StreamPopup = ({ setStreamerName, setOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputLink, setInputLink] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputLink(inputLink);
    extractUsername(inputLink);
  };

  const extractUsername = (url) => {
    const urlParts = url.split("/");
    const extractedUsername = urlParts[urlParts.length - 1];
    setUsername(extractedUsername);
  };
  const handleSharing = () => {
    setStreamerName(username);
    setIsOpen(false);
    setOpenModal(false);
  };
  const handleClose = () => {
    setIsOpen(false);
    setUsername("");
    setInputLink("");
  };

  return (
    <>
      <button
        className="px-5 py-3 font-bold text-white font-satoshi-bold rounded primary-gradient w-full mt-5"
        onClick={() => setIsOpen(true)}
      >
        Twicth Stream
      </button>
      <Modal isOpen={isOpen} onRequestClose={handleClose} style={customStyles}>
        <div className="flex justify-end text-white">
          <button onClick={() => setIsOpen(false)}>
            <MdOutlineClose size={25} />
          </button>
        </div>
        {username ? (
          <div className="flex flex-col justify-end">
            <UserStream userName={username} showThumbnail={true} />
            <button
              className="text-neutral-tertiary px-3 py-2 border border-neutral-tertiary rounded mt-5 mx-auto"
              onClick={handleSharing}
            >
              Share
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex justify-center flex-col"
          >
            <input
              type="text"
              value={inputLink}
              onChange={(e) => setInputLink(e.target.value)}
              placeholder="Paste your twitch profile link here"
              className="border border-neutral-tertiary bg-transparent w-[500px] p-3 rounded-lg mt-3 text-neutral-tertiary"
            />
            <button
              type="submit"
              className="px-5 py-3 font-bold text-white font-satoshi-bold rounded border border-neutral-tertiary mx-auto mt-5"
            >
              Enter
            </button>
          </form>
        )}
      </Modal>
    </>
  );
};

export default StreamPopup;
