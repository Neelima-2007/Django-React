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

// 1----
// import React, { useEffect, useState } from 'react';

// export default function RegistrationForm() {
//   const [courses, setCourses] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     course: '',
//   });

//   useEffect(() => {
//     fetch('http://127.0.0.1:8000/api/courses/')
//       .then(res => res.json())
//       .then(data => setCourses(data))
//       .catch(console.error);
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ 
//       ...formData, 
//       [e.target.name]: e.target.value 
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch('http://127.0.0.1:8000/api/register/', {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(formData),
//     })
//     .then(res => {
//       if(res.ok) {
//         alert('Registration successful!');
//         setFormData({ name: '', email: '', course: '' });
//       } else {
//         alert('Registration failed!');
//       }
//     })
//     .catch(err => alert('Error: ' + err));
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 border rounded-lg shadow-md mt-10 bg-white">
//       <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2>

//       <div className="mb-4">
//         <label htmlFor="name" className="block font-semibold mb-1">Name</label>
//         <input 
//           type="text" 
//           id="name"
//           name="name" 
//           value={formData.name} 
//           onChange={handleChange} 
//           placeholder="Enter your name"
//           required
//           className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="email" className="block font-semibold mb-1">Email</label>
//         <input 
//           type="email" 
//           id="email"
//           name="email" 
//           value={formData.email} 
//           onChange={handleChange} 
//           placeholder="Enter your email"
//           required
//           className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       <div className="mb-6">
//         <label htmlFor="course" className="block font-semibold mb-1">Select Course</label>
//         <select 
//           id="course"
//           name="course" 
//           value={formData.course} 
//           onChange={handleChange} 
//           required
//           className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="">-- Select Course --</option>
//           {courses.map(c => (
//             <option key={c.id} value={c.id}>{c.name}</option>
//           ))}
//         </select>
//       </div>

//       <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition">
//         Register
//       </button>
//     </form>
//   );
// }




// 23-09-2025

import React, { useEffect, useState } from 'react';

export default function RegistrationForm() {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', course: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    // Fetch courses on mount
    fetch('http://127.0.0.1:8000/api/courses/')
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(() => setMessage({ type: 'error', text: 'Failed to load courses' }));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.course) {
      setMessage({ type: 'error', text: 'All fields are required.' });
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    fetch('http://127.0.0.1:8000/api/register/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
      .catch(() => {
        setLoading(false);
        setMessage({ type: 'error', text: 'Network error. Please try again.' });
      });
  };

  return (
    <div className="flex justify-center items-center h-screen px-4"
style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80')",
      }}>
         <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border
                   transition-transform duration-300 hover:scale-[1.02]"
      >
        <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r
                       from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-6">
          Registration From
        </h2>

           {message.text && (
          <div
            className={`mb-4 p-3 rounded-md text-center font-semibold ${
              message.type === 'success'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {message.text}
          </div>
        )}

           <div className="mb-5">
             <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
               Full Name
             </label>
             <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none
                       focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none
                       focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="course" className="block text-gray-700 font-semibold mb-1">
            Select Course
          </label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none
                       focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Choose a course --</option>
            {courses.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r
                     from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500
                     transition-colors duration-300 disabled:opacity-60"
        >
          {loading ? 'Submit' : 'Register'}
        </button>
      </form>
    </div>
  );
}

// 2

// import React, { useEffect, useState } from 'react';

// export default function RegistrationForm() {
//   const [courses, setCourses] = useState([]);
//   const [formData, setFormData] = useState({ name: '', email: '', course: '' });
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

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.course) {
//       setMessage({ type: 'error', text: 'All fields are required.' });
//       return;
//     }

//     setLoading(true);
//     setMessage({ type: '', text: '' });

//     fetch('http://127.0.0.1:8000/api/register/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     })
//       .then(async (res) => {
//         setLoading(false);
//         if (res.ok) {
//           setMessage({ type: 'success', text: 'Registration successful!' });
//           setFormData({ name: '', email: '', course: '' });
//         } else {
//           const data = await res.json();
//           setMessage({ type: 'error', text: data.detail || 'Registration failed!' });
//         }
//       })
//       .catch(() => {
//         setLoading(false);
//         setMessage({ type: 'error', text: 'Network error. Please try again.' });
//       });
//   };

//   return (
//     <div
//       className="flex justify-center items-center h-screen px-4 bg-cover bg-center"
//       style={{
//         backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80')",
//       }}
//     >
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border
//                    transition-transform duration-300 hover:scale-[1.02]"
//       >
//         <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r
//                        from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-6">
//           Registration Form
//         </h2>

//         {message.text && (
//           <div
//             className={`mb-4 p-3 rounded-md text-center font-semibold ${
//               message.type === 'success'
//                 ? 'bg-green-100 text-green-700'
//                 : 'bg-red-100 text-red-700'
//             }`}
//           >
//             {message.text}
//           </div>
//         )}

//         <div className="mb-5">
//           <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
//             Full Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none
//                        focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-5">
//           <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
//             Email Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="example@mail.com"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none
//                        focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="course" className="block text-gray-700 font-semibold mb-1">
//             Select Course
//           </label>
//           <select
//             id="course"
//             name="course"
//             value={formData.course}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none
//                        focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">-- Choose a course --</option>
//             {courses.map(c => (
//               <option key={c.id} value={c.id}>{c.name}</option>
//             ))}
//           </select>
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r
//                      from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500
//                      transition-colors duration-300 disabled:opacity-60"
//         >
//           {loading ? 'Submitting...' : 'Register'}
//         </button>
//       </form>
//     </div>
//   );
// }

// import React, { useEffect, useState } from 'react';

// export default function RegistrationForm() {
//   const [courses, setCourses] = useState([]);
//   const [formData, setFormData] = useState({ name: '', email: '', course: '' });
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({}); // ✅ field-specific errors
//   const [message, setMessage] = useState({ type: '', text: '' });

//   useEffect(() => {
//     // Fetch courses on mount
//     fetch('http://127.0.0.1:8000/api/courses/')
//       .then(res => res.json())
//       .then(data => setCourses(data))
//       .catch(() => setMessage({ type: 'error', text: 'Failed to load courses' }));
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });

//     // Clear error for the field being updated
//     setErrors({
//       ...errors,
//       [e.target.name]: ''
//     });
//   };

//   // ✅ validation function
//   const validate = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required.';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required.';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Enter a valid email address.';
//     }

//     if (!formData.course) {
//       newErrors.course = 'Please select a course.';
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validate()) return; // ✅ stop if validation fails

//     setLoading(true);
//     setMessage({ type: '', text: '' });

//     fetch('http://127.0.0.1:8000/api/register/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     })
//       .then(res => {
//         setLoading(false);
//         if (res.ok) {
//           setMessage({ type: 'success', text: 'Registration successful!' });
//           setFormData({ name: '', email: '', course: '' });
//         } else {
//           setMessage({ type: 'error', text: 'Registration failed!' });
//         }
//       })
//       .catch(() => {
//         setLoading(false);
//         setMessage({ type: 'error', text: 'Network error. Please try again.' });
//       });
//   };

//   return (
//     <div
//       className="flex justify-center items-center h-screen px-4"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80')",
//       }}
//     >
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border
//                    transition-transform duration-300 hover:scale-[1.02]"
//       >
//         <h2
//           className="text-3xl font-extrabold text-center bg-gradient-to-r
//                        from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-6"
//         >
//           Registration Form
//         </h2>

//         {message.text && (
//           <div
//             className={`mb-4 p-3 rounded-md text-center font-semibold ${
//               message.type === 'success'
//                 ? 'bg-green-100 text-green-700'
//                 : 'bg-red-100 text-red-700'
//             }`}
//           >
//             {message.text}
//           </div>
//         )}

//         {/* Name */}
//         <div className="mb-5">
//           <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
//             Full Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             className={`w-full px-4 py-2 border rounded-lg focus:outline-none
//                        focus:ring-2 focus:ring-blue-500 ${
//                          errors.name ? 'border-red-500' : 'border-gray-300'
//                        }`}
//           />
//           {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//         </div>

//         {/* Email */}
//         <div className="mb-5">
//           <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
//             Email Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="example@mail.com"
//             className={`w-full px-4 py-2 border rounded-lg focus:outline-none
//                        focus:ring-2 focus:ring-blue-500 ${
//                          errors.email ? 'border-red-500' : 'border-gray-300'
//                        }`}
//           />
//           {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//         </div>

//         {/* Course */}
//         <div className="mb-6">
//           <label htmlFor="course" className="block text-gray-700 font-semibold mb-1">
//             Select Course
//           </label>
//           <select
//             id="course"
//             name="course"
//             value={formData.course}
//             onChange={handleChange}
//             className={`w-full px-4 py-2 border rounded-lg focus:outline-none
//                        focus:ring-2 focus:ring-blue-500 ${
//                          errors.course ? 'border-red-500' : 'border-gray-300'
//                        }`}
//           >
//             <option value="">-- Choose a course --</option>
//             {courses.map((c) => (
//               <option key={c.id} value={c.id}>
//                 {c.name}
//               </option>
//             ))}
//           </select>
//           {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r
//                      from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500
//                      transition-colors duration-300 disabled:opacity-60"
//         >
//           {loading ? 'Submitting...' : 'Register'}
//         </button>
//       </form>
//     </div>
//   );
// }
