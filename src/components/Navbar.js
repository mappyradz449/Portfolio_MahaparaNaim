import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import GithubIcon, { LinkedInIcon, MoonIcon } from "./Icons";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";

const MotionImage = motion(Image);

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  //console.log(router);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[2px] inline-block bg-darkPink 
      absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-20 py-10 font-medium flex items-center justify-between">
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://www.facebook.com/mapy.radz/"
          target={"_blank"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.7 }}
        >
          <FaFacebook className="fill-darkPink w-6 h-6 lg:mx-5 sm:mx-1 hover:fill-pink-400" />
        </motion.a>

        <motion.a
          href="https://www.facebook.com/mapy.radz/"
          target={"_blank"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.7 }}
        >
          <PiInstagramLogoFill className="fill-darkPink w-6 h-6 lg:mx-5 sm:mx-1 hover:fill-pink-400" />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/mahaparanaim/"
          target={"_blank"}
          whileHover={{ y: -3 }}

          // className="fill-darkPink w-8 h-8 mx-5 hover:fill-pink-400"
        >
          <FaLinkedin
            className={
              "fill-darkPink w-6 h-6 lg:mx-5 sm:mx-1 hover:fill-pink-400"
            }
          />
        </motion.a>

        <motion.a
          href="https://github.com/mappyradz449"
          target={"_blank"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.7 }}
        >
          <FaGithub className="fill-darkPink w-6 h-6 lg:mx-5 sm:mx-1 hover:fill-pink-400" />
        </motion.a>

        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.7 }}
        >
          <BsMoonStarsFill className="fill-darkPink w-5 h-5 lg:mx-4 sm:mx-1 hover:fill-pink-400" />
        </motion.a>
      </nav>

      {/* the animated puppy at center */}
      <MotionImage
        className="cursor-pointer rounded-full"
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.8, repeat: Infinity },
        }}
        src="/images/puppy/Puppy.jpg"
        width={50}
        height={50}
        alt="Logo"
      />

      <nav>
        <CustomLink href="/" title="Home" className="mx-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Project" className="mx-4" />
      </nav>
    </header>
  );
};

export default Navbar;
