import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 relative w-full">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-[#3d2b33] font-serif relative"
        >
          About Me
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-12px] w-12 h-[2px] bg-[#e99a9a]"></span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/60 border border-pink-100/60 rounded-[2rem] p-8 shadow-sm hover:shadow-md transition duration-300 text-center flex flex-col items-center justify-center min-h-[220px]"
          >
            <h3 className="text-xl font-semibold text-[#3d2b33] mb-4 flex items-center justify-center gap-2 font-serif">
              Who I Am
            </h3>
            <p className="text-[#5c4652] text-sm leading-relaxed font-light">
              Recent Computer Science Engineering graduate who enjoys turning real-world problems into working software. Comfort across the stack with React.js, Java, Spring Boot, and SQL.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/60 border border-pink-100/60 rounded-[2rem] p-8 shadow-sm hover:shadow-md transition duration-300 text-center flex flex-col items-center justify-center min-h-[220px]"
          >
            <h3 className="text-xl font-semibold text-[#3d2b33] mb-4 flex items-center justify-center gap-2 font-serif">
              What I Love
            </h3>
            <p className="text-[#5c4652] text-sm leading-relaxed font-light">
              Drawn to building systems that are not just functional but genuinely useful. I love crafting clean, elegant designs and working on AI-driven application designs.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/60 border border-pink-100/60 rounded-[2rem] p-8 shadow-sm hover:shadow-md transition duration-300 text-center flex flex-col items-center justify-center min-h-[220px]"
          >
            <h3 className="text-xl font-semibold text-[#3d2b33] mb-4 flex items-center justify-center gap-2 font-serif">
              Sunlight Side
            </h3>
            <p className="text-[#5c4652] text-sm leading-relaxed font-light">
              Eager to bring a product-focused, patient engineering mindset to a team. I enjoy solving complex logic puzzles and learning modern, creative visual flows.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
