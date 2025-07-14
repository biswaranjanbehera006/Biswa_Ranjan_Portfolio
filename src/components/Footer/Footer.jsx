import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Biswa Ranjan Behera</h2>

        
        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com" },
            { icon: <FaTwitter />, link: "https://twitter.com" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/biswa-ranjan-behera/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/biswa_ranjan_behera_3/?hl=en" },
            { icon: <FaYoutube />, link: "https://www.youtube.com" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Biswa Ranjan Behera. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
