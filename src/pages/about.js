import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import proPic from "../../public/images/profile/Mahapara.jpg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const MotionImage = motion(Image);

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

const about = () => {
  return (
    <>
      <Head>
        <title>Portfolio | About Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-cente">
        <Layout className="pt-12">
          {/* title tag */}
          <motion.h1
            className="inline-block w-full text-dark dark:text-light font-bold text-8xl text-center lg:text-5xl sm:text-4xl xs:text-xl"
            variants={quote}
            initial="initial"
            animate="animate"
          >
            Consistency is the key to success!
          </motion.h1>

          {/* //Biography container  */}
          <div className=" lg:order-2 gird w-full grid-cols-8 gap-3 justify-evenly mr-10">
            <div className="pt-16 pb-24 w-1/2 flex-col col-span-4 items-start justify-start xl:w-full xl:mb-24">
              <div className="h-5 border-b-2 border-darkPink text-2xl text-center ">
                <span className=" bg-light dark:bg-gray-950 px-2 m-10 p-10 text-3xl lg:text-2xl md:text-xl font-semibold uppercase text-dark/75 dark:text-white">
                  Biography
                </span>
              </div>
              <p className="my-4 pt-5 font-semibold text-xl lg:text-xl md:text-base sm:text-sm text-slate-600/70 dark:text-white/90">
                Hello, This i Mahapara Naim, an aspiring SQA Engineer, Product
                Manager & FrontEnd Web Developer with a passion for creating
                aesthetic, user-centered bug free systems.
              </p>
              <p className="my-4 pt-5 font-semibold text-xl lg:text-xl md:text-base sm:text-sm text-slate-600/70 dark:text-white/90">
                I'm a motivated & dedicated individual with a B.Sc. degree in
                CSE from MIST. I have gained valuable experience in a variety of
                programming languages like C, C++, Java, HTML/CSS, Javascript
                and Python while working on various projects as well as I am a
                quick learner, able to adapt to new tasks and challenges with
                ease.
              </p>
              <p className="my-4 pt-5 font-semibold text-xl lg:text-xl md:text-base sm:text-sm text-slate-600/70 dark:text-white/90">
                Moreover, my communication skills and ability to work well in a
                team make me an excellent fit for any position where
                collaboration & teamwork are essential.
              </p>
            </div>
            {/* Image container */}
            <div className="lg:order-1 relative flex flex-col col-span-4 w-[90%] justify-end items-end xl:flex-row xl:col-span-8 xl:justify-center xl:items-center xl:mt-4 xl:pt-4 xl:w-[95%]">
              <div className="absolute inline-block ">
                <MotionImage
                  src={proPic}
                  alt="Portfolio"
                  className="w-80 h-85 md:w-70 md:h-75 md:rounded-full rounded-2xl mb-24 mr-4 shadow-2xl  shadow-darkPink/75 hover:shadow-red-400/100 cursor-pointer"
                  priority
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                  whileHover={{
                    scale: 0.9,
                  }}
                />
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
