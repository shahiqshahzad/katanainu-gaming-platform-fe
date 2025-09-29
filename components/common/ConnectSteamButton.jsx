import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { connectWithSteam, getSingleUser } from "../../utils/api/userModule";

const ConnectSteamButton = () => {
  const router = useRouter();
  const userString = Cookies.get("token");
  const user = userString && JSON.parse(userString);
  const { data: loggedInUser, isLoading } = getSingleUser(user?._id);
  const { mutate } = connectWithSteam();
  const { data } = router.query;
  useEffect(() => {
    if (data) {
      const parsedData = JSON.parse(data);
      mutate(parsedData);
    }
  }, [data]);

  return (
    <Link
      className="connect-wallet px-8 py-2 rounded-3xl text-neutral-primary font-satoshi-medium font-medium leading-[156%] text-base"
      href={`${process.env.NEXT_PUBLIC_API_URL}auth/steamLoggedInUserAuth/`}
    >
      {loggedInUser?.data?.steamId ? `Steam Connected` : "Connect Steam"}
    </Link>
  );
};

export default ConnectSteamButton;
