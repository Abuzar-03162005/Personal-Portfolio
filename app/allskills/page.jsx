import React from "react";
import AllSkillsCard from "@/components/sub/AllSkilsCard";
import { languageCardData } from "@/constants";

const page = () => {
  return (
    <div id="AllSkills" className="text-center py-20 ">
      <h1 className="text-[40px] z-30 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 py-20">
        {"-⟬"}All Skills Are Here{"⟭-"}
      </h1>
      <div className="grid grid-cols-3 gap-y-[2rem]">
        {languageCardData.map((languageCardData, index) => (
          <div className="w-full text-start h-full px-10 z-30">
            <AllSkillsCard
              src={languageCardData.Image}
              title={languageCardData.skill_name}
              width={languageCardData.width}
              height={languageCardData.height}
              key={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
