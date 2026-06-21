import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaTrophy, FaLaptopCode, FaServer, FaTools, FaCubes, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiExpress, SiPython, SiFastapi, SiJavascript, SiCplusplus, SiGit, SiPostman, SiVercel, SiVite } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <FaLaptopCode className="text-blue-400" />,
    color: 'from-blue-500 to-cyan-400',
    borderColor: 'border-blue-500/20 hover:border-blue-400/50',
    skills: [
      { name: 'React.js', icon: <SiReact className="text-cyan-400" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
      { name: 'Vite', icon: <SiVite className="text-purple-400" /> },
      { name: 'HTML/CSS', icon: <FaLaptopCode className="text-orange-400" /> },
    ],
  },
  {
    title: 'Backend',
    icon: <FaServer className="text-green-400" />,
    color: 'from-green-500 to-emerald-400',
    borderColor: 'border-green-500/20 hover:border-green-400/50',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
      { name: 'FastAPI', icon: <SiFastapi className="text-teal-400" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
      { name: 'REST APIs', icon: <FaServer className="text-blue-300" /> },
      { name: 'JWT / MCP', icon: <FaCubes className="text-amber-400" /> },
    ],
  },
  {
    title: 'Languages',
    icon: <FaCubes className="text-amber-400" />,
    color: 'from-amber-500 to-orange-400',
    borderColor: 'border-amber-500/20 hover:border-amber-400/50',
    skills: [
      { name: 'C++', icon: <SiCplusplus className="text-blue-400" /> },
      { name: 'Python', icon: <SiPython className="text-yellow-300" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'SQL', icon: <FaCubes className="text-cyan-300" /> },
    ],
  },
  {
    title: 'Tools',
    icon: <FaTools className="text-purple-400" />,
    color: 'from-purple-500 to-pink-400',
    borderColor: 'border-purple-500/20 hover:border-purple-400/50',
    skills: [
      { name: 'Git', icon: <SiGit className="text-orange-500" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
      { name: 'Vercel', icon: <SiVercel className="text-white" /> },
      { name: 'VS Code', icon: <FaLaptopCode className="text-blue-400" /> },
    ],
  },
];

const achievements = [
  {
    icon: '🧩',
    metric: '750+',
    label: 'DSA Problems Solved',
    detail: 'LeetCode, Codeforces, GeeksforGeeks',
  },
  {
    icon: '🏆',
    metric: 'Top 24%',
    label: 'LeetCode Rating: 1593',
    detail: 'Top 3,255 out of 30,000+ participants',
  },
  {
    icon: '🎓',
    metric: 'NIT Jalandhar',
    label: 'B.Tech — CGPA: 7.34',
    detail: '2022 – 2026',
  },
  {
    icon: '🎯',
    metric: 'E-Cell',
    label: 'Core Member',
    detail: 'Tech talks, workshops, IPL Auction sim',
  },
];

const SkillCard = ({ category, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group bg-gray-900/60 backdrop-blur-sm border ${category.borderColor} rounded-2xl p-5 transition-all duration-500 hover:shadow-xl`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg opacity-80`}>
          <span className="text-white text-sm">{category.icon}</span>
        </div>
        <h4 className="text-lg font-semibold text-white">{category.title}</h4>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-gray-800/80 text-gray-300 border border-gray-700/50 hover:border-gray-600 hover:text-white hover:bg-gray-800 transition-all duration-300 cursor-default group/skill"
          >
            <span className="text-sm group-hover/skill:scale-110 transition-transform duration-200">{skill.icon}</span>
            {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <div id="about" className="min-h-screen bg-gray-900 text-white px-6 py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative" ref={sectionRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-block text-sm font-semibold text-amber-400 bg-amber-400/10 px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase"
          >
            Get to know me
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about turning ideas into production-grade applications
          </p>
        </motion.div>

        {/* Main Content: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16">
          {/* Left: About Text (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-5"
          >
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 space-y-5">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                I'm a dedicated and curious developer currently pursuing{' '}
                <span className="text-amber-300 font-semibold">B.Tech (2026)</span> at{' '}
                <span className="text-amber-300 font-semibold">NIT Jalandhar</span>. With a strong focus on 
                full-stack development, I enjoy bringing ideas to life through responsive web applications.
              </p>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                I've built production-grade platforms at startups — from an{' '}
                <span className="text-white font-medium">MCP automation platform</span> converting REST APIs
                into AI agent tools, to{' '}
                <span className="text-white font-medium">email automation pipelines</span> processing
                enterprise orders with 95%+ accuracy.
              </p>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                My projects include a full-stack{' '}
                <span className="text-white font-medium">Uber Clone</span> with real-time tracking,
                a{' '}
                <span className="text-white font-medium">Biotech Research Portal</span> for NIT Jalandhar,
                and various applications integrating REST APIs, authentication, and Google Maps.
              </p>
              <p className="text-base md:text-lg text-gray-400 italic">
                Always excited to explore new tools and contribute meaningfully to open-source or product teams.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://codolio.com/profile/ALiYwORm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-amber-400/40 text-amber-400 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-amber-400/10 hover:border-amber-400 transition-all duration-300"
                >
                  <FaTrophy size={14} />
                  DSA Portfolio
                  <FaExternalLinkAlt size={10} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://drive.google.com/file/d/19Sbb8-klEbAqiU9e1TmTJrQ-HjLH0vCX/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-gray-600 text-gray-300 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
                >
                  <FaGraduationCap size={14} />
                  View Resume
                  <FaExternalLinkAlt size={10} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Skills Grid (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-1 gap-4">
              {skillCategories.map((category, index) => (
                <SkillCard key={index} category={category} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements & Education Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Achievements & Education
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 text-center hover:border-amber-500/30 transition-all duration-300 cursor-default"
              >
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <p className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-1">
                  {item.metric}
                </p>
                <p className="text-sm text-white font-medium mb-1">{item.label}</p>
                <p className="text-xs text-gray-500">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
