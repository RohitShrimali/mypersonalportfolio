import React from "react";
import { AiFillTwitterSquare, AiFillInstagram, AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {FaLocationDot, FaCakeCandles} from "react-icons/fa6";

const PortfolioCard = (props) => {
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="px-5 lg:p-5 text-custom-color w-[80vw] lg:w-[30vw] backdrop-blur-md border border-gray-500 select-none rounded-2xl my-20 lg:my-[200px] hover:scale-110 transition-all delay-100 hover:border-white shadow-lg portfolio-card"
    >
      <h3 className="text-4xl lg:text-6xl font-bold py-3 border-2 border-transparent border-b-gray-400 ">
        Rohit Shrimali
      </h3>
      <h3 className="flex items-center gap-4 text-xl lg:text-2xl py-3 border-2 border-transparent border-b-gray-400">
      <FaLocationDot className="text-violet-600"/>
       417, Windsor Palms, Bhopal, M.P.
      </h3>
      <h3 className="flex items-center gap-4 text-xl lg:text-2xl py-3 border-2 border-transparent border-b-gray-400">
      <FaCakeCandles className="text-red-400"/>
      January 10, 1999
      </h3>
      <h3 className="flex gap-4 text-xl lg:text-2xl py-3 border-2 border-transparent border-b-gray-400 ">
      <a href="/"><AiFillTwitterSquare className="text-sky-600" /></a>
      <a href="/"><AiFillInstagram className="text-pink-700"/> </a>
      <a href="https://github.com/" target="_blank" rel="noreferrer"><AiFillGithub className="text-gray-950"/> </a>
      <a href="https://www.linkedin.com/in/rohit-shrimali" target="_blank" rel="noreferrer"><AiFillLinkedin className="text-blue-700"/></a>
      </h3>
      <h3 className="text-xl lg:text-2xl py-3">FRESHER</h3>
    </div>
  );
};

export default PortfolioCard;
