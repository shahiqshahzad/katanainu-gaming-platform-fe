import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getAllUsers } from "../utils/api/userModule";
import InfiniteScroll from "react-infinite-scroll-component";
import { ScrollLoader } from "./common/Icons";
import { FaCircleUser } from "react-icons/fa6";
import {
  acceptFriendRequest,
  cancelFriendRequest,
  sendFriendRequest,
} from "../utils/api/friendsModule";
import { useUsers } from "../store/store";
import styles from "../styles/dashboard/index.module.css";

const AddFriend = () => {
  const [page, setPage] = useState(1);
  const { users, setUsers } = useUsers();
  const [search, setSearch] = useState("");
  const { data, isLoading, refetch } = getAllUsers(page, search);

  const updatePage = () => {
    if (page !== data?.data?.totalPages) setPage((prev) => prev + 1);
  };
  useEffect(() => {
    if (!search) {
      setUsers([]);
      setPage(1);
    }
    refetch();
  }, [search]);
  useEffect(() => {
    if (data) {
      if (search !== "" || page === 1) {
        setUsers(data?.data?.documents);
      } else {
        if (data) {
          if (page === 1) {
            setUsers(data?.data?.documents);
          } else {
            data?.data?.documents.forEach((newUser) => {
              const existingUserIndex = users.findIndex(
                (user) => user?._id === newUser?._id
              );
              if (existingUserIndex !== -1) {
                users[existingUserIndex] = newUser;
              } else {
                users.push(newUser);
              }
            });
            setUsers(users);
          }
        }
      }
    }
  }, [data, refetch]);

  const findPage = (userId) => {
    const index = users.findIndex((user) => user._id === userId);
    const page = Math.ceil((index + 1) / 30);
    setPage(page);
  };
  const sendRequest = sendFriendRequest();
  const handleRequest = (userId) => {
    findPage(userId);
    sendRequest.mutateAsync(userId);
  };

  const acceptRequest = acceptFriendRequest();
  const handleAccept = (userId) => {
    findPage(userId);
    acceptRequest.mutateAsync(userId);
  };

  const cancelRequest = cancelFriendRequest();
  const handleCancelRequest = (userId) => {
    findPage(userId);
    cancelRequest.mutateAsync(userId);
  };

  return (
    <div>
      <div className="flex justify-between items-center gap-3 my-3 md:my-5 mx-3 md:mx-8">
        <p className="text-md lg:text-xl text-white whitespace-nowrap">
          Add Friends
        </p>
        <input
          type="search"
          placeholder="Search Friend"
          className="rounded-full w-full md:w-96 outline-none py-2 px-4 bg-neutral-bg-02 text-white"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {isLoading ? (
        <div className="flex justify-center">
          <ScrollLoader />
        </div>
      ) : (
        <InfiniteScroll
          dataLength={users?.length ? users?.length : 0}
          next={updatePage}
          hasMore={
            data?.data?.currentPage === data?.data?.totalPages ? false : true
          }
          loader={
            isLoading && (
              <div className="flex justify-center items-center">
                <ScrollLoader />
              </div>
            )
          }
          endMessage={
            users?.length > 0 && (
              <p className="text-center my-3 mt-5">No more users to show.</p>
            )
          }
        >
          {users?.length === 0 ? (
            <p className="text-center my-3">No users found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-5">
              {users?.map((user, index) => (
                <div key={index}>
                  <div
                    className={`${styles.BestStreamersCard} relative rounded-lg mt-10 py-2`}
                  >
                    <Link
                      href={`/profile/profile?id=${user?._id}`}
                      className="w-auto md:w-full"
                    >
                      {user?.profileImage ? (
                        <img
                          src={user?.profileImage}
                          className="rounded-full w-24 h-24 absolute border  -top-10 left-1/2 transform -translate-x-1/2 "
                          alt="user-profile-sample"
                        />
                      ) : (
                        <img
                          src="/images/home/best-streamers.svg"
                          className="rounded-full w-24 h-24 absolute -top-10 left-1/2 transform -translate-x-1/2"
                          alt="user-profile"
                        />
                      )}
                    </Link>
                    <div
                      className={`${styles.presentationstream} flex flex-col items-center  px-4 py-4 mt-3`}
                    >
                      <h1 className={`font-bebas-neue mt-5`}> {user?.name}</h1>
                    </div>
                    {user?.isFriendRequestReceived ? (
                      <div className="flex justify-between items-center gap-2 mx-2">
                        <button
                          className="primary-gradient p-2 rounded-lg w-full hover:primary-gradient-hover"
                          onClick={() => handleAccept(user._id)}
                        >
                          Accept
                        </button>
                        <button
                          className="bg-neutral-bg-02 p-2 rounded-lg w-full"
                          onClick={() => handleCancelRequest(user?._id)}
                        >
                          Cancel
                        </button>
                      </div>
                    ) : user?.userAlreadyAFriend ? (
                      <div className="mx-3">
                        <button
                          className="primary-gradient hover:primary-gradient-hover p-2 rounded-lg w-full"
                          disabled
                        >
                          Friends
                        </button>
                      </div>
                    ) : (
                      <div className="mx-3">
                        <button
                          className={`${
                            user?.isFriendRequestSent
                              ? "bg-neutral-bg-02"
                              : "primary-gradient hover:primary-gradient-hover"
                          } p-2 rounded-lg w-full `}
                          onClick={() => handleRequest(user?._id)}
                          disabled={user?.isFriendRequestSent}
                        >
                          {user?.isFriendRequestSent
                            ? "Request Sent"
                            : "Add Friend"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default AddFriend;
