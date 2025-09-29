import axioss from "axios";
import Cookies from "js-cookie";
import API_END_POINTS from "./api_endpoints";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
// export const API_URL = "http://182.176.88.214:2161/api/v1/";

const axios = axioss.create({
  baseURL: API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

axios.interceptors.request.use(async function (config) {
  const userString = Cookies.get("token");
  const user = userString && JSON.parse(userString);
  if (user && user.access_token) {
    config.headers.Authorization = `Bearer ${user.access_token}`;
  }
  return config;
});

axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    // Handle 401 Unauthorized errors
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      // originalRequest._retry = true;
      const userString = Cookies.get("token");
      const user = userString && JSON.parse(userString);
      if (user && user.refresh_token) {
        try {
          const response = await axioss.get(
            `${API_URL}${API_END_POINTS.REFRESH_TOKEN}`,
            {
              headers: {
                Authorization: `Bearer ${user.refresh_token}`,
              },
            }
          );

          // Save new tokens to cookies
          const newUser = response.data;
          Cookies.set("token", JSON.stringify(newUser?.data));
          // Update the authorization header
          originalRequest.headers.Authorization = `Bearer ${newUser?.data?.access_token}`;

          // Retry the original request with the new token
          return axios(originalRequest);
        } catch (refreshError) {
          console.log("Refresh token request failed");
          Cookies.remove("token");
          window.location = "/";
          return Promise.reject(refreshError);
        }
      } else {
        Cookies.remove("token");
        window.location = "/";
      }
    }

    return Promise.reject(error);
  }
);

export default axios;
