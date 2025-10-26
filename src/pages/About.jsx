import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-gray-300 flex flex-col justify-center px-6 sm:px-12 md:px-24"
    >
      <div className="flex flex-col md:flex-row justify-between gap-12 text-left">
        {/* Left Column */}
        <div className="md:w-2/3 space-y-6">
          <p className="text-sm uppercase tracking-widest text-yellow-500">
            About
          </p>

          <p>
            I’m an aspiring front-end developer, video editor, and graphic
            designer. I love creating digital experiences that look great and
            work smoothly.
          </p>

          <p>
            I combine coding skills with creative design, building websites,
            videos, and graphics that are both functional and visually
            appealing.
          </p>

          <p>
            I’m currently learning React, design systems, and video editing to
            make projects that are consistent, accessible, and engaging.
          </p>
        </div>

        <div className="md:w-1/3">
          <h2 className="text-white font-semibold mb-4">Technical Skills</h2>
          <ul className="space-y-2 text-gray-400">
            {[
              "React",
              "Tailwind CSS & Styled Components",
              "Responsive Web Design",
              "Git & Version Control",
              "Video & Photo Editing",
              "Website Designer",
              "Component Libraries",
            ].map((skill, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500"></span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
