import React from "react";
import { github, linkedin, leetcode, email } from "../assets";

const Footer = () => {
  return (
    <footer id="footer" className="bg-primary py-8 flex flex-col items-center justify-center gap-4 z-50 relative">
      {/* Social Media Icons */}
      <div className="flex gap-6">
        <a href="mailto:dighemanju11@gmail.com" target="_blank" rel="noreferrer">
          <img src={email} alt="email" className="w-10 h-10 object-contain cursor-pointer hover:scale-125 transition-all duration-300" />
        </a>
        <a href="https://github.com/Manjushree647" target="_blank" rel="noreferrer">
          <img src={github} alt="github" className="w-10 h-10 object-contain cursor-pointer hover:scale-125 transition-all duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/https://www.linkedin.com/in/manjushree-dighe-90293a257?trk=contact-info/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="linkedin" className="w-10 h-10 object-contain cursor-pointer hover:scale-125 transition-all duration-300" />
        </a>
        <a href="https://leetcode.com/u/MD_11/" target="_blank" rel="noreferrer">
          <img src={leetcode} alt="leetcode" className="w-10 h-10 object-contain cursor-pointer hover:scale-125 transition-all duration-300" />
        </a>
      </div>

      {/* Copyright Text */}
      <p className="text-secondary text-[14px] mt-2">
        &copy; 2026 Manjushree Dighe. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;