
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
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
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











