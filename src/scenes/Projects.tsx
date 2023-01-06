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

type ProjectProps = {
  title: string;
  subtitle: string;
  url: string;
};

const Project = (props: ProjectProps) => {
  const { title, subtitle, url } = props;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const isSelf = url === "#";

  return isSelf ? (
    <motion.div className={`relative`} variants={projectVarient}>
      <div
        className={`absolute z-30 flex h-full w-full 
      flex-col items-center justify-center bg-grey text-center text-deep-blue
      opacity-0 transition duration-500 hover:opacity-90`}
      >
        <p className={`font-playfair text-2xl`}>{title}</p>
        <p className={`mt-7`}>{subtitle}</p>
      </div>
      <Image
        src={`/assets/image/${projectTitle}.png`}
        alt={`${title} thumbnail`}
        width={400}
        height={400}
      />
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
          <p className={`mt-7 w-[90%]`}>{subtitle}</p>
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
    <section ref={projectsRef} id="projects" className={`my-48`}>
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
          <div className={`mt-5 mb-24 flex justify-center`}>
            <LineGradient width="w-full" />
          </div>

        
      </motion.div>

      {/* PROJECTS */}
      <div className={`flex justify-center `}>
        <motion.div
          className={`grid gap-2 sm:grid-cols-3 sm:gap-0`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {/* ROW 1 */}
          {/* TODO: MAKE THIS DIV LESS HACKY */}
          <div className={`relative flex`}>
            <motion.div
              className={`flex items-center max-w-[400px] w-full h-0
              justify-center bg-yellow pb-[100%] text-center font-playfair text-2xl
              font-semibold`}
              variants={projectVarient}
            >
              <p className={`absolute flex justify-center items-center pt-[100%]`}>SOME PROJECTS I&apos;VE BEEN WORKING ON</p>
            </motion.div>
          </div>
          <Project
            title="Math Toolbox"
            subtitle="A Next.js and Tailwind CSS app to help further your math education"
            url="https://mathtoolbox.org"
          />
          <Project
            title="VR Multiplayer Bowling Game"
            subtitle="A collaborative Meta Quest game built with Unity Engine"
            url="https://github.com/orrshalev/vr-bowling-game"
          />
          {/* ROW 2 */}
          <Project
            title="University of Georgia Data Science Competition 2021"
            subtitle="Team-lead for undergraduate runner-up team. Utilized
            random-forest classification and logistic regression to predict credit approval"
            url="https://www.stat.uga.edu/events/content/2021/uga-data-science-competition-2021"
          />
          <Project
            title="Terry FinTech Society"
            subtitle="Director of Events and developer of the society's website using Wordpress"
            url="https://www.terryfintech.org/"
          />
          <Project
            title="The Hollingsworth Award"
            subtitle="Award and scholarship awarded for excellence in
            mathematics undergraduate studies"
            url="https://www.math.uga.edu/undergraduate-student-award-winners"
          />
          <Project
            title="VR & Music Research Lab"
            subtitle="Developing a VR experience and interactive data analysis tools for 
            purposes of vocalization related research"
            url="#"
          />
          <Project
            title="The Computer Science Undergraduate Research Support Fund"
            subtitle="Scholarship awarded to support undergraduate research endavors within the
            School of Computing"
            url="https://www.cs.uga.edu/scholarships"
          />
          <Project
            title="AI & Data Science Analyst at J.P. Morgan Chase & Co."
            subtitle="Utilized machine learning to bolster the One Chase initiative"
            url="#"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
