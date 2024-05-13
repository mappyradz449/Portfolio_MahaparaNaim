import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className="capitalize font-bold text-2xl text-black dark:text-white sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primary dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize underline font-medium text-dark/75 dark:text-slate-50/80 xs:text-sm">
          {time} | {address}
        </span>

        <p className="font-medium text-xl w-full md:text-lg sm:text-base dark:text-white">
          {work}
        </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  //this scroll hook will monitor the scroll the div before line div
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <motion.h2
        className="font-bold text-8xl md:text-5xl xs:text-4xl md:mb-16 mb-32 w-full 
        text-center text-dark dark:text-light"
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        Experiences
      </motion.h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Web Developer"
            company="John Hopkings University - Center for Communication Programs"
            companyLink="www.google.com"
            time="June,2023 - October,2023"
            address="Banani"
            work="Worked as a Front End Web Developer on a poject named 
            Durnibar-Preventing Child Marriages in Bangladesh"
          />

          <Details
            position="Software Engineering Internship"
            company="Trust Bank Ltd."
            companyLink="https://www.tblbd.com/"
            time="Feb,2022 - Mar,2022"
            address="Jahangir Gate Dhaka Cantonment"
            work="Developer an Android Application that is identical
            to the app of Trust Bank Ltd. using Flutter framework & Firebase as database"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
