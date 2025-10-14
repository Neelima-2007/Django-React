import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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

     
      <section
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1584697964403-46e86e165542?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-2xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Course Management System
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Manage your courses, students, and progress with ease.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-full text-lg transition-all">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};

export default Navbar;
