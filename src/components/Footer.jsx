import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-6 px-4 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Name and Year */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Ramkrishna Mondal.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
