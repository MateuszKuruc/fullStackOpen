import React from "react";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footerText">
        Mateusz Kuruc © 2023
        <FaGithub size={30} />
      </p>
    </div>
  );
};

export default Footer;
