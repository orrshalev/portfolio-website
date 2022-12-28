import React from "react";
import Image from "next/image";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import useIsInViewport from "../hooks/useIsInViewport";
import type { Order} from "../pages";
import { AnchorPrioritiesMap} from "../pages";

type Props = {isInViewport: (inViewport: Order) => void};

const MySkills = ({isInViewport}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const skillsRef = useRef(null);
  const inViewport = useIsInViewport(skillsRef);

  useEffect(() => {
    inViewport ? isInViewport(AnchorPrioritiesMap.skills) : isInViewport(-1);
  }, [isInViewport, inViewport]);

  return (
    <section ref={skillsRef} id="skills" className={`pt-10 pb-24`}>
      {/* HEADER AND IMAGE SECTION */}
      <div className={`mt-32 md:flex md:justify-between md:gap-16`}>
        <motion.div
          className={`md:w-1/3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className={`mb-5 font-playfair text-4xl font-semibold`}>
            MY <span className={`text-yellow`}>SKILLS</span>
          </p>
          <LineGradient width="w-[190px]" />
          <p className={`mt-10 mb-7`}>
            {/* ADD LATIN */}
            ipso lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisl nec tincidunt luctus, elit ipsum
          </p>
        </motion.div>

        <div className={`mt-16 md:mt-0`}>
          {isAboveMediumScreens ? (
            <div
              className={`relative z-0 ml-20
                          before:absolute before:-left-10 before:-top-10
        before:z-[-1] before:h-full before:w-full
        before:border-2 before:border-blue`}
            >
              <Image
                alt="skills"
                className={`z-10`}
                src="/assets/profile-image.png"
                width={805}
                height={644}
              ></Image>
            </div>
          ) : (
            <Image
              alt="skills"
              className={`z-10`}
              src="/assets/profile-image.png"
              width={1610}
              height={1288}
            ></Image>
          )}
        </div>
      </div>
      {/* SKILLS */}
      <div className={`mt-16 gap-20 flex flex-col md:flex md:flex-row`}>
        {/* EXPERIENCE */}
        <motion.div
          className={`mt-10 md:w-1/3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className={`relative h-32`}>
            <div className={`z-10`}>
              <p className={`font-playfair text-5xl font-semibold`}>01</p>
              <p className={`font-playfair text-3xl font-semibold`}>
                Experience
              </p>
            </div>
            <div
              className={`absolute right-0 top-0 z-[-1] h-32 w-1/2 bg-blue md:w-3/4`}
            />
            <p className={`mt-8`}>
              A auctor, nisl nec tincidunt luctus, elit ipsum interdum nulla,
              sit amet commodo magna eros quis urna. Nunc viverra imperdiet
              enim. Fusce est. Vivamus a tellus.
            </p>
          </div>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className={`mt-10 md:w-1/3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className={`relative h-32`}>
            <div className={`z-10`}>
              <p className={`font-playfair text-5xl font-semibold`}>02</p>
              <p className={`mt-3 font-playfair text-3xl font-semibold`}>
                Innovative
              </p>
            </div>
            <div
              className={`absolute right-0 top-0 z-[-1] h-32 w-1/2 bg-red md:w-3/4`}
            />
            <p className={`mt-5`}>
              A auctor, nisl nec tincidunt luctus, elit ipsum interdum nulla,
              sit amet commodo magna eros quis urna. Nunc viverra imperdiet
              enim. Fusce est. Vivamus a tellus.
            </p>
          </div>
        </motion.div>

        {/* CREATIVE */}
        <motion.div
          className={`mt-10 md:w-1/3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className={`relative h-32`}>
            <div className={`z-10`}>
              <p className={`font-playfair text-5xl font-semibold`}>03</p>
              <p className={`font-playfair text-3xl mt-3 font-semibold`}>
                Creative
              </p>
            </div>
            <div
              className={`absolute right-0 top-0 z-[-1] h-32 w-1/2 bg-yellow md:w-3/4`}
            />
            <p className={`mt-5`}>
              A auctor, nisl nec tincidunt luctus, elit ipsum interdum nulla,
              sit amet commodo magna eros quis urna. Nunc viverra imperdiet
              enim. Fusce est. Vivamus a tellus.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
