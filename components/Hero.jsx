import { useRouter } from "next/router";
import React from "react";
import {
  acceptFollowRequest,
  rejectFollowRequest,
  sendFollowRequest,
  unFollowRequest,
} from "../utils/api/friendsModule";
import { getSingleUser } from "../utils/api/userModule";

const Hero = ({ userId }) => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = getSingleUser(id);
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
    <div>
      <div className="maw-w-[940px] 2xl:min-h-[448px] w-full bg-[url('/images/profile-hero-cover.png')]  bg-cover bg-no-repat sm:bg-center  bg-[right] flex flex-col justify-between ">
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="pt-10 pl-4 pr-2 sm:pr-0 sm:pl-8 max-w-[397px] w-full flex flex-col gap-6"
        >
          <h2 className="text-[24px] sm:text-[48px] leading-[100%] font-bold font-bebas-neue text-white tracking-[0.5px]">
            The Witcher (2023)
          </h2>
          <p className="text-[14px] leading-5  font-normal font-satoshi-regular text-neutral-secondary">
            The Witcher is a series of fantasy action role-playing games
            developed by CD Project Red and published by CD Project.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="bg-[rgba(14,12,21,0.16)] mt-[74px] flex md:flex-row flex-col items-center justify-between  backdrop-blur-[2px] p-3 sm:p-6 gap-4 md:gap-0"
        >
          <div className="flex items-center flex-wrap gap-2 md:gap-4">
            <button
              className="text-[14px] hover:scale-90 transition duration-300 ease-in-out  w-[116px] h-[40px] font-bold leading-5 text-white font-satoshi-bold rounded-[4px] bg-[linear-gradient(90deg,#D136F6_0%,#6C5DD3_100%)] backdrop-blur-[8px]"
              onClick={() => router.push("/AddFriends")}
            >
              Add Friends
            </button>
            {data?.data?.isFollowRequestSent ? (
              <div className="flex gap-4">
                <button className="text-[14px] hover:scale-90 transition duration-300 ease-in-out  w-[116px] h-[40px] font-bold leading-5 text-white font-satoshi-bold rounded-[4px] bg-[rgba(255,255,255,0.08)] backdrop-blur-[4px] ">
                  Request Sent
                </button>
              </div>
            ) : data?.data?.isFollowRequestReceived ? (
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
                {data?.data?.youFollowThisUser ? (
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
                    {data?.data?.userFollowsYou ? "Follow Back" : "Follow"}
                  </button>
                )}
              </>
            )}
            <button className="bg-[#212028] h-[40px] flex items-center border-[#212028] border rounded-[4px] px-3">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.9395 0C16.2805 0 17.5705 0.53 18.5195 1.481C19.4695 2.43 20.0005 3.71 20.0005 5.05V12.95C20.0005 15.74 17.7305 18 14.9395 18H5.06049C2.26949 18 0.000488281 15.74 0.000488281 12.95V5.05C0.000488281 2.26 2.25949 0 5.06049 0H14.9395ZM16.5305 6.54L16.6105 6.46C16.8495 6.17 16.8495 5.75 16.5995 5.46C16.4605 5.311 16.2695 5.22 16.0705 5.2C15.8605 5.189 15.6605 5.26 15.5095 5.4L11.0005 9C10.4205 9.481 9.58949 9.481 9.00049 9L4.50049 5.4C4.18949 5.17 3.75949 5.2 3.50049 5.47C3.23049 5.74 3.20049 6.17 3.42949 6.47L3.56049 6.6L8.11049 10.15C8.67049 10.59 9.34949 10.83 10.0605 10.83C10.7695 10.83 11.4605 10.59 12.0195 10.15L16.5305 6.54Z"
                  fill="white"
                />
              </svg>
            </button>

            <button className="bg-[#212028] h-[40px] flex items-center border-[#212028] border rounded-[4px] px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.2635 19.7143L20.1182 19.569C19.9247 19.3781 19.6137 19.3781 19.4202 19.569L19.247 19.7422L17.2811 17.7706C17.4343 17.615 17.5201 17.4054 17.5201 17.187C17.5201 16.9686 17.4343 16.759 17.2811 16.6034L17.0576 16.3633C16.905 16.2128 16.6995 16.1284 16.4852 16.1284C16.2709 16.1284 16.0654 16.2128 15.9128 16.3633L15.8403 16.4359L13.8128 14.0398L18.0966 10.013C19.1632 8.90724 21.1348 3.51772 20.0457 2.40039L12.0032 11.8948L3.96071 2.40039C2.87162 3.51734 4.84318 8.90714 5.92662 9.99623L10.2104 14.0231L8.18292 16.4189L8.09353 16.3632C7.94244 16.2209 7.74272 16.1418 7.53515 16.1418C7.32758 16.1418 7.12787 16.2209 6.97658 16.3632L6.73087 16.6033C6.57771 16.7589 6.49188 16.9685 6.49188 17.1869C6.49188 17.4053 6.57771 17.6149 6.73087 17.7705L4.7425 19.7477L4.56934 19.5745C4.3758 19.3836 4.06482 19.3836 3.87127 19.5745L3.74281 19.7142C3.55188 19.9077 3.55188 20.2187 3.74281 20.4123L5.6865 22.356C5.77869 22.4491 5.90436 22.5014 6.03544 22.5014C6.16672 22.5014 6.29238 22.4491 6.38457 22.356L6.52987 22.2107C6.623 22.1185 6.67536 21.9926 6.67536 21.8615C6.67536 21.7304 6.623 21.6048 6.52987 21.5126L6.36232 21.3394L8.32823 19.3735C8.48138 19.5291 8.69064 19.6166 8.90906 19.6166C9.12749 19.6166 9.33654 19.5291 9.48989 19.3735L9.76908 19.1557C9.92504 19.0014 10.0127 18.7912 10.0127 18.5721C10.0127 18.3527 9.92504 18.1427 9.76908 17.9884L9.6853 17.9047L12.0032 15.7153L14.332 17.9103L14.2483 17.9941C14.0927 18.1465 14.004 18.3546 14.002 18.5725C13.9999 18.7905 14.0845 19.0003 14.2372 19.1558L14.4773 19.3959C14.6305 19.5514 14.8397 19.639 15.0582 19.639C15.2766 19.639 15.4858 19.5514 15.639 19.3959L17.6049 21.3618L17.4374 21.5349C17.3442 21.6273 17.2919 21.753 17.2919 21.8841C17.2919 22.0152 17.3442 22.1408 17.4374 22.2332L17.5827 22.3785V22.3783C17.6748 22.4714 17.8005 22.5238 17.9316 22.5238C18.0629 22.5238 18.1885 22.4714 18.2807 22.3783L20.2244 20.4346C20.3284 20.3463 20.3914 20.2192 20.3989 20.0829C20.4062 19.9465 20.3572 19.8134 20.2635 19.7143L20.2635 19.7143Z"
                  fill="white"
                />
              </svg>
            </button>

            <button className="bg-[#212028] h-[40px] flex items-center border-[#212028] border rounded-[4px] px-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.00903 6.5C6.00903 4.294 7.80303 2.5 10.009 2.5C12.215 2.5 14.009 4.294 14.009 6.5C14.009 8.706 12.215 10.5 10.009 10.5C7.80303 10.5 6.00903 8.706 6.00903 6.5ZM11.75 18C11.75 16.08 12.61 14.38 13.97 13.23C14.02 13.18 14.0601 13.1 14.0601 13.02C14.0601 12.817 13.808 12.733 13.76 12.72C13.24 12.58 12.65 12.5 12 12.5H8C3.94 12.5 2.5 15.47 2.5 18.02C2.5 20.3 3.71 21.5 6 21.5H12.29C12.46 21.5 12.593 21.371 12.599 21.202C12.602 21.122 12.5699 21.071 12.5699 21.071C12.0499 20.16 11.75 19.11 11.75 18ZM22.75 18C22.75 20.619 20.619 22.75 18 22.75C15.381 22.75 13.25 20.619 13.25 18C13.25 15.381 15.381 13.25 18 13.25C20.619 13.25 22.75 15.381 22.75 18ZM15.2419 19.698L19.698 15.2419C19.202 14.9359 18.624 14.75 18 14.75C16.208 14.75 14.75 16.208 14.75 18C14.75 18.624 14.9349 19.202 15.2419 19.698ZM21.25 18C21.25 17.376 21.0651 16.798 20.7581 16.302L16.302 20.7581C16.798 21.0641 17.376 21.25 18 21.25C19.792 21.25 21.25 19.792 21.25 18Z"
                  fill="white"
                />
              </svg>
            </button>
            <button className="bg-[#212028] h-[40px] flex items-center border-[#212028] border rounded-[4px] px-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.92154 2.57125C11.2077 1.80958 12.7923 1.80958 14.0785 2.57125L18.9215 5.43932C20.2077 6.20099 21 7.6086 21 9.13192V14.8681C21 16.3914 20.2077 17.799 18.9215 18.5607L14.0785 21.4288C12.7923 22.1904 11.2077 22.1904 9.92154 21.4288L5.07846 18.5607C3.7923 17.799 3 16.3914 3 14.8681V9.13192C3 7.6086 3.7923 6.20099 5.07846 5.43932L9.92154 2.57125ZM11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17ZM11.25 14C11.25 14.4142 11.5858 14.75 12 14.75C12.4142 14.75 12.75 14.4142 12.75 14L12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7L11.25 14Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-4">
            <button className="text-[14px] hover:scale-90 transition duration-300 ease-in-out  w-[141px] h-[40px] font-bold leading-5 text-white font-satoshi-bold rounded-[4px] border-[0.5px] border-white/[0.24] backdrop-blur-[4px]">
              NFT collections
            </button>
            <button className="text-[14px] hover:scale-90 transition duration-300 ease-in-out  w-[162px] h-[40px] font-bold leading-5 text-white font-satoshi-bold rounded-[4px] border-[0.5px] border-white/[0.24] backdrop-blur-[4px]">
              Crypto Collections
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
