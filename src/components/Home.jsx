import React from 'react';
import SplitText from './SplitText.jsx'; 
import myPhoto from '../assets/ramkrishna.jpg'; 


const Home = () => {
  return (
    <div id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-gray-950">
      {/* Left: Photo */}
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src={myPhoto}
          alt="Ramkrishna Mondal"
          className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-white"
        />
      </div>

      {/* Right: Intro Text */}
      <div className="text-center md:text-left space-y-4">
        <SplitText
          text="Hello, I'm Ramkrishna"
          className="text-5xl md:text-7xl font-bold text-amber-400"
          splitType="chars"
        />
        <SplitText
          text="I'm a passionate developer who enjoys building creative full-stack applications, solving algorithmic problems, and exploring cutting-edge technologies."
          className="text-amber-300 text-lg leading-relaxed max-w-xl"
          splitType="words"
          delay={60}
          duration={0.7}
        />
        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="bg-amber-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-300 transition duration-300"
          >
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1fuaydV8rXmR0n2En_uII2dh_kcahmW7R/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-amber-400 text-amber-400 px-6 py-3 rounded-full font-semibold hover:bg-amber-400 hover:text-black transition duration-300"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
