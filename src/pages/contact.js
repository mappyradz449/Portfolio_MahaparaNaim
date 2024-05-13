import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactCard from "@/components/ContactCard";
import { FaHackerrank } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { FaBehance } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";
import TransitionEffect from "@/components/TransitionEffect";

const ContactData = [
  {
    id: 1,
    icon: (
      <MdEmail className="fill-darkPink w-24 h-24 hover:fill-pink-400 top-1/2 left-1/2 transform translate-x-[9%] -translate-y-[100%]" />
    ),
    title: "mahaparanaim57@gmail.com",
    link: "",
  },
  {
    id: 2,
    icon: (
      <FaLinkedin className="fill-darkPink w-24 h-24 hover:fill-pink-400 top-1/2 left-1/2 transform translate-x-[9%] -translate-y-[100%]" />
    ),

    title: "mahaparanaim",
    link: "https://www.linkedin.com/in/mahaparanaim/",
  },
  {
    id: 3,
    icon: (
      <IoLogoWhatsapp className="fill-darkPink w-24 h-24 hover:fill-pink-400 top-1/2 left-1/2 transform translate-x-[9%] -translate-y-[100%]" />
    ),
    title: "+880-1769760571",
    link: "",
  },

  {
    id: 4,
    icon: (
      <FaPhoneAlt className="fill-darkPink w-20 h-20 hover:fill-pink-400 top-1/2 left-1/2 transform translate-x-[9%] -translate-y-[100%]" />
    ),
    title: "+880-1769760571",
    link: "",
  },
  {
    id: 5,
    icon: (
      <FaHackerrank className="fill-darkPink w-20 h-20 hover:fill-pink-400 top-1/2 left-1/2 transform translate-x-[9%] -translate-y-[100%]" />
    ),
    title: "@mahaparanaim57",
    link: "https://www.hackerrank.com/profile/mahaparanaim57",
  },
  {
    id: 6,
    icon: (
      <FaGithub className="fill-darkPink w-20 h-20 hover:fill-pink-400 top-1/2 left-1/2 transform translate-x-[9%] -translate-y-[100%]" />
    ),
    title: "mappyradz449",
    link: "https://github.com/mappyradz449",
  },
  {
    id: 7,
    icon: (
      <SiLeetcode className="fill-darkPink w-20 h-20 hover:fill-pink-400 top-1/2 left-1/2 transform translate-x-[9%] -translate-y-[100%]" />
    ),
    title: "mahapara",
    link: "https://leetcode.com/u/mahapara/",
  },
  {
    id: 8,
    icon: (
      <SiCodechef className="fill-darkPink w-20 h-20 hover:fill-pink-400 top-1/2 left-1/2 transform translate-x-[9%] -translate-y-[100%]" />
    ),
    title: "mapyradz",
    link: "https://www.codechef.com/users/mapyradz",
  },
  {
    id: 9,
    icon: (
      <SiCodeforces className="fill-darkPink w-20 h-20 hover:fill-pink-400 top-1/2 left-1/2 transform translate-x-[9%] -translate-y-[100%]" />
    ),
    title: "mapyradz",
    link: "https://codeforces.com/profile/mapyradz",
  },
  {
    id: 10,
    icon: (
      <FaBehance className="fill-darkPink w-20 h-20 hover:fill-pink-400 top-1/2 left-1/2 transform translate-x-[9%] -translate-y-[100%]" />
    ),
    title: "Mahapara Naim",
    link: "https://www.behance.net/gallery/167476191/Mobile-App-UIUX]",
  },
  {
    id: 10,
    icon: (
      <FaDribbbleSquare className="fill-darkPink w-20 h-20 hover:fill-pink-400 top-1/2 left-1/2 transform translate-x-[9%] -translate-y-[100%]" />
    ),
    title: "Mapy Radz",
    link: "https://dribbble.com/Mahapara]",
  },
];

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
const contact = () => {
  return (
    <>
      <Head>
        <title>Portfolio | ContactMe Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect />
      <main className="w-full flex mb-16 flex-col items-center justify-center">
        <Layout className="pt-10">
          <div className="w-full h-full inline-block p-5 mt-10 mb-10 xl:p-9 lg:p-8 md:p-6 sm:p-5 ">
            <div className="h-5 border-b-2 border-darkPink text-2xl text-center ">
              <span className=" bg-light dark:bg-gray-950 px-2 py-4 my-4 text-3xl lg:text-2xl md:text-xl font-semibold uppercase text-dark/75 dark:text-white">
                Let's Connect
              </span>
            </div>
            <motion.p
              className="inline-block w-full text-dark pt-5 mt-5 dark:text-white font-light text-xl text-center lg:text-lg sm:text-base xs:text-sm"
              variants={quote}
              initial="initial"
              animate="animate"
            >
              Currently on the lookout for new opportunities as a{" "}
              <bold className="text-darkPink">
                SQA Engineer, Product Manager, or FrontEnd Developer
              </bold>
              . I'm dedicated to crafting innovative, bug-free systems with a
              focus on seamless user experiences.Feel free to contact me for any
              inquiries!
            </motion.p>

            <div className="grid grid-cols-4 lg:grid-cols-2 md:grid-cols-1 place-items-center gap-10">
              {/* <div className="flex items-center justify-center col-span-1 pt-16 mt-16 h-80 w-full rounded-xl bg-light/50 border-2 border-darkPink">
                <IoLogoWhatsapp className="fill-darkPink w-24 h-24 hover:fill-pink-400 top-1/2 left-1/2 transform -translate-x-[5%] -translate-y-[75%]" />
              </div>
              <div className="col-span-1 pt-16 mt-16 h-80 w-full rounded-xl bg-light/50 border-2 border-darkPink text-center ">
                <IoLogoWhatsapp className="fill-darkPink w-24 h-24 hover:fill-pink-400 top-1/2 left-1/2 transform translate-x-[120%] translate-y-[10%]" />
              </div>
              <div className="col-span-1 pt-16 mt-16 h-80 w-full rounded-xl bg-light/50 border-2 border-darkPink text-center">
                <IoLogoWhatsapp className="fill-darkPink w-24 h-24 hover:fill-pink-400 top-1/2 left-1/2 transform translate-x-[120%] -translate-y-[10%]" />
              </div> */}

              {ContactData.map((contact) => (
                <ContactCard
                  key={contact.id}
                  icon={contact.icon}
                  title={contact.title}
                  link={contact.link}
                />
              ))}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default contact;
