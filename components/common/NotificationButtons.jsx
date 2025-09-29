/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Notification } from "./Icons";
import NotificationDrawer from "./NotificationDrawer";
import axios from "../../utils/api/interceptor";
import API_END_POINTS from "../../utils/api/api_endpoints";
import { useQuery } from "@tanstack/react-query";
import socket from "../../utils/socket";
import Cookies from "js-cookie";

const NotificationButtons = () => {
  const userString = Cookies.get("token");
  const user = userString && JSON.parse(userString);
  const [isOpen, setIsOpen] = useState(false);
  const { data, refetch } = useQuery({
    queryKey: ["notifications"],
    queryFn: () => axios.get(`${API_END_POINTS.NOTIFICATIONS}`),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (socket && socket.connected) {
      socket.on(`newNotification-${user?._id}`, (notification) => {
        refetch();
      });

      return () => {
        socket.off(`newNotification-${user?._id}`);
      };
    }
  }, [socket]);

  // return <Notification />;
  return (
    <>
      <button className="mr-4 w-12" onClick={() => setIsOpen(true)}>
        <Notification length={data?.data?.data?.unReadNotificationCount} />
      </button>
      {isOpen && (
        <NotificationDrawer isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
      )}
    </>
  );
};

export default NotificationButtons;
