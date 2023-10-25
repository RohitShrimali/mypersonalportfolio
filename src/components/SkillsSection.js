import React from "react";
import SkillsCard from "./SkillsCard";


const SkillsSection = () => {
  return (
    <div data-aos="fade-right" className="mb-20 lg:mb-36">
      <h1 className="text-5xl lg:text-7xl gradient-text mb-0">My Skills</h1>
      <hr />
      <div className="h-[300px] overflow-y-scroll select-none scroll-bar">
        <SkillsCard title={"HTML5"} value={75} />
        <SkillsCard title={"CSS3"} value={75} />
        <SkillsCard title={"JAVASCRIPT"} value={50} />
        <SkillsCard title={"PHP"} value={20} />
        <SkillsCard title={"BOOTSTRAP"} value={80} />
        <SkillsCard title={"JQUERY"} value={50} />
        <SkillsCard title={"REACT.JS"} value={30} />
        <SkillsCard title={"Tailwind"} value={20} />
        <SkillsCard title={"Figma"} value={10} />
        <SkillsCard title={"C"} value={50} />
        <SkillsCard title={"C++"} value={50} />
        <SkillsCard title={"MYSQL"} value={40} />
      </div>
    </div>
  );
};

export default SkillsSection;
