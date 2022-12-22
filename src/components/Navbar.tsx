import { useState } from "react";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

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
      onChange={() => setSelectedPage(lowerCasePage)}
      id={lowerCasePage}
    >
      {page}
    </AnchorLink>
  );
};

type NavbarProps = {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: NavbarProps) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <nav className={`fixed top-0 z-40 w-full py-6`}>
      <div className="mx-auto flex w-5/6 items-center justify-between">
        <h4 className={`font-playfair text-3xl font-bold`}>ORR</h4>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div
            className={`flex justify-between gap-16 font-opensans text-sm font-semibold`}
          >
            <ScrollLink
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <ScrollLink
              page="contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className={`rounded-full bg-red p-2`}
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Image alt="menu-icon" src="/assets/bars-solid.svg" width={10} height={10}/>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
