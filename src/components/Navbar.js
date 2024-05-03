import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import GithubIcon, { LinkedInIcon, MoonIcon, SunIcon } from "./Icons";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

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
      dark:bg-light
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };
  //console.log(router);
  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[2px] inline-block bg-light 
      absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}
      dark:bg-darkPink
      `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-20 py-10 font-medium flex items-center 
    justify-between dark:text-darkPink relative z-10 lg:px-16 md:px-12 sm:px-8"
    >
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      {/* desktop view div */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center justify-center flex-wrap">
          <CustomLink href="/" title="Home" className="mx-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Project" className="mx-4" />

          {/* <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.7 }}
        >
          <BsMoonStarsFill className="fill-darkPink w-5 h-5 lg:mx-4 sm:mx-1 hover:fill-pink-400" />
        </motion.a> */}
        </nav>

        <nav className="flex items-center justify-center">
          <motion.a
            href="https://www.facebook.com/mapy.radz/"
            target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.7 }}
          >
            <FaFacebook className="fill-darkPink w-6 h-6 mx-2 hover:fill-pink-400" />
          </motion.a>

          <motion.a
            href="https://www.facebook.com/mapy.radz/"
            target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.7 }}
          >
            <PiInstagramLogoFill className="fill-darkPink w-6 h-6 mx-3 hover:fill-pink-400" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/mahaparanaim/"
            target={"_blank"}
            whileHover={{ y: -3 }}

            // className="fill-darkPink w-8 h-8 mx-5 hover:fill-pink-400"
          >
            <FaLinkedin
              className={"fill-darkPink w-6 h-6 mx-3 hover:fill-pink-400"}
            />
          </motion.a>

          <motion.a
            href="https://github.com/mappyradz449"
            target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.7 }}
          >
            <FaGithub className="fill-darkPink w-6 h-6 mx-3 hover:fill-pink-400" />
          </motion.a>

          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.7 }}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`mx-3 w-6 h-6 rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </motion.button>
        </nav>
      </div>
      {/* mobile view div */}

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className="pb-1"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className="pb-1"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Project"
              className="pb-1"
              toggle={handleClick}
            />

            {/* <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.7 }}
        >
          <BsMoonStarsFill className="fill-darkPink w-5 h-5 lg:mx-4 sm:mx-1 hover:fill-pink-400" />
        </motion.a> */}
          </nav>

          <nav className="flex items-center justify-center pt-5">
            <motion.a
              href="https://www.facebook.com/mapy.radz/"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.7 }}
            >
              <FaFacebook className="fill-darkPink w-6 h-6 mx-2 hover:fill-pink-400" />
            </motion.a>

            <motion.a
              href="https://www.facebook.com/mapy.radz/"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.7 }}
            >
              <PiInstagramLogoFill className="fill-darkPink w-6 h-6 mx-3 hover:fill-pink-400" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/mahaparanaim/"
              target={"_blank"}
              whileHover={{ y: -3 }}

              // className="fill-darkPink w-8 h-8 mx-5 hover:fill-pink-400"
            >
              <FaLinkedin
                className={"fill-darkPink w-6 h-6 mx-3 hover:fill-pink-400"}
              />
            </motion.a>

            <motion.a
              href="https://github.com/mappyradz449"
              target={"_blank"}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.7 }}
            >
              <FaGithub className="fill-darkPink w-6 h-6 ml-3 hover:fill-pink-400" />
            </motion.a>

            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.7 }}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`mx-3 w-6 h-6 rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </motion.button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[45%] top-5 translate-x-[45%] self-center">
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
      </div>
    </header>
  );
};

export default Navbar;
