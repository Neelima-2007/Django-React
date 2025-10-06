// src/Components/Team.jsx
import React from "react";
import { motion } from "framer-motion";

// Sample team data
const teamMembers = [
  { id: 1, name: "Neelima", role: "Frontend Developer", img: "https://via.placeholder.com/150" },
  { id: 2, name: "Shyam", role: "Backend Developer", img: "https://via.placeholder.com/150" },
  { id: 3, name: "Rajesh", role: "Full Stack Developer", img: "https://via.placeholder.com/150" },
];

const Team = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="bg-white rounded-lg shadow-md p-6 w-64 text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: member.id * 0.2 }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
