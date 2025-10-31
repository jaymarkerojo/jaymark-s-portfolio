import React from 'react'
import hero from '../assets/hero.png';
import { FaCamera, FaSpotify, FaCode, FaFilm, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { IoGameControllerSharp } from "react-icons/io5";
import { HiDownload } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";

const Aboutme = () => {
  const interests = [
    { icon: <FaCamera size={20} color="#FACC15" />, label: "Photography" },
    { icon: <IoGameControllerSharp size={20} color="#0034ff" />, label: "Online Games" },
    { icon: <FaSpotify size={20} color="#75ee06" />, label: "Listening to Music" },
    { icon: <FaCode size={20} color="#75ee06" />, label: "Coding" },
    { icon: <CiEdit size={20} color="#cc00fc" />, label: "Editing" },
    { icon: <FaFilm size={20} color="#ff2500" />, label: "Cinematic Films" },
  ];

  const tools = ["Canva", "Visual Studio Code", "CapCut", "Video Star", "Figma"];

  const education = [
    "Bachelor’s in Information Technology – 2023",
    "Completed several personal and academic web projects",
    "Currently learning React, Tailwind CSS, and creative design tools",
    "Actively participating in online tutorials and coding challenges"
  ];

  return (
    <>
      <section className="autoShow mt-24 min-h-screen bg-black text-gray-300 flex flex-col justify-center px-6 sm:px-12 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col items-center mt-6">
            <img
              src={hero}
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover shadow-lg"
            />
          </div>

          <div>
            <h1 className="text-sm uppercase tracking-widest italic text-[#FACC15]">
              About Me
            </h1>
            <hr className="text-blue-400 w-20 mb-4" />

            <p className="text-gray-500 text-sm mb-4">
              I’m an aspiring front-end developer and creative designer driven by curiosity, innovation, 
              and a desire to build meaningful digital experiences. I specialize in creating modern, 
              responsive web interfaces using React and Tailwind CSS, with an eye for design and usability.
            </p>

            <p className="text-gray-500 text-sm mb-4">
              Beyond coding, I bring ideas to life through video editing, photography, and visual storytelling. 
              My goal is to combine clean code, creative visuals, and smooth interactions to create 
              projects that both look great and feel intuitive to use.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center border-2 rounded-2xl p-3">
                <h1 className="text-3xl font-sm tracking-widest">3</h1>
                <p className="uppercase text-sm">Years in College</p>
              </div>
              <div className="text-center border-2 rounded-2xl p-3">
                <h1 className="text-3xl font-sm tracking-widest">5+</h1>
                <p className="uppercase text-sm">Completed Projects</p>
              </div>
              <div className="text-center border-2 rounded-2xl p-3">
                <h1 className="text-3xl tracking-widest">∞</h1>
                <p className="uppercase text-sm">Growth Mindset</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-yellow-500 text-lg mt-8 mb-4 uppercase tracking-widest">
          Tools I Use
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {tools.map((tool, idx) => (
            <span
              key={idx}
              className="border px-3 py-1 rounded text-sm text-gray-300 hover:text-yellow-500"
            >
              {tool}
            </span>
          ))}
        </div>

        <h2 className="text-yellow-500 text-lg mt-8 mb-4 uppercase tracking-widest">
          Education & Learning
        </h2>
        <ul className="list-disc list-inside text-gray-400">
          {education.map((exp, idx) => (
            <li key={idx}>{exp}</li>
          ))}
        </ul>

        <h2 className="text-yellow-500 text-xl text-center tracking-widest mt-8 mb-6 uppercase">
          Interests
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-8 px-6 text-center tracking-widest lowercase mb-6">
          {interests.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-4 rounded-lg"
            >
              {item.icon}
              <span className="mt-2">{item.label}</span>
            </div>
          ))}
        </div>

        <p className="italic text-gray-500 mt-4 text-center">
          "Turning creativity and code into meaningful digital experiences."
        </p>

        <div className="flex justify-center gap-6 mt-6 mb-12">
          <a
            href="https://github.com/jaymarkerojo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-500"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.facebook.com/makizuuu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-500"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="mailto:jaymarspogs@gmail.com"
            className="text-gray-300 hover:text-yellow-500"
          >
            <HiDownload size={20} />
          </a>
        </div>
      </section>
    </>
  );
}

export default Aboutme;
