import "../styles/style.css";
import "../styles/globals.css";
import "../styles/globals.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";
import { Web3Modal } from "../utils/web3Modal";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  return (
    <>
      <Head>
        <title>Kainu</title>
        <meta name="description" content="kainu Gaming Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="180x180"
          href="/images/logo.png"
        />
      </Head>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <Web3Modal>
          <Component {...pageProps} />
        </Web3Modal>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
