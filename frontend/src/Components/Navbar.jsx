import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white fixed top-0 w-full z-10">
      <h1 className="text-xl font-bold text-purple-700">🎓 Course Management</h1>
      <ul className="flex space-x-6">
        <li>
          <Link to="home" smooth={true} duration={600} offset={-70} className="cursor-pointer hover:text-purple-700">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={600} offset={-70} className="cursor-pointer hover:text-purple-700">
            About
          </Link>
        </li>
        <li>
          <Link to="gallery" smooth={true} duration={600} offset={-70} className="cursor-pointer hover:text-purple-700">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="pricing" smooth={true} duration={600} offset={-70} className="cursor-pointer hover:text-purple-700">
            Pricing
          </Link>
        </li>
        <li>
          <Link to="team" smooth={true} duration={600} offset={-70} className="cursor-pointer hover:text-purple-700">
            Team
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={600} offset={-70} className="cursor-pointer hover:text-purple-700">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
