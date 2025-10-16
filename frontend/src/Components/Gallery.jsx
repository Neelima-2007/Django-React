// import React from "react";
// import { NavLink } from "react-router-dom";

// const Gallery = () => {
//   const images = [
//     "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
//     "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
//     "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
//     "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
//     "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
//     "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
//   ];

//   return (
//     <>
//       <header className="text-gray-600 body-font shadow-md bg-white fixed w-full top-0 z-50">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <NavLink
//             to="/"
//             className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
//           >
//             <span className="ml-3 text-xl font-bold">🎓 Course Management</span>
//           </NavLink>

//           <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-5">
//             <NavLink
//               to="/hero"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
//                   : "hover:text-gray-900"
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink to="/content" className="hover:text-gray-900">
//               About
//             </NavLink>
//             <NavLink to="/gallery" className="hover:text-gray-900">
//               Gallery
//             </NavLink>
//             <NavLink to="/pricing-plans" className="hover:text-gray-900">
//               Pricing
//             </NavLink>
//             <NavLink to="/team" className="hover:text-gray-900">
//               Team
//             </NavLink>
//             <NavLink to="/contact" className="hover:text-gray-900">
//               Contact
//             </NavLink>

//           </nav>
//         </div>
//       </header>

      
//       <section className="text-gray-600 body-font bg-gray-100 pt-24">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="flex flex-col text-center w-full mb-20">
//             <h1 className="text-3xl font-medium title-font mb-4 text-gray-900">
//               Our Gallery
//             </h1>
//             <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
//               A collection of moments, creativity, and innovation from our
//               projects and community.
//             </p>
//           </div>

         
//           <div className="flex flex-wrap -m-4">
//             {images.map((img, index) => (
//               <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
               
//                 <div className="flex relative group rounded-lg overflow-hidden">
                
//                   <img
//                     alt={`gallery-img-${index}`}
//                     className="w-full h-64 object-cover object-center"
//                     src={img}
//                   />

                  
//                   <div className="absolute inset-0 flex flex-col justify-center items-start px-6 py-8 bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//                     <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
//                       CATEGORY
//                     </h2>
//                     <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//                       Amazing Work
//                     </h1>
//                     <p className="leading-relaxed text-sm">
//                       Explore some of our best moments captured in frames.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Gallery;

// import React from "react";
// import { NavLink } from "react-router-dom";

// const Gallery = () => {
//   // 🎓 More meaningful images related to education, coding & teamwork
//   const images = [
//     {
//       url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
//       title: "Classroom Learning",
//       desc: "Students attending interactive coding sessions with mentors.",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
//       title: "Team Collaboration",
//       desc: "Our learners working together on full-stack projects.",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
//       title: "Code Practice",
//       desc: "Hands-on programming sessions in the computer lab.",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
//       title: "Project Presentation",
//       desc: "Students presenting their final course management projects.",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
//       title: "Mentor Guidance",
//       desc: "Instructors providing one-on-one feedback and mentoring.",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80",
//       title: "Online Class",
//       desc: "Virtual sessions with modern tools for remote learning.",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
//       title: "Coding Together",
//       desc: "Group work to solve backend and frontend integration challenges.",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
//       title: "Certificate Distribution",
//       desc: "Recognizing student excellence and course completion.",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
//       title: "Workstation Setup",
//       desc: "Professional lab equipped for modern web development.",
//     },
//   ];

//   return (
//     <>
//       {/* Navbar */}
//       <header className="text-gray-600 body-font shadow-md bg-white fixed w-full top-0 z-50">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <NavLink
//             to="/"
//             className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
//           >
//             <span className="ml-3 text-xl font-bold">🎓 Course Management</span>
//           </NavLink>

//           <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-5">
//             <NavLink
//               to="/hero"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
//                   : "hover:text-gray-900"
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink to="/content" className="hover:text-gray-900">
//               About
//             </NavLink>
//             <NavLink to="/gallery" className="hover:text-gray-900">
//               Gallery
//             </NavLink>
//             <NavLink to="/pricing-plans" className="hover:text-gray-900">
//               Pricing
//             </NavLink>
//             <NavLink to="/team" className="hover:text-gray-900">
//               Team
//             </NavLink>
//             <NavLink to="/contact" className="hover:text-gray-900">
//               Contact
//             </NavLink>
//           </nav>
//         </div>
//       </header>

//       {/* Gallery Section */}
//       <section className="text-gray-600 body-font bg-gray-100 pt-24">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="flex flex-col text-center w-full mb-20">
//             <h1 className="text-4xl font-bold title-font mb-4 text-indigo-600">
//               Our Gallery
//             </h1>
//             <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
//               Explore highlights from our Course Management System program —
//               training, teamwork, and success stories from our students and mentors.
//             </p>
//           </div>

//           {/* Gallery Grid */}
//           <div className="flex flex-wrap -m-4">
//             {images.map((item, index) => (
//               <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
//                 <div className="flex relative group rounded-xl overflow-hidden shadow-md">
//                   <img
//                     alt={item.title}
//                     className="w-full h-64 object-cover object-center transition-transform duration-300 transform group-hover:scale-110"
//                     src={item.url}
//                   />

//                   {/* Hover Info */}
//                   <div className="absolute inset-0 flex flex-col justify-center items-start px-6 py-8 bg-white bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//                     <h2 className="tracking-widest text-sm title-font font-semibold text-indigo-500 mb-1 uppercase">
//                       {item.title}
//                     </h2>
//                     <p className="leading-relaxed text-sm text-gray-700">
//                       {item.desc}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Gallery;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Gallery = () => {
  const [images, setImages] = useState([]);

  // Fetch gallery data from Django backend API
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/gallery/")
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching gallery data:", error);
      });
  }, []);

  return (
    <>
      {/* Navbar */}
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

      {/* Gallery Section */}
      <section className="text-gray-600 body-font bg-gray-100 pt-24">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl font-bold title-font mb-4 text-indigo-600">
              Our Gallery
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
              Explore highlights from our Course Management System program —
              training, teamwork, and success stories from our students and mentors.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="flex flex-wrap -m-4">
            {images.length > 0 ? (
              images.map((item) => (
                <div key={item.id} className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative group rounded-xl overflow-hidden shadow-md">
                    <img
                      alt={item.title}
                      className="w-full h-64 object-cover object-center transition-transform duration-300 transform group-hover:scale-110"
                      src={item.image_url}
                    />

                    {/* Hover Info */}
                    <div className="absolute inset-0 flex flex-col justify-center items-start px-6 py-8 bg-white bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <h2 className="tracking-widest text-sm title-font font-semibold text-indigo-500 mb-1 uppercase">
                        {item.title}
                      </h2>
                      <p className="leading-relaxed text-sm text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center w-full text-gray-500">Loading gallery...</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
