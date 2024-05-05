import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-darkPink"
    : "text-dark dark:text-white border-slate-600 hover:border-purple-600";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 sm:border-1 border-darkPink px-6 py-3 text-xl cursor-pointer md:text-base md:px-4 md:py-1 sm:text-xs sm:px-2 sm:py-0`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
