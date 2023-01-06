import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { useCycle } from "framer-motion";
import MenuToggle from "../components/MenuToggle";

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
  const [isMenuToggled, setIsMenuToggled] = useCycle(false, true);
  const topColor = isTopOfPage ? "" : "bg-purple";

  let animationState: string;
  if (isMenuToggled && isTopOfPage) {
    animationState = "open-top";
  } else if (isMenuToggled) {
    animationState = "open";
  } else if (isTopOfPage) {
    animationState = "closed-top";
  } else {
    animationState = "closed";
  }

  const buttonStyle = `absolute right-20 top-[25px] rounded-full bg-yellow p-2`;

  return (
    <nav
      className={`fixed top-0 z-40 h-[70px] w-full duration-150 ease-in-out ${topColor}`}
    >
      <h4
        className={`absolute top-[15px] font-playfair text-3xl font-bold md:left-36 ${
          isTopOfPage ? "text-black" : "text-yellow"
        } ${isAboveSmallScreens ? "left-12" : "right-12"}`}
      >
        ORR
      </h4>

      {isAboveSmallScreens ? (
        <div
          className={`absolute right-20 top-[25px] flex gap-16 font-opensans text-sm font-semibold md:right-36`}
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
        <></>
      )}
      {/* MOBILE POPUP */}
      {!isAboveSmallScreens && (
        <>
          <div
            className={`fixed left-0 bottom-0 h-full w-[300px] bg-light-purple duration-300 ease-in-out ${
              isMenuToggled ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* MENU ITEMS */}
            <div
              className={`mt-[60px] flex flex-col gap-- text-2xl text-deep-blue`}
            >
              <button className="inline-flex items-center py-2 px-4 gap-2 font-opensans font-bold ">
                <Image
                className={`ml-10`}
                  src={`/assets/svg/house-solid-yellow.svg`}
                  alt="file"
                  width={25}
                  height={25}
                />
                <span className={`ml-2 text-yellow`}>Home</span>
              </button>
            </div>
          </div>
          {/* CLOSE ICON */}
          <motion.div
            animate={animationState}
            className={`absolute left-12 top-[18px] rounded-full p-2`}
          >
            <MenuToggle
              isTopOfPage={isTopOfPage}
              toggle={() => setIsMenuToggled()}
            />
          </motion.div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
