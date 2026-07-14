import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-6">
      <div className="max-w-5xl mx-auto mt-4 backdrop-blur-md bg-white/60 border border-pink-100/50 rounded-2xl md:rounded-full px-6 flex justify-between items-center py-4 shadow-sm">
        {/* Logo / Name */}
        <h1 className="text-2xl font-extrabold text-[#3d2b33] cursor-pointer hover:text-[#e99a9a] transition-colors font-serif">
          Preethu J Naik
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-6 text-[#4a3740] font-medium">
          {["hero", "about", "skills", "projects", "experience", "education", "certificates", "contact"].map(
            (section) => (
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
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
