import React, { useState } from "react";
import profilePic from "../assets/profile.jpg"; // match the file name
import { motion } from "framer-motion";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1); // 👈 zoom level

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 3)); // max 3x
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 1)); // min 1x
  const handleReset = () => setZoom(1);

  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col md:flex-row items-center justify-center gap-16 px-6 py-20"
    >
      {/* Decorative Glow Blobs */}
      <div className="absolute top-1/4 left-10 md:left-1/4 w-72 h-72 bg-[#ffd3d3]/30 rounded-full blur-[100px] animate-float -z-10"></div>
      <div className="absolute bottom-1/4 right-10 md:right-1/4 w-80 h-80 bg-[#ebd1ff]/30 rounded-full blur-[120px] -z-10"></div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left flex-1 max-w-2xl"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/70 text-[#e99a9a] border border-pink-100/60 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span> Open to Roles
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-[#3d2b33] font-serif">
          Hi there, I'm <br className="hidden sm:inline" />
          <span className="text-[#3d2b33]">
            Preethu J Naik
          </span>
        </h1>
        <p className="text-[#5c4652] text-lg md:text-xl font-light leading-relaxed mb-8">
          A Software Development Intern & Computer Science Engineering Graduate crafting elegant, warm digital experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-full bg-[#e99a9a] hover:bg-[#eb9696] text-white font-semibold shadow-md shadow-pink-200/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Discover My Creations
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full bg-white/60 border border-pink-200 hover:bg-white/80 text-[#4a3740] font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex justify-center items-center"
      >
        <div className="relative p-4 rounded-[2.5rem] bg-gradient-to-tr from-pink-100 to-purple-100 border border-pink-200/60 shadow-sm animate-float">
          <img
            src={profilePic}
            alt="Preethu J Naik"
            onClick={() => setIsOpen(true)} // open modal
            className="w-56 h-56 md:w-64 md:h-64 rounded-[2rem] object-cover cursor-pointer shadow-sm hover:scale-[1.01] transition-transform duration-300"
          />
        </div>
      </motion.div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => {
            setIsOpen(false);
            setZoom(1); // reset zoom when closing
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative"
            onClick={(e) => e.stopPropagation()} // prevent closing on img click
          >
            <img
              src={profilePic}
              alt="Preethu J Naik"
              style={{ transform: `scale(${zoom})` }} // 👈 apply zoom
              className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-2xl border-4 border-indigo-600 transition-transform duration-300"
            />

            {/* Close button */}
            <button
              onClick={() => {
                setIsOpen(false);
                setZoom(1);
              }}
              className="absolute top-2 right-2 bg-white text-indigo-600 px-3 py-1 rounded-full shadow-md hover:bg-indigo-100 transition"
            >
              ✕
            </button>

            {/* Zoom controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
              <button
                onClick={handleZoomOut}
                className="bg-white text-indigo-600 px-3 py-1 rounded-full shadow-md hover:bg-indigo-100 transition"
              >
                ➖
              </button>
              <button
                onClick={handleReset}
                className="bg-white text-indigo-600 px-3 py-1 rounded-full shadow-md hover:bg-indigo-100 transition"
              >
                ⟳
              </button>
              <button
                onClick={handleZoomIn}
                className="bg-white text-indigo-600 px-3 py-1 rounded-full shadow-md hover:bg-indigo-100 transition"
              >
                ➕
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Hero;
