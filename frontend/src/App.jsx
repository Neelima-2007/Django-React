import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegistrationForm from './Components/RegistrationForm'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Content from './Components/Content'
import Gallery from './Components/Gallery'
import Team from './Components/Team'
import Pricing from './Components/Pricing'
import Contact from './Components/Contact'
// import RegistrationsTable from './Components/RegistrationsTable'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/content" element={<Content />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pricing-plans" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/registrations" element={<RegistrationsTable />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App







