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
