import React from "react";
import TiltedCard from "./TiltedCard"; // Adjust path as needed

const projects = [
  {
    title: "Uber Clone",
    imageSrc: "https://s23.q4cdn.com/407969754/files/doc_multimedia/Uber_Logo_Black_RGB.jpg", // replace with your actual image path
    link: "https://github.com/krishna7602/uber-clone",
  },
  {
    title: "YouTube Backend Clone",
    imageSrc: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/YouTube_Tomorrowland-22.width-500.format-webp.webp",
    link: "https://github.com/krishna7602/Youtube-backend-clone",
  },
  {
    title: "Employee Management System",
    imageSrc: "https://thumbs.dreamstime.com/b/employee-management-icon-flat-style-vector-eps-use-infographics-web-design-presentations-printed-materials-327467809.jpg",
    link: "https://github.com/krishna7602/Employee-Managment-System",
  },
  {
    title: "Hotel Booking Platform",
    imageSrc: "https://img.freepik.com/premium-vector/hotel-booking-icon-simple-element-illustration-hotel-booking-concept-symbol-design-can-be-used-web-mobile_159242-7924.jpg",
    link: "https://github.com/krishna7602/hotel-booking-platform",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen bg-gray-950 py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-amber-400 mb-16">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12 justify-items-center">
        {projects.map((project, index) => (
          <TiltedCard
            key={index}
            imageSrc={project.imageSrc}
            captionText={project.title}
            overlayContent={
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black bg-opacity-70 text-white px-4 py-2 rounded text-sm hover:underline"
              >
                View on GitHub →
              </a>
            }
            displayOverlayContent={true}
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            scaleOnHover={1.05}
          />
        ))}
      </div>
      <div className="mt-12 text-center">
        <a
          href="https://github.com/krishna7602"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-lg"
        >
          Show More on GitHub →
        </a>
      </div>
    </div>
  );
};

export default Projects;
