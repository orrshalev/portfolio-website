import { type NextPage } from "next";
import Head from "next/head";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <>
      <Head>
        <title>Orr Shalev: Software Engineer</title>
        <meta name="description" content="Orr Shalev's portfolio website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#371c5e] to-[#fcff37]">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <h1> hello world </h1>
      </main>
    </>
  );
};

export default Home;
