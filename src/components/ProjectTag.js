import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-darkPink"
    : "text-dark border-slate-600 hover:border-purple-600";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 border-darkPink px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
