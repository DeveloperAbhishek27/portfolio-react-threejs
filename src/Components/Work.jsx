import React from "react";
import { styles } from "../Styles";
import { motion } from "framer-motion";
import SectionWrapper from "../HOC/SectionWraper";
import Tilt from "react-parallax-tilt";
import { github } from "../assets";
import { projects } from "../Contant/Index";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  name,
  index,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full"
      >
        <div className="relative w-full h-[200px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 h-[170px]">
          <h3 className="text-white-400 font-bold text-[26px]">{name}</h3>
          <p className="text-secondary mt-1 text-[15px]">{description}</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[15px] ${tag.color} `}>
              # {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Work = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.heroHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Developed web-based projects: Portfolio, Todo List, and TripGuide. The
          Portfolio showcases personal skills and projects, the Todo List helps
          in task management with an intuitive interface, and TripGuide assists
          users in planning and organizing their trips efficiently. Each project
          demonstrates proficiency in front-end and back-end development,
          ensuring a seamless user experience.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Work, "");
