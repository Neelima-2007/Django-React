// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
//       <section>
//         <header class="text-gray-600 body-font">
//   <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//       </svg>
//       <span class="ml-3 text-xl">Tailblocks</span>
//     </a>
//     <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
//       <a class="mr-5 hover:text-gray-900">First Link</a>
//       <a class="mr-5 hover:text-gray-900">Second Link</a>
//       <a class="mr-5 hover:text-gray-900">Third Link</a>
//       <a class="mr-5 hover:text-gray-900">Fourth Link</a>
//     </nav>
//     <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
//       <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
//         <path d="M5 12h14M12 5l7 7-7 7"></path>
//       </svg>
//     </button>
//   </div>
// </header>
//       </section>
//     </div>
//   )
// }

// export default Navbar


// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div>
//       <section>
//         <header className="text-gray-600 body-font">
//           <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//             <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//               </svg>
//               <span className="ml-3 text-xl">🎓 Course Management</span>
//             </a>
//             <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//               <Link to="/HERO">
//               <a className="mr-5 hover:text-gray-900">HOME</a>
//               </Link>
//               <Link to="/CONTENT">
//               <a className="mr-5 hover:text-gray-900">ABOUT</a>
//               </Link>
//               <Link to="/GALLERY">
//               <a className="mr-5 hover:text-gray-900">GALLERY</a>
//               </Link>
//               <Link to="/PRICING-PLANS">
//               <a className="mr-5 hover:text-gray-900">PRICING PLANS</a>
//               </Link>
//               <Link to="/TEAM">
//               <a className="mr-5 hover:text-gray-900">TEAM</a>
//               </Link>
//               <Link to="/CONTACT">
//               <a className="mr-5 hover:text-gray-900">CONTACT</a>
//               </Link>
//               <Link to="/FOOTER">
//               <a className="mr-5 hover:text-gray-900">FOOTER</a>
//               </Link>
//             </nav>
//             <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
//               Button
//               <svg
//                 fill="none"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 className="w-4 h-4 ml-1"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M5 12h14M12 5l7 7-7 7"></path>
//               </svg>
//             </button>
            

//           </div>
//         </header>
//       </section>
//     </div>
//   )
// }

// export default Navbar


// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <header className="text-gray-600 body-font">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//           <span className="ml-3 text-xl">🎓 Course Management</span>
//         </Link>

//         <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-5">
//           <Link to="/hero" className="hover:text-gray-900">Home</Link>
//           <Link to="/content" className="hover:text-gray-900">About</Link>
//           <Link to="/gallery" className="hover:text-gray-900">Gallery</Link>
//           <Link to="/pricing-plans" className="hover:text-gray-900">Pricing</Link>
//           <Link to="/team" className="hover:text-gray-900">Team</Link>
//           <Link to="/contact" className="hover:text-gray-900">Contact</Link>
//           <Link to="/footer" className="hover:text-gray-900">Footer</Link>
//         </nav>
//       </div>
//     </header>
//   )
// }

// export default Navbar


// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <header className="text-gray-600 body-font shadow-md">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         {/* Logo */}
//         <NavLink to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//           <span className="ml-3 text-xl font-bold">🎓 Course Management</span>
//         </NavLink>

//         {/* Navigation Links */}
//         <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-5">
//           <NavLink
//             to="/hero"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
//                 : "hover:text-gray-900"
//             }
//           >
//             Home
//           </NavLink>

//           <NavLink
//             to="/content"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
//                 : "hover:text-gray-900"
//             }
//           >
//             About
//           </NavLink>

//           <NavLink
//             to="/gallery"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
//                 : "hover:text-gray-900"
//             }
//           >
//             Gallery
//           </NavLink>

//           <NavLink
//             to="/pricing-plans"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
//                 : "hover:text-gray-900"
//             }
//           >
//             Pricing
//           </NavLink>

//           <NavLink
//             to="/team"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
//                 : "hover:text-gray-900"
//             }
//           >
//             Team
//           </NavLink>

//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
//                 : "hover:text-gray-900"
//             }
//           >
//             Contact
//           </NavLink>

//           <NavLink
//             to="/footer"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
//                 : "hover:text-gray-900"
//             }
//           >
//             Footer
//           </NavLink>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
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
//             <NavLink to="/footer" className="hover:text-gray-900">
//               Footer
//             </NavLink>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section with Background Image */}
//       <section
//         className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1584697964403-46e86e165542?auto=format&fit=crop&w=1600&q=80')",
//         }}
//       >
//         <div className="bg-black bg-opacity-50 p-10 rounded-2xl text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Welcome to Course Management System
//           </h1>
//           <p className="text-lg md:text-2xl mb-6">
//             Manage your courses, students, and progress with ease.
//           </p>
//           <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-full text-lg transition-all">
//             Get Started
//           </button>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Navbar;


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
