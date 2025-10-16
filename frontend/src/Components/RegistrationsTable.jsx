// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { DataGrid } from "@mui/x-data-grid";
// import { Box, Button, TextField, Typography } from "@mui/material";

// const RegistrationsTable = () => {
//   const [rows, setRows] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(false);

//   const fetchRegistrations = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get("http://127.0.0.1:8000/api/registrations/");
//       setRows(res.data);
//     } catch (err) {
//       console.error("Error fetching data:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchRegistrations();
//   }, []);

//   const columns = [
//     { field: "id", headerName: "ID", width: 70 },
//     { field: "name", headerName: "Student Name", width: 200 },
//     { field: "email", headerName: "Email", width: 250 },
//     { field: "mobile", headerName: "Mobile", width: 150 },
//     { field: "course", headerName: "Course", width: 180 },
//   ];

//   const filteredRows = rows.filter((row) =>
//     row.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
//         🎓 Student Registrations
//       </Typography>
//       <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
//         <TextField
//           label="Search by Name"
//           variant="outlined"
//           size="small"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <Button variant="contained" onClick={fetchRegistrations}>
//           Refresh
//         </Button>
//       </Box>

//       <Box sx={{ height: 500, background: "#fff", borderRadius: 2, boxShadow: 3 }}>
//         <DataGrid
//           rows={filteredRows}
//           columns={columns}
//           pageSize={8}
//           loading={loading}
//           getRowId={(row) => row.id}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default RegistrationsTable;
