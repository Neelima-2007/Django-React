// import React, { useEffect, useState } from "react";

// function RegistrationForm() {
//   const [courses, setCourses] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     course: "",
//   });

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/courses/")
//       .then((res) => res.json())
//       .then((data) => setCourses(data))
//       .catch((err) => console.error(err));
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("http://127.0.0.1:8000/api/register/", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         alert("Registration Successful!");
//         console.log(data);
//       })
//       .catch((err) => console.error("Error:", err));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//       <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-2xl font-bold text-center mb-6">Registration Form</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block mb-1 font-medium">Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-medium">Select Course</label>
//             <select
//               name="course"
//               value={formData.course}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             >
//               <option value="">-- Select Course --</option>
//               {courses.map((course) => (
//                 <option key={course.id} value={course.id}>
//                   {course.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default RegistrationForm;

import React, { useEffect, useState } from 'react';

export default function RegistrationForm() {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
  });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/courses/')
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(console.error);
  }, []);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/register/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData),
    })
    .then(res => {
      if(res.ok) {
        alert('Registration successful!');
        setFormData({ name: '', email: '', course: '' });
      } else {
        alert('Registration failed!');
      }
    })
    .catch(err => alert('Error: ' + err));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 border rounded-lg shadow-md mt-10 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block font-semibold mb-1">Name</label>
        <input 
          type="text" 
          id="name"
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Enter your name"
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-semibold mb-1">Email</label>
        <input 
          type="email" 
          id="email"
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Enter your email"
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="course" className="block font-semibold mb-1">Select Course</label>
        <select 
          id="course"
          name="course" 
          value={formData.course} 
          onChange={handleChange} 
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Select Course --</option>
          {courses.map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition">
        Register
      </button>
    </form>
  );
}
