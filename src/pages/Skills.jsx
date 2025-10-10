import React from "react";
import { motion } from "framer-motion";

const skills = [
  { title: "Programming & Scripting", percent: 85, details: "Python, Java, SQL" },
  { title: "Data Analytics & Visualization", percent: 90, details: "Power BI, Excel, Pandas, Matplotlib, Plotly, Seaborn, Chart.js, Jupyter" },
  { title: "Machine Learning & AI", percent: 88, details: "Scikit-Learn, TensorFlow, Keras, PyTorch, XGBoost, LightGBM, OpenCV" },
  { title: "Natural Language Processing (NLP)", percent: 82, details: "Sentiment Analysis, Topic Modeling, SpaCy, NLTK, Gensim, Transformers" },
  { title: "Web Development & Frameworks", percent: 80, details: "Django, Flask, Streamlit, HTML, CSS" },
  { title: "UI/UX & Design", percent: 75, details: "Figma, PyQt5, Tkinter" },
  { title: "Database Management", percent: 65, details: "MySQL, PostgreSQL" },
  { title: "Other Tools & Technologies", percent: 62, details: "Git & GitHub, Web Scraping, Data Handling, Deep Translator" },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center py-24 text-white overflow-hidden"
      animate={{
        background: [
          "linear-gradient(to bottom, #000000, #0a0a0a, #1a1a1a)",
          "linear-gradient(to bottom, #0a0a0a, #111111, #000000)"
        ],
      }}
      transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
    >
      {/* Decorative Gradient Blur Circles */}
      <div className="absolute top-16 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-pink-500 text-xl font-semibold uppercase tracking-wider mb-3">
          Skill Set
        </h2>
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-4">
          What I’m Good At
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          A blend of technical proficiency, analytical insight, and creativity — constantly learning, improving, and innovating.
        </p>
        <motion.div
          className="h-[3px] w-24 bg-pink-500 mx-auto mt-5"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto px-6 relative z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Glow border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>

            {/* Skill Card */}
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-[0_0_15px_rgba(236,72,153,0.05)] transition-all duration-500">
              {/* Skill Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  {skill.title}
                </h3>
                <span className="text-pink-400 font-extrabold text-xl">{skill.percent}%</span>
              </div>

              {/* Animated Skill Bar */}
              <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-pink-500 to-purple-400 h-4 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>

              {/* Skill Details */}
              <p className="text-gray-400 text-base leading-relaxed mt-3">{skill.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
