import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "../Components/RegistrationForm";
import Login from "../Components/Login";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/hero" element={<Hero />} />
        
      </Routes>
    </Router>
  );
}

export default App;
