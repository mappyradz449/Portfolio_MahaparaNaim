import React from "react";
import { HiCodeBracket } from "react-icons/hi2";
import { BsEye } from "react-icons/bs";
import { Slide, Fade } from "react-awesome-reveal";

import Link from "next/link";

const ProjectsCard = ({
  imgUrl,
  title,
  description,
  techNames,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div>
      <div
        className="h-72 lg:h-62 md:h-92 sm:h-52  pt-16 mt-16 rounded-xl relative group sm:bg-contain"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <div className="text-light  sm:text-wrap sm:inline-block absolute font-medium group-hover:top-[0] p-4 w-full h-full divide-neutral-500">
            <Slide cascade direction="right">
              <h1 className="text-2xl sm:text-lg font-semibold text-darkPink/100">
                {title}
              </h1>
              <Fade cascade damping={0.05} className="sm:text-xs">
                {description}
              </Fade>
              <Fade
                className="text-darkPink/100 sm:text-xs"
                cascade
                damping={0.05}
              >
                {techNames}
              </Fade>
            </Slide>
          </div>
          <Link
            href={gitUrl}
            className="h-14 sm:h-9 w-14 sm:w-9 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <HiCodeBracket className="h-9 w-9 sm:h-4 sm:w-4 text-[#ADB7BE] absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 sm:w-9 sm:h-9 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <BsEye className="h-9 w-9 sm:h-4 sm:w-4 text-[#ADB7BE] absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
