import React from "react";
import { styles } from "../Styles";
import SectionWrapper from "../HOC/SectionWraper";
import { motion } from "framer-motion";
import { textVariant, slideIn } from "../utils/motion";
import { testimonials } from "../Contant/Index";

const FeedbacCard = ({ index, testimonial, name }) => (
  <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
    <motion.div
      variants={slideIn("left", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] flex-grow min-w-[400px] xl:min-w-[500px] mt-9"
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px] break-words">
          {testimonial}
        </p>
      </div>
    </motion.div>

    <motion.div
      variants={slideIn("right", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl  mt-9 flex justify-center items-center "
    >
      <img
        src="./img/ducat.png"
        alt="feedback"
        className="w-[450px] h-[250px]  object-contain"
      />
    </motion.div>
  </div>
);

const Feedback = () => {
  return (
    <>
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div
          className={`${styles.padding} bg-tertiary rounded-2xl m-h-[300px] `}
        >
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}> Certification.</h2>
          </motion.div>
        </div>
        <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, index) => (
            <FeedbacCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Feedback, "");
