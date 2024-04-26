import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-darkPink font-extrabold text-lg pacifico-regular text-dark">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <Link href="/" className="pacifico-regular font-extrabold">
          HELLO
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
