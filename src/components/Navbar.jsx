import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SplashCursor from '../SplashCursor';

const Navbar = () => {
  return (
    <>
    <SplashCursor/>
    <nav className="bg-gray-900 shadow-blue-200 sticky top-0 z-100">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <div className="text-xl text-amber-300 font-bold">
            Ramkrishna <br /> Mondal
          </div>

          {/* Center: Nav links */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-amber-300 hover:text-amber-400 transition">Home</a>
            <a href="#about" className="text-amber-300 hover:text-amber-400 transition">About</a>
            <a href="#projects" className="text-amber-300 hover:text-amber-400 transition">Projects</a>
            <a href="#contact" className="text-amber-300 hover:text-amber-400 transition">Contact</a>
          </div>

          {/* Right side: Social icons */}
          <div className="flex space-x-4">
            <a href="https://github.com/krishna7602" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-black">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ramkrishna-mondal-b73b09294/" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-blue-700">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
