import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Raw Material Prediction",
    category: "Company Project – Ramco Cements",
    tech: "PyQt5, ML",
    description:
      "Forecasting model for cement industry stock predictions. Developed a low-stock alert system using machine learning.",
    img: "assets/dashboard.png",
    github: "https://github.com/your-repo",
  },
  {
    title: "Water Consumption Monitoring",
    category: "Company Project – Ramco Cements",
    tech: "PyQt5, Data Visualization, ML",
    description:
      "Interactive dashboard to track industrial water usage. Integrated Sankey diagrams and alert systems to optimize resource consumption.",
    img: "assets/sankey diagram.png",
    github: "https://github.com/your-repo",
  },
  {
    title: "Mess Management System",
    category: "College Project",
    tech: "Django, MySQL, Chart.js",
    description:
      "A role-based inventory system to track purchases, usage, and stock levels. Implemented email notifications for low stock alerts and real-time data visualizations.",
    img: "assets/Availablestock.png",
    github: "https://github.com/your-repo",
  },
  {
    title: "News Analyzer",
    category: "Self Project",
    tech: "NLP, Streamlit, Plotly, Web Scraping",
    description:
      "Complete news analysis platform with article scraping, sentiment analysis, topic extraction, and translation. Integrated Q&A system and interactive charts.",
    img: "assets/scrapping.png",
    github: "https://github.com/your-repo",
  },
  {
    title: "Image Cartoonifier",
    category: "Self Project",
    tech: "OpenCV, Deep Learning, Streamlit",
    description:
      "Web app that transforms images into cartoon-style visuals using image processing. Interactive UI with real-time previews and multiple style filters.",
    img: "assets/upload.png",
    github: "https://github.com/your-repo",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="relative min-h-screen py-24 text-white overflow-hidden"
      animate={{
        background: [
          "linear-gradient(to bottom, #000000, #0a0a0a, #1a1a1a)",
          "linear-gradient(to bottom, #0a0a0a, #111111, #000000)",
        ],
      }}
      transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
    >
      {/* Decorative Gradient Blur Circles */}
      <div className="absolute top-16 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-pink-500 text-lg uppercase tracking-widest mb-2">
          Projects
        </h2>
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
          Some of My Work
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          A showcase of my academic, professional, and self-driven projects blending AI, Data Science, and Web Development.
        </p>
        <motion.div
          className="h-[3px] w-24 bg-pink-500 mx-auto mt-5"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Glow border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>

            {/* Card Content */}
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_0_20px_rgba(236,72,153,0.08)] transition-all duration-500 flex flex-col">
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-50 transition duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm uppercase text-pink-400 font-semibold mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 group-hover:text-pink-400 transition">
                  {project.title}
                </h3>
                <p className="text-pink-400 text-sm mb-3">{project.tech}</p>
                <p className="text-gray-400 mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* GitHub Button */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 px-5 py-2 rounded-lg font-semibold text-white w-fit transition"
                >
                  <FaGithub className="text-xl" />
                  GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
