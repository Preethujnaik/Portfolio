import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatusMessage("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatusMessage("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ffd3d3]/10 rounded-full blur-[140px] -z-10"></div>

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-[#3d2b33] font-serif relative"
        >
          Let’s Bloom Together
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-12px] w-12 h-[2px] bg-[#e99a9a]"></span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start text-left">
          {/* Left Side Info */}
          <div className="space-y-6 text-[#5c4652] font-light text-base md:text-lg">
            <p className="flex items-center gap-2 font-medium">
              Drop a message to brighten my day
            </p>
            <p>
              <strong className="text-[#e99a9a]">Email:</strong>{" "}
              <a href={`mailto:${process.env.REACT_APP_EMAIL}`} className="hover:underline text-[#4a3740]">
                {process.env.REACT_APP_EMAIL}
              </a>
            </p>
            <p>
              <strong className="text-[#e99a9a]">Location:</strong> Karnataka, India
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4 text-sm font-semibold text-[#4a3740]">
              <a
                href={process.env.REACT_APP_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e99a9a] transition flex items-center gap-1.5"
              >
                LinkedIn
              </a>
              <a
                href={process.env.REACT_APP_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e99a9a] transition flex items-center gap-1.5"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right Side Form */}
          <div>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className="w-full p-4 text-base rounded-xl bg-white/50 border border-pink-100 focus:border-[#e99a9a] focus:ring-1 focus:ring-[#e99a9a] focus:outline-none text-[#4a3740] placeholder-slate-400 transition"
                  required
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  className="w-full p-4 text-base rounded-xl bg-white/50 border border-pink-100 focus:border-[#e99a9a] focus:ring-1 focus:ring-[#e99a9a] focus:outline-none text-[#4a3740] placeholder-slate-400 transition"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-4 text-base rounded-xl bg-white/50 border border-pink-100 focus:border-[#e99a9a] focus:ring-1 focus:ring-[#e99a9a] focus:outline-none text-[#4a3740] placeholder-slate-400 transition"
                rows="5"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-4 bg-[#e99a9a] hover:bg-[#eb9696] text-white font-bold rounded-full shadow-md shadow-pink-200/30 transition-all cursor-pointer text-center"
              >
                Send Some Sunshine
              </button>
            </form>

            {statusMessage && (
              <p className="mt-4 text-sm font-semibold text-[#e99a9a] bg-white/50 border border-pink-100 rounded-xl px-4 py-2 inline-block">
                {statusMessage}
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-pink-100/40 text-center">
          <div className="inline-block px-6 py-3 bg-white/40 border border-pink-100 rounded-2xl shadow-sm text-[#826e78] text-sm">
            Made with sunlight by Preethu | © 2026
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
