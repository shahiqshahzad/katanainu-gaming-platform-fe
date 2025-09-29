import axios from "axios";

export const getChannelId = async (userName, apiKey) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${userName}&key=${apiKey}`
    );
    const channel = response.data.items[0];
    return channel ? channel.id.channelId : null;
  } catch (error) {
    console.error("Error fetching channel ID:", error);
    return null;
  }
};
