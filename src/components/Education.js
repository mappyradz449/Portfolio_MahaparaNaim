import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mt-0 w-[60%] md:w-[80%] mx-auto flex flex-col 
    items-center justify-between"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-black dark:text-white">
          {type}
        </h3>
        <span className="capitalize underline font-medium text-dark/75 dark:text-slate-50/80 xs:text-sm">
          {time} | {place}
        </span>

        <p className="font-medium text-xl w-full md:text-lg sm:text-base dark:text-white">
          {info}
        </p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  //this scroll hook will monitor the scroll the div before line div
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <motion.h2
        className="font-bold text-8xl mb-32 w-full text-center text-dark dark:text-light md:text-5xl xs:text-4xl md:mb-16"
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        Educational Background
      </motion.h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="B.Sc. in Computer Science & Engineering"
            time="Feb,2019 - March,2023"
            place="Military Institute of Science & Technology"
            info="CGPA-3.49"
          />

          <Details
            type="HIGHER SECONDARY CERTIFICATE(HSC)"
            time="Feb,2016 - Feb,2018"
            place="Rajuk Uttara Model School & College"
            info="GPA-5.00"
          />

          <Details
            type="SECONDARY SCHOOL CERTIFICATE(SSC)"
            time="Feb,2014 - Feb,2016"
            place="Rajuk Uttara Model School & College"
            info="GPA-5.00"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
