import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
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

      
      <section className="text-gray-600 body-font bg-gray-100 pt-24">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
         
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to <span className="text-indigo-600">Your App</span>
            </h1>
            <p className="mb-8 leading-relaxed text-gray-700">
              Build modern web applications effortlessly using Django REST Framework for your backend and React for your frontend.
              Manage your data easily, create responsive UIs, and deploy with confidence.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg">
                Get Started
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                Learn More
              </button>
            </div>
          </div>

         
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;