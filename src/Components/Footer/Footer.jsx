import React from 'react'
import brandLogo from "../../assets/Images/Logo.png";

const Footer = () => {
  return (
    <footer className='flex flex-col sm:flex-row sm:justify-between px-2  py-4 sm:px-14 space-y-4 mb-4 border border-b-white'>
        <div className="brand-logo w-1/4 sm:w-[15%] md:w-[8%] lg:w-[5%] mx-auto sm:mx-0  sm:my-0">
          <img src={brandLogo} alt="brand logo" srcset="" />
        </div>
        <div className="navlinks">
            <ul className='space-x-6 text-white cursor-pointer flex text-sm lg:text-2xl lg:text-md justify-center items-center h-full'>
            <li className='hover:text-btn-hover transition'><a href="#home">Home</a></li>
            <li className='hover:text-btn-hover transition'><a href="#portfolio">Portfolio</a></li>
            <li className='hover:text-btn-hover transition'><a href="#skills">Skills</a></li>
            <li className='hover:text-btn-hover transition'><a href="#about">About Me</a></li>
        </ul>
        </div>
    </footer>
  )
}

export default Footer
