import React, { useState } from 'react'
import Layout from './Layout/Layout'
import heroImg from "./assets/Images/hero.png";
import DawnSvg from "./assets/Images/Dawn.svg";
import Icons from './Components/Reusable/Icons/Icons';
import { ChevronRight, CircleArrowDown, Figma, Instagram, Linkedin, Shield, Telescope, Twitch, TwitchIcon, Twitter } from 'lucide-react';
import ProductCard from './Components/ProductCard/ProductCard';
import SkillCard from './Components/Skills/SkillCard';
import SectionTitle from './Components/Reusable/SectionTitle/SectionTitle';
import "./App.css"

const App = () => {

  const socialIcons = [
    {
      icon: Instagram
    },
    {
      icon: Figma
    },
    {
      icon: Linkedin
    },
    {
      icon: Twitter
    },
    {
      icon: Telescope
    },
    {
      icon: TwitchIcon
    },
  ]


  const projects = [
    {
      projectName: "Chaintech Product",
      technologies: ["UX Design", "Angular", "Javascript"]
    },
    {
      projectName: "Chaintech Product",
      technologies: ["UX Design", "Angular", "Javascript"]
    },
    {
      projectName: "Chaintech Product",
      technologies: ["UX Design", "Angular", "Javascript"]
    },
    {
      projectName: "Chaintech Product",
      technologies: ["UX Design", "Angular", "Javascript"]
    },
    {
      projectName: "Chaintech Product",
      technologies: ["UX Design", "Angular", "Javascript"]
    },
    {
      projectName: "Chaintech Product",
      technologies: ["UX Design", "Angular", "Javascript"]
    },
    {
      projectName: "Chaintech Product",
      technologies: ["UX Design", "Angular", "Javascript"]
    },
    {
      projectName: "Chaintech Product",
      technologies: ["UX Design", "Angular", "Javascript"]
    }
  ]

  const portfolioFigures = [
    {
      percent: "90%",
      desc: "Job Success. Score on Upwork"
    },
    {
      percent: " 25.000",
      desc: "Duplicates on Figma. Community"
    },
    {
      percent: "2K",
      desc: "In Finished. Works"
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
        <section className='w-full h-auto flex mt-5 sm:mt-20' id='home'>
          <div className="left w-full lg:w-[56%] h-full text-white gap-2 flex flex-col justify-start items-center">
            <h1 className='text-7xl sm:text-9xl lg:text-[7.3rem] xl:text-[9rem] 2xl:text-[13rem]   text-center font-bold'>PRODUCT DESIGNER</h1>
            <h2 className='text-4xl sm:text-6xl lg:text-[3.8rem] xl:text-[4.5rem] 2xl:text-[5.5rem] 3xl:text-[7rem]  font-bold bg-linear-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent'>CRISTIAN MUNOZ</h2>

            <div className="icons flex justify-center gap-4 sm:gap-8 lg:gap-12 mt-5 sm:mt-10">
              {
                socialIcons.map((element, index) => (
                  <Icons key={index} icon={element.icon} />
                ))
              }
            </div>

            <div className="cta w-[85%] md:w-[75%] lg:w-[80%] mt-5 flex sm:mt-12 xl:mt-14">
              <button className='w-full bg-bg-secondary cursor-pointer hover:bg-[#4b4b4b] py-4 xl:py-6 text-sm lg:text-xl flex gap-2 justify-center items-center'>
                <span>Download Curriculum Vitae</span>
                <CircleArrowDown size={15} className='sm:size-5 lg:size-6' />
              </button>
            </div>
          </div>

          <div className="right hidden lg:flex items-end justify-end w-[48%] 3xl:w-[35%] h-[90%] mt-5 ">
            <img src={heroImg} className='w-1/2 lg:w-[85%]' alt="hero image" />
          </div>
        </section>


        <div className="counterSection mt-20 bg-bg-primary w-[90%] mx-auto sm:w-full lg:w-full md:mt-40 flex flex-col sm:flex-row gap-15  justify-evenly text-white items-center border border-Border rounded-2xl py-10 lg:py-15">
          {portfolioFigures.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col items-center justify-center px-5 text-[rgba(200,254,199,1)]">
                <h3 className="text-5xl sm:text-3xl flex items-center xl:text-7xl 2xl:text-9xl font-bold"><ChevronRight size={50} />{item.percent}</h3>

                {item.desc
                  .split(".")
                  .filter(Boolean)
                  .map((line, i) => (
                    <p key={i} className="font-bold text-sm lg:text-xl xl:text-2xl">
                      {line}
                    </p>
                  ))}
              </div>

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


        <div className='product-card mt-32 w-full' id='portfolio'>

          <SectionTitle>PORTFOLIO</SectionTitle>


          <div className='flex justify-start w-full flex-wrap '>
            {
              projects.map((project, index) => {
                return (
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

        <section className='section w-full mx-auto mt-26' id='skills'>
          <SectionTitle>SKILLS</SectionTitle>
          <div className='flex gap-4 flex-wrap my-5 justify-center'>

           {/* We have a static array in figma but below is best practise */}
            {
              skills.map((skill, index) => {
                return (
                  <>
                    <SkillCard 
                    percentage={skill.accuracy}
                    skill={skill.name}
                    desc={skill.description}
                    />
                  </>
                )
              })
            }
          </div>
        </section>


        {/* Featured Section */}


        <section className="w-full h-auto sm:h-[55vh] mt-26 " id='about'>
          <div className="relative rounded-xl  w-full flex justify-center items-center overflow-hidden shadow-2xl h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-400"></div>

            <div className="absolute inset-0 border-4 border-gray-900 rounded-2xl"></div>

            <div className="relative px-12 py-16 text-center ">
           
              <h3 className="text-2xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-6">
                Kaleb Lechtenberg
              </h3>
              <p className="text-white leading-relaxed mb-8 max-w-5xl mx-auto text-lg md:text-2xl xl:text-3xl 2xl:text-4xl">
                "Working with this freelancer has been great. His attention to detail is unparalleled and finished all work ahead of schedule. Will gladly send more work and I do not hesitate to recommend him to you on your project also."
              </p>

              <div className="flex justify-center">
                <Shield className='size-24 sm:size-32 xl:size-40 fill-white border-none' strokeWidth={0} />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-black sm:p-6 flex justify-center my-20 md:my-52 ">
          <div className="relative w-full">
            <div className="absolute -top-14 md:-top-28 left-6 z-20 w-32 sm:w-48 md:w-50 lg:w-72">
              <img
                src={heroImg}
                alt="Workspace"
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>

            <div className="bg-purple-400 rounded-xl p-2  sm:p-10 md:p-12 pl-48 sm:pl-60 md:pl-72 lg:pl-96  min-h-[200px] md:min-h-[240px] lg:min-h-[280px] flex items-center">
              <div className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed ">
                <p className='text-sm sm:text-xl lg:text-2xl 2xl:text-4xl -ml-8 sm:ml-0'>
                  Thanks for visiting my website.<br />
                  If you have any questions you can write me to any of my social networks, I am sure I will answer you.
                </p>
              </div>
            </div>
          </div>
        </section>



      </Layout>
    </>
  )
}

export default App
