import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SplitText from './SplitText.jsx';
import myPhoto from '../assets/ramkrishna.jpg';
import { FaGithub, FaLinkedin, FaCode, FaDownload, FaArrowRight } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const roles = [
  'Full Stack Developer',
  'Backend Engineer',
  'Problem Solver',
  'Frontend Developer',
  'Devops Engineer'
];

const stats = [
  { label: 'DSA Problems', value: '750+', icon: '🧩' },
  { label: 'LeetCode Rating', value: '1593', icon: '📈' },
  { label: 'Internships', value: '2+', icon: '💼' },
  { label: 'Projects', value: '10+', icon: '🚀' },
];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gray-950 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-purple-500/3 blur-[80px]" />
      </div>

      {/* Floating grid dots */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fbbf24 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10">
        {/* Left: Photo with glowing ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-shrink-0"
        >
          <div className="relative group">
            {/* Outer glow ring */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 opacity-40 blur-md group-hover:opacity-60 transition-opacity duration-700 animate-spin-slow" />

            {/* Static ring border */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 opacity-80" />

            {/* Photo */}
            <img
              src={myPhoto}
              alt="Ramkrishna Mondal"
              className="relative rounded-full w-56 h-56 md:w-72 md:h-72 object-cover shadow-2xl z-10 border-4 border-gray-950"
            />

            {/* Status indicator */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-4 right-4 z-20 flex items-center gap-2 bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-green-500/30"
            >
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full shadow-lg shadow-green-400/50" />
              <span className="text-xs text-green-400 font-medium">Open to work</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="text-center md:text-left space-y-5 flex-1">
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-amber-400 bg-amber-400/10 border border-amber-400/20 px-4 py-1.5 rounded-full">
              <span className="animate-pulse">👋</span> Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main heading */}
          <SplitText
            text="Hello, I'm Ramkrishna"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            splitType="chars"
          />

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-2 justify-center md:justify-start"
          >
            <span className="text-xl md:text-2xl text-gray-400 font-light">I'm a</span>
            <span className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent min-w-[200px] md:min-w-[280px] text-left">
              {displayText}
              <span className="animate-pulse text-amber-400">|</span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            Building creative full-stack applications, solving algorithmic problems,
            and exploring cutting-edge technologies. Currently a B.Tech student at{' '}
            <span className="text-amber-300 font-medium">NIT Jalandhar</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-black px-7 py-3.5 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 hover:scale-[1.02]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Me
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={14} />
              </span>
            </a>
            <a
              href="https://drive.google.com/file/d/19Sbb8-klEbAqiU9e1TmTJrQ-HjLH0vCX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 border border-amber-400/40 text-amber-400 px-7 py-3.5 rounded-full font-semibold hover:bg-amber-400/10 hover:border-amber-400 transition-all duration-300 hover:scale-[1.02]"
            >
              <FaDownload size={14} className="group-hover:animate-bounce" />
              My Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex items-center gap-3 justify-center md:justify-start pt-2"
          >
            <span className="text-sm text-gray-500">Find me on</span>
            <div className="flex gap-2">
              <a
                href="https://github.com/krishna7602"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-amber-400/50 hover:bg-gray-800 transition-all duration-300"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ramkrishna-mondal-b73b09294/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/50 hover:bg-gray-800 transition-all duration-300"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://leetcode.com/u/ramkrishna_7602/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-400/50 hover:bg-gray-800 transition-all duration-300"
              >
                <SiLeetcode size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.4 }}
        className="mt-16 md:mt-20 w-full max-w-4xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.5 + index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-5 text-center hover:border-amber-500/30 transition-all duration-300 cursor-default"
            >
              <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </span>
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-xs text-gray-500 mt-1 font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-xs text-gray-600 uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-gray-700 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-amber-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
