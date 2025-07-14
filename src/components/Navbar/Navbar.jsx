import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "myeducation", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-[7vw] md:px-[7vw] lg:px-[10vw] transition-all duration-300 ${
        isScrolled
          ? "bg-[#050414]/80 backdrop-blur-md border-b border-[#8245ec]/30 shadow-md"
          : "bg-[#050414]/0"
      }`}
    >
      <div className="text-white py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[#8245ec] text-lg">&lt;/&gt;</span>
          <span className="text-white font-semibold whitespace-nowrap">
            Biswa Ranjan Behera
          </span>
        </div>

        {/* Center: Navigation menu */}
        <ul className="hidden md:flex flex-1 justify-center space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] transition ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right: Social icons */}
        <div className="hidden md:flex space-x-4 shrink-0">
          <a
            href="https://github.com/biswaranjanbehera006"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/biswa-ranjan-behera/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414]/90 backdrop-blur-md z-40 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-5 py-5 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white transition ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            {/* Socials */}
            <div className="flex space-x-5 pt-3">
              <a
                href="https://github.com/biswaranjanbehera006"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/biswa-ranjan-behera/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
