import React from "react";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";

const Projects = () => {
  const work = [
    {
      img: work1,
      title: "LootSwap",
      desc: "This is a mobile app design for LootSwap, showcasing sign-up, login, dashboard, and transactions screens. Designed in Figma, it focuses on clean UI, accessibility, and intuitive user experience.",
      link: "https://www.figma.com/design/USLlKKTZZxFiRp26Tn98PM/Untitled?node-id=0-1&t=KJwtKBnRm393juBD-1",
    },
    {
      img: work2,
      title: "E-library",
      desc: "E-library is a desktop web app design for managing and reading books online. Designed in Figma, it emphasizes clean UI, accessibility, and an intuitive user experience on larger screens.",
      link: "https://www.figma.com/design/SqkrsxZUpAjxtLoGcnARDK/E-Library?node-id=2-2&t=cTZjHPd9Wqjb8Tot-1",
    },
    {
      img: work3,
      title: "Web Portfolios",
      desc: "Web Portfolios is a responsive web design showcasing personal projects, skills, and achievements. Created in Figma with focus on clean UI, accessibility, and smooth navigation.",
      link: "https://www.figma.com/design/0Ijvjbo3E2eD5aT2jj8JjV/Untitled?node-id=26-47&t=6py5sNBj8Ke32Xv0-1",
    },
  ];

  return (
    <>
      <h1 className="autoShow text-yellow-500 mt-24 ml-9">--projects recently</h1>
      <section className="autoShow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 projects-section p-8 bg-black text-white min-h-screen">
        {work.map((item, index) => (
          <div key={index} className="mb-8">
            <div className="relative w-full max-w-md overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full border-2 transition-transform duration-500 hover:scale-105"
              />

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-80 cursor-pointer flex items-center justify-center transition-opacity duration-500"
                >
                  <span className="text-white text-lg font-bold tracking-wider">
                    View Project
                  </span>
                </a>
              ) : (
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-80 flex items-center justify-center transition-opacity duration-500">
                  <span className="text-white text-lg font-bold tracking-wider">
                    View Project
                  </span>
                </div>
              )}
            </div>

            <h2 className="text-sm tracking-widest font-bold mt-4 text-yellow-500">
              {item.title}
            </h2>
            <p className="text-sm tracking-wide">{item.desc}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Projects;
