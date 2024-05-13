// "use client";
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import ProjectsSection from "@/components/ProjectsSection";

const projects = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Projects Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect />
      <main className="w-full flex mb-16 flex-col items-center justify-center">
        <Layout className="pt-16">
          <ProjectsSection />
        </Layout>
      </main>
    </>
  );
};

export default projects;
