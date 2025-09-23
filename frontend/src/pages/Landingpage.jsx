import React from 'react'
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
      <Hero/>
      <Content/>
      <Gallery/>
      <Pricing/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Landingpage
