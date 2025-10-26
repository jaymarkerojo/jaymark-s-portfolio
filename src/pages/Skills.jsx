import React from "react";
import html5 from "../assets/icons/html5.svg"
import css from "../assets/icons/css.svg";
import javascript from "../assets/icons/javascript.svg";
import tailwindcss from "../assets/icons/tailwindcss.svg";
import reactIcon from "../assets/icons/react.svg";
import php from "../assets/icons/php.svg";
import laravel from "../assets/icons/laravel.svg";
import mysql from "../assets/icons/mysql.svg";
import figma from "../assets/icons/figma.svg";
import canva from "../assets/icons/canva.svg";
import java from "../assets/icons/java.svg"
const Skills = () => {
  const skills = [
    { name: "HTML5", icon: html5 },
    { name: "CSS3", icon: css },
    { name: "JavaScript", icon: javascript},
    { name: "Tailwind", icon: tailwindcss},
    { name: "React", icon: reactIcon, },
    { name: "PHP", icon: php, },
    { name: "Laravel", icon: laravel },
    { name: "MySQL", icon: mysql },
    { name: "Figma", icon: figma},
    { name: "Canva", icon: canva },
    { name: "Java", icon: java},
  ];

  return (
    <section className="autoShow bg-gradient-to-b from-black via-gray-900 to-black min-h-screen p-10 md:p-20">
      <h1 className="text-yellow-400 text-4xl font-bold uppercase tracking-widest text-center m-12 justify-center">
        Technical Skills
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 text-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-800/40 backdrop-blur-md p-6 rounded-2xl hover:bg-gray-700/50 hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-yellow-400/20"
          >
            <div
              className={`w-20 h-20 flex items-center justify-center rounded-full ${skill.color} shadow-inner`}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                title={skill.name}
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className="mt-4 text-white text-lg font-medium tracking-wide">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
