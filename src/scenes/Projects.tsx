import React from "react";
import Image from "next/image";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const projectVarient = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
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
        src={`/assets/${projectTitle}.png`}
        alt={`${title} thumbnail`}
        width={400}
        height={400}
      ></Image>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className={`py-48`}>
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
            <span className={`text-red`}>PRO</span>JECTS
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
            className={`flex max-w-[400px] items-center justify-center bg-red 
            p-10 text-center font-playfair text-2xl font-semibold`}
          >
            BEAUTIFUL PROJECTS THAT I MADE
          </div>
          <Project title="Project 1" subtitle="Lorem ipsum dolor sit amet." />
          <Project title="Project 2" subtitle="Lorem ipsum dolor sit amet." />
        {/* ROW 2 */}
        <Project title="Project 3" subtitle="Lorem ipsum dolor sit amet." />
        <Project title="Project 4" subtitle="Lorem ipsum dolor sit amet." />
        <Project title="Project 5" subtitle="Lorem ipsum dolor sit amet." />
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
