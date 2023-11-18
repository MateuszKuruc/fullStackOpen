import React from "react";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footerText">
        Mateusz Kuruc © 2023
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/MateuszKuruc"
        >
          <FaGithub size={30} className="icon" />
        </a>
      </p>
    </div>
  );
};

export default Footer;
