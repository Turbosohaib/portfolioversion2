import React from "react";
import logo from "/assets/sohaibLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-16 flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 w-10" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/sohaib-shah-b44a65270/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/Turbosohaib" target="_blank">
          <FaGithub />
        </a>
        <a href="https://x.com/HamzaKhan36557" target="_blank">
          <FaXTwitter />
        </a>
        <a href="https://www.instagram.com/next_developer007/" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
