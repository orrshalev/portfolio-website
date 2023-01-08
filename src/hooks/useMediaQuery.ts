import { useEffect, useState } from "react";

/**
 * Checks for whether a media query string matches the current viewport.
 * 
 * @param query - Media query string
 * @returns Boolean indicating if the media query matches
 * 
 * @example
 * This will return true if the viewport is at least 600px wide:
 * ```
 * useMediaQuery("(min-width: 600px)")
 * ```
 */
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [query, matches]);

  return matches;
};

export default useMediaQuery;