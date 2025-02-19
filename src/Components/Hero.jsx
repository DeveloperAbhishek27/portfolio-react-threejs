import React from "react";
import { motion } from "framer-motion";
import { styles } from "../Styles";
import Tilt from "react-parallax-tilt";
import { fadeIn } from "../utils/motion";
import StarCanvas from "./Canvas/Stars";

const Hero = () => {
  return (
    <>
      <section className="relative w-full h-[130vh] bg-cover bg-no-repeat bg-center z-[1] ">
        <div className="absolute inset-0 z-0 bg-black-100 pointer-events-none hidden md:block">
          <StarCanvas />
        </div>

        <div className="flex flex-wrap justify-center gap-[20px] relative overflow-visible top-[110px] max-w-7xl mx-auto z-[10]">
          <div
            className={`${styles.paddingX} flex flex-row items-start gap-5 mr-[30px]`}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#915eff]">Abhishek</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white`}>
                A Frontend Developer.
              </p>
              <br />
              <p className="text-secondary text-[17px] max-w-3xl leading-[30px]">
                "I build fast, responsive, and user-friendly <br />
                web applications using React.js & Tailwind CSS."
              </p>
              <div className="mt-10 flex gap-10">
                <a
                  href="#contact"
                  className="relative z-50 px-3 w-[100px] text-center py-4 bg-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:bg-blue-700 transition cursor-pointer"
                >
                  Hire Me
                </a>
                <a
                  href="./Abhi-cv.pdf"
                  download
                  className="relative w-[140px] text-center z-50 cursor-pointer px-2 py-4 bg-gray-800 text-white font-semibold rounded-2xl shadow-lg hover:bg-gray-900 transition"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <Tilt className="xs:w[300px] w-[300px]">
            <motion.div
              variants={fadeIn("", "tween", 0.2, 1)}
              className="w-full green-pink-gradient p-[3px] rounded-full shadow-card"
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="bg-[#0b072b] rounded-full py-5 px-12 min-h-[280px] flex flex-col justify-center items-center overflow-hidden"
              >
                <img
                  src="./abhi.png"
                  alt="abhi-logo"
                  className="w-[250px] h-[250px] object-contain overflow-hidden bg-yellow-200"
                  style={{
                    transform: "scale(1.7) ",
                    filter: "brightness(0.9)",
                  }}
                />
              </div>
            </motion.div>
          </Tilt>
        </div>

        <div className="absolute top-[50vh] sm:bottom-10 w-full flex justify-center items-center z-[1] sm:flex hidden">
          <a href="#about">
            <div className="w-[35px] h-[70px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
