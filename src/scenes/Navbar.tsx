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
  return AnchorNames.map((page) => {
    const capitalizedPage = page.charAt(0).toUpperCase() + page.slice(1);
    return (
    <ScrollLink
      key={page.toLowerCase()}
      page={capitalizedPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
    )
  }
  );
};

const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: NavbarProps) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const topColor = isTopOfPage ? "" : "bg-orange";

  return (
    <nav className={`fixed top-0 z-40 w-full py-6 duration-150 ease-in-out ${topColor}`}>
      <div
        className={`mx-auto flex w-5/6 items-center justify-between`}
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
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
