"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectsCard from "@/components/ProjectsCard";
import ProjectTag from "@/components/ProjectTag";

const ProjectsData = [
  {
    id: 1,
    title: "Syvel",
    description: "A ride-sharing web application to request car rides. ",
    tech: "[ HTML/CSS, JavaScript, ExpressJS, Oracle ]",
    image: "/images/projects/syvel.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/darkluminance/Ride-Sharing-service-database",
    previewUrl:
      "https://www.facebook.com/100018744274370/videos/840465419921593/",
  },

  {
    id: 2,
    title: "LiveChat",
    description: "A live chatroom for conversations.",
    tech: "[ ExpressJs, SocketIO & shadcn/ui ]",
    image: "/images/projects/livechat.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mappyradz449/chatrooms-socketio-express",
    previewUrl: "https://live-chat-maha.vercel.app/room",
  },

  {
    id: 3,
    title: "TodoList",
    description: "A todo list to note down everyday activities.",
    tech: "[ ReactJs, NodeJs, ExpressJs, MongoDB & Redux ]",
    image: "/images/projects/todo.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mappyradz449/TodoList",
    previewUrl: "https://mahatodolist.netlify.app/",
  },

  {
    id: 4,
    title: "LinkCut",
    description: "Shortens lengthy URLs to short ones.",
    tech: "[ Next js, Tailwindcss ]",
    image: "/images/projects/linkcut.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mappyradz449/url-shortener",
    previewUrl: "https://link-cut.vercel.app/",
  },

  {
    id: 5,
    title: "DreamHouse",
    description: "An interior designer's web app to assist clients.",
    tech: "[ HTML/CSS, Bootstrap, JavaScript, Firebase ]",
    image: "/images/projects/dream_house.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mappyradz449/Dream_House",
    previewUrl: "https://mappyradz449.github.io/Dream_House/",
  },

  {
    id: 6,
    title: "Credit Card Checkout",
    description: "Embrace the dark hues with ethereal lightness.",
    tech: "[ Figma ]",
    image: "/images/projects/creditcardpg.jpg",
    tag: ["All", "UI/UX"],
    gitUrl:
      "https://www.figma.com/file/93EhJaCjZeuLTCU6JHmC3g/DailyUI---%2302-(Credit-Card-Checkout-Page)?type=design&node-id=13%3A15&mode=design&t=Y8Yn3XPQMpH5xDkd-1",
    previewUrl:
      "https://dribbble.com/shots/23591432-Daily-UI-02-Credit-Card-Checkout",
  },
  {
    id: 7,
    title: "Flutter App TBL",
    description: "An OTP based authentication app.",
    tech: "[ Flutter, Figma, Firebase ]",
    image: "/images/projects/TBL.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/mappyradz449/App_TBL",
    previewUrl: "https://github.com/mappyradz449/App_TBL",
  },
  {
    id: 8,
    title: "Sign Up Page",
    description: "Minimal aesthetics, ensuring a seamless accessibility.",
    tech: "[ Figma ]",
    image: "/images/projects/signuppage.jpg",
    tag: ["All", "UI/UX"],
    gitUrl:
      "https://www.figma.com/file/5T0zFbGwzttzehzAXmXmBP/DailyUI-%2301?type=design&node-id=36%3A488&mode=design&t=Y8Yn3XPQMpH5xDkd-1",
    previewUrl: "https://dribbble.com/shots/23554478-Daily-UI-01-Sign-Up-Page",
  },
  {
    id: 9,
    title: "A baby monitoring flutter app",
    description: "A Wearable Monitoring Device for Infants.",
    tech: "[ Flutter, Dart, Firebase, Python, Raspberry Pi ]",
    image: "/images/projects/BabyMonitor.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/RaiyanJahangir/Capstone-Project",
    previewUrl:
      "https://drive.google.com/file/d/1FYKX5OrI6yVYzbAZ322zZjEqFaQTGDw_/view?usp=sharing",
  },
  {
    id: 10,
    title: "Logo",
    description: "Personal logo design using arc pugin.",
    tech: "[ Figma ]",
    image: "/images/projects/logo.png",
    tag: ["All", "UI/UX"],
    gitUrl: "https://github.com/mappyradz449/Portfolio",
    previewUrl: "https://dribbble.com/shots/23649792-Logo-01",
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

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  //function to filter out the projects when tag is selected
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <>
      <motion.h1
        className="inline-block w-full text-dark dark:text-light font-bold text-8xl text-center mb-7 md:text-6xl sm:text-4xl"
        variants={quote}
        initial="initial"
        animate="animate"
      >
        Deserve before you desire!
      </motion.h1>
      <div className="h-5 border-b-2 border-darkPink text-2xl text-center ">
        <span className=" bg-light dark:bg-gray-950 px-2 py-4 my-4 text-3xl lg:text-2xl md:text-xl font-semibold uppercase text-dark/75 dark:text-light/75">
          Projects
        </span>
      </div>
      <div className="text-dark font-bold flex flex-row justify-center items-center gap-4 sm:gap-2 py-10 md:font-medium sm:font-normal">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI/UX"
          isSelected={tag === "UI/UX"}
        />
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8">
        {filteredProjects.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            description={project.description}
            techNames={project.tech}
            imgUrl={project.image}
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
