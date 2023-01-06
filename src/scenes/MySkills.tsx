import React from "react";
import Image from "next/image";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import useIsInViewport from "../hooks/useIsInViewport";
import type { Order } from "../pages";
import { AnchorPrioritiesMap } from "../pages";

type Props = { isInViewport: (inViewport: Order) => void };

const MySkills = ({ isInViewport }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const skillsRef = useRef(null);
  const inViewport = useIsInViewport(skillsRef);

  useEffect(() => {
    inViewport ? isInViewport(AnchorPrioritiesMap.skills) : isInViewport(-1);
  }, [isInViewport, inViewport]);

  return (
    <section ref={skillsRef} id="skills" className={`pb-24 mt-10 md:pt-10 md:mt-0`}>
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
          <p className={`mb-5 pt-10 font-playfair text-4xl font-semibold`}>
            MY <span className={`text-yellow`}>SKILLS</span>
          </p>
          <LineGradient width="w-[190px]" />
          <p className={`font-lg mt-10 mb-7 font-opensans text-lg`}>
            I am an experienced developer with a love for all things software. I
            like to challange myself with variying and new technologies and
            constantly be upping my abilities. Whether it be a new framework,
            game engine, language, or just a new way of thinking, I am always
            looking to bring forth the best product I can.
          </p>
        </motion.div>

        <div className={`mt-16 md:mt-0`}>
          {isAboveMediumScreens ? (
            <div
              className={`relative z-0 ml-20
                          before:absolute before:-left-16 before:-top-16
        before:z-[-1] before:h-full before:w-full before:rounded-t-[400px]
        before:border-2 before:border-yellow`}
            >
              <Image
                alt="Personal Image"
                className={`z-10 rounded-t-[400px]`}
                src="/assets/image/profile-image.png"
                width={805}
                height={644}
              ></Image>
            </div>
          ) : (
            <Image
              alt="skills"
              className={`z-10`}
              src="/assets/image/profile-image.png"
              width={1610}
              height={1288}
            ></Image>
          )}
        </div>
      </div>
      {/* SKILLS */}
      <div
        className={`mt-20  flex flex-col gap-20 sm:mt-20 md:mt-10 md:flex md:flex-row`}
      >
        {/* EXPERIENCE */}
        <motion.div
          className={`mt-5 md:mt-10 md:w-1/3`}
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
              <p className={`mt-3 font-playfair text-3xl font-semibold`}>
                Full-Stack
              </p>
            </div>
            <div
              className={`absolute right-0 top-0 z-[-1] h-32 w-1/2 bg-yellow md:w-3/4`}
            />
            <p className={`mt-2 font-opensans text-lg`}>
              Multiple personal projects developed in Next.js, including this website.
              Knowledge of TypeScript, Tailwind CSS, REST API, tRPC, Prisma, and
              many more.
            </p>
          </div>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className={`mt-40 sm:mt-20 md:mt-10 md:w-1/3`}
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
                Data Analytics
              </p>
            </div>
            <div
              className={`absolute right-0 top-0 z-[-1] h-32 w-1/2 bg-orange md:w-3/4`}
            />
            <p className={`mt-2 font-opensans text-lg`}>
              Extensive professional, research, and personal experience with data analysis
              and visualization using Python, R, and Tableau. Experience with
              advanced analytics and machine learning, including time series
              forecasting, clustering, classification algorithms, and deep learning.
            </p>
          </div>
        </motion.div>

        {/* CREATIVE */}
        <motion.div
          className={`mt-40 sm:mt-20 md:mt-10 md:w-1/3`}
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
              <p className={`mt-3 font-playfair text-3xl font-semibold`}>
                Virtual Reality
              </p>
            </div>
            <div
              className={`absolute right-0 top-0 z-[-1] h-32 w-1/2 bg-light-purple md:w-3/4`}
            />
            <p className={`mt-2 font-opensans text-lg`}>
              Personal and research experience with Oculus products made with 
              Unity, C#, and Blender.  Extensive work using ray-tracing,
              biometric data collection, animation, and multiplayer experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
