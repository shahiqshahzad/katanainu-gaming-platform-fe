import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { assignMetaMask, metaMaskSignIn } from "../../utils/api/authModule";
import { useWeb3ModalAccount, useWeb3Modal } from "@web3modal/ethers5/react";
import { Loader } from "../common/Icons";
import Image from "next/image";

const MetamaskWallet = () => {
  const { mutate, data, isSuccess, isPending: pending } = assignMetaMask();
  const { mutate: metaMaskLogin, isPending } = metaMaskSignIn();
  const [signMessage, setSignMessage] = useState("");
  const { open, close } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();

  const handleMetaMask = async () => {
    if (isConnected) {
      await signIn();
    } else {
      open();
    }
  };

  const signIn = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner();
      const signature = await signer.signMessage(signMessage?.signMessage);
      const postData = {
        signMessage,
        signature,
      };
      metaMaskLogin(postData);
    } catch (error) {
      console.error("Error signing message with MetaMask:", error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setSignMessage(data?.data);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isConnected && signMessage) {
      signIn();
    }
  }, [isConnected, signMessage]);

  useEffect(() => {
    if (address) {
      mutate({ walletAddress: address });
    }
  }, [address]);

  return (
    <>
      <button
        onClick={handleMetaMask}
        className="w-14 h-14 shadow-md hover:scale-90 transition duration-300 ease-in-out text-center"
      >
        <Image
          height={60}
          width={60}
          src="./images/metamask.svg"
          alt="metamask-icon"
          className="mb-2"
        />
        <span className="text-sm text-white">MetaMask</span>
      </button>
      {(isPending || pending) && (
        <div className="absolute right-0 top-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center">
          <Loader color="#faf089" />
        </div>
      )}
    </>
  );
};

export default MetamaskWallet;
