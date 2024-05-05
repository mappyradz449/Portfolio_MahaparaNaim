import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-darkPink text-sm font-medium  text-dark dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <Link href="/" className="underline text-sm font-medium sm:text-xs">
          HELLO! Thanks for having a look at my portfolio!
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
