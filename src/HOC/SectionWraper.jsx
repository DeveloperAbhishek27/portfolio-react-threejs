import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { styles } from "../Styles";

const SectionWrapper = (Component, idName) => {
  const Hoc = () => (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      <Component />
    </motion.section>
  );

  return Hoc;
};

export default SectionWrapper;
