import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../Styles";
import Earth from "./Canvas/Earth";
import SectionWrapper from "../HOC/SectionWraper";
import { slideIn } from "../utils/motion";
import Stars from "./Canvas/Stars";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_4x2vcen",
        "template_4b2rr4a",
        {
          from_name: form.name,
          to_name: "Abhishek",
          from_email: "abhipandat2827@gmail.com",
          message: form.message,
        },
        "sYMEOEYcTuTZ-0sEJ"
      )
      .then(
        () => {
          setLoading(false);
          alert("thank you. i will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Somthing went wrong.");
        }
      );
  };
  return (
    <>
      <div
        id="contact"
        className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[]0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in Touch</p>
          <h3 className={styles.heroHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border-none font-medium"
              />
            </label>

            <button
              type="Submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white shadow-primary rounded-xl font-bold shadow-md"
            >
              {loading ? "sending..." : "send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md-h-[550px] h-[350px]"
        >
          <Earth />
          <Stars />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
