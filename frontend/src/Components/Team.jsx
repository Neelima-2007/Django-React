// src/Components/Team.jsx
import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  { id: 1, name: "Neelima", role: "Frontend Developer", img: "https://via.placeholder.com/150" },
  { id: 2, name: "Shyam", role: "Backend Developer", img: "https://via.placeholder.com/150" },
  { id: 3, name: "Rajesh", role: "Full Stack Developer", img: "https://via.placeholder.com/150" },
];

const Team = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-16">
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
            transition={{ duration: 0.5, delay: member.id * 0.2 }}
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
  );
};

export default Team;
