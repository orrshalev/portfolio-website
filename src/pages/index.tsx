import { type NextPage } from "next";
import LineGradient from "../components/LineGradient";
import Head from "next/head";
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect, useState } from "react";
import Navbar from "../scenes/Navbar";
import DotGroup from "../scenes/DotGroup";
import Landing from "../scenes/Landing";
import SocialMediaIcons from "../components/SocialMediaIcons";
import MySkills from "../scenes/MySkills";
import Contact from "../scenes/Contact";
import Footer from "../scenes/Footer";

export const AnchorNames = ["Home", "Skills", "Projects", "Contact"] as const;

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
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#5E1C59] to-[#ff6637]">
        <Landing setSelectedPage={setSelectedPage}/>
        <SocialMediaIcons />
        <LineGradient width="w-2/3" />
        <div className={`w-5/6 mx-auto md:h-full`}>
          <MySkills />
        </div>

        <div className={`w-5/6 mx-auto md:h-full`}>
          <Contact />
        </div>
        <div className={`w-full mx-auto md:h-full`}>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
