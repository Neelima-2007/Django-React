import React, { useState } from 'react';

export default function Login() {
  const [form, setForm] = useState({ mobile: '', email: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async e => {
    e.preventDefault();
    const res = await fetch('http://127.0.0.1:8000/api/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('user', JSON.stringify(data.user));
      window.location.href = '/navbar';
    } else {
      setMessage(data.message || 'Login failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {message && <p className="text-red-500 text-center mb-2">{message}</p>}
        <input type="text" name="mobile" placeholder="Mobile Number" value={form.mobile} onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg" />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg" />
        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg">Login</button>
      </form>
    </div>
  );
}
