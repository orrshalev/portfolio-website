import AnchorLink from "react-anchor-link-smooth-scroll";
import { AnchorNames } from "../pages";

type DotGroupProps = {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
  setCanChange: React.Dispatch<React.SetStateAction<boolean>>;
};

const timeToWait = 1000;
function resolveAfterSeconds(timeToWait: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, timeToWait);
  });
}

const DotGroup = ({
  selectedPage,
  setSelectedPage,
  setCanChange,
}: DotGroupProps) => {
  const selectedStyles = `relative bg-purple before:absolute before:w-6 before:h-6\
  before:rounded-full before:border-2 before:border-purple before:left-[-50%]\
  before:top-[-50%]`;

  return (
    <div className={`fixed top-[60%] right-7 z-50 flex flex-col gap-6`}>
      {AnchorNames.map((page) => {
        const lowerCasePage = page.toLowerCase();
        return (
          <AnchorLink
            key={page.toLowerCase()}
            offset={70}
            className={`${
              selectedPage === lowerCasePage ? selectedStyles : "bg-dark-grey"
            } h-3 w-3 rounded-full`}
            href={`#${lowerCasePage}`}
            // TODO: Get less hacky solution to ensure that selectedPage doesn't change
            // due to viewport tracking while AnchorLink is scrolling.
            onClick={async () => {
              setCanChange(false);
              setSelectedPage(lowerCasePage);
              await resolveAfterSeconds(timeToWait);
              setCanChange(true);
            }}
          />
        );
      })}
    </div>
  );
};

export default DotGroup;
