import React from 'react'
import Education from './Education';
import { AiOutlineLink } from 'react-icons/ai'



const Educationcomp = () => {
  return (
    <>
    <div className="flex flex-col text-center w-full mb-0 ed">
    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-0 text-gray-900">MY EDUCATION</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-evenly items-center mx-auto'>
    {/* flex justify-evenly items-center */}
    <Education 
    course="MCA"
    college="LNCT University,Bhopal"
    date={(<>October 11,<br/>2021-May 20,<br/>2023</>)}
    cname={(<>MCA (AIML), Master<br/>of Computer Application</>)}
    grade="8.23 CGPA"
    link={(<><AiOutlineLink />https://lnctu.ac.in/</>)}/>

    <Education
    course="BCA"
    college="Makhanlal Chaturvedi National University,Bhopal"
    date={(<>July 11,<br/>2018-October 22,<br/>2021</>)}
    cname={(<>BCA, Bachelors's<br/>in Computer Application</>)}
    grade="8.13 CGPA"
    link={(<><AiOutlineLink />https://mcu.ac.in/</>)}/>

    <Education 
    course="12th, Commerce"
    college="Sri Aurobindo School"
    date={(<>April 11,<br/>2017 - May 13,<br/>2018</>)}
    cname="12th, Commerce"
    grade="77.4 %"/>

    <Education 
    course="10th"
    college="Sri Aurobindo School"
    date={(<>April 04,<br/>2015 - May 15,<br/>2016</>)}
    cname="10th"
    grade="76.5 %"/>
    
    </div>
  
    </div>
    </>
  )
}

export default Educationcomp;
