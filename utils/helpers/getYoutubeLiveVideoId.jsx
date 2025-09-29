import axios from "axios";

export const getYoutubeLiveVideoId = async (channelId, apiKey) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`
    );
    if (response.data.items && response.data.items.length > 0) {
      const liveStream = response.data.items[0];
      return liveStream.id.videoId;
    } else {
      console.log("No live streams found.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching live stream video ID:", error);
    return null;
  }
};
