import Cookies from "js-cookie";
import { io } from "socket.io-client";

const isBrowser = typeof window !== "undefined";

let socket;

if (isBrowser) {
  const userString = Cookies.get("token");
  const user = userString && JSON.parse(userString);

  const authToken = user?.access_token;

  // Initialize the Socket.IO client with the extraHeaders option
  socket = io(`${process.env.NEXT_PUBLIC_API_URL}events`, {
    // socket = io("http://182.176.88.214:2161/api/v1/events", {
    extraHeaders: {
      authorization: `Bearer ${authToken}`,
    },
  });
}

export default socket;
