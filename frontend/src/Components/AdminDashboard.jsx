import React, { useEffect, useState } from "react";
import ApiHelper from "../../Services/ApiHelper";

export default function AdminDashboard() {
  const [summary, setSummary] = useState({ total_registrations: 0, latest_registrations: [] });

  useEffect(() => {
    ApiHelper.getAdminSummary().then((res) => {
      setSummary(res.data);
    });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      <div className="bg-blue-100 p-4 rounded-md mb-6">
        <h3 className="text-xl font-semibold">Total Registrations: {summary.total_registrations}</h3>
      </div>

      <h3 className="text-lg font-semibold mb-2">Recent Registrations</h3>
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400 p-2">Email</th>
            <th className="border border-gray-400 p-2">Mobile</th>
            <th className="border border-gray-400 p-2">Course</th>
          </tr>
        </thead>
        <tbody>
          {summary.latest_registrations.map((reg, i) => (
            <tr key={i}>
              <td className="border border-gray-400 p-2">{reg.name}</td>
              <td className="border border-gray-400 p-2">{reg.email}</td>
              <td className="border border-gray-400 p-2">{reg.mobile}</td>
              <td className="border border-gray-400 p-2">{reg.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
