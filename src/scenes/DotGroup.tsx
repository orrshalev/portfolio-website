import AnchorLink from "react-anchor-link-smooth-scroll";
import { AnchorNames } from "../pages";

type DotGroupProps = {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
  setCanChange: (condition: boolean) => void
};

const timeToWait = 1000;
function resolveAfterSeconds(timeToWait: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, timeToWait);
  });
}


const DotGroup = ({ selectedPage, setSelectedPage, setCanChange }: DotGroupProps) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6\
  before:rounded-full before:border-2 before:border-yellow before:left-[-50%]\
  before:top-[-50%]`;
  const change = async <T, >(func: (param: T) => void, to: T) => {
    func(to);
  }

  return (
    <div className={`fixed top-[60%] right-7 z-50 flex flex-col gap-6`}>
      {AnchorNames.map((page) => {
        const lowerCasePage = page.toLowerCase();
        return (
          <AnchorLink
            key={page.toLowerCase()}
            className={`${
              selectedPage === lowerCasePage ? selectedStyles : "bg-dark-grey"
            } h-3 w-3 rounded-full`}
            href={`#${lowerCasePage}`}
            onClick={async () => {
              change(setCanChange, false);
              change(setSelectedPage, lowerCasePage);
              await resolveAfterSeconds(timeToWait);
              await change(setCanChange, true);
            }}
          />
        );
      })}
    </div>
  );
};

export default DotGroup;
