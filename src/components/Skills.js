import React from "react";
import { motion } from "framer-motion";

// create individual component for multiple skills
// which will take parameters skill name, position on x-axis & positon on y-axis
const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-bold 
      bg-dark text-light dark:bg-light dark:text-dark py-3 px-6 shadow-dark cursor-pointer
      lg:py-2 lg:px-4 md:text-sm xs:text-xs md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
      xs:text-black xs:dark:text-light xs:font-bold
      "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center text-dark dark:text-light md:text-5xl md:mt-42">
        Skills
      </h2>
      <div
        className="w-full h-screen lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] relative flex items-center justify-center rounded-full 
      bg-circularLight dark:bg-circularDark
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-bold bg-dark text-light
         p-7 shadow-dark dark:shadow-light cursor-pointer absolute dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        {/* <Skill name="NodeJS" x="66vw" y="-25vw" />
        <Skill name="ExpressJs" x="43vw" y="-18vw" />
        <Skill name="HTML/CSS" x="40vw" y="-4vw" />
        <Skill name="ReactJs" x="33vw" y="15vw" />
        <Skill name="Java" x="33vw" y="-20vw" />
        <Skill name="Tailwind CSS" x="5vw" y="5vw" z="10vw" />
        <Skill name="NextJS" x="13vw" y="-9vw" />
        <Skill name="Python" x="27vw" y="-15vw" />
        <Skill name="GitHub" x="24vw" y="-22vw" />
        <Skill name="C/C++" x="-5vw" y="-23vw" />
        <Skill name="Firebase" x="-25vw" y="18vw" />
        <Skill name="Flutter" x="4vw" y="-7vw" />
        <Skill name="MongoDB" x="-12vw" y="20vw" />
        <Skill name="Figma" x="-22vw" y="1vw" />
        <Skill name="Javascript" x="-34vw" y="8vw" /> */}
        <Skill name="MongoDb" x="calc(30vw - 50%)" y="0vw" />
        <Skill name="HTML/CSS" x="calc(17vw - 50%)" y="4vw" />
        <Skill name="Javascript" x="calc(40vw - 50%)" y="-20vw" />
        <Skill name="NodeJS" x="calc(15vw - 50%)" y="-12vw" />
        <Skill name="ExpressJs" x="calc(10vw - 50%)" y="10vw" />
        <Skill name="Tailwind CSS" x="calc(5vw - 50%)" y="-7vw" />
        <Skill name="Java" x="calc(-13vw - 50%)" y="10vw" />
        <Skill name="C/C++" x="calc(2vw - 50%)" y="5vw" />
        <Skill name="Python" x="calc(7vw - 50%)" y="10vw" />
        <Skill name="GitHub" x="calc(-15vw - 50%)" y="-12vw" />
        <Skill name="Flutter" x="calc(-37vw - 50%)" y="-7vw" />
        <Skill name="Firebase" x="calc(-40vw - 50%)" y="5vw" />
        <Skill name="Figma" x="calc(-64vw - 50%)" y="17vw" />
      </div>
    </>
  );
};

export default Skills;
