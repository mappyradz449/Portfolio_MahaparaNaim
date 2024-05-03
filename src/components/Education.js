import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mt-0 w-[80%] mx-auto flex flex-col 
    items-center justify-between"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>

        <p className="font-medium w-full">{info}</p>
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
        className="font-bold text-8xl mb-32 w-full text-center text-dark"
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        Educational Background
      </motion.h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
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
