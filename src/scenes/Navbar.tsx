import React from "react";
import { useState } from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

type LinkProps = {
  page: string;
  url: string;
  iconName: string;
  marginLeft: string;
  isTopOfPage: boolean;
};

const Link = (props: LinkProps) => {
  const { isTopOfPage, page, url, iconName, marginLeft } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      animate={{ rotate: isHovered ? 360 : 0 }}
      transition={{ duration: 0.25 }}
    >
      <a href={url} target="_blank" rel="noreferrer">
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
                width={20}
                height={20}
              />
            ) : (
              <>
                <Image
                  className={`absolute -top-1 ${marginLeft} z-10 opacity-100`}
                  src={`/assets/svg/${iconName}-yellow.svg`}
                  alt="file"
                  width={20}
                  height={20}
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
      </a>
    </motion.div>
  );
};

type NavbarProps = {
  setSelectedPage: (page: string) => void;
  isTopOfPage: boolean;
  setCanChange: (condition: boolean) => void;
};

const Navbar = (props: NavbarProps) => {
  const { isTopOfPage } = props;
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
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
            <Link
              page="Resume"
              url="/General-Resume.pdf"
              marginLeft="ml-4"
              iconName="file-solid"
              isTopOfPage={isTopOfPage}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
