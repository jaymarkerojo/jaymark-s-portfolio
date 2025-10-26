import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Navbar from './pages/Navbar';
import Project from './pages/Project';
import Skills from './pages/Skills';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
const App = () => {
  return (
    <>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<Aboutme/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
