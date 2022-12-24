import { type NextPage } from "next";
import Head from "next/head";
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import DotGroup from "../components/DotGroup";

export const AnchorNames = ["Home", "Skills", "Contact"] as const;

const Home: NextPage = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const HandleScroll = () => {
      window.scrollY === 0 ? setIsTopOfPage(true) : setIsTopOfPage(false);
    }
    window.addEventListener("scroll", HandleScroll);
    return () => window.removeEventListener("scroll", HandleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Orr Shalev: Software Engineer</title>
        <meta name="description" content="Orr Shalev's portfolio website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#371c5e] to-[#ff6637]">
        <h1 className={`font-opensans font-semibold`}> hello world </h1>
      </main>
    </>
  );
};

export default Home;
