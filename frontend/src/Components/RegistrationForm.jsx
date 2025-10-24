// import React, { useEffect, useState } from 'react';

// export default function RegistrationForm() {
//   const [courses, setCourses] = useState([]);
//   const [formData, setFormData] = useState({ name: '', email: '', mobile: '', course: '' });
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState({ type: '', text: '' });

//   useEffect(() => {
//     fetch('http://127.0.0.1:8000/api/courses/')
//       .then(res => res.json())
//       .then(data => setCourses(data))
//       .catch(() => setMessage({ type: 'error', text: 'Failed to load courses' }));
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.mobile || !formData.course) {
//       setMessage({ type: 'error', text: 'All fields are required.' });
//       return;
//     }

//     setLoading(true);
//     setMessage({ type: '', text: '' });

//     const res = await fetch('http://127.0.0.1:8000/api/register/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     });

//     const data = await res.json();
//     setLoading(false);

//     if (res.ok) {
//       alert('Registration successful! Redirecting to login...');
//       window.location.href = '/login';  
//     } else {
//       setMessage({ type: 'error', text: data.message || 'Registration failed!' });
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen px-4"
//       style={{
//         backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80')",
//       }}>
//       <form onSubmit={handleSubmit}
//         className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border
//                    transition-transform duration-300 hover:scale-[1.02]">
//         <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r
//                        from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-6">
//           Registration Form
//         </h2>

//         {message.text && (
//           <div
//             className={`mb-4 p-3 rounded-md text-center font-semibold ${message.type === 'success'
//               ? 'bg-green-100 text-green-700'
//               : 'bg-red-100 text-red-700'
//               }`}
//           >
//             {message.text}
//           </div>
//         )}

//         <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />

//         <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />

//         <input type="text" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange}
//           className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />

//         <select name="course" value={formData.course} onChange={handleChange}
//           className="w-full mb-6 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
//           <option value="">-- Choose a course --</option>
//           {courses.map(c => (
//             <option key={c.id} value={c.id}>{c.name}</option>
//           ))}
//         </select>

//         <button type="submit" disabled={loading}
//           className="w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r
//                      from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500
//                      transition-colors duration-300 disabled:opacity-60">
//           {loading ? 'Submitting...' : 'Register'}
//         </button>
//       </form>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import api from "../../Services/ApiHelper"; // ✅ Import your helper class

export default function RegistrationForm() {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // ✅ Load courses from API using helper class
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await api.getCourses(); // Using helper class
        setCourses(res.data);
      } catch (error) {
        console.error("Error loading courses:", error);
        setMessage({ type: "error", text: "Failed to load courses." });
      }
    };
    fetchCourses();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Submit form through helper API
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.mobile || !formData.course) {
      setMessage({ type: "error", text: "All fields are required." });
      return;
    }

    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      await api.registerUser(formData); // Helper class POST request
      setLoading(false);

      alert("Registration successful! Redirecting to login...");
      window.location.href = "/login"; // redirect after success
    } catch (error) {
      console.error("Registration failed:", error);
      setLoading(false);
      setMessage({
        type: "error",
        text: error.response?.data?.message || "Registration failed! Please try again.",
      });
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border
                   transition-transform duration-300 hover:scale-[1.02]"
      >
        <h2
          className="text-3xl font-extrabold text-center bg-gradient-to-r
                       from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-6"
        >
          Registration Form
        </h2>

        {message.text && (
          <div
            className={`mb-4 p-3 rounded-md text-center font-semibold ${
              message.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Choose a course --</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r
                     from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500
                     transition-colors duration-300 disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Register"}
        </button>
      </form>
    </div>
  );
}
