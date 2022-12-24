import React from "react";
import { useState } from "react";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { AnchorNames } from "../pages/index";

type ScrollLinkProps = {
  page: string;
  selectedPage: string;
  setSelectedPage: (page: string) => void;
};
const ScrollLink = ({
  page,
  selectedPage,
  setSelectedPage,
}: ScrollLinkProps) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } transition duration-500 hover:text-yellow`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      id={lowerCasePage}
    >
      {page}
    </AnchorLink>
  );
};

type NavbarProps = {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
  isTopOfPage: boolean;
};

const ScrollLinks = ({ selectedPage, setSelectedPage }: ScrollLinkProps) => {
  return AnchorNames.map((page) => (
    <ScrollLink
      key={page}
      page={page}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
  ));
};

const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: NavbarProps) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const topColor = isTopOfPage ? "" : "bg-red";

  return (
    <nav className={`fixed top-0 z-40 w-full py-6`}>
      <div
        className={`mx-auto flex w-5/6 items-center justify-between ${topColor}`}
      >
        <h4 className={`font-playfair text-3xl font-bold`}>ORR</h4>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div
            className={`flex justify-between gap-16 font-opensans text-sm font-semibold`}
          >
            {ScrollLinks({selectedPage, setSelectedPage} as ScrollLinkProps)}
          </div>
        ) : (
          // Mobile toggle button
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
              {ScrollLinks(({selectedPage, setSelectedPage} as ScrollLinkProps))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
