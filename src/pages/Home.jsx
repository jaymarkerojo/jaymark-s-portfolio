import React from "react";
import About from "./About";
import Footer from "./Footer";
import Display from "../components/Display"
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Front-End Developer", "Video Editor", "UI/UX Designer"],
    loop: 0,
    delaySpeed: 1000,
  });

  return (
    <>
     <section className="autoShow flex flex-col items-center justify-center h-screen m-0 bg-black text-center text-gray-300 px-7">
  <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4">
    <span className="text-[#FACC15]">Jaymark Erojo</span>{" "}
    <span className="text-sm italic tracking-widest">— aspiring</span>
    <br />
    <span className="text-3xl">{text}</span> <Cursor cursorStyle="|" />
  </h1>
  <p className="max-w-lg text-center tracking-widest text-gray-400 text-base sm:text-sm mb-8">
    I’m an aspiring front-end developer and creative designer who loves crafting 
    modern, responsive, and visually engaging digital experiences. <br />
    With a passion for clean code, intuitive UI/UX, and creative storytelling 
    through video editing, I aim to blend technology and artistry in every project 
    I create.
  </p>
  <button className="border border-yellow-500 text-yellow-500 px-6 py-2 rounded hover:bg-yellow-500 hover:text-black transition hover:cursor-pointer">
    <Link to="/project">View My Work</Link>
  </button>
</section>

      <Display />
      <About />
      <hr />
      <Footer />
    </>
  );
};

export default Home;
