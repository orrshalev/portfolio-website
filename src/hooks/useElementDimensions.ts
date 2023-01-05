import { useEffect, useState } from "react";
import type { RefObject } from "react";

export type WindowDimensions = {
  width: number | undefined;
  height: number | undefined;
};

const useElementDimensions = (ref: RefObject<HTMLElement>) => {
  const [ dimensions, setDimensions ] = useState<WindowDimensions>({ width: ref.current?.offsetWidth, height: ref.current?.offsetHeight });

  useEffect(() => {
    if (!ref.current) return;

    if (ref.current.offsetWidth !== dimensions.width || ref.current.offsetHeight !== dimensions.height){
      setDimensions({ width: ref.current.offsetWidth, height: ref.current.offsetHeight });
    }

    const handleResize = () => {
      if (ref.current) {
        setDimensions({ width: ref.current.offsetWidth, height: ref.current.offsetHeight });
      }
    };
    window.addEventListener("resize", handleResize);
    // handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [ref, dimensions]);
  return dimensions;
};

export default useElementDimensions;
