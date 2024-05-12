import React from "react";
import { motion } from "framer-motion";

const ContactCard = ({ icon, title, link }) => {
  return (
    <div className="flex items-center justify-center relative pt-16 mt-16 h-80 w-full rounded-xl bg-light/50 dark:bg-light border-2 border-darkPink">
      <div className="p-5 absolute cursor-pointer">{icon}</div>
      <div className="font-light absolute  text-base cursor-pointer hover:font-bold hover:text-darkPink hover:underline ">
        <motion.a
          href={link}
          target={"_blank"}
          whileHover={{ y: -3 }}

          // className="fill-darkPink w-8 h-8 mx-5 hover:fill-pink-400"
        >
          {title}
        </motion.a>
      </div>
    </div>
  );
};

export default ContactCard;
// className =
//   "font-light absolute  text-base cursor-pointer hover:font-bold hover:underline ";
