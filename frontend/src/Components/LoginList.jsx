// import React, { useEffect, useState } from "react";
// import api from "../../Services/ApiHelper";

// export default function LoginList() {
//   const [logins, setLogins] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchLoginList();
//   }, []);

//   const fetchLoginList = async () => {
//     try {
//       const response = await api.getLoginList();
//       setLogins(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching login list:", error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
//         Login User List
//       </h1>

//       {loading ? (
//         <p className="text-center text-gray-500">Loading...</p>
//       ) : (
//         <table className="w-full border-collapse border border-gray-400">
//           <thead className="bg-blue-500 text-white">
//             <tr>
//               <th className="border border-gray-400 px-4 py-2">S.No</th>
//               <th className="border border-gray-400 px-4 py-2">Mobile</th>
//               <th className="border border-gray-400 px-4 py-2">Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {logins.map((login, index) => (
//               <tr key={index} className="text-center hover:bg-gray-100">
//                 <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
//                 <td className="border border-gray-400 px-4 py-2">{login.mobile}</td>
//                 <td className="border border-gray-400 px-4 py-2">{login.email}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }
