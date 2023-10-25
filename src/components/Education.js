import React from 'react'
// import { AiFillTwitterSquare, AiFillInstagram, AiFillGithub, AiFillLinkedin} from "react-icons/ai";
// import {FaLocationDot, FaCakeCandles} from "react-icons/fa6";

const PortfolioCard1 = (props) => {
  return (
    
         
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="px-5 lg:p-5 text-custom-color w-[80vw] lg:w-[40vw] backdrop-blur-md border border-gray-500 select-none rounded-2xl my-0 lg:my-[200px] hover:scale-110 transition-all delay-100 hover:border-white shadow-lg portfolio-card"
    >
      <h3 className="text-4xl lg:text-6xl font-bold py-3 border-2 border-transparent border-b-gray-400 ">
        {/* MCA */}{props.course}
      </h3>
      <h3 className="flex justify-between  gap-4 text-xl lg:text-2xl py-3 text-left border-2 border-transparent text-gray-950 border-b-gray-400">
      {/* <FaLocationDot className="text-violet-600"/> */}
       {/* LNCT University,Bhopal  */}{props.college}
       <h2 className='text-sm text-left'>
        {/* (October 11,<br/>2021 - May 20,<br/>2023) */}{props.date}
        </h2>
      </h3>

      <h3 className="flex justify-between gap-4 text-xl lg:text-2xl py-3 text-left border-2 border-transparent text-gray-950 border-b-gray-400">
      {/* MCA (AIML), Master<br/>of Computer Application */}{props.cname}
      <h2 className='text-sm'>
        {/* 8.23 CGPA */}{props.grade}
        </h2>
      </h3>

      
        <a href="/" className="flex items-center justify-center text-xl lg:text-sm py-3">
        {/* <AiOutlineLink /> */}
        {/* https://lnctu.ac.in/ */}{props.link}
        </a>
       
    </div>
    
  )
}

export default PortfolioCard1
