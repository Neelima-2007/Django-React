import React from "react";
import { NavLink } from "react-router-dom";

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
  ];

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
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl font-medium title-font mb-4 text-gray-900">
              Our Gallery
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
              A collection of moments, creativity, and innovation from our
              projects and community.
            </p>
          </div>

         
          <div className="flex flex-wrap -m-4">
            {images.map((img, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
               
                <div className="flex relative group rounded-lg overflow-hidden">
                
                  <img
                    alt={`gallery-img-${index}`}
                    className="w-full h-64 object-cover object-center"
                    src={img}
                  />

                  
                  <div className="absolute inset-0 flex flex-col justify-center items-start px-6 py-8 bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Amazing Work
                    </h1>
                    <p className="leading-relaxed text-sm">
                      Explore some of our best moments captured in frames.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
