import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
// import resume from '../assets/Rohit.pdf';
import resume from '../assets/Rohit.pdf'

const Header = () => {
  return (
<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
      <span className="w-48 ml-3 text-xl"><img src={logo} alt="" /></span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <NavLink to="/" className="mr-5 hover:text-gray-900">Home</NavLink>
      <NavLink to="family" className="mr-5 hover:text-gray-900">My Family</NavLink>
      <a href={resume} target="_blank" rel="noreferrer" className="mr-5 hover:text-gray-900">Resume</a>
      {/* <NavLink to="/" className="mr-5 hover:text-gray-900">Resume</NavLink> */}
      <NavLink to="/education" className="mr-5 hover:text-gray-900"> Education </NavLink>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
  )
}

export default Header
