import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Smart Traffic Flow with Parking Space Detection",
    date: "Jun 2025 – Jan 2026",
    desc: "Built a real-time traffic monitoring and parking detection system for analyzing traffic density and parking availability. Developed a React dashboard integrated with Flask backend for live traffic visualization and analytics. Implemented REST APIs and SQL database integration for system data management.",
    tech: "React.js, Flask, OpenCV, MySQL",
    link: "https://github.com/Preethujnaik/traffic-management-system",
  },
  {
    title: "Smart Hospital Inventory Management System",
    date: "2026",
    desc: "Built a Java Full Stack inventory system using MVC architecture for hospital stock management. Implemented admin management, CRUD operations, and inventory tracking modules. Integrated AI-based low stock alerts using JDBC and MySQL connectivity.",
    tech: "Java, JSP, Servlets, JDBC, MySQL",
    link: "https://github.com/Preethujnaik/HospitalInventory",
  },
  {
    title: "IVF Management System",
    date: "Feb 2025 – May 2025",
    desc: "Developed a healthcare management system for handling patient records and IVF treatment workflows. Designed SQL database schema and implemented secure CRUD operations for clinical data management. Built RESTful backend services and responsive frontend components for efficient system interaction.",
    tech: "React.js, Flask, SQL, REST APIs",
    link: "https://github.com/Preethujnaik/IVF-Companion",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative w-full">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-[#3d2b33] font-serif relative"
        >
          Projects
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-12px] w-12 h-[2px] bg-[#e99a9a]"></span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/55 border border-pink-100/40 rounded-[2rem] p-8 shadow-sm transition-all duration-300 flex flex-col justify-between hover:shadow-md hover:border-[#e99a9a]/30"
            >
              <div>
                <div className="flex flex-col gap-2 mb-4">
                  <span className="text-xs font-semibold text-slate-500 px-3 py-1 bg-white/70 border border-pink-100 rounded-full self-start">
                    {p.date}
                  </span>
                  <h3 className="text-2xl font-bold text-[#3d2b33] font-serif leading-snug">
                    {p.title}
                  </h3>
                </div>
                <p className="text-[#5c4652] text-sm leading-relaxed mb-6 font-light">
                  {p.desc}
                </p>
                <p className="text-sm text-[#3d2b33] mb-6">
                  <strong>Tools:</strong> <span className="italic">{p.tech}</span>
                </p>
              </div>
              <div className="flex gap-4 border-t border-pink-100/40 pt-6">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold bg-[#e99a9a] hover:bg-[#eb9696] text-white transition shadow-sm"
                >
                  Visit Site
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
