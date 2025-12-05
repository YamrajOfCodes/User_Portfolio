import React, { useState } from 'react';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import brandLogo from "../../assets/Images/Logo.png";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [showPortfolioDropdown, setShowPortfolioDropdown] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  const portfolioItems = [
    { title: 'Portfolio A', subtitle: 'Focus on insights' },
    { title: 'Portfolio B', subtitle: 'Focus on insights' }
  ];

  return (
    <header className='bg-bg-primary md:bg-black p-5 md:w-[85%] md:mx-auto'>
      <nav className='flex justify-between items-center'>
        <div className="brand">
           <div className="brand">
        <img src={brandLogo} className='w-20 sm:w-24 lg:w-28' alt="brand logo" />
     </div>
        </div>
        
        <ul className='hidden sm:flex space-x-6 md:text-xl lg:text-2xl text-white cursor-pointer'>
          <li className='hover:text-purple-400 transition'><a href="#home">Home</a></li>
          
          {/* Portfolio with Dropdown */}
          <li 
            className='relative hover:text-purple-400 transition flex items-center gap-1'
            onMouseEnter={() => setShowPortfolioDropdown(true)}
            onMouseLeave={() => setShowPortfolioDropdown(false)}
          >
           <a href="#portfolio"> <span>Portfolio</span></a>
            <ChevronDown size={20} className={`transition-transform ${showPortfolioDropdown ? 'rotate-180' : ''}`} />
         
            {showPortfolioDropdown && (
              <div className='absolute top-full left-0 mt-4 w-80 bg-purple-600 rounded-2xl p-4 shadow-2xl z-50'>
                <div className='flex flex-col gap-3'>
                  {portfolioItems.map((item, index) => (
                    <div 
                      key={index}
                      className='flex items-center gap-4 p-4 bg-purple-500/50 hover:bg-purple-500/70 rounded-xl transition cursor-pointer group border-2 border-purple-400/50'
                    >
                      <div className='w-12 h-12 bg-white rounded-lg flex-shrink-0'></div>
                      <div className='flex-1'>
                        <h3 className='text-white font-semibold text-lg'>{item.title}</h3>
                        <p className='text-purple-200 text-sm'>{item.subtitle}</p>
                      </div>
                      <ArrowUpRight className='text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' size={20} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
          
          {/* We use React-Router-Dom for navigation but here these is static website so not need to install external library */}
          <li className='hover:text-purple-400 transition'><a href="#skills">Skills</a></li>     
          <li className='hover:text-purple-400 transition'><a href="#about">About Me</a></li>
        </ul>
        
        <div className='contact-cta hidden sm:block'>
          <button className='px-6 py-3 text-lg rounded-md bg-purple-600 text-white hover:bg-purple-700 transition hover:cursor-pointer'>
            Contact Me
          </button>
        </div>

        <div className='contact-cta sm:hidden cursor-pointer' onClick={handleNav}>
          {showNav ? <X color='white'/> : <Menu color='white'/>}
        </div>
      </nav>

      {/* Mobile Menu */}
      {showNav && (
        <div className="box px-4 py-4 sm:hidden">
          <ul className='flex flex-col gap-3 text-white'>
            <li className='hover:bg-purple-600/20 p-3 cursor-pointer rounded-xl transition'><a href="#home">Home</a></li>
            
            <li>
              <div 
                className='hover:bg-purple-600/20 p-3 cursor-pointer rounded-xl transition flex items-center justify-between'
                onClick={() => setShowPortfolioDropdown(!showPortfolioDropdown)}
              >
                <a href="#portfolio"><span>Portfolio</span></a>
                <ChevronDown size={20} className={`transition-transform ${showPortfolioDropdown ? 'rotate-180' : ''}`} />
              </div>
              
              {showPortfolioDropdown && (
                <div className='ml-4 mt-2 flex flex-col gap-2'>
                  {portfolioItems.map((item, index) => (
                    <div 
                      key={index}
                      className='flex items-center gap-3 p-3 bg-purple-600/30 hover:bg-purple-600/50 rounded-lg transition cursor-pointer'
                    >
                      <div className='w-10 h-10 bg-white rounded flex-shrink-0'></div>
                      <div className='flex-1'>
                        <h3 className='text-white font-semibold text-sm'>{item.title}</h3>
                        <p className='text-purple-200 text-xs'>{item.subtitle}</p>
                      </div>
                      <ArrowUpRight className='text-white' size={16} />
                    </div>
                  ))}
                </div>
              )}
            </li>
            
            <li className='hover:bg-purple-600/20 p-3 cursor-pointer rounded-xl transition'><a href="#skills">Skills</a></li>
            <li className='hover:bg-purple-600/20 p-3 cursor-pointer rounded-xl transition'><a href="#about">About Me</a></li>
            <li className='mt-2'>
              <button className='bg-purple-600 w-full p-3 rounded-xl hover:bg-purple-700 transition'>
                Contact Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;