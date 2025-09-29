import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { readNotification } from "../../utils/api/postModule";
import {
  acceptRequestToJoinTeam,
  acceptTeamInvitation,
} from "../../utils/api/tournamentModule";

const NotificationDrawer = ({ isOpen, setIsOpen, data }) => {
  const notificationMutation = readNotification();
  const handleReadNotification = (notificationId) => {
    setIsOpen(false);
    notificationMutation.mutateAsync(notificationId);
  };

  const acceptTeamInvite = acceptTeamInvitation();
  const handleAcceptInvitation = (teamId, notificationId) => {
    acceptTeamInvite.mutate(teamId);
    notificationMutation.mutateAsync(notificationId);
    setIsOpen(false);
  };

  const acceptRequest = acceptRequestToJoinTeam();
  const handelAcceptRequest = (teamId, userId, notificationId) => {
    const data = {
      teamId,
      userId,
    };
    notificationMutation.mutate(notificationId);
    acceptRequest.mutate(data);
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`flex flex-col items-center gap-5 bg-neutral-bg-02 text-neutral-primary h-screen rounded-l-2xl shadow-xl min-w-[350px] py-5 fixed top-0 right-0 font-[Mulish] font-bold z-10 px-3 overflow-y-scroll overflow-x-hidden`}
      >
        <div className="flex w-full justify-end mr-8">
          <button onClick={() => setIsOpen(false)}>
            <RxCross1 />
          </button>
        </div>
        <div className="flex flex-col justify-start gap-3">
          {data?.data?.data?.documents?.map((notification) => (
            <div
              className={`flex justify-start ${
                notification?.isRead ? "bg-transparent" : "bg-[#140e1d]"
              } rounded-2xl items-center px-3 gap-3 hover:bg-[#140e1d] w-full max-w-sm lg:max-w-md`}
            >
              <Link
                href={`/profile/profile?id=${notification?.fromUserId?._id}`}
                onClick={() => setIsOpen(false)}
              >
                {notification?.fromUserId?.profileImage ? (
                  <img
                    src={notification?.fromUserId?.profileImage}
                    className="h-14 w-16 rounded-full"
                  />
                ) : (
                  <div className="bg-gray-500 rounded-full">
                    <img
                      src="/images/home/user.svg"
                      className="h-13 w-16 rounded-full"
                      alt="Profile"
                    />
                  </div>
                )}
              </Link>
              <div className="w-full py-3">
                <Link
                  href={`${
                    notification?.type === "comment" ||
                    notification?.type === "post"
                      ? `/post?id=${notification?.postId}`
                      : notification?.type === "team"
                      ? `/profile/team?id=${notification?.toUserId}`
                      : notification?.type === "tournament"
                      ? `/TournamentOverview?id=${notification?.tournamentId}`
                      : notification?.type === "message"
                      ? "chat"
                      : `/profile/profile?id=${notification?.fromUserId?._id}`
                  }`}
                  onClick={() => handleReadNotification(notification?._id)}
                >
                  <p>{notification?.notificationMessage}</p>
                  <p className="text-[12px] font-satoshi-regular text-neutral-tertiary">
                    {format(notification?.createdAt, "d MMMM")} at{" "}
                    {format(notification?.createdAt, "hh:mm a")}
                  </p>
                </Link>
                {notification?.type === "invite" && (
                  <div className="flex start gap-2 w-full mt-2">
                    <button
                      className="bg-[linear-gradient(90deg,#D136F6_0%,#6C5DD3_100%)] p-2 rounded-lg"
                      onClick={() =>
                        handleAcceptInvitation(
                          notification?.teamId,
                          notification?._id
                        )
                      }
                    >
                      Accept Invitation
                    </button>
                  </div>
                )}
                {notification?.type === "request" &&
                  !notification?.notificationMessage?.startsWith(
                    "your request has been accepted to join"
                  ) && (
                    <div className="flex start gap-2 w-full mt-2">
                      <button
                        className="bg-[linear-gradient(90deg,#D136F6_0%,#6C5DD3_100%)] p-2 rounded-lg"
                        onClick={() =>
                          handelAcceptRequest(
                            notification?.teamId,
                            notification?.fromUserId?._id,
                            notification?._id
                          )
                        }
                      >
                        Accept Request
                      </button>
                    </div>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="block lg:hidden w-screen h-screen fixed inset-0 bg-black bg-opacity-40"></div>
    </>
  );
};

export default NotificationDrawer;
