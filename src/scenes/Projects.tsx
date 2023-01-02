import React from "react";
import Image from "next/image";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import useIsInViewport from "../hooks/useIsInViewport";
import type { Order } from "../pages";
import { AnchorPrioritiesMap } from "../pages";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const projectVarient = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({
  title,
  subtitle,
  url,
}: {
  title: string;
  subtitle: string;
  url: string;
}) => {
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const isSelf = url === "#";

  return isSelf ? (
    <motion.div className={`relative`} variants={projectVarient}>
      <div
        className={`absolute z-30 flex h-full w-full 
      flex-col items-center justify-center bg-grey text-center text-deep-blue opacity-0 
      transition duration-500 hover:opacity-90`}
      >
        <p className={`font-playfair text-2xl`}>{title}</p>
        <p className={`mt-7`}>{subtitle}</p>
      </div>
      <Image
        src={`/assets/image/${projectTitle}.png`}
        alt={`${title} thumbnail`}
        width={400}
        height={400}
      ></Image>
    </motion.div>
  ) : (
    <a href={url} target="_blank" rel="noreferrer">
      <motion.div className={`relative`} variants={projectVarient}>
        <div
          className={`absolute z-30 flex h-full w-full 
      flex-col items-center justify-center bg-grey text-center text-deep-blue opacity-0 
      transition duration-500 hover:opacity-90`}
        >
          <p className={`font-playfair text-2xl`}>{title}</p>
          <p className={`mt-7`}>{subtitle}</p>
        </div>
        <Image
          src={`/assets/image/${projectTitle}.png`}
          alt={`${title} thumbnail`}
          width={400}
          height={400}
        ></Image>
      </motion.div>
    </a>
  );
};

type ProjectsProps = { isInViewport: (inViewport: Order) => void };

const Projects = (props: ProjectsProps) => {
  const projectsRef = useRef(null);
  const inViewport = useIsInViewport(projectsRef);
  const { isInViewport } = props;

  useEffect(() => {
    inViewport ? isInViewport(AnchorPrioritiesMap.projects) : isInViewport(-1);
  }, [isInViewport, inViewport]);

  return (
    <section ref={projectsRef} id="projects" className={`py-48`}>
      <motion.div
        className={`mx-auto text-center md:w-2/4`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className={`font-playfair text-4xl font-semibold`}>
            <span className={`text-yellow`}>MY </span>WORK
          </p>
          <div className={`mt-5 flex justify-center`}>
            <LineGradient width="w-1/3" />
          </div>
        </div>

        <p className={`mt-10 mb-7`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          exercitationem voluptas quas dolorum quidem. Quisquam, quae.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className={`flex justify-center`}>
        <motion.div
          className={`sm:grid sm:grid-cols-3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* ROW 1 */}
          <div
            className={`flex max-w-[400px] items-center justify-center bg-yellow 
            p-10 text-center font-playfair text-2xl font-semibold`}
          >
            BEAUTIFUL PROJECTS THAT I MADE
          </div>
          <Project
            title="Math Toolbox"
            subtitle="Lorem ipsum dolor sit amet."
            url="https://mathtoolbox.org"
          />
          <Project
            title="VR Multiplayer Bowling Game"
            subtitle="Lorem ipsum dolor sit amet."
            url="https://github.com/orrshalev/vr-bowling-game"
          />
          {/* ROW 2 */}
          <Project
            title="University of Georgia Data Science Competition 2021"
            subtitle="Lorem ipsum dolor sit amet."
            url="https://www.stat.uga.edu/events/content/2021/uga-data-science-competition-2021"
          />
          <Project
            title="Terry FinTech Society"
            subtitle="Lorem ipsum dolor sit amet."
            url="https://www.terryfintech.org/"
          />
          <Project
            title="The Hollingsworth Award"
            subtitle="Lorem ipsum dolor sit amet."
            url="https://www.math.uga.edu/undergraduate-student-award-winners"
          />
          <Project
            title="VR & Music Research Lab"
            subtitle="Lorem ipsum dolor sit amet."
            url="#"
          />
          <Project
            title="The Computer Science Undergraduate Research Support Fund"
            subtitle="Lorem ipsum dolor sit amet."
            url="https://www.cs.uga.edu/scholarships"
          />
          <Project
            title="AI & Data Science Analyst at J.P. Morgan Chase & Co."
            subtitle="Lorem ipsum dolor sit amet."
            url="#"
          />
          {/* <motion.div className={`relative`} variants={projectVarient}>
            <div
              className={`absolute flex h-full w-full items-center justify-center bg-purple 
            p-10 text-center font-playfair text-2xl font-semibold`}
            >
              BOTTOM TEXT
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
