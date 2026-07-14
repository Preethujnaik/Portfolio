import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const sections = ["hero", "about", "skills", "projects", "experience", "education", "certificates", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-6">
      <div className="max-w-5xl mx-auto mt-4 backdrop-blur-md bg-white/60 border border-pink-100/50 rounded-2xl md:rounded-[2rem] px-6 flex justify-between items-center py-4 shadow-sm relative">
        {/* Logo / Name */}
        <h1 
          className="text-2xl font-extrabold text-[#3d2b33] cursor-pointer hover:text-[#e99a9a] transition-colors font-serif"
          onClick={() => {
            document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
          }}
        >
          Preethu J Naik
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-[#4a3740] font-medium">
          {sections.map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                offset={-90}
                spy={true}
                activeClass="text-[#e99a9a] font-semibold border-b-2 border-[#e99a9a]"
                className="cursor-pointer hover:text-[#e99a9a] transition pb-1"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#4a3740] hover:text-[#e99a9a] focus:outline-none transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full mt-2 p-4 bg-white/95 backdrop-blur-md border border-pink-100/60 rounded-2xl shadow-lg md:hidden z-50">
            <ul className="flex flex-col gap-4 text-[#4a3740] font-medium text-center">
              {sections.map((section) => (
                <li key={section}>
                  <Link
                    to={section}
                    smooth={true}
                    duration={500}
                    offset={-90}
                    spy={true}
                    activeClass="text-[#e99a9a] font-semibold"
                    className="block py-2 cursor-pointer hover:text-[#e99a9a] transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
