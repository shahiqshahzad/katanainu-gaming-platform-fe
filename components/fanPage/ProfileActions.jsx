import React from "react";
import {
  acceptFollowRequest,
  rejectFollowRequest,
  sendFollowRequest,
  unFollowRequest,
} from "../../utils/api/friendsModule";
import { useRouter } from "next/router";

const ProfileActions = ({ user }) => {
  const router = useRouter();
  const { id } = router.query;
  const { mutate } = sendFollowRequest();
  const handleFollowRequest = () => {
    mutate(id);
  };
  const { mutate: acceptMutation } = acceptFollowRequest();
  const acceptFollow = () => {
    acceptMutation(id);
  };
  const { mutate: rejectMutation } = rejectFollowRequest();
  const handleRejectFollow = () => {
    rejectMutation(id);
  };
  const { mutate: unfollowMutation } = unFollowRequest();
  const handleUnfollow = () => {
    unfollowMutation(id);
  };

  return (
    <div
      className="flex gap-2 flex-wrap justify-center items-center"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <button className="text-[14px] hover:scale-90 transition duration-300 ease-in-out  w-[116px] h-[40px] font-bold leading-5 text-white font-satoshi-bold rounded-[4px] bg-[rgba(255,255,255,0.08)] backdrop-blur-[4px] ">
        {user?.followingCount} Following
      </button>
      <button className="text-[14px] hover:scale-90 transition duration-300 ease-in-out  w-[116px] h-[40px] font-bold leading-5 text-white font-satoshi-bold rounded-[4px] bg-[rgba(255,255,255,0.08)] backdrop-blur-[4px] ">
        {user?.followersCount} Followers
      </button>
      <button className="text-[14px] hover:scale-90 transition duration-300 ease-in-out  w-[116px] h-[40px] font-bold leading-5 text-white font-satoshi-bold rounded-[4px] bg-[rgba(255,255,255,0.08)] backdrop-blur-[4px] ">
        Message
      </button>
      {user?.isFollowRequestSent ? (
        <div className="flex gap-4">
          <button className="text-[14px] hover:scale-90 transition duration-300 ease-in-out  w-[116px] h-[40px] font-bold leading-5 text-white font-satoshi-bold rounded-[4px] bg-[rgba(255,255,255,0.08)] backdrop-blur-[4px] ">
            Request Sent
          </button>
        </div>
      ) : user?.isFollowRequestReceived ? (
        <div className="flex gap-4">
          <button
            className="text-[14px] hover:scale-90 transition duration-300 ease-in-out  w-[116px] h-[40px] font-bold leading-5 text-white font-satoshi-bold rounded-[4px] bg-[rgba(255,255,255,0.08)] backdrop-blur-[4px] "
            onClick={acceptFollow}
          >
            Accept Request
          </button>
          <button
            className="text-[14px] hover:scale-90 transition duration-300 ease-in-out  w-[116px] h-[40px] font-bold leading-5 text-white font-satoshi-bold rounded-[4px] bg-[rgba(255,255,255,0.08)] backdrop-blur-[4px]"
            onClick={handleRejectFollow}
          >
            Reject
          </button>
        </div>
      ) : (
        <>
          {user?.youFollowThisUser ? (
            <button
              className="text-[14px] hover:scale-90 transition duration-300 ease-in-out  w-[116px] h-[40px] font-bold leading-5 text-white font-satoshi-bold rounded-[4px] bg-[rgba(255,255,255,0.08)] backdrop-blur-[4px]"
              onClick={handleUnfollow}
            >
              Unfollow
            </button>
          ) : (
            <button
              className="text-[14px] hover:scale-90 transition duration-300 ease-in-out  w-[116px] h-[40px] font-bold leading-5 text-white font-satoshi-bold rounded-[4px] bg-[rgba(255,255,255,0.08)] backdrop-blur-[4px] "
              onClick={handleFollowRequest}
            >
              {user?.userFollowsYou ? "Follow Back" : "Follow"}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ProfileActions;
