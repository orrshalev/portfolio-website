import React from "react";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import useIsInViewport from "../hooks/useIsInViewport";
import type { Order } from "../pages/index";
import { AnchorPrioritiesMap } from "../pages/index";
import { useEffect, useRef } from "react";

type Props = {
  isInViewport: (inViewport: Order) => void;
  setSelectedPage: (page: string) => void;
};

const Landing = ({ isInViewport }: Props) => {
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
      className={`relative gap-16 md:flex md:h-[80vh] md:items-center md:justify-between md:w-3/5`}
    >
      {/* IMAGE SECTION */}
      <motion.div
        className={`z-10 flex basis-3/5 justify-center md:order-2 `}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
      >
          {/* Increase size of this svg */}
          <Image
            alt="bicep curling animation"
            className={`z-10 w-full`}
            src="/assets/bicep.svg"
            width={200}
            height={250}
          ></Image>
        </motion.div>

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
            {/* text-transperent to make gradient */}
            <span
              className={`z-20 bg-gradient-rainblue bg-clip-text text-yellow
                before:z-[-1] xs:relative xs:font-semibold`}
            >
              Shalev
            </span>
          </p>

          <p className={`p-4 font-opensans font-semibold`}>Powering Software One Line at a Time!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
