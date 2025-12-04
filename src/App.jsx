import React from 'react'
import Layout from './Layout/Layout'
import heroImg from "./assets/Images/hero.png";
import DawnSvg from "./assets/Images/Dawn.svg";
import Icons from './Components/Reusable/Icons/Icons';
import { ChevronRight, CircleArrowDown, Figma, Instagram, Linkedin, Telescope, Twitter } from 'lucide-react';
import ProductCard from './Components/ProductCard/ProductCard';
import SkillCard from './Components/Skills/SkillCard';
import SectionTitle from './Components/Reusable/SectionTitle/SectionTitle';

const App = () => {

  const socialIcons  = [
   {
     icon:Instagram
   },  
  {
    icon:Figma
  },
 {
   icon:Linkedin
  },
   {
     icon:Twitter
   },
   {
     icon:Telescope
   },
  //  {
  //    name:"Twitch"
  //  },
]


 const projects = [
  {
    projectName:"Chaintech Product",
    technologies:["UX Design","Angular","Javascript"]
  },
   {
    projectName:"Chaintech Product",
    technologies:["UX Design","Angular","Javascript"]
  },
   {
    projectName:"Chaintech Product",
    technologies:["UX Design","Angular","Javascript"]
  },
   {
    projectName:"Chaintech Product",
    technologies:["UX Design","Angular","Javascript"]
  },
  {
    projectName:"Chaintech Product",
    technologies:["UX Design","Angular","Javascript"]
  },
   {
    projectName:"Chaintech Product",
    technologies:["UX Design","Angular","Javascript"]
  },
   {
    projectName:"Chaintech Product",
    technologies:["UX Design","Angular","Javascript"]
  },
   {
    projectName:"Chaintech Product",
    technologies:["UX Design","Angular","Javascript"]
  }
 ]

 const portfolioFigures  = [
   {
     percent:"90%",
     desc:"Job Success. Score on Upwork"
   },  
   {
     percent:" 25.000",
     desc:"Duplicates on Figma. Community"
   },
    {
     percent:"2K",
     desc:"In Finished. Works"
   },
]


const skills = [
  {
    name: "UX Design",
    accuracy: 97,
    description:
      "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users."
  },
  {
    name: "UX Design",
    accuracy: 97,
    description:
      "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users."
  },
  {
    name: "UX Design",
    accuracy: 97,
    description:
      "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users."
  },
    {
    name: "UX Design",
    accuracy: 97,
    description:
      "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users."
  }
];


  return (
   <>
   <Layout>

    {/* Hero Section */}
      <section className='w-full h-auto flex mt-14'>
         <div className="left w-full lg:w-[56%] h-full text-white gap-2 flex flex-col justify-center items-center">
          <h1 className='text-7xl sm:text-9xl lg:text-[7.3rem] xl:text-[9rem] 2xl:text-[14rem] text-center font-bold'>PRODUCT DESIGNER</h1>
          <h2 className=' text-4xl sm:text-6xl lg:text-[3.8rem] xl:text-[4.5rem] 2xl:text-[8rem] font-bold bg-gradient-to-r from-[rgba(250,112,154,1)] to-[rgba(255,177,153,1)] bg-clip-text text-transparent'>CRISTIAN MUN0Z</h2>
          
           <div className="icons flex justify-center gap-8 sm:gap-10 mt-5 sm:mt-10">
            {
              socialIcons.map((element,_)=>{
                return(
                  <>
                  <Icons icon={element.icon}/>
                  </>
                )
              })
            }
           </div>

           <div className="cta  w-[85%] md:w-[75%] lg:w-[90%] mt-5 flex sm:mt-10 ">
            <button className='w-full bg-[rgba(41,41,41,1)] cursor-pointer hover:bg-[#4b4b4b]  py-4 xl:py-6 text-sm lg:text-xl flex gap-2 justify-center'><span>Download Curriculum Vitae</span>
              <CircleArrowDown size={15} className='mt-0.5 sm:mt-1 lg:size-5'/>
            </button>
           </div>


         </div>
         <div className="right hidden lg:flex items-end justify-end w-[40%] h-[90%] mt-5 ">
          <img src={heroImg} className='w-1/2 lg:w-[85%] ml-5 ' alt="hero image" srcset="" />
         </div>
      </section>


      <div className="counterSection mt-15 bg-[rgba(11,11,11,1)] w-full mx-auto sm:w-full lg:w-full md:mt-40 flex flex-col sm:flex-row gap-15  justify-evenly text-white items-center border border-[rgba(100,100,100,1)] rounded-2xl py-10 lg:py-15">
               {portfolioFigures.map((item, index) => (
                <div key={index} className="flex items-center">
      {/* Counter Block */}
      <div className="flex flex-col items-center justify-center px-5 text-[rgba(200,254,199,1)]">
        <h3 className="text-5xl sm:text-3xl flex items-center xl:text-7xl 2xl:text-8xl font-bold"><ChevronRight size={50} />{item.percent}</h3>

        {item.desc
          .split(".")
          .filter(Boolean)
          .map((line, i) => (
            <p key={i} className="font-bold text-sm lg:text-xl xl:text-2xl">
              {line}
            </p>
          ))}
      </div>

      {/* Divider Image (only between items) */}
      {index !== portfolioFigures.length - 1 && (
          <div className='lg:ml-14'>
                    <img
          src={DawnSvg}
          className="hidden w-2/3 lg:w-full md:block"
          alt="divider"
        />
          </div>
      )}
    </div>
  ))}
</div>


      <div className='product-card mt-32 w-full'>

        {/* Make Heading Component */}

        <SectionTitle>PORTFOLIO</SectionTitle>


        <div className='flex justify-start w-full flex-wrap '>
        {
          projects.map((project,index)=>{
            return(
              <>
              <ProductCard 
              projectName={project.projectName}
              tech={project.technologies}
              />
              </>
            )
          })
        }
        </div>

      </div>



          {/* Skills Section */}

       <section className='section w-full mx-auto'>
          <SectionTitle>SKILLS</SectionTitle>
        <div className='flex gap-4 flex-wrap my-5 justify-center'>


        {
          skills.map((element,index)=>{
            return(
              <>
              <SkillCard/>
              </>
            )
          })
        }
        </div>
       </section>


       {/* Featured Section */}


         <section className="w-full w-full">
      <div className="relative rounded-xl overflow-hidden shadow-2xl">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-400"></div>
        
        {/* Dark border effect */}
        <div className="absolute inset-0 border-4 border-gray-900 rounded-2xl"></div>
        
        {/* Content */}
        <div className="relative px-12 py-16 text-center">
          {/* Name */}
          <h3 className="text-2xl font-bold text-white mb-6">
            Kaleb Lechtenberg
          </h3>
          
          {/* Testimonial Text */}
          <p className="text-white text-base leading-relaxed mb-8 max-w-xl mx-auto">
            "Working with this freelancer has been great. His attention to detail is unparalleled and finished all work ahead of schedule. Will gladly send more work and I do not hesitate to recommend him to you on your project also."
          </p>
          
          {/* Shield Icon */}
          <div className="flex justify-center">
            <svg 
              className="w-12 h-12 text-white" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </section>

<div className="w-full bg-black p-4 flex justify-center mt-32">
  <div className="relative w-full">

    {/* Floating Image */}
    <div className="absolute -top-12 md:-top-24 left-4 sm:left-6 z-20">
      <div className="p-3 rounded-2xl w-32 sm:w-40 md:w-48">
        <img
          src={heroImg}
          alt="Workspace"
          className="rounded-xl w-full h-auto object-cover"
        />
      </div>
    </div>

    {/* Card */}
    <div className="bg-purple-400 rounded-xl p-6 sm:p-8 pl-40 sm:pl-48 md:pl-56 flex flex-row gap-4 min-h-[180px]">
      <div className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
        <p>
          Thanks for visit my website <br />
          If you have any questions you can write me to any of my
          social networks, I am sure I will answer you.
        </p>
      </div>
    </div>

  </div>
</div>



   </Layout>
   </>
  )
}

export default App
