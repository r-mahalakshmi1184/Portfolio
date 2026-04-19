import React from "react";
import { motion } from "framer-motion";
import { Brain, BarChart3, Layout, Code, Monitor, Cog } from "lucide-react";

const services = [
  {
    icon: <Brain className="text-white" size={36} />,
    title: "AI / ML",
    desc: "Building intelligent systems using cutting-edge Machine Learning and AI algorithms to solve real-world problems.",
  },
  {
    icon: <BarChart3 className="text-white" size={36} />,
    title: "Data Science",
    desc: "Analyzing large datasets, uncovering insights, and developing predictive models for data-driven decision-making.",
  },
  {
    icon: <Layout className="text-white" size={36} />,
    title: "UI Designer",
    desc: "Creating intuitive and visually appealing user interfaces with modern design principles.",
  },
  {
    icon: <Code className="text-white" size={36} />,
    title: "Python Development",
    desc: "Developing robust applications and scripts using Python for various domains including automation and data processing.",
  },
  {
    icon: <Monitor className="text-white" size={36} />,
    title: "Web Design",
    desc: "Creating responsive and visually captivating websites optimized for all screen sizes and user experiences.",
  },
  {
    icon: <Cog className="text-white" size={36} />,
    title: "Business Development Executive",
    desc: "Driving business growth through strategic partnerships, market analysis, and client relationship management.",
  },
];

export default function Services() {
  return (
    <motion.section
      id="services"
      className="relative min-h-screen text-white flex flex-col items-center justify-center py-24 overflow-hidden"
      animate={{
        background: [
          "linear-gradient(to bottom, #000000, #0a0a0a, #1a1a1a)",
          "linear-gradient(to bottom, #0a0a0a, #111111, #000000)",
        ],
      }}
      transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
    >
      {/* Decorative Gradient Blur Circles */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"></div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-pink-500 text-lg font-semibold uppercase tracking-wider mb-3">
          Services
        </h2>
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-4">
          What I Offer
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Combining creativity, data, and technology to deliver smart and elegant digital solutions.
        </p>
        <motion.div
          className="h-[3px] w-24 bg-pink-500 mx-auto mt-5"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 max-w-6xl relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Glow border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>

            {/* Card Content */}
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 text-center shadow-xl hover:shadow-[0_0_15px_rgba(236,72,153,0.05)] transition-all duration-500 h-full flex flex-col">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mb-6"
              >
                {service.icon}
              </motion.div>

              <h3 className="text-2xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
