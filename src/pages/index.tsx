import { type NextPage } from "next";
import LineGradient from "../components/LineGradient";
import Head from "next/head";
import { useEffect, useState } from "react";
import Navbar from "../scenes/Navbar";
import DotGroup from "../scenes/DotGroup";
import Landing from "../scenes/Landing";
import SocialMediaIcons from "../components/SocialMediaIcons";
import MySkills from "../scenes/MySkills";
import Contact from "../scenes/Contact";
import Footer from "../scenes/Footer";

export const AnchorNames = ["home", "skills", "projects", "contact"] as const;

type AnchorName = typeof AnchorNames[number];
// -1 means not in viewport
export type Order = -1 | 0 | 1 | 2 | 3;

// Make type with keys from AnchorNames and values of AnchorPriorities
type AnchorOrder = {
  [key in AnchorName]: Order;
};

export const AnchorPrioritiesMap: AnchorOrder = {
  home: 0,
  skills: 1,
  projects: 2,
  contact: 3,
};

const Home: NextPage = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const [canChange, setCanChange] = useState(true);
  const [isInHome, setIsInHome] = useState<Order>(0);
  const [isInSkills, setIsInSkills] = useState<Order>(0);
  const [isInContact, setIsInCotact] = useState<Order>(0);

  const inViewportHandle =
    <T,>(setState: React.Dispatch<React.SetStateAction<T>>) =>
    (inViewport: T) =>
      setState(inViewport);

  useEffect(() => {
    const HandleScroll = () => {
      window.scrollY === 0 ? setIsTopOfPage(true) : setIsTopOfPage(false);
    };
    window.addEventListener("scroll", HandleScroll);
    return () => window.removeEventListener("scroll", HandleScroll);
  }, []);

  useEffect(() => {
    if (!canChange) return;

    const pages = [isInHome, isInSkills, isInContact].filter(
      (val) => val !== -1
    ) as number[];
    const selectedPage = Math.min(...pages);
    const selectedPageName = Object.keys(AnchorPrioritiesMap).filter((key) => {
      const page = AnchorPrioritiesMap[key as AnchorName];
      return page === selectedPage;
    })[0];
    if (selectedPageName) {
      setSelectedPage(selectedPageName);
    }
  }, [canChange, isInHome, isInSkills, isInContact]);

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
        setCanChange={setCanChange}
      />
      <DotGroup
        setCanChange={setCanChange}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100">
          <Landing
            isInViewport={setIsInHome}
            setSelectedPage={setSelectedPage}
          />
        <SocialMediaIcons />
        <LineGradient width="w-2/3" />
        <div className={`mx-auto w-5/6 md:h-full`}>
          <MySkills isInViewport={setIsInSkills} />
        </div>

        <div className={`mx-auto w-5/6 md:h-full`}>
          <Contact isInViewport={setIsInCotact} />
        </div>
        <div className={`mx-auto w-full md:h-full`}>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
