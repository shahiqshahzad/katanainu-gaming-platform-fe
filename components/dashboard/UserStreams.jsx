import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollLoader } from "../../components/common/Icons";
import getTwitchAccessToken from "../../utils/helpers/getTwitchAccessToken";

const UserStream = ({ userName, showThumbnail }) => {
  const [stream, setStream] = useState(null);
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [selectedStream, setSelectedStream] = useState(null);

  const clientId = "rlmlsqfqvdpkt9xob6cvqtmwlz5aaa";

  useEffect(() => {
    const fetchAccessToken = async () => {
      const token = await getTwitchAccessToken();
      setAccessToken(token);
    };
    fetchAccessToken();
  }, []);

  useEffect(() => {
    const fetchStream = async () => {
      if (!accessToken) return;
      setLoading(true);

      try {
        // Fetch user ID from user name
        const userResponse = await axios.get(
          `https://api.twitch.tv/helix/users?login=${userName}`,
          {
            headers: {
              "Client-ID": clientId,
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const userId = userResponse.data.data[0]?.id;

        if (!userId) {
          return;
        }

        // Fetch stream for the specified user ID
        const streamResponse = await axios.get(
          `https://api.twitch.tv/helix/streams?user_id=${userId}`,
          {
            headers: {
              "Client-ID": clientId,
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const streamData = streamResponse.data.data[0] || null;
        setStream(streamData);
        if (!showThumbnail && streamData) {
          setSelectedStream(streamData.user_name);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchStream();
  }, [accessToken, userName, showThumbnail]);

  useEffect(() => {
    const loadTwitchEmbedScript = () => {
      const script = document.createElement("script");
      script.src = "https://embed.twitch.tv/embed/v1.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (selectedStream && window.Twitch && window.Twitch.Embed) {
          new window.Twitch.Embed("twitch-embed", {
            width: "100%",
            height: "480",
            channel: selectedStream,
            layout: "video-with-chat",
            theme: "dark",
          });
        }
      };
    };

    if (selectedStream) {
      loadTwitchEmbedScript();
    }

    return () => {
      const embedContainer = document.getElementById("twitch-embed");
      if (embedContainer) {
        embedContainer.innerHTML = "";
      }
    };
  }, [selectedStream]);

  const handleThumbnailClick = (channelName) => {
    const embedContainer = document.getElementById("twitch-embed");
    if (embedContainer) {
      embedContainer.innerHTML = "";
    }
    setSelectedStream(channelName);
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center w-full mt-5">
          <ScrollLoader />
        </div>
      ) : selectedStream ? (
        <div id="twitch-embed" className="mt-5 embed-container"></div>
      ) : (
        showThumbnail &&
        stream && (
          <div
            onClick={() => handleThumbnailClick(stream.user_name)}
            className="relative inline-block cursor-pointer rounded-lg overflow-hidden"
          >
            <img
              src={stream.thumbnail_url
                .replace("{width}", "320")
                .replace("{height}", "180")}
              alt={`${stream.user_name} stream thumbnail`}
              className="w-full"
            />
            <span className="absolute top-[10px] left-[10px] bg-red-600 text-white font-satoshi-light py-1 px-2 rounded-md text-[12px]">
              LIVE
            </span>
          </div>
        )
      )}
    </div>
  );
};

export default UserStream;
