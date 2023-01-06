import React from "react";
import Link from "next/link";
import { useState, } from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

type PageLinkProps = {
  page: string;
  url: string;
  iconName: string;
  marginLeft: string;
  isTopOfPage: boolean;
  isExternal?: boolean;
  dimensions: number;
};

const PageLink = (props: PageLinkProps) => {
  const {
    dimensions,
    isExternal,
    isTopOfPage,
    page,
    url,
    iconName,
    marginLeft,
  } = props;
  const [isHovered, setIsHovered] = useState(false);
  const animatedButton = (
    <button
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <motion.span
        className="opacity-100"
        transition={{ duration: 0.2 }}
        animate={{ opacity: isHovered ? 0.0 : 1.0 }}
      >
        {isTopOfPage ? (
          <Image
            className={`absolute -top-1 ${marginLeft} z-10 opacity-100`}
            src={`/assets/svg/${iconName}-black.svg`}
            alt="file"
            width={dimensions}
            height={dimensions}
          />
        ) : (
          <>
            <Image
              className={`absolute -top-1 ${marginLeft} z-10 opacity-100`}
              src={`/assets/svg/${iconName}-yellow.svg`}
              alt="file"
              width={dimensions}
              height={dimensions}
            />
          </>
        )}
      </motion.span>
      <motion.span
        className={`z-20 opacity-0`}
        transition={{ duration: 0.2 }}
        animate={{ opacity: isHovered ? 1.0 : 0.0 }}
      >
        <span className={`${isTopOfPage ? "text-black" : "text-yellow"}`}>
          {page}
        </span>
      </motion.span>
    </button>
  );

  return (
    <motion.div
      animate={{ rotate: isHovered ? 360 : 0 }}
      transition={{ duration: 0.25 }}
    >
      {isExternal ? (
        <a href={url} target="_blank" rel="noreferrer">
          {animatedButton}
        </a>
      ) : (
        <Link href={url}>{animatedButton}</Link>
      )}
    </motion.div>
  );
};

type NavbarProps = {
  isTopOfPage: boolean;
};

const Navbar = (props: NavbarProps) => {
  const { isTopOfPage } = props;
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const [isMenuToggled , setIsMenuToggled] = useState(false);
  const topColor = isTopOfPage ? "" : "bg-purple";

  return (
    <nav
      className={`fixed top-0 z-40 w-full py-6 duration-150 ease-in-out ${topColor}`}
    >
      <div className={`mx-auto flex w-5/6 items-center justify-between`}>
        <h4
          className={`font-playfair text-3xl font-bold ${
            isTopOfPage ? "text-black" : "text-yellow"
          }`}
        >
          ORR
        </h4>

        {isAboveSmallScreens ? (
          <div
            className={`relative flex h-full justify-between gap-16 font-opensans text-sm font-semibold`}
          >
            <PageLink
              page="Home"
              url="/"
              marginLeft="ml-1"
              iconName="house-solid"
              isTopOfPage={isTopOfPage}
              dimensions={30}
            />
            <PageLink
              page="Resume"
              url="/General-Resume.pdf"
              marginLeft="ml-4"
              iconName="file-solid"
              isTopOfPage={isTopOfPage}
              isExternal={true}
              dimensions={20}
            />
            {/* <PageLink
              page="About"
              url="/about"
              marginLeft="ml-2"
              iconName="clipboard-question-solid"
              isTopOfPage={isTopOfPage}
              dimensions={22}
            /> */}
          </div>
        ) : (
          <button
            className={`rounded-full bg-blue p-2`}
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Image
              alt="menu-icon"
              src="/assets/bars-solid.svg"
              width={10}
              height={10}
            />
          </button>

        )}
                {/* MOBILE POPUP */}
        {!isAboveSmallScreens && (
          <div
            className={`fixed right-0 bottom-0 h-full w-[300px] bg-blue duration-300 ease-in-out ${
              isMenuToggled ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* CLOSE ICON */}
            <div className={`flex justify-end p-12`}>
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Image
                  alt="close-icon"
                  src="/assets/xmark-solid.svg"
                  width={10}
                  height={10}
                />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div
              className={`ml-[33%] flex flex-col gap-10 text-2xl text-deep-blue`}
            >
              <p>A</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
