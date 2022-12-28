import React from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useIsInViewport from "../hooks/useIsInViewport";
import type { Order } from "../pages/index";
import { AnchorPrioritiesMap } from "../pages/index";
import { useEffect, useRef } from "react";

type Props = { isInViewport: (inViewport: Order) => void, setSelectedPage: (page: string) => void };

const Landing = ({ isInViewport, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const landingRef = useRef(null);
  const inViewport = useIsInViewport(landingRef);

  useEffect(() => {
    inViewport ? isInViewport(AnchorPrioritiesMap.home) : isInViewport(-1);
  }, [isInViewport, inViewport]);

  return (
    <section
      id="home"
      ref={landingRef}
      className={`gap-16 py-10 md:flex md:h-full md:items-center md:justify-between`}
    >
      {/* IMAGE SECTION */}
      <div
        className={`z-10 mt-16 flex basis-3/5 justify-center md:order-2 md:mt-32`}
      >
        {isAboveMediumScreens ? (
          <div
            className={`relative z-0 ml-20
        before:absolute before:-left-20 before:-top-20
        before:z-[-1] before:h-full before:w-full
        before:max-w-[400px] before:rounded-t-[400px] before:border-2 before:border-blue`}
          >
            <Image
              alt="profile"
              className={`duration-500\ z-10 w-full max-w-[400px] rounded-t-[400px] transition
              hover:saturate-150 hover:filter md:max-w-[600px]`}
              src="/assets/profile-image.png"
              width={3220}
              height={2576}
            ></Image>
          </div>
        ) : (
          <Image
            alt="profile"
            className={`duration-500\ z-10 w-full max-w-[400px] rounded-t-[400px] transition
              hover:saturate-200 hover:filter md:max-w-[600px]`}
            src="/assets/profile-image.png"
            width={3220}
            height={2576}
          ></Image>
        )}
      </div>

      {/* MAIN SECTION */}
      <div className={`z-30 mt-12 basis-2/5 md:mt-32`}>
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p
            className={`z-10 text-center font-playfair text-6xl md:text-start`}
          >
            Orr {""}
            <span
              className={`z-20  
                before:z-[-1] xs:relative xs:font-semibold xs:text-deep-blue`}
            >
              Shalev
            </span>
          </p>

          <p className={`p-4 font-opensans font-semibold`}>
            {/* Latin text */}
            Software Engineer
          </p>
        </motion.div>

        {/* CALL TO ACTION */}
        <motion.div
          className={`mt-5 flex justify-center md:justify-start`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className={`rounded-sm bg-gradient-rainblue
            py-3 px-7 font-semibold text-deep-blue transition 
            duration-500 hover:bg-blue hover:text-white`}
            onClick={() => setSelectedPage("")}
            href="#"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className={`rounded-r-sm bg-gradient-rainbow py-0.5 pr-0.5`}
            onClick={() => setSelectedPage("")}
            href="#"
          >
            <div
              className={`flex h-full w-full items-center justify-center bg-deep-blue px-10 font-playfair transition duration-500 hover:text-red`}
            >
              Let&apos;s Talk
            </div>
          </AnchorLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
