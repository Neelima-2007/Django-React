// import React, { useState } from 'react';

// export default function Login() {
//   const [form, setForm] = useState({ mobile: '', email: '' });
//   const [message, setMessage] = useState('');

//   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleLogin = async e => {
//     e.preventDefault();
//     const res = await fetch('http://127.0.0.1:8000/api/login/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form),
//     });
//     const data = await res.json();
//     if (res.ok) {
//       localStorage.setItem('user', JSON.stringify(data.user));
//       window.location.href = '/navbar';
//     } else {
//       setMessage(data.message || 'Login failed');
//     }
//   };


//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
//         {message && <p className="text-red-500 text-center mb-2">{message}</p>}
//         <input type="text" name="mobile" placeholder="Mobile Number" value={form.mobile} onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 border rounded-lg" />
//         <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 border rounded-lg" />
//         <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg">Login</button>
//       </form>
//     </div>
//   );
// };

import React, { useState } from "react";
import api from "../../Services/ApiHelper"; // import your ApiHelper (path may vary)

export default function Login() {
  const [form, setForm] = useState({ mobile: "", email: "" });
  const [message, setMessage] = useState("");

  // handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle login using ApiHelper class
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.loginUser(form); // using ApiHelper method
      const data = response.data;

      // success — store user data and redirect
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "/navbar";
    } catch (error) {
      // error handling
      if (error.response) {
        setMessage(error.response.data.message || "Invalid credentials");
      } else {
        setMessage("Server error. Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-lg w-100"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {message && <p className="text-red-500 text-center mb-2">{message}</p>}

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
