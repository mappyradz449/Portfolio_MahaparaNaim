import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import proPic from "../../public/images/profile/Mahapara.jpg";

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
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-12">
          {/* title tag */}
          <motion.h1
            className="inline-block w-full text-dark font-bold text-8xl text-center"
            variants={quote}
            initial="initial"
            animate="animate"
          >
            Consistency is the key!
          </motion.h1>

          {/* //Biography container  */}
          <div className="gird w-full grid-cols-8 gap-3 justify-evenly mr-10">
            <div className="pt-16 pb-24 w-1/2 flex-col col-span-3 items-start justify-start">
              <div class="h-5 border-b-2 border-darkPink text-2xl text-center">
                <span class=" bg-light px-2 m-10 p-10 text-3xl font-semibold uppercase text-dark/75">
                  Biography
                </span>
              </div>
              <p className="my-4 pt-5 font-semibold text-xl text-slate-600/70 ">
                Hello, This i Mahapara Naim, an aspiring Web Developer, UI/UX
                designer & QA engineer with a passion for creating aesthetic,
                user-centered bug free systems.
              </p>
              <p className="my-4 pt-5 font-semibold text-xl text-slate-600/70">
                I'm a motivated & dedicated individual with a B.Sc. degree in
                CSE from MIST. I have gained valuable experience in a variety of
                programming languages like C, C++, Java, and Python while
                working on various projects as well as I am a quick learner,
                able to adapt to new tasks and challenges with ease.
              </p>
              <p className="my-4 pt-5 font-semibold text-xl text-slate-600/70">
                Moreover, my communication skills and ability to work well in a
                team make me an excellent fit for any position where
                collaboration & teamwork are essential.
              </p>
            </div>
            {/* Image container */}
            <div className="relative col-span-4 flex flex-col w-11/12 justify-end items-end">
              <div className="absolute inline-block ">
                <Image
                  src={proPic}
                  alt="Portfolio"
                  className="w-80 h-85 rounded-2xl mb-24 mr-4 shadow-2xl shadow-darkPink/75 hover:shadow-red-400/100"
                />
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
