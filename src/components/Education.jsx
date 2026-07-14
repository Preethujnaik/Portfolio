import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "B.E. in Computer Science and Engineering",
    institution: "SDM Institute of Technology",
    location: "Ujire, Dakshina Kannada",
    duration: "2022 – 2026",
    details: "CGPA: 8.46",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#ebd1ff]/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-[#3d2b33] font-serif relative"
        >
          Education
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-12px] w-12 h-[2px] bg-[#e99a9a]"></span>
        </motion.h2>
        <div className="space-y-8 max-w-2xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/60 border border-pink-100/60 rounded-[2rem] p-8 hover:border-[#e99a9a]/30 transition-all duration-300 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#3d2b33] font-serif">{edu.degree}</h3>
                  <p className="text-[#5c4652] font-semibold mt-1">{edu.institution}</p>
                </div>
                <span className="text-xs font-semibold text-slate-500 px-3 py-1 bg-white/70 border border-pink-100 rounded-full self-start sm:self-auto whitespace-nowrap">
                  {edu.duration}
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-4">{edu.location}</p>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs bg-amber-100/50 border border-amber-200/60 text-[#b37a1e] font-bold shadow-sm">
                {edu.details}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
