import React from "react";
import { motion } from "framer-motion";

const skills = {
  "Programming Languages": ["Java", "JavaScript", "SQL", "Python (basics)"],
  "Web Technologies": ["React.js", "HTML5", "CSS3", "Spring Boot", "REST APIs"],
  "Databases": ["MySQL"],
  "AI / Machine Learning": ["AI-powered application development", "ML fundamentals", "Prompt-based system design"],
  "Core Concepts": ["OOP", "Data Structures & Algorithms", "DBMS", "Computer Networks", "Operating Systems", "MVC Architecture"],
  "Tools & Platforms": ["Git", "GitHub", "VS Code", "Docker", "Power BI"]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#ffd3d3]/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4 text-[#3d2b33] font-serif relative"
        >
          Skills
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-12px] w-12 h-[2px] bg-[#e99a9a]"></span>
        </motion.h2>
        <p className="text-center text-[#5c4652] text-lg max-w-xl mx-auto mb-16 font-light">
          My toolkit for crafting calm, thoughtful, and beautifully detailed digital experiences.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/60 border border-pink-100/60 rounded-[2rem] p-6 hover:border-[#e99a9a]/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-5 flex items-center gap-2 text-[#3d2b33] font-serif">
                  <span className="w-2 h-2 rounded-full bg-[#e99a9a]"></span>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full text-sm bg-white/70 border border-pink-100/50 text-[#4a3740] hover:text-white hover:bg-[#e99a9a] hover:border-[#e99a9a] transition duration-200 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
