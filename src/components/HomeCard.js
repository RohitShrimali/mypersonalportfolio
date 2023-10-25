import React from "react";
import myImg from "../assets/my.jpg";
import '../index.css';
// import Swiper from "swiper";

const HomeCard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center mb-20 lg:mb-36">
      <div data-aos="fade-up-right" className="flex flex-col gap-5 lg:w-[50%]">
        <h1 className="text-5xl lg:text-7xl mb-0 gradient-text">MCA-Fresher</h1>
        <hr />
        <p className="text-gray-600 text-xl lg:text-2xl ">
          My name is Rohit Shrimali, and I am strong in design and integration with intuitive
          problem-solving skills. Proficient in HTML5, CSS3, JAVASCRIPT, MYSQL, BOOTSTRAP, JQUERY, PHP, and REACT.js.
          Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions.
          Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.
        </p>
        <p className="text-gray-600 text-xl lg:text-2xl ">
          I'm Seeking an entry-level position to begin my career in a high-level professional environment.
        </p>
      </div>
      <div data-aos="fade-up-left">
        <img
          src={myImg}
          alt="profile"
          className="rounded-full w-[200px] h-[200px] lg:w-[450px] lg:h-[450px] mx-auto"
        />
        {/* <a href=".\swiper-page\Swiper.js">home</a> */}
      </div>
    </div>
  );
};

export default HomeCard;
