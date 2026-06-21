import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';

const experiences = [
  {
    company: 'Xtechon',
    role: 'Full Stack Developer Intern',
    duration: 'Feb 2026 – Present',
    location: 'Remote',
    highlights: [
      {
        title: 'MCP Platform',
        description:
          'Engineered a full-stack developer platform using FastAPI, Next.js, and MongoDB that automates the conversion of REST APIs into Model Context Protocol (MCP) servers, reducing manual configuration effort from hours to under 30 seconds.',
      },
      {
        title: 'OpenAPI Code Generation',
        description:
          'Developed an asynchronous OpenAPI parsing engine in Python that programmatically extracts API endpoints and generates optimized FastMCP handler code, with built-in support for API Key, Bearer, and Basic authentication.',
      },
      {
        title: 'Deployment Automation',
        description:
          'Architected an end-to-end deployment pipeline using the Vercel REST API, allowing users to deploy generated MCP servers with a single click, eliminating manual infrastructure setup.',
      },
      {
        title: 'CLI Tooling',
        description:
          'Developed and published a cross-platform CLI tool using Node.js and TypeScript to manage local API schemas, trigger MCP tool execution, and debug workflows through an interactive terminal interface.',
      },
    ],
    technologies: ['FastAPI', 'Next.js', 'MongoDB', 'Python', 'TypeScript', 'Node.js', 'Vercel API', 'MCP'],
    color: 'from-amber-500 to-orange-600',
    glowColor: 'shadow-amber-500/20',
  },
  {
    company: 'careerfy.ai',
    role: 'Full Stack Developer Intern',
    duration: 'Jan 2026',
    location: 'Remote',
    highlights: [
      {
        title: 'Email Automation Pipeline',
        description:
          'Engineered a Node.js system to fetch unread emails via Gmail OAuth and extract structured order data using OpenAI API, achieving 95%+ accuracy.',
      },
      {
        title: 'ERP Integration',
        description:
          'Automated order creation in Microsoft Dynamics 365 Business Central with retry logic and exponential backoff, ensuring 99% sync success.',
      },
      {
        title: 'Async Processing',
        description:
          'Implemented efficient handling of PDF/Excel attachments using Bull queues, reducing blocking and improving response time by 40%.',
      },
      {
        title: 'Monitoring Dashboard',
        description:
          'Built a real-time React.js dashboard to track order processing and sync health, reducing manual verification effort by 90%.',
      },
    ],
    technologies: ['Node.js', 'React.js', 'OpenAI API', 'Gmail OAuth', 'Bull Queues', 'Dynamics 365'],
    color: 'from-blue-500 to-cyan-500',
    glowColor: 'shadow-blue-500/20',
  },
];

const HighlightItem = ({ highlight, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group flex items-start gap-3 py-2"
    >
      <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-amber-400 group-hover:scale-150 group-hover:bg-amber-300 transition-all duration-300" />
      <div>
        <span className="text-amber-300 font-semibold text-sm">{highlight.title}: </span>
        <span className="text-gray-400 text-sm leading-relaxed">{highlight.description}</span>
      </div>
    </motion.div>
  );
};

const ExperienceCard = ({ experience, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-amber-400/20 to-transparent hidden md:block" />

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: 'spring', stiffness: 200 }}
        className="absolute left-4 top-8 w-5 h-5 rounded-full bg-amber-400 border-4 border-gray-950 z-10 hidden md:block"
      >
        <span className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-30" />
      </motion.div>

      {/* Card */}
      <div className={`md:ml-16 group relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-amber-500/40 transition-all duration-500 hover:${experience.glowColor} hover:shadow-2xl`}>
        {/* Gradient accent line */}
        <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${experience.color} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${experience.color} flex items-center justify-center shadow-lg`}>
                <FaBriefcase className="text-white text-sm" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors duration-300">
                  {experience.company}
                </h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`}>
                  {experience.role}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-3 md:mt-0">
            <span className="flex items-center gap-1.5 text-xs text-gray-400 bg-gray-800 px-3 py-1.5 rounded-full">
              <FaCalendarAlt className="text-amber-500" />
              {experience.duration}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-400 bg-gray-800 px-3 py-1.5 rounded-full">
              <FaMapMarkerAlt className="text-amber-500" />
              {experience.location}
            </span>
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-1 mb-6">
          {experience.highlights.map((highlight, i) => (
            <HighlightItem key={i} highlight={highlight} index={i} />
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="text-xs font-medium px-3 py-1.5 rounded-full bg-gray-800/80 text-amber-300 border border-amber-500/20 hover:border-amber-400/60 hover:bg-amber-500/10 transition-all duration-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const WorkExperience = () => {
  return (
    <div id="experience" className="min-h-screen bg-gray-950 py-20 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-amber-400 bg-amber-400/10 px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase"
          >
            Career Journey
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building impactful products through full-stack development, automation, and AI integration.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
