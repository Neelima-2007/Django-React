import React from 'react'
import { Routes,Route } from "react-router-dom";
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Content from '../Components/Content'
import Gallery from '../Components/Gallery'
import Pricing from '../Components/Pricing'
import Team from '../Components/Team'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const Landingpage = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/HERO" element = {<Hero/>}/>
        <Route path="/CONTENT" element = {<Content/>}/>
        <Route path="/GALLERY" element ={<Gallery/>}/>
        <Route path="/PRICING-PLANS" element ={<Pricing/>}/>
        <Route path="/TEAM" element ={<Team/>}/>
        <Route path="/CONTACT" element ={<Contact/>}/>
        <Route path="/FOOTER" element={<Footer/>}/>
      </Routes>
    </div>
  )
}

export default Landingpage


