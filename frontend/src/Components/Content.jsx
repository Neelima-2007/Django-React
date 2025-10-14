import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Content = () => {
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
            <NavLink to="/content" className="hover:text-gray-900">
              About
            </NavLink>
            <NavLink to="/gallery" className="hover:text-gray-900">
              Gallery
            </NavLink>
            <NavLink to="/pricing-plans" className="hover:text-gray-900">
              Pricing
            </NavLink>
            <NavLink to="/team" className="hover:text-gray-900">
              Team
            </NavLink>
            <NavLink to="/contact" className="hover:text-gray-900">
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      
      <div className="bg-gray-50 text-gray-800 pt-24">
        
        <section className="bg-blue-700 text-white text-center py-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Course Registration System
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A simple and efficient platform to explore, register, and manage
            courses online — built with Django and React.
          </motion.p>
        </section>

        
        <section className="py-16 px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
            About the Project
          </h2>
          <p className="text-center max-w-3xl mx-auto text-gray-700 leading-relaxed">
            The <strong>Course Registration System</strong> allows students to
            browse available courses, view course details, and register easily.
            It is designed to make the enrollment process faster and more
            transparent. The backend is powered by <strong>Django REST Framework</strong>,
            and the frontend is built with <strong>React.js</strong> for a smooth
            user experience.
          </p>
        </section>

        
        <section className="bg-white py-16 px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <motion.div
              className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                🧾 Course Management
              </h3>
              <p>
                Admins can add, update, and delete courses easily from the
                backend.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                👩‍🎓 Student Registration
              </h3>
              <p>
                Students can browse available courses and register with a few
                clicks.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                📊 REST API Integration
              </h3>
              <p>
                Uses Django REST API to handle data securely and efficiently
                between frontend and backend.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                💻 Responsive UI
              </h3>
              <p>
                Designed with modern UI frameworks for seamless experience on all
                devices.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                🔒 Secure Data Handling
              </h3>
              <p>
                User data is managed securely using Django’s authentication and
                REST permissions.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                ⚙️ Easy Deployment
              </h3>
              <p>
                Can be hosted easily on any web server with backend and frontend
                integration.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Content;
