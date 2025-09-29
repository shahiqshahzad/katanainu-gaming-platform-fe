import React, { useState } from "react";
import { Massages } from "./Icons";
import axios from "../../utils/api/interceptor";
import API_END_POINTS from "../../utils/api/api_endpoints";
import { useQuery } from "@tanstack/react-query";
import NotificationDrawer from "./NotificationDrawer";

const MessageButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useQuery({
    queryKey: ["messageNotifications"],
    queryFn: () => axios.get(`${API_END_POINTS.ALL_MESSAGES_NOTIFICATION}`),
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <button className="mr-4 w-12" onClick={() => setIsOpen(true)}>
        <Massages length={data?.data?.data?.unReadNotificationCount} />
      </button>
      {isOpen && (
        <NotificationDrawer isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
      )}
    </>
  );
};

export default MessageButton;
