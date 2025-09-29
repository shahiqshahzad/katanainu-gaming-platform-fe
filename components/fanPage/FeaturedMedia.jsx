import React from "react";
import { getVideos } from "../../utils/api/friendsModule";
import Cookies from "js-cookie";
import { ScrollLoader } from "../common/Icons";
import Image from "next/image";

const FeaturedMedia = () => {
  const userString = Cookies.get("token");
  const user = userString && JSON.parse(userString);
  const { data: videos, isLoading: loadingVideos } = getVideos(user?._id);

  return (
    <div className="mt-12">
      <div className="flex justify-between py-4">
        <h2 className="text-[24px] font-bebas-neue leading-[20px]">
          FEATURED PHOTOS AND VIDEOS
        </h2>
        <p className="text-[14px] font-satoshi-medium cursor-pointer hover:text-[#D136F6] transition-all duration-150 ease-in-out ">
          See all
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Image
          src="/images/profile1.png"
          alt="Profile Image"
          width={200}
          height={200}
          className="h-full w-full object-cover"
        />
        <Image
          src="/images/profile2.png"
          alt="Profile Image"
          width={200}
          height={200}
          className="h-full w-full object-cover"
        />
        <Image
          src="/images/profile3.png"
          alt="Profile Image"
          width={200}
          height={200}
          className="h-full w-full object-cover"
        />
        <Image
          src="/images/profile4.png"
          alt="Profile Image"
          width={200}
          height={200}
          className="h-full w-full object-cover"
        />
      </div>
      {/* <div className="flex  lg:flex-col flex-wrap justify-between">
        {loadingVideos ? (
          <div className="w-full flex justify-center items-center">
            <ScrollLoader />
          </div>
        ) : (
          <>
            {videos?.data?.documents?.length === 0 ? (
              <div className="w-full text-center mt-3 font-satoshi-regular">
                No Videos
              </div>
            ) : (
              <>
                {videos?.data?.documents?.slice(0, 3).map((video) => (
                  <div className="flex gap-x-5 lg:w-full md:w-1/2 w-full  lg:justify-between items-center bg-[#15131D] rounded-[8px] px-3 py-4 mt-6">
                    <div className="w-full h-[250px] flex justify-center">
                      <video className="h-full w-full" controls>
                        <source src={video?.mediaUrl} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                ))}
              </>
            )}
          </>
        )}
      </div> */}
    </div>
  );
};

export default FeaturedMedia;
