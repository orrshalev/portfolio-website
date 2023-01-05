import React from "react";
import OrrIcon from "../graphics/OrrIcon";
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
  
  const landingRef = useRef(null);
  const inViewport = useIsInViewport(landingRef);

  useEffect(() => {
    inViewport ? isInViewport(AnchorPrioritiesMap.home) : isInViewport(-1);
  }, [isInViewport, inViewport]);
  const beforeIcon = `before:absolute
          before:-left-2 before:z-[-1]
          before:mr-5 before:h-full before:w-[75%] before:rounded-full
          before:border-red before:bg-gradient-rainblue  before:opacity-90`
  return (
    <section
      id="home"
      ref={landingRef}
      className={`mt-36 gap-16 md:mt-0 md:flex md:h-[80vh] md:w-[45%] md:items-center md:justify-between`}
    >
      {/* IMAGE SECTION */}
      <motion.div
        className={`relative z-10 flex basis-1/3 h-2/3 md:order-2 justify-center`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        {/* Increase size of this svg */}
          <OrrIcon />
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

          <p className={`ml-10 p-4 font-opensans font-semibold md:ml-0`}>
            Powering Software One Line at a Time!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
