import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-8 py-4 bg-[#020617] text-white">
      <p>Copyright 2024</p>

      <div className="flex items-center space-x-4">
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
