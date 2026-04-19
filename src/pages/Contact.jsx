import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kfif6n8", // ✅ your service ID
        "template_axotb6q", // ✅ your template ID
        form.current,
        "sAYF9ozKsdGSO_nc1" // ✅ your public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20 px-6 overflow-hidden"
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-stretch">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-between relative pl-12 border-l-4 border-pink-500 py-12"
        >
          <h2 className="text-7xl font-extrabold leading-tight mb-16">
            Contact <span className="text-pink-500">Me.</span>
          </h2>

          {/* Connect With Me */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold mb-8">Connect With Me</h3>
            <div className="flex flex-col space-y-6">
              <motion.a
                href="https://github.com/r-mahalakshmi1184"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, color: "#ec4899" }}
                className="flex items-center space-x-4 text-2xl text-gray-300 hover:text-pink-400 transition"
              >
                <Github className="w-10 h-10" />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/mahalakshmi-r-a786a9247"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, color: "#ec4899" }}
                className="flex items-center space-x-4 text-2xl text-gray-300 hover:text-pink-400 transition"
              >
                <Linkedin className="w-10 h-10" />
                <span>LinkedIn</span>
              </motion.a>

              <motion.a
                href="mailto:rmahalakshmi1184@gmail.com"
                whileHover={{ scale: 1.05, color: "#ec4899" }}
                className="flex items-center space-x-4 text-2xl text-gray-300 hover:text-pink-400 transition"
              >
                <Mail className="w-10 h-10" />
                <span>Email</span>
              </motion.a>
            </div>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >

          </motion.div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex flex-col justify-center"
        >
          {/* Animated Corner Borders */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute -top-3 -left-3 w-10 h-10 border-t-4 border-l-4 border-pink-500"
          ></motion.div>
          <div className="absolute -top-3 -right-3 w-10 h-10 border-t-4 border-r-4 border-pink-500"></div>
          <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b-4 border-l-4 border-pink-500"></div>
          <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-4 border-r-4 border-pink-500"></div>

          {/* Contact Form Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-2xl shadow-[0_0_40px_-10px_rgba(236,72,153,0.3)] p-10 border border-pink-500"
          >
            <h3 className="text-3xl font-bold mb-6 text-center">
              Contact Form
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <label className="block text-lg mb-2">Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-pink-500"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <label className="block text-lg mb-2">Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-pink-500"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <label className="block text-lg mb-2">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Write your message..."
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-pink-500"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 rounded-lg bg-pink-500 text-white font-semibold text-lg shadow-md hover:bg-pink-600 hover:shadow-pink-500/40 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
