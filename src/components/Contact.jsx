import React from 'react';
import AnimatedContent from './AnimatedContent .jsx';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen bg-gray-950 text-white px-6 py-20 flex flex-col items-center justify-center"
    >
      <AnimatedContent direction="vertical" distance={50}>
        <h2 className="text-4xl font-bold text-amber-400 mb-10 text-center">
          Contact Me
        </h2>
      </AnimatedContent>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Contact Info */}
        <AnimatedContent direction="horizontal" distance={100}>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-amber-400 mt-1" />
              <span>
                GT Road Bypass, Dr B R Ambedkar National Institute of Technology,
                Jalandhar, India
              </span>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-amber-400 mt-1" />
              <a href="mailto:ramkrishnam170@gmail.com" className="hover:underline">
                ramkrishnam170@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-amber-400 mt-1" />
              <a href="tel:+917602978556" className="hover:underline">
                +91-7602978556
              </a>
            </div>
            <div className="flex items-start gap-4">
              <FaGithub className="text-amber-400 mt-1" />
              <a
                href="https://github.com/krishna7602"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com
              </a>
            </div>
            <div className="flex items-start gap-4">
              <FaLinkedin className="text-amber-400 mt-1" />
              <a
                href="https://www.linkedin.com/in/ramkrishna-mondal-b73b09294/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/ramkrishna-mondal
              </a>
            </div>
          </div>
        </AnimatedContent>

        {/* Right: Contact Form Placeholder */}
        <AnimatedContent direction="horizontal" distance={100} reverse>
          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Let’s Work Together</h3>
            <p className="mb-4 text-sm text-gray-300">
              I’m open to freelance work, internships, or full-time opportunities.
              Feel free to reach out!
            </p>
            <a
              href="mailto:ramkrishnam170@gmail.com"
              className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition"
            >
              Say Hello 👋
            </a>
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default Contact;
