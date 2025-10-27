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
    { icon: <FaSpotify size={20} color="#75ee06" />, label: "Listening to music" },
    { icon: <FaCode size={20} color="#75ee06" />, label: "Coding" },
    { icon: <CiEdit size={20} color="#cc00fc" />, label: "Editing" },
    { icon: <FaFilm size={20} color="#ff2500" />, label: "Cinematic film" },
  ];


  const tools = ["Canvas", "Visual studio", "Capcut", "Video Star", "Figma"];

  const education = [
    "Bachelor’s in Stundent Information Technology – 2023",
    "Completed 5 small personal and school projects",
    "Learning React, Tailwind CSS, and Video/Graphic Design tools",
    "Participated in online coding challenges and tutorials"
  ];

  return (
    <>
      <section className="autoShow mt-24 min-h-screen bg-black text-gray-300 flex flex-col justify-center px-6 sm:px-12 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col items-center mt-6">
            <img
              src={hero}
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover"
            />

            <button className="flex items-center gap-2 mt-4 px-5 py-2 cursor-pointer tracking-widest lowercase bg-white text-black rounded-2xl text-sm sm:text-base font-medium hover:bg-yellow-500 hover:text-white shadow-md transition duration-300 ease-in-out">
              <HiDownload className="text-lg sm:text-xl" />
              Download CV
            </button>
          </div>

          <div>
            <h1 className="text-sm uppercase tracking-widest italic text-[#FACC15]">
              About Me
            </h1>
            <hr className="text-blue-400 w-20 mb-4" />
            <p className="text-gray-500 text-sm mb-4">
              I'm an aspiring front-end developer passionate about creating
              smooth, modern UI experiences using React and Tailwind CSS. I also
              enjoy bringing creative ideas to life through video editing and
              graphic design. Currently, I'm learning new technologies and
              building projects to sharpen my skills daily.
            </p>
            <p className="text-gray-500 text-sm mb-4">
              Focused on clean code and user-centric design, I transform ideas
              into interactive web applications and visuals that users love.
              Whether crafting pixel-perfect interfaces or optimizing
              performance, I strive to deliver exceptional digital experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center border-2 rounded-2xl p-3">
                <h1 className="text-3xl font-sm tracking-widest">3</h1>
                <p className="uppercase text-sm">Year College</p>
              </div>
              <div className="text-center border-2 rounded-2xl p-3">
                <h1 className="text-3xl font-sm tracking-widest">5</h1>
                <p className="uppercase text-sm">Completed Projects</p>
              </div>
              <div className="text-center border-2 rounded-2xl p-3">
                <h1 className="text-3xl tracking-widest">0</h1>
                <p className="uppercase text-sm">Clients</p>
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
          Education & Learnings
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
          "I turn ideas into interactive experiences and visuals that tell a
          story."
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
            href="mailto:jaymarspogs @gmail.com"
            className="text-gray-300 hover:text-yellow-500"
          >
            <HiDownload size={20} />
          </a>
        </div>
      </section>
    </>
  );
}

export default Aboutme
