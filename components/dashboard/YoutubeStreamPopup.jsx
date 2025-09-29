import Modal from "react-modal";
import { MdOutlineClose } from "react-icons/md";
import React, { useEffect, useState } from "react";
import YoutubeStream from "./YoutubeStreamComponent";
import { getChannelId } from "../../utils/helpers/getChannelId";
import { getYoutubeLiveVideoId } from "../../utils/helpers/getYoutubeLiveVideoId";

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

const YoutubeStreamPopup = ({ setStreamerName, setOpenModal, setVideoId }) => {
  const [id, setId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [inputLink, setInputLink] = useState("");
  const apiKey = "AIzaSyAd2vKIWWOvdcqYL5Q5oOgLLS4z1b17O-8";
  const getUsernameFromUrl = (url) => {
    const match = url.match(/@([^/]+)/);
    return match ? match[1] : null;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputLink(inputLink);
    const username = getUsernameFromUrl(inputLink);
    setUserName(username);
  };

  useEffect(() => {
    const fetchChannelData = async () => {
      const id = await getChannelId(userName, apiKey);
      if (id) {
        const liveVideoId = await getYoutubeLiveVideoId(id, apiKey);
        setId(liveVideoId);
      }
    };

    fetchChannelData();
  }, [userName]);
  const handleSharing = () => {
    setStreamerName(userName);
    setIsOpen(false);
    setOpenModal(false);
    setVideoId(id);
  };

  const handleClose = () => {
    setIsOpen(false);
    setUserName("");
    setInputLink("");
  };

  return (
    <>
      <button
        className="px-5 py-3 font-bold text-white font-satoshi-bold rounded primary-gradient w-full mt-5"
        onClick={() => setIsOpen(true)}
      >
        Youtube Stream
      </button>
      <Modal isOpen={isOpen} onRequestClose={handleClose} style={customStyles}>
        <div className="flex justify-end text-white">
          <button onClick={() => setIsOpen(false)}>
            <MdOutlineClose size={25} />
          </button>
        </div>
        {userName ? (
          <div className="flex flex-col justify-center items-center">
            {id ? (
              <YoutubeStream videoId={id} />
            ) : (
              <>
                {userName && (
                  <p className="text-white">
                    No live stream currently available.
                  </p>
                )}
              </>
            )}
            <button
              className="text-neutral-tertiary px-3 py-2 border border-neutral-tertiary rounded mt-5 w-fit"
              onClick={handleSharing}
            >
              Share
            </button>
          </div>
        ) : (
          <form
            className="flex justify-center flex-col"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={inputLink}
              placeholder="Paste your youtube profile link here"
              onChange={(e) => setInputLink(e.target.value)}
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

export default YoutubeStreamPopup;
