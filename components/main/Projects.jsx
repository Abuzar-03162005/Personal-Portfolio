import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-5 z-30"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <Link href="https://e-book-search.netlify.app/" target="_blank">
          <ProjectCard
            src="/project1.png"
            title="Interactive Animated Web-design"
            description="Here you can see this is a very minimalistic design with awesome animations created with html css and pure javascript"
          />
        </Link>
        <Link href="/" target="_blank">
          <ProjectCard
            src="/project2.png"
            title="Space Themed portfolio"
            description="Here's a very minimalistic designed awesome UI/UX using html css and icons used in it for more click on it and see my work"
          />
        </Link>
        <Link href="https://honey-market.netlify.app/" target="_blank">
          <ProjectCard
            src="/project3.png"
            title="Honey Factory Website"
            description="This is a website-design for a honey factory with a lto of functions and with a beautifull UI/UX design click on it and see my work"
          />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
