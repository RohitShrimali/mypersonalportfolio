import React, { useEffect } from "react";
import PortfolioCard from "../src/components/PortfolioCard";
import HomeCard from "../src/components/HomeCard";
import AboutCard from "../src/components/AboutCard";
import SkillsSection from "../src/components/SkillsSection";
import ProjectSection from "../src/components/ProjectSection";
import ContactSection from "../src/components/ContactSection";
import AOS from "aos";
import "aos/dist/aos.css";
// import PortfolioCardComp from "./components/PortfolioCardComp";
// import PortfolioCardComp from "./components/PortfolioCardComp";
// import '../src/index.css';
import './index.css';




const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="w-[80vw]  mx-auto main">
      <PortfolioCard />
      <HomeCard />
      <AboutCard />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
      <img src="https://cdn.pixabay.com/photo/2021/11/04/19/39/jellyfish-6769173_960_720.png" alt="" className="bg" />
    <img src="https://cdn.pixabay.com/photo/2012/04/13/13/57/scallop-32506_960_720.png" alt="" className="bg2" />
    </div>
  );
};

export default Home;