import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const quote = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      staggerChildren: 0.08,
      duration: 1,
    },
  },
};

// const singleWord = {
//   initial: {
//     opacity: 0,
//     y: 50,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//     },
//   },
// };

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div
      className="w-full mx-auto py-4 flex items-center justify-center text-center
   overflow-hidden min-w-min"
    >
      <motion.h1
        className={`inline-block w-full text-dark font-bold text-8xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {" "}
        {text} & I'm an aspiring
        <Typewriter
          options={{
            strings: [
              "Web Developer.",
              "UI/UX Designer.",
              "SQA Engineer.",
              "Product Manager.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        {/* {text.split(" ").map((word, index) => (
          <>
            <motion.span
              // this will generate unique key
              key={word + "-" + index}
              className="inline-block"
              variants={singleWord}
            >
              {word}&nbsp;
            </motion.span>
            
          </>
        ))} */}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
