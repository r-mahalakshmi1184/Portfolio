import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import heroAnimation from "../assets/hero-animation.json"; // ✅ correct import path

export default function About() {
  const paragraphs = [
    "I am an AI & Data Science professional passionate about crafting intelligent, user-focused solutions that merge creativity with technology.",
    "My expertise spans data analysis, machine learning, and AI models — turning raw data into meaningful insights and experiences.",
    "I believe technology should be inclusive and empowering — designed to make life simpler and smarter for everyone.",
    "Every project I work on combines innovation, logic, and empathy — creating digital experiences that truly make an impact.",
  ];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const length = paragraphs.length;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, 6000);
    return () => clearInterval(intervalRef.current);
  }, [length]);

  const paraVariant = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent"></div>

      <div className="relative z-10 w-[95%] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-6 md:px-16">
        <div className="w-full md:w-[65%] flex flex-col justify-between bg-black/40 backdrop-blur-lg rounded-3xl p-10 md:p-12 shadow-[0_0_40px_-10px_rgba(236,72,153,0.3)] border border-pink-500/20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-pink-500 text-lg font-semibold uppercase tracking-wider mb-3"
            >
              About Me
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl font-bold mb-6 leading-tight"
            >
              Hi There! I'm <span className="text-pink-500">Mahalakshmi R</span>
            </motion.h1>

            <div className="relative min-h-[140px] flex items-center mb-10">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  variants={paraVariant}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-gray-300 leading-relaxed text-lg"
                >
                  {paragraphs[index]}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="grid grid-cols-2 gap-y-4 text-gray-300 mb-10 text-lg"
            >
              {[
                ["Birthday:", "Sep 19, 2004"],
                ["From:", "Virudhunagar, India"],
                ["Language:", "English, Tamil"],
              ].map(([label, value], i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="font-semibold text-white">{label}</span>{" "}
                  {value}
                </motion.li>
              ))}
            </motion.ul>

            <div className="flex gap-2 mb-10">
              {paragraphs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === index ? "scale-110 bg-pink-500" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <motion.a
              href="/portfolio/assets/Mahalakshmi R _ Resume.pdf"
              download
              whileHover={{ scale: 1.05, backgroundColor: "#ec4899" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-pink-600 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-pink-500/30 transition-all duration-300 text-lg"
            >
              Download Resume
            </motion.a>
          </div>
        </div>

        <div className="w-full md:w-[35%] flex justify-center items-stretch">
          <div className="w-full h-full rounded-3xl shadow-[0_0_40px_-10px_rgba(236,72,153,0.3)] border border-pink-500/20 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden flex items-center justify-center">
            <Lottie
              animationData={heroAnimation} // ✅ clean, works with src/assets
              loop
              autoplay
              className="w-[80%] h-full max-h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
