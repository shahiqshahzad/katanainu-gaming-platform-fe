import React, { useEffect } from "react";
import Cookies from "js-cookie";
import {
  connectWalletAddress,
  getSingleUser,
} from "../../utils/api/userModule";
import {
  useWeb3ModalAccount,
  useWeb3Modal,
  useDisconnect,
} from "@web3modal/ethers5/react";

const ConnectWalletButton = () => {
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const userString = Cookies.get("token");
  const user = userString && JSON.parse(userString);
  const { data, isLoading } = getSingleUser(user?._id);
  const { mutate } = connectWalletAddress();
  const { address, isConnected } = useWeb3ModalAccount();
  useEffect(() => {
    if (isConnected && address) {
      mutate(address);
    }
  }, [isConnected, address]);

  return (
    <button
      className="connect-wallet px-8 py-2 rounded-3xl text-neutral-primary font-satoshi-medium font-medium leading-[156%] text-base "
      onClick={() => open()}
      disabled={data?.data?.walletAddress}
    >
      {data?.data?.walletAddress
        ? `${data?.data?.walletAddress.substring(0, 10)} ...`
        : `Connect Wallet`}
    </button>
  );
};

export default ConnectWalletButton;
