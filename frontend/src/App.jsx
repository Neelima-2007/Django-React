// import React from 'react'
// import Redirectpage from './pages/Redirectpage'

// const App = () => {
//   return (
//     <div>
//       <Redirectpage/>
//     </div>
//   )
// }

// export default App


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./Components/RegistrationForm";
import Login from "./Components/Login";
// import Navbar from "./Components/Navbar";
// import Hero from "./Components/Hero";
import Landingpage from "./pages/Landingpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />

        {/* Combine Navbar and Hero here */}
        <Route
          path="/navbar"
          element={
            <>
              {/* <Navbar /> */}
              {/* <Hero /> */}
              <Landingpage />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;













