"use client";
import Layout from "@/components/Layout";
import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import ProjectsCard from "@/components/ProjectsCard";
import ProjectTag from "@/components/ProjectTag";

const ProjectsData = [
  {
    id: 1,
    title: "React Website",
    description: "Project 1 Description",
    image: "/images/projects/syvel.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mappyradz449/Portfolio",
    previewUrl: "https://mahatodolist.netlify.app/",
  },

  {
    id: 2,
    title: "NextJS Website",
    description: "Project 2 Description",
    image: "/images/projects/livechat.jpg",

    tag: ["All", "Web"],
    gitUrl: "https://github.com/mappyradz449/Portfolio",
    previewUrl: "https://mahatodolist.netlify.app/",
  },

  {
    id: 3,
    title: "NodeJS Website",
    description: "Project 3 Description",
    image: "/images/projects/todo.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mappyradz449/Portfolio",
    previewUrl: "https://mahatodolist.netlify.app/",
  },

  {
    id: 4,
    title: "Flutter App",
    description: "Project 4 Description",
    image: "/images/projects/linkcut.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mappyradz449/Portfolio",
    previewUrl: "https://mahatodolist.netlify.app/",
  },

  {
    id: 5,
    title: "React Website",
    description: "Project 5 Description",
    image: "/images/projects/dream_house.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mappyradz449/Portfolio",
    previewUrl: "https://mahatodolist.netlify.app/",
  },

  {
    id: 6,
    title: "React Website",
    description: "Project 6 Description",
    image: "/images/projects/BabyMonitor.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/mappyradz449/Portfolio",
    previewUrl: "https://mahatodolist.netlify.app/",
  },
  {
    id: 7,
    title: "React Website",
    description: "Project 7 Description",
    image: "/images/projects/TBL.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/mappyradz449/Portfolio",
    previewUrl: "https://mahatodolist.netlify.app/",
  },
  {
    id: 8,
    title: "React Website",
    description: "Project 7 Description",
    image: "/images/projects/signuppage.jpg",
    tag: ["All", "UI/UX"],
    gitUrl: "https://github.com/mappyradz449/Portfolio",
    previewUrl: "https://dribbble.com/shots/23554478-Daily-UI-01-Sign-Up-Page",
  },
  {
    id: 9,
    title: "React Website",
    description: "Project 7 Description",
    image: "/images/projects/creditcardpg.jpg",
    tag: ["All", "UI/UX"],
    gitUrl: "https://github.com/mappyradz449/Portfolio",
    previewUrl:
      "https://dribbble.com/shots/23591432-Daily-UI-02-Credit-Card-Checkout",
  },
  {
    id: 10,
    title: "React Website",
    description: "Project 7 Description",
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

const projects = () => {
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
      <Head>
        <title>Portfolio | Projects Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <main className="w-full flex mb-16 flex-col items-center justify-center">
        <Layout className="pt-16">
          <motion.h1
            className="inline-block w-full text-dark font-bold text-8xl text-center"
            variants={quote}
            initial="initial"
            animate="animate"
          >
            Deserve before you desire!
          </motion.h1>

          <div className="text-dark font-bold flex flex-row justify-center items-center gap-2 py-6">
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
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project) => (
              <ProjectsCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                tags={project}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
