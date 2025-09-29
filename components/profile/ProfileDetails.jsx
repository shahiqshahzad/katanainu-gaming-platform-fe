/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import API_END_POINTS from "../../utils/api/api_endpoints";
import SinglePost from "./SinglePost";
import { ScrollLoader } from "../common/Icons";
import axios from "../../utils/api/interceptor";
import { useRouter } from "next/router";
import { usePostsStore } from "../../store/store";

const ProfileDetails = () => {
  const [page, setPage] = useState(1);
  const { posts, setPosts } = usePostsStore();
  const router = useRouter();
  const { id } = router.query;

  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["userPosts", id, page],
    queryFn: () =>
      axios.get(`${API_END_POINTS.GET_ALL_POSTS}/${id}?pageNumber=${page}`),
    enabled: !!id,
    refetchOnWindowFocus: false,
  });
  const updatePage = () => {
    if (
      data?.data?.data?.totalPages !== 0 &&
      page !== data?.data?.data?.totalPages
    )
      setPage((prev) => prev + 1);
  };
  useEffect(() => {
    setPage(1);
  }, [id]);
  useEffect(() => {
    if (page === 1) {
      setPosts(data?.data?.data?.documents);
    }
  }, [data, page]);
  useEffect(() => {
    if (data) {
      if (page === 1) {
        setPosts(data?.data?.data?.documents);
      } else {
        data?.data?.data?.documents.forEach((newPost) => {
          const existingUserIndex = posts.findIndex(
            (post) => post?._id === newPost?._id
          );
          if (existingUserIndex !== -1) {
            posts[existingUserIndex] = newPost;
          } else {
            posts.push(newPost);
          }
        });
        setPosts(posts);
      }
    }
  }, [data, setPosts]);

  return (
    <div className="mt-9 w-full border border-[#24222A]">
      {isLoading ? (
        <div className="flex justify-center">
          <ScrollLoader />
        </div>
      ) : (
        <InfiniteScroll
          dataLength={posts?.length ? posts?.length : 0}
          next={updatePage}
          hasMore={
            data?.data?.data.currentPage === data?.data?.data.totalPages
              ? false
              : true
          }
          loader={
            isLoading && (
              <div className="flex justify-center items-center">
                <ScrollLoader />
              </div>
            )
          }
          endMessage={
            posts?.length > 0 && (
              <p className="text-center">No more posts to show.</p>
            )
          }
        >
          {posts?.length === 0 ? (
            <p className="text-center">No posts available</p>
          ) : (
            posts?.map((post, index) => {
              return (
                <SinglePost
                  post={post}
                  refetch={refetch}
                  index={index + 1}
                  setPage={setPage}
                />
              );
            })
          )}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default ProfileDetails;
