import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { AnchorNames } from "../pages/index";

type ScrollLinkProps = {
  page: string;
  selectedPage: string;
  setSelectedPage: (page: string) => void;
  setCanChange: (condition: boolean) => void;
};

const timeToWait = 1000;
function resolveAfterSeconds(timeToWait: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, timeToWait);
  });
}

const ScrollLink = ({
  page,
  selectedPage,
  setSelectedPage,
  setCanChange,
}: ScrollLinkProps) => {
  const lowerCasePage = page.toLowerCase();
  const change = async <T, >(func: (param: T) => void, to: T) => {
    func(to);
  }
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } transition duration-500 hover:text-yellow`}
      href={`#${lowerCasePage}`}
      onClick={async () => {
        change(setCanChange, false);
        change(setSelectedPage, lowerCasePage);
        await resolveAfterSeconds(timeToWait);
        await change(setCanChange, true);
      }}
    >
      {page}
    </AnchorLink>
  );
};

type NavbarProps = {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
  isTopOfPage: boolean;
  setCanChange: (condition: boolean) => void;
};

const ScrollLinks = ({ setCanChange, selectedPage, setSelectedPage }: ScrollLinkProps) => {
  return AnchorNames.map((page) => {
    const capitalizedPage = page.charAt(0).toUpperCase() + page.slice(1);
    return (
      <ScrollLink
        key={page.toLowerCase()}
        page={capitalizedPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        setCanChange={setCanChange}
      />
    );
  });
};

const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
  setCanChange,
}: NavbarProps) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const topColor = isTopOfPage ? "" : "bg-orange";

  return (
    <nav
      className={`fixed top-0 z-40 w-full py-6 duration-150 ease-in-out ${topColor}`}
    >
      <div className={`mx-auto flex w-5/6 items-center justify-between`}>
        <h4 className={`font-playfair text-3xl font-bold`}>ORR</h4>

        {isAboveSmallScreens ? (
          <div
            className={`flex justify-between gap-16 font-opensans text-sm font-semibold`}
          >
            {ScrollLinks({ setCanChange, selectedPage, setSelectedPage } as ScrollLinkProps)}
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
