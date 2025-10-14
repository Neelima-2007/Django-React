import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const teamMembers = [
  { id: 1, name: "Neelima", role: "Frontend Developer", img: "https://via.placeholder.com/150" },
  { id: 2, name: "Shyam", role: "Backend Developer", img: "https://via.placeholder.com/150" },
  { id: 3, name: "Rajesh", role: "Full Stack Developer", img: "https://via.placeholder.com/150" },
];

const Team = () => {
  return (
    <>
      
      <header className="text-gray-600 body-font shadow-md bg-white fixed w-full top-0 z-50">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <NavLink
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl font-bold">🎓 Course Management</span>
          </NavLink>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-5">
            <NavLink
              to="/hero"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
                  : "hover:text-gray-900"
              }
            >
              Home
            </NavLink>
            <NavLink to="/content" className="hover:text-gray-900">About</NavLink>
            <NavLink to="/gallery" className="hover:text-gray-900">Gallery</NavLink>
            <NavLink to="/pricing-plans" className="hover:text-gray-900">Pricing</NavLink>
            <NavLink to="/team" className="hover:text-gray-900">Team</NavLink>
            <NavLink to="/contact" className="hover:text-gray-900">Contact</NavLink>
          </nav>
        </div>
      </header>

      
      <div className="bg-gray-50 text-gray-800 py-16 pt-24">
        <h2 className="text-4xl font-bold text-center mb-10">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-2xl shadow-lg p-6 w-72 text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: member.id * 0.15 }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full mb-7 object-cover border-4 border-gray-200"
              />
              <h3 className="text-xl font-semibold mb-2 truncate w-full">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;