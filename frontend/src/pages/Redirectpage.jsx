import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "../Components/RegistrationForm";
import Login from "../Components/Login";
import Landingpage from "../pages/Landingpage";

const Redirectpage = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<Login />} />
          <Route
          path="/navbar"
          element={
            <>
            <Landingpage />
            </>
          }
        />
      </Routes>
    </Router>
    </div>
  )
}

export default Redirectpage

// 2




// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import RegistrationForm from "../Components/RegistrationForm";
// import Login from "../Components/Login";
// import Navbar from '../Components/Navbar';
// import Hero from '../Components/Hero';
// import Content from '../Components/Content';
// import Gallery from '../Components/Gallery';
// import Pricing from '../Components/Pricing';
// import Team from '../Components/Team';
// import Contact from '../Components/Contact';
// import Footer from '../Components/Footer';

// const Redirectpage = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<RegistrationForm />} />
//         <Route path="/register" element={<RegistrationForm />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/hero" element={<Hero />} />
//         <Route path="/content" element={<Content />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/pricing-plans" element={<Pricing />} />
//         <Route path="/team" element={<Team />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/footer" element={<Footer />} />
//       </Routes>
//     </Router>
//   );
// };

// export default Redirectpage;
