import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

const Footer = () => {
  return (
   <footer className="bg-black text-gray-300 py-10">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-6">
    <div>
      <h2 className="text-yellow-500 font-semibold">Jaymark Erojo</h2>
      <p className="text-sm">Full Stack Developer</p>
      <p className="mt-3 text-sm text-gray-400">
        Crafting smooth, responsive, and user-focused web experiences.
      </p>
    </div>

    <div>
      <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
     <ul className="space-y-2 text-sm">
  <li className="hover:text-yellow-500 cursor-pointer">
    <Link to="/">Home</Link>
  </li>
  <li className="hover:text-yellow-500 cursor-pointer">
    <Link to="/about">About Me</Link>
  </li>
  <li className="hover:text-yellow-500 cursor-pointer">
    <Link to="/skills">Skills</Link>
  </li>
  <li className="hover:text-yellow-500 cursor-pointer">
    <Link to="/project">Projects</Link>
  </li>
</ul>

    </div>

    <div>
      <h2 className="font-semibold text-lg mb-3">Connect</h2>
      <ul className="space-y-2 text-sm">
        <li className='hover:text-yellow-500 cursor-pointer'><a href="https://www.facebook.com/makizuuu">Facebook</a></li>
        <li className='hover:text-yellow-500 cursor-pointer'><a href='mailto:jaymarspogs@gmail.com'>Email</a></li>
        <li className='hover:text-yellow-500 cursor-pointer'><a href='https://github.com/jaymarkerojos'>GitHub</a></li>
      </ul>
    </div>
  </div>
<hr className='mt-12'/>
  <div className="text-center mt-8 text-xs text-gray-500">
    © 2025 Jaymark Erojo. All rights reserved.
  </div>
</footer>

  )
}

export default Footer