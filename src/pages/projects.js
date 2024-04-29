import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import ProjectsCard from "@/components/ProjectsCard";

const ProjectsData = [
  {
    id: 1,
    title: "React Website",
    description: "Project 1 Description",
    image: "/images/projects/agency-website-cover-image.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mappyradz449/Portfolio",
    previewUrl: "https://mahatodolist.netlify.app/",
  },

  {
    id: 2,
    title: "NextJS Website",
    description: "Project 2 Description",
    image: "/images/projects/agency-website-cover-image.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mappyradz449/Portfolio",
    previewUrl: "https://mahatodolist.netlify.app/",
  },

  {
    id: 3,
    title: "NodeJS Website",
    description: "Project 3 Description",
    image: "/images/projects/agency-website-cover-image.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mappyradz449/Portfolio",
    previewUrl: "https://mahatodolist.netlify.app/",
  },

  {
    id: 4,
    title: "Flutter App",
    description: "Project 4 Description",
    image: "/images/projects/agency-website-cover-image.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/mappyradz449/Portfolio",
    previewUrl: "https://mahatodolist.netlify.app/",
  },

  {
    id: 5,
    title: "React Website",
    description: "Project 5 Description",
    image: "/images/projects/agency-website-cover-image.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mappyradz449/Portfolio",
    previewUrl: "https://mahatodolist.netlify.app/",
  },

  {
    id: 6,
    title: "React Website",
    description: "Project 6 Description",
    image: "/images/projects/agency-website-cover-image.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mappyradz449/Portfolio",
    previewUrl: "https://mahatodolist.netlify.app/",
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
            <button className="rounded-full border-2 border-darkPink px-6 py-3 text-xl cursor-pointer">
              All
            </button>
            <button className="rounded-full border-2 border-slate-700 hover:border-purple-400 px-6 py-3 text-xl cursor-pointer">
              Web
            </button>
            <button className="rounded-full border-2 border-slate-700 hover:border-purple-400 px-6 py-3 text-xl cursor-pointer">
              Mobile
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {ProjectsData.map((project) => (
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
