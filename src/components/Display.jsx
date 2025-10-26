import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt} from "react-icons/fa";
import { RiPhpFill } from "react-icons/ri";
import { SiTailwindcss, SiVite } from "react-icons/si";

const Display = () => {
  return (
    <section className="bg-black flex items-center justify-center m-0">
      <div className="carousel w-[50%]">
        <div className="group">
            <div className="card">
            <RiPhpFill size={50} color="#61DAFB" />
          </div>

          <div className="card">
            <FaReact size={50} color="#61DAFB" />
          </div>
          <div className="card">
            <FaHtml5 size={50} color="#E34F26" />
          </div>
          <div className="card">
            <FaCss3Alt size={50} color="#1572B6" />
          </div>
          <div className="card">
            <FaJs size={50} color="#F7DF1E" />
          </div>
          <div className="card">
            <SiTailwindcss size={50} color="#38B2F8" />
          </div>
          <div className="card">
            <SiVite size={50} color="#646CFF" />
          </div>
          <div className="card">
            <FaGitAlt size={50} color="#F34F29" />
          </div>
        </div>

        <div className="group" aria-hidden="true">
            <div className="card">
            <RiPhpFill size={50} color="#61DAFB" />
          </div>

          <div className="card">
            <FaReact size={50} color="#61DAFB" />
          </div>
          <div className="card">
            <FaHtml5 size={50} color="#E34F26" />
          </div>
          <div className="card">
            <FaCss3Alt size={50} color="#1572B6" />
          </div>
          <div className="card">
            <FaJs size={50} color="#F7DF1E" />
          </div>
          <div className="card">
            <SiTailwindcss size={50} color="#38B2F8" />
          </div>
          <div className="card">
            <SiVite size={50} color="#646CFF" />
          </div>
          <div className="card">
            <FaGitAlt size={50} color="#F34F29" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Display;
