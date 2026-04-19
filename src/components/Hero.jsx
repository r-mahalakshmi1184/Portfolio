import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import heroImage from "../assets/hero1.jpeg"; // adjust path based on your folder structure

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
      animate={{ backgroundPosition: ["center", "center 10%"] }}
      transition={{ repeat: Infinity, duration: 15, repeatType: "reverse" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

      {/* Content Box (Glassmorphism) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center md:text-left px-6 md:px-20 max-w-4xl 
            bg-black/30 backdrop-blur-md p-10 rounded-2xl border border-pink-500/30 shadow-[0_0_20px_rgba(236,72,153,0.2)]"
      >
        {/* Name with Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}

          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6 
                     text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500"
        >
          MAHALAKSHMI R
        </motion.h1>

        {/* Typing Animation for Roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-2xl sm:text-3xl font-semibold text-pink-300 mb-10"
        >
          <TypeAnimation
            sequence={[
              "AI/ML engineer", 2000,
              "Data Analyst", 2000,
              "UI developer", 2000,
              "Business Development Executive", 2000,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 flex flex-col sm:flex-row items-center gap-6"
        >
          <motion.a
            href="#about"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold text-lg 
                       hover:bg-pink-500 transition-all duration-300 shadow-lg"
          >
            About Me
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-pink-500 text-pink-400 px-8 py-3 rounded-full font-semibold text-lg 
                       hover:bg-pink-500 hover:text-white transition-all duration-300"
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 text-white text-3xl"
      >
        ↓
      </motion.div>
    </motion.section>
  );
}
