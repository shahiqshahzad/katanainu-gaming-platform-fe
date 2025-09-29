import { useEffect, useRef } from "react";

const loadYouTubeIframeAPI = () => {
  return new Promise((resolve) => {
    const existingScript = document.getElementById("youtube-iframe-api");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.id = "youtube-iframe-api";
      script.onload = () => {
        window.onYouTubeIframeAPIReady = resolve;
      };
      document.body.appendChild(script);
    } else {
      resolve();
    }
  });
};

const YoutubeStream = ({ videoId }) => {
  const playerRef = useRef(null);
  const playerInstanceRef = useRef(null);

  useEffect(() => {
    const initializePlayer = async () => {
      await loadYouTubeIframeAPI();
      if (playerRef.current && window.YT) {
        if (playerInstanceRef.current) {
          playerInstanceRef.current.destroy();
        }
        playerInstanceRef.current = new window.YT.Player(playerRef.current, {
          width: "100%",
          height: "480px",
          videoId: videoId,
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          },
        });
      }
    };

    initializePlayer();

    return () => {
      if (playerInstanceRef.current) {
        playerInstanceRef.current.destroy();
        playerInstanceRef.current = null;
      }
    };
  }, [videoId]);

  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  const onPlayerStateChange = (event) => {
    // Handle player state changes if needed
  };

  return <div id="player" ref={playerRef}></div>;
};

export default YoutubeStream;
