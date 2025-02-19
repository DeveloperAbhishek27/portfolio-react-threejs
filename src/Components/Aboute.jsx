import React from "react";
import { motion } from "framer-motion";
import { styles } from "../Styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../Contant/Index";
import Tilt from "react-parallax-tilt";
import SectionWrapper from "../HOC/SectionWraper";
import "../index.css";

const ServiceCard = ({ index, title, icon, hover }) => {
  return (
    <Tilt className="w-[550px] md:w-[250px] service-card">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-center items-center gap-5 relative group overflow-hidden">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-center text-[20px] font-bold">
            {title}
          </h3>

          <div className="hover-content absolute top-0 left-0 right-0 bottom-0 text-white flex justify-center items-center text-center p-5 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#030230]">
            {hover}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Aboute = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-col">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overveiw</h2>

        <motion.p
          variants={fadeIn("", "", 0.1, 0.1)}
          className="mt-5 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I specialize in building high-performance web applications using
          modern technologies like React.js, Tailwind CSS, and JavaScript. I
          love transforming designs into functional, interactive, and
          user-friendly experiences. With hands-on experience in frontend
          development, I continuously explore new technologies to enhance web
          performance and user engagement.
        </motion.p>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            title={service.title}
            hover={service.hover}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Aboute, "about");
