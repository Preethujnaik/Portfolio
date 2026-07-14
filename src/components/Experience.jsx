import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Development Intern",
    org: "TAP Academy, Bengaluru",
    date: "Jan 2026 – Present",
    details: [
      "Built a Java full-stack Hospital Inventory Management System using MVC architecture, JSP, Servlets, JDBC, MySQL, and Apache Tomcat.",
      "Developed modules for inventory tracking, stock management, admin operations, and secure CRUD functionality.",
      "Integrated AI-based inventory insights and low-stock alert features for smarter inventory monitoring.",
      "Worked across REST APIs, database connectivity, frontend-backend integration, and enterprise application workflows."
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative w-full">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#ffd3d3]/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-[#3d2b33] font-serif relative"
        >
          Experience
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-12px] w-12 h-[2px] bg-[#e99a9a]"></span>
        </motion.h2>
        <div className="max-w-2xl mx-auto space-y-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-[#3d2b33] font-serif">{exp.title}</h3>
              <p className="text-[#e99a9a] font-semibold mt-1">{exp.org}</p>
              <p className="text-xs font-semibold text-slate-500 mt-2 mb-6">{exp.date}</p>
              <ul className="text-[#5c4652] space-y-3 max-w-xl mx-auto font-light">
                {exp.details.map((d, idx) => (
                  <li key={idx} className="text-sm">
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
