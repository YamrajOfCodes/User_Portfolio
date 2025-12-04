import React, { useState } from 'react'
import brandLogo from "../../assets/Images/Logo.png";
import { Menu, X } from 'lucide-react';

const Header = () => {

   const [showNav,setShowNav] = useState(false);

   const handleNav = ()=>{
    setShowNav(!showNav);
  }

  return (
   <header className='bg-[rgba(11,11,11,1)] p-5 md:bg-black md:w-[85%] md:mx-auto'>
     <nav className='flex justify-between items-center'>
     <div className="brand">
        <img src={brandLogo} className='w-20 sm:w-24 lg:w-28' alt="brand logo" />
     </div>
        <ul className='hidden sm:flex space-x-6 md:text-2xl text-white cursor-pointer'>
            <li className='hover:text-[rgba(146,95,240,1)] transition'>Home</li>
            <li className='hover:text-[rgba(146,95,240,1)] transition'>Portfolio</li>
            <li className='hover:text-[rgba(146,95,240,1)] transition'>Skills</li>
            <li className='hover:text-[rgba(146,95,240,1)] transition'>About Me</li>
        </ul>
     <div className='contact-cta hidden sm:block'>
       <button className='px-6 py-3 text-lg rounded-md bg-[rgba(146,95,240,1)] text-white hover:bg-[rgba(126,75,220,1)] transition'>Contact Me</button>
     </div>

    <div className='contact-cta sm:hidden cursor-pointer' onClick={handleNav}>
       {showNav ? <X color='white'/> : <Menu color='white'/>}
     </div>

     </nav>

      {
      showNav &&  <div className="box px-4 py-4 sm:hidden">
        <ul className='flex flex-col gap-3 text-white'>
            <li className='hover:bg-[rgba(146,95,240,0.2)] p-3 cursor-pointer rounded-xl transition'>Home</li>
            <li className='hover:bg-[rgba(146,95,240,0.2)] p-3 cursor-pointer rounded-xl transition'>Portfolio</li>
            <li className='hover:bg-[rgba(146,95,240,0.2)] p-3 cursor-pointer rounded-xl transition'>Skills</li>
            <li className='hover:bg-[rgba(146,95,240,0.2)] p-3 cursor-pointer rounded-xl transition'>About Me</li>
            <li className='mt-2'><button className='bg-[rgba(146,95,240,1)] w-full p-3 rounded-xl hover:bg-[rgba(126,75,220,1)] transition'>Contact Me</button></li>
          </ul>
      </div>
     }
   </header>
  )
}

export default Header