import axios from "axios";

const clientId = "rlmlsqfqvdpkt9xob6cvqtmwlz5aaa";
const clientSecret = "1vg451xqruvxz4qfp3o55c236e5sq6";

const getTwitchAccessToken = async () => {
  try {
    const response = await axios.post(
      "https://id.twitch.tv/oauth2/token",
      null,
      {
        params: {
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: "client_credentials",
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching access token", error);
  }
};

export default getTwitchAccessToken;
