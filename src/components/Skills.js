import React from "react";
import { motion } from "framer-motion";

// create individual component for multiple skills
// which will take parameters skill name, position on x-axis & positon on y-axis
const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-bold bg-dark text-light
         p-8 shadow-dark cursor-pointer"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center text-dark">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-bold bg-dark text-light
         py-3 px-6 shadow-dark cursor-pointer absolute"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="NodeJS" x="26vw" y="-16vw" />
        <Skill name="CSS" x="12vw" y="-7vw" />
        <Skill name="HTML" x="20vw" y="6vw" />
        <Skill name="ReactJs" x="-2vw" y="12vw" />
        <Skill name="Java" x="-9vw" y="-20vw" />
        <Skill name="Tailwind CSS" x="-24vw" y="-3vw" />
        <Skill name="NextJS" x="13vw" y="-10vw" />
        <Skill name="Python" x="27vw" y="-15vw" />
        <Skill name="GitHub" x="24vw" y="-22vw" />
        <Skill name="C/C++" x="-5vw" y="-23vw" />
        <Skill name="Flutter" x="29vw" y="-5vw" />
        <Skill name="Firebase" x="-25vw" y="18vw" />
        <Skill name="MongoDB" x="-8vw" y="20vw" />
        <Skill name="Figma" x="-10vw" y="0vw" />
        <Skill name="Javascript" x="-2vw" y="2vw" />
        <Skill name="ExpressJS" x="-20vw" y="10vw" />

        {/* <Skill name="Tailwind CSS" x="-5vw" y="-10vw" />
        <Skill name="C/C++" x="-5vw" y="-10vw" />
        <Skill name="Python" x="-5vw" y="-10vw" />
        <Skill name="NodeJS" x="-5vw" y="-10vw" />
        <Skill name="ExpressJS" x="-5vw" y="-10vw" />
        <Skill name="Blender" x="-5vw" y="-10vw" /> */}
      </div>
    </>
  );
};

export default Skills;
