import AnchorLink from "react-anchor-link-smooth-scroll";
import { AnchorNames } from "../pages";

type DotGroupProps = {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
};

const DotGroup = ({ selectedPage, setSelectedPage }: DotGroupProps) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6\
  before:rounded-full before:border-2 before:border-yellow before:left-[-50%]\
  before:top-[-50%]`;
  return (
    <div className={`fixed top-[60%] z-50 right-7 flex flex-col gap-6`}>
      {AnchorNames.map((page) => {
        const lowerCasePage = page.toLowerCase();
        return (
          <AnchorLink
            key={page.toLowerCase()}
            className={`${
              selectedPage === lowerCasePage ? selectedStyles : "bg-dark-grey"
            } h-3 w-3 rounded-full`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
          />
        );
      })}
    </div>
  );
};

export default DotGroup;
