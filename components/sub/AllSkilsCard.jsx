import Image from "next/image";
import React from "react";

const AllSkillsCard = ({ src, title, width, height }) => {
  return (
    <div className="flex items-center justify-start w-full h-auto border-[2px] border-[#5f29ff96] shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-[20px] py-[10px] rounded-lg text-gray-200 shadow-2xl">
      <Image
        src={src}
        alt={title}
        width={width}
        height={height}
        className="px-4 py-4 object-contain aspect-square"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500  to-purple-500">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default AllSkillsCard;
