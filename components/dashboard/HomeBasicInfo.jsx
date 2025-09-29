import Link from "next/link";
import Modal from "react-modal";
import UserStream from "./UserStreams";
import React, { useEffect, useState } from "react";
import StreamPopup from "./StreamPopup";
import Cookies from "js-cookie";
import { HomeNewSlider } from "./HomeNewSlider";
import { MdOutlineClose } from "react-icons/md";
import YoutubeStream from "./YoutubeStreamComponent";
import YoutubeStreamPopup from "./YoutubeStreamPopup";
import styles from "../../styles/dashboard/index.module.css";
import { getSingleUser } from "../../utils/api/userModule";
import { getYoutubeLiveVideoId } from "../../utils/helpers/getYoutubeLiveVideoId";
import { getChannelId } from "../../utils/helpers/getChannelId";
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

export const HomeBasicInfo = () => {
  const [active, setActive] = useState(1);
  const [videoId, setVideoId] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [streamerName, setStreamerName] = useState("");

  const userString = Cookies.get("token");
  const user = userString && JSON.parse(userString);

  const { data: userDetail } = getSingleUser(user?._id);

  const getUsernameFromUrl = (url) => {
    const match = url.match(/@([^/]+)/);
    return match ? match[1] : null;
  };
  const username = getUsernameFromUrl(
    userDetail?.data?.youtubeStreamLink ?? ""
  );

  const apiKey = "AIzaSyAd2vKIWWOvdcqYL5Q5oOgLLS4z1b17O-8";

  useEffect(() => {
    const fetchChannelData = async () => {
      const id = await getChannelId(username, apiKey);
      if (id) {
        const liveVideoId = await getYoutubeLiveVideoId(id, apiKey);
        setVideoId(liveVideoId);
      }
    };

    fetchChannelData();
  }, [username, videoId]);

  useEffect(() => {
    const extractUsername = (url) => {
      const urlParts = url?.split("/");
      const extractedUsername = urlParts[urlParts.length - 1];
      setStreamerName(extractedUsername);
    };
    extractUsername(userDetail?.data?.twitchStreamLink ?? "");
  }, [streamerName, userDetail]);

  return (
    <div
      className={`${styles.HomeBasicInfowrapper} HomeBasicInfowrapper mt-20`}
    >
      <div className={`${styles.HomeBasicInfo}  flex items-center space-x-4`}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1624395213232-ea2bcd36b865?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FkJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <button
          className={`px-5 py-3 rounded font-satoshi-medium`}
          onClick={() => setOpenModal(true)}
        >
          Stream
        </button>
        <Modal
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
          style={customStyles}
        >
          <div className="flex justify-end text-white">
            <button onClick={() => setOpenModal(false)}>
              <MdOutlineClose size={25} />
            </button>
          </div>{" "}
          <StreamPopup
            setStreamerName={setStreamerName}
            setOpenModal={setOpenModal}
          />
          <YoutubeStreamPopup
            setStreamerName={setStreamerName}
            setOpenModal={setOpenModal}
            setVideoId={setVideoId}
          />
        </Modal>

        <button className={`px-5 py-3 rounded`}>To Donate</button>
        <div className={`flex items-center ml-4`}>
          <img src="/images/home/search-term.svg" alt="" />
          <p className={`mx-2 font-satoshi-medium`}>Search: Team</p>
          <img src="/images/home/pen.svg" alt="" />
        </div>
      </div>
      <ul className={`flex items-center mt-5`}>
        <li
          className={`py-2 mr-6 font-satoshi-medium cursor-pointer ${
            active == 1 && styles.active
          }`}
          onClick={(e) => {
            setActive(1);
          }}
        >
          Basic Information
        </li>
        <li
          className={`py-2 mr-6 font-satoshi-medium cursor-pointer ${
            active == 2 && styles.active
          }`}
          onClick={(e) => {
            setActive(2);
          }}
        >
          Statistics
        </li>
        <li
          className={`py-2 mr-6 font-satoshi-medium cursor-pointer ${
            active == 3 && styles.active
          }`}
          onClick={(e) => {
            setActive(3);
          }}
        >
          <Link href={"/profile/team"}>Team</Link>
        </li>
        <li
          className={`py-2 mr-6 font-satoshi-medium cursor-pointer ${
            active == 4 && styles.active
          }`}
          onClick={(e) => {
            setActive(4);
          }}
        >
          Achievement
        </li>
        <li
          className={`py-2 font-satoshi-medium cursor-pointer ${
            active == 5 && styles.active
          }`}
          onClick={(e) => {
            setActive(5);
          }}
        >
          Friends
        </li>
      </ul>
      <div className="mt-5"></div>
      {streamerName && <UserStream userName={streamerName} />}
      {videoId && <YoutubeStream videoId={videoId} />}
      <HomeNewSlider />
    </div>
  );
};
