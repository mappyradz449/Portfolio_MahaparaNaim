import React from "react";
import { HiCodeBracket } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";
import { BsEye } from "react-icons/bs";

import Link from "next/link";

const ProjectsCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 pt-16 mt-16 rounded-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <HiCodeBracket className="h-9 w-9 text-[#ADB7BE] absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <BsEye className="h-9 w-9 text-[#ADB7BE] absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
          </Link>
        </div>
      </div>

      {/* <div className="text-light font-medium rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div> */}
    </div>
  );
};

export default ProjectsCard;
