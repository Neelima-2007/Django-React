// import Redirectpage from './pages/Redirectpage'

// const App = () => {
//   return (
//     <div>
//       <Redirectpage/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import RegistrationForm from './Components/RegistrationForm'
// import Login from './Components/Login'
// import Navbar from './Components/Navbar'
// import Hero from './Components/Hero'
// import Content from './Components/Content'
// import Gallery from './Components/Gallery'
// import Team from './Components/Team'
// import Pricing from './Components/Pricing'
// import Contact from './Components/Contact'
// import Footer from './Components/Footer'

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Registration Page */}
//         <Route path="/" element={<RegistrationForm />} />

//         {/* Login Page */}
//         <Route path="/login" element={<Login />} />

//         {/* Navbar and other pages */}
//         <Route path="/navbar" element={<Navbar />} />
//         <Route path="/hero" element={<Hero />} />
//         <Route path="/content" element={<Content />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/team" element={<Team />} />
//         <Route path="/pricing-plans" element={<Pricing />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/footer" element={<Footer />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App



import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Content from "./Components/Content";
import Gallery from "./Components/Gallery";
import Team from "./Components/Team";
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import RegistrationForm from "./Components/RegistrationForm";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🟢 Registration Page */}
        <Route path="/" element={<RegistrationForm />} />

        {/* 🟢 Login Page */}
        <Route path="/login" element={<Login />} />

        {/* 🟢 Main Home Page (With Navbar + Sections + Footer) */}
        <Route
          path="/navbar"
          element={
            <>
              <Navbar />
              <section id="home"><Hero /></section>
              <section id="about"><Content /></section>
              <section id="gallery"><Gallery /></section>
              <section id="pricing"><Pricing /></section>
              <section id="team"><Team /></section>
              <section id="contact"><Contact /></section>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;











