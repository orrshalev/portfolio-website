import { type NextPage } from "next";
import LineGradient from "../components/LineGradient";
import Head from "next/head";
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect, useState, useRef } from "react";
import Navbar from "../scenes/Navbar";
import DotGroup from "../scenes/DotGroup";
import Landing from "../scenes/Landing";
import SocialMediaIcons from "../components/SocialMediaIcons";
import MySkills from "../scenes/MySkills";
import Contact from "../scenes/Contact";
import Footer from "../scenes/Footer";
import useIsInViewport from "../hooks/useIsInViewport";

export const AnchorNames = ["Home", "Skills", "Projects", "Contact"] as const;

const Home: NextPage = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [isInContact, setIsInCotact] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const inViewportHandle =
    (setState: React.Dispatch<React.SetStateAction<boolean>>) =>
    (inViewport: boolean) =>
      setState(inViewport);

  useEffect(() => {
    const HandleScroll = () => {
      window.scrollY === 0 ? setIsTopOfPage(true) : setIsTopOfPage(false);
    };
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
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#5E1C59] to-[#ff6637]">
        <Landing setSelectedPage={setSelectedPage} />
        <SocialMediaIcons />
        <LineGradient width="w-2/3" />
        <div className={`mx-auto w-5/6 md:h-full`}>
          <MySkills />
        </div>

        <div className={`mx-auto w-5/6 md:h-full`}>
          <Contact isInViewport={inViewportHandle(setIsInCotact)} />
        </div>
        <div className={`mx-auto w-full md:h-full`}>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
