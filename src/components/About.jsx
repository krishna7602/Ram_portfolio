import React from 'react';

const About = () => {
  return (
    <div id="about" className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Side: Description */}
        <div className="md:w-2/3 space-y-6">
          <h2 className="text-4xl font-bold text-amber-400">About Me</h2>
          <p className="text-lg text-gray-300">
            I'm a dedicated and curious developer currently pursuing B.Tech(2026) at NIT Jalandhar. With a strong focus on full-stack development, I enjoy bringing ideas to life through responsive web applications. I’ve consistently honed my coding skills with over <span className="text-amber-300 font-semibold">450+ LeetCode problems solved (max 1586)</span> and actively contribute to real-world projects that improve performance, scalability, and user experience.
          </p>
          <p className="text-lg text-gray-300">
            My projects include building a full-stack Uber Clone,youtube-backend-clone,and multiple React apps integrating REST APIs, authentication, Google Maps, and more. I’m also experienced in designing interactive UIs with Tailwind, Vite, and React Hooks.
          </p>
          <p className="text-lg text-gray-300">
            Always excited to explore new tools and contribute meaningfully to open-source or product teams.
          </p>
          <a
            href="https://codolio.com/profile/ALiYwORm"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-amber-400 text-amber-400 px-6 py-3 rounded-full font-semibold hover:bg-amber-400 hover:text-black transition duration-300"
          >
            My DSA portfolio
          </a>
        </div>

        <div className="md:w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-amber-400 mb-4">Skills & Tools</h3>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-2">Frontend</h4>
            <div className="flex flex-wrap gap-2 text-sm text-gray-200">
              <span className="bg-gray-700 px-3 py-1 rounded-full">HTML</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">CSS</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">JavaScript</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">React.js</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">Tailwind CSS</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">Vite</span>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-2">Backend</h4>
            <div className="flex flex-wrap gap-2 text-sm text-gray-200">
              <span className="bg-gray-700 px-3 py-1 rounded-full">Node.js</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">Express.js</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">MongoDB</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">Mongoose</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">JWT</span>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-2">Tools</h4>
            <div className="flex flex-wrap gap-2 text-sm text-gray-200">
              <span className="bg-gray-700 px-3 py-1 rounded-full">Git</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">GitHub</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">VSCode</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">Postman</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">Cloudinary</span>
            </div>
          </div>

          <div className="mb-0">
            <h4 className="text-lg font-semibold text-white mb-2">Programming</h4>
            <div className="flex flex-wrap gap-2 text-sm text-gray-200">
              <span className="bg-gray-700 px-3 py-1 rounded-full">C++</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">JavaScript</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">DSA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
