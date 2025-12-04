
// import React, { useState, useEffect, useMemo } from "react";
// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";
// import axios from "axios";

// import { DataGrid } from "@mui/x-data-grid";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   IconButton,
//   Chip,
//   Stack,
//   Modal,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import DeleteIcon from "@mui/icons-material/Delete";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// /**
//  * Content.jsx
//  * - Student Registration card -> opens registrations modal (rich table)
//  * - Course Management card -> opens courses modal (table from /api/courses/)
//  *
//  * Make sure to have installed:
//  * npm install axios @mui/material @mui/x-data-grid @emotion/react @emotion/styled @mui/icons-material
//  */

// const modalStyle = {
//   position: "fixed",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "92%",
//   maxWidth: 1100,
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   borderRadius: 12,
//   p: 2,
//   maxHeight: "90vh",
//   overflow: "hidden",
// };

// const Content = () => {
//   // modal states
//   const [openRegs, setOpenRegs] = useState(false);
//   const [openCourses, setOpenCourses] = useState(false);
//   const handleOpenRegs = () => setOpenRegs(true);
//   const handleCloseRegs = () => setOpenRegs(false);
//   const handleOpenCourses = () => setOpenCourses(true);
//   const handleCloseCourses = () => setOpenCourses(false);

//   // registrations data
//   const [regs, setRegs] = useState([]);
//   const [coursesMap, setCoursesMap] = useState({});
//   const [regsSearch, setRegsSearch] = useState("");
//   const [regsLoading, setRegsLoading] = useState(false);

//   // courses data
//   const [courses, setCourses] = useState([]);
//   const [coursesSearch, setCoursesSearch] = useState("");
//   const [coursesLoading, setCoursesLoading] = useState(false);

//   // FETCH COURSES (for both course modal and regs mapping)
//   const fetchCourses = async () => {
//     setCoursesLoading(true);
//     try {
//       const res = await axios.get("http://127.0.0.1:8000/api/courses/");
//       setCourses(res.data || []);
//       // build id->name map
//       const map = {};
//       (res.data || []).forEach((c) => (map[c.id] = c.name));
//       setCoursesMap(map);
//     } catch (err) {
//       console.error("Courses fetch error:", err);
//     } finally {
//       setCoursesLoading(false);
//     }
//   };

//   // FETCH REGISTRATIONS
//   const fetchRegistrations = async () => {
//     setRegsLoading(true);
//     try {
//       const res = await axios.get("http://127.0.0.1:8000/api/registrations/");
//       setRegs(res.data || []);
//     } catch (err) {
//       console.error("Registrations fetch error:", err);
//     } finally {
//       setRegsLoading(false);
//     }
//   };

//   // Only fetch when respective modal opens (lazy fetch)
//   useEffect(() => {
//     if (openRegs) {
//       fetchCourses();
//       fetchRegistrations();
//     }
//   }, [openRegs]);

//   useEffect(() => {
//     if (openCourses) {
//       fetchCourses();
//     }
//   }, [openCourses]);

//   // DELETE handlers
//   const handleDeleteReg = async (id) => {
//     if (!window.confirm("Delete this registration?")) return;
//     try {
//       await axios.delete(`http://127.0.0.1:8000/api/registrations/${id}/`);
//       setRegs((r) => r.filter((row) => row.id !== id));
//     } catch (err) {
//       console.error("Delete failed:", err);
//       alert("Delete failed — check console.");
//     }
//   };

//   const handleDeleteCourse = async (id) => {
//     if (!window.confirm("Delete this course?")) return;
//     try {
//       await axios.delete(`http://127.0.0.1:8000/api/courses/${id}/`);
//       setCourses((c) => c.filter((x) => x.id !== id));
//       // update map
//       setCoursesMap((m) => {
//         const nm = { ...m };
//         delete nm[id];
//         return nm;
//       });
//     } catch (err) {
//       console.error("Course delete failed:", err);
//       alert("Course delete failed — check console.");
//     }
//   };

//   // Columns for registrations table
//   const regsColumns = [
//     { field: "id", headerName: "ID", width: 80 },
//     { field: "name", headerName: "Student Name", width: 220, flex: 1 },
//     { field: "email", headerName: "Email", width: 250, flex: 1 },
//     { field: "mobile", headerName: "Mobile", width: 150 },
//     {
//       field: "course",
//       headerName: "Course",
//       width: 220,
//       renderCell: (params) => {
//         const cname = coursesMap[params.value] || `ID: ${params.value}`;
//         return <Chip label={cname} variant="outlined" />;
//       },
//     },
//     {
//       field: "actions",
//       headerName: "Actions",
//       width: 140,
//       sortable: false,
//       renderCell: (params) => (
//         <Stack direction="row" spacing={1}>
//           <IconButton size="small" onClick={() => alert(JSON.stringify(params.row, null, 2))}>
//             <VisibilityIcon />
//           </IconButton>
//           <IconButton size="small" onClick={() => handleDeleteReg(params.row.id)}>
//             <DeleteIcon color="error" />
//           </IconButton>
//         </Stack>
//       ),
//     },
//   ];

//   // Columns for courses table
//   const coursesColumns = [
//     { field: "id", headerName: "ID", width: 100 },
//     { field: "name", headerName: "Course Name", width: 400, flex: 1 },
//     {
//       field: "actions",
//       headerName: "Actions",
//       width: 140,
//       sortable: false,
//       renderCell: (params) => (
//         <Stack direction="row" spacing={1}>
//           <IconButton size="small" onClick={() => alert(JSON.stringify(params.row, null, 2))}>
//             <VisibilityIcon />
//           </IconButton>
//           <IconButton size="small" onClick={() => handleDeleteCourse(params.row.id)}>
//             <DeleteIcon color="error" />
//           </IconButton>
//         </Stack>
//       ),
//     },
//   ];

//   // Filtering
//   const filteredRegs = useMemo(() => {
//     if (!regsSearch) return regs;
//     const q = regsSearch.toLowerCase();
//     return regs.filter((r) => {
//       const cname = (coursesMap[r.course] || "").toLowerCase();
//       return (
//         (r.name || "").toLowerCase().includes(q) ||
//         (r.email || "").toLowerCase().includes(q) ||
//         (r.mobile || "").toLowerCase().includes(q) ||
//         cname.includes(q)
//       );
//     });
//   }, [regs, regsSearch, coursesMap]);

//   const filteredCourses = useMemo(() => {
//     if (!coursesSearch) return courses;
//     const q = coursesSearch.toLowerCase();
//     return courses.filter((c) => (c.name || "").toLowerCase().includes(q) || ("" + c.id).includes(q));
//   }, [courses, coursesSearch]);


//   return (
//     <>
//       <header className="text-gray-600 body-font shadow-md bg-white fixed w-full top-0 z-50">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <NavLink to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//             <span className="ml-3 text-xl font-bold">🎓 Course Management</span>
//           </NavLink>

//           <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-5">
//             <NavLink to="/hero" className={({ isActive }) => (isActive ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1" : "hover:text-gray-900")}>Home</NavLink>
//             <NavLink to="/content" className="hover:text-gray-900">About</NavLink>
//             <NavLink to="/gallery" className="hover:text-gray-900">Gallery</NavLink>
//             <NavLink to="/pricing-plans" className="hover:text-gray-900">Pricing</NavLink>
//             <NavLink to="/team" className="hover:text-gray-900">Team</NavLink>
//             <NavLink to="/contact" className="hover:text-gray-900">Contact</NavLink>
//           </nav>
//         </div>
//       </header>

//       <div className="bg-gray-50 text-gray-800 pt-24">
//         <section className="bg-blue-700 text-white text-center py-16">
//           <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//             Welcome to Course Registration System
//           </motion.h1>
//           <motion.p className="text-lg md:text-xl max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
//             A simple and efficient platform to explore, register, and manage courses online — built with Django and React.
//           </motion.p>
//         </section>

//         <section className="py-16 px-6 md:px-20">
//           <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">About the Project</h2>
//           <p className="text-center max-w-3xl mx-auto text-gray-700 leading-relaxed">
//             The <strong>Course Registration System</strong> allows students to browse available courses, view course details, and register easily.
//           </p>
//         </section>

//         <section className="bg-white py-16 px-6 md:px-20">
//           <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Key Features</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
//             {/* Course Management card -> open courses modal */}
//             <motion.div className="p-6 bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer ring-1 ring-indigo-100" whileHover={{ scale: 1.03 }} onClick={handleOpenCourses}>
//               <h3 className="text-xl font-semibold mb-3 text-indigo-700 flex items-center justify-center gap-2">
//                 <span className="text-2xl">🧾</span>
//                 List Of Courses
//               </h3>
//               <p className="text-sm text-gray-600">Click to view courses (from backend) in a rich table — no page navigation.</p>
//             </motion.div>

//             {/* Student Registration card -> open regs modal */}
//             <motion.div className="p-6 bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer ring-1 ring-indigo-100" whileHover={{ scale: 1.03 }} onClick={handleOpenRegs}>
//               <h3 className="text-xl font-semibold mb-3 text-indigo-700 flex items-center justify-center gap-2">
//                 <span className="text-2xl">👩‍🎓</span>
//                 List Of Students Registration
//               </h3>
//               <p className="text-sm text-gray-600">Click to open registrations — view all student data in a rich, interactive table.</p>
//             </motion.div>

//             {/* other feature cards (kept same style) */}
//             <motion.div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition" whileHover={{ scale: 1.05 }}>
//               <h3 className="text-xl font-semibold mb-3 text-blue-600">📊 REST API Integration</h3>
//               <p>Uses Django REST API to handle data securely and efficiently between frontend and backend.</p>
//             </motion.div>

//             <motion.div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition" whileHover={{ scale: 1.05 }}>
//               <h3 className="text-xl font-semibold mb-3 text-blue-600">💻 Responsive UI</h3>
//               <p>Designed with modern UI frameworks for seamless experience on all devices.</p>
//             </motion.div>

//             <motion.div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition" whileHover={{ scale: 1.05 }}>
//               <h3 className="text-xl font-semibold mb-3 text-blue-600">🔒 Secure Data Handling</h3>
//               <p>User data is managed securely using Django’s authentication and REST permissions.</p>
//             </motion.div>

//             <motion.div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition" whileHover={{ scale: 1.05 }}>
//               <h3 className="text-xl font-semibold mb-3 text-blue-600">⚙️ Easy Deployment</h3>
//               <p>Can be hosted easily on any web server with backend and frontend integration.</p>
//             </motion.div>
//           </div>
//         </section>
//       </div>

//       {/* Modal: Courses table */}
//       <Modal open={openCourses} onClose={handleCloseCourses} closeAfterTransition>
//         <Box sx={modalStyle}>
//           <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//             <Typography variant="h6" sx={{ flex: 1, fontWeight: 700 }}>
//               🧾 Courses
//             </Typography>
//             <TextField size="small" placeholder="Search id / name..." value={coursesSearch} onChange={(e) => setCoursesSearch(e.target.value)} sx={{ width: 300, mr: 1 }} />
//             <Button variant="contained" onClick={fetchCourses} sx={{ mr: 1 }}>Refresh</Button>
//             <IconButton onClick={handleCloseCourses}><CloseIcon /></IconButton>
//           </Box>

//           <Box sx={{ height: "78vh", overflow: "hidden", borderRadius: 1 }}>
//             <DataGrid
//               rows={filteredCourses}
//               columns={coursesColumns}
//               pageSize={12}
//               rowsPerPageOptions={[5, 10, 25, 50]}
//               loading={coursesLoading}
//               getRowId={(row) => row.id}
//               disableSelectionOnClick
//               sx={{
//                 ".MuiDataGrid-columnHeader": { backgroundColor: "#eef6ff", color: "#0f172a", fontWeight: 700 },
//                 ".MuiDataGrid-virtualScroller": { background: "linear-gradient(180deg,#fff,#f7fbff)" },
//               }}
//             />
//           </Box>
//         </Box>
//       </Modal>

//       {/* Modal: Registrations table */}
//       <Modal open={openRegs} onClose={handleCloseRegs} closeAfterTransition>
//         <Box sx={modalStyle}>
//           <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//             <Typography variant="h6" sx={{ flex: 1, fontWeight: 700 }}>
//               🎓 Student Registrations
//             </Typography>
//             <TextField size="small" placeholder="Search name / email / course..." value={regsSearch} onChange={(e) => setRegsSearch(e.target.value)} sx={{ width: 320, mr: 1 }} />
//             <Button variant="contained" onClick={fetchRegistrations} sx={{ mr: 1 }}>Refresh</Button>
//             <IconButton onClick={handleCloseRegs}><CloseIcon /></IconButton>
//           </Box>

//           <Box sx={{ height: "78vh", overflow: "hidden", borderRadius: 1 }}>
//             <DataGrid
//               rows={filteredRegs}
//               columns={regsColumns}
//               pageSize={10}
//               rowsPerPageOptions={[5, 10, 25, 50]}
//               loading={regsLoading}
//               getRowId={(row) => row.id}
//               disableSelectionOnClick
//               sx={{
//                 ".MuiDataGrid-columnHeader": { backgroundColor: "#eef6ff", color: "#0f172a", fontWeight: 700 },
//                 ".MuiDataGrid-virtualScroller": { background: "linear-gradient(180deg,#fff,#f7fbff)" },
//               }}
//             />
//           </Box>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default Content;

// // import React, { useState, useEffect, useMemo } from "react";
// // import { NavLink } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import ApiHelper from "../Services/ApiHelper";

// import { DataGrid } from "@mui/x-data-grid";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   IconButton,
//   Chip,
//   Stack,
//   Modal,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import DeleteIcon from "@mui/icons-material/Delete";
// import VisibilityIcon from "@mui/icons-material/Visibility";

// /**
//  * Content.jsx
//  * - Displays About page + modals for Courses and Student Registrations
//  * - Fetches data from backend using ApiHelper
//  */

// const modalStyle = {
//   position: "fixed",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "92%",
//   maxWidth: 1100,
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   borderRadius: 12,
//   p: 2,
//   maxHeight: "90vh",
//   overflow: "hidden",
// };

// const Content = () => {
//   // ------------------- STATES -------------------
//   const [openRegs, setOpenRegs] = useState(false);
//   const [openCourses, setOpenCourses] = useState(false);
//   const [regs, setRegs] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [coursesMap, setCoursesMap] = useState({});
//   const [regsSearch, setRegsSearch] = useState("");
//   const [coursesSearch, setCoursesSearch] = useState("");
//   const [regsLoading, setRegsLoading] = useState(false);
//   const [coursesLoading, setCoursesLoading] = useState(false);

//   // ------------------- HANDLERS -------------------
//   const handleOpenRegs = () => setOpenRegs(true);
//   const handleCloseRegs = () => setOpenRegs(false);
//   const handleOpenCourses = () => setOpenCourses(true);
//   const handleCloseCourses = () => setOpenCourses(false);

//   // ------------------- API CALLS -------------------
//   const fetchCourses = async () => {
//     setCoursesLoading(true);
//     try {
//       const res = await ApiHelper.getCourses();
//       const data = res.data || [];
//       setCourses(data);
//       const map = {};
//       data.forEach((c) => (map[c.id] = c.name));
//       setCoursesMap(map);
//     } catch (err) {
//       console.error("Courses fetch error:", err);
//     } finally {
//       setCoursesLoading(false);
//     }
//   };

//   const fetchRegistrations = async () => {
//     setRegsLoading(true);
//     try {
//       const res = await ApiHelper.getRegistrations();
//       setRegs(res.data || []);
//     } catch (err) {
//       console.error("Registrations fetch error:", err);
//     } finally {
//       setRegsLoading(false);
//     }
//   };

//   // ------------------- DELETE HANDLERS -------------------
//   const handleDeleteReg = async (id) => {
//     if (!window.confirm("Delete this registration?")) return;
//     try {
//       await ApiHelper.deleteRegistration(id);
//       setRegs((r) => r.filter((row) => row.id !== id));
//     } catch (err) {
//       console.error("Delete failed:", err);
//     }
//   };

//   const handleDeleteCourse = async (id) => {
//     if (!window.confirm("Delete this course?")) return;
//     try {
//       await ApiHelper.deleteCourse(id);
//       setCourses((c) => c.filter((x) => x.id !== id));
//       setCoursesMap((m) => {
//         const nm = { ...m };
//         delete nm[id];
//         return nm;
//       });
//     } catch (err) {
//       console.error("Course delete failed:", err);
//     }
//   };

//   // ------------------- USE EFFECTS -------------------
//   useEffect(() => {
//     if (openRegs) {
//       fetchCourses();
//       fetchRegistrations();
//     }
//   }, [openRegs]);

//   useEffect(() => {
//     if (openCourses) {
//       fetchCourses();
//     }
//   }, [openCourses]);

//   // ------------------- FILTERS -------------------
//   const filteredRegs = useMemo(() => {
//     if (!regsSearch) return regs;
//     const q = regsSearch.toLowerCase();
//     return regs.filter((r) => {
//       const cname = (coursesMap[r.course] || "").toLowerCase();
//       return (
//         (r.name || "").toLowerCase().includes(q) ||
//         (r.email || "").toLowerCase().includes(q) ||
//         (r.mobile || "").toLowerCase().includes(q) ||
//         cname.includes(q)
//       );
//     });
//   }, [regs, regsSearch, coursesMap]);

//   const filteredCourses = useMemo(() => {
//     if (!coursesSearch) return courses;
//     const q = coursesSearch.toLowerCase();
//     return courses.filter(
//       (c) =>
//         (c.name || "").toLowerCase().includes(q) ||
//         ("" + c.id).includes(q)
//     );
//   }, [courses, coursesSearch]);

//   // ------------------- TABLE COLUMNS -------------------
//   const regsColumns = [
//     { field: "id", headerName: "ID", width: 80 },
//     { field: "name", headerName: "Student Name", width: 220, flex: 1 },
//     { field: "email", headerName: "Email", width: 250, flex: 1 },
//     { field: "mobile", headerName: "Mobile", width: 150 },
//     {
//       field: "course",
//       headerName: "Course",
//       width: 220,
//       renderCell: (params) => {
//         const cname = coursesMap[params.value] || `ID: ${params.value}`;
//         return <Chip label={cname} variant="outlined" />;
//       },
//     },
//     {
//       field: "actions",
//       headerName: "Actions",
//       width: 140,
//       sortable: false,
//       renderCell: (params) => (
//         <Stack direction="row" spacing={1}>
//           <IconButton
//             size="small"
//             onClick={() =>
//               alert(JSON.stringify(params.row, null, 2))
//             }
//           >
//             <VisibilityIcon />
//           </IconButton>
//           <IconButton
//             size="small"
//             onClick={() => handleDeleteReg(params.row.id)}
//           >
//             <DeleteIcon color="error" />
//           </IconButton>
//         </Stack>
//       ),
//     },
//   ];

//   const coursesColumns = [
//     { field: "id", headerName: "ID", width: 100 },
//     { field: "name", headerName: "Course Name", width: 400, flex: 1 },
//     {
//       field: "actions",
//       headerName: "Actions",
//       width: 140,
//       sortable: false,
//       renderCell: (params) => (
//         <Stack direction="row" spacing={1}>
//           <IconButton
//             size="small"
//             onClick={() =>
//               alert(JSON.stringify(params.row, null, 2))
//             }
//           >
//             <VisibilityIcon />
//           </IconButton>
//           <IconButton
//             size="small"
//             onClick={() => handleDeleteCourse(params.row.id)}
//           >
//             <DeleteIcon color="error" />
//           </IconButton>
//         </Stack>
//       ),
//     },
//   ];

//   // ------------------- RETURN JSX -------------------
//   return (
//     <>
//       {/* Navbar */}
//       <header className="text-gray-600 body-font shadow-md bg-white fixed w-full top-0 z-50">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <NavLink
//             to="/"
//             className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
//           >
//             <span className="ml-3 text-xl font-bold">
//               🎓 Course Management
//             </span>
//           </NavLink>

//           <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-5">
//             <NavLink
//               to="/hero"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
//                   : "hover:text-gray-900"
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink to="/content" className="hover:text-gray-900">
//               About
//             </NavLink>
//             <NavLink to="/gallery" className="hover:text-gray-900">
//               Gallery
//             </NavLink>
//             <NavLink to="/pricing-plans" className="hover:text-gray-900">
//               Pricing
//             </NavLink>
//             <NavLink to="/team" className="hover:text-gray-900">
//               Team
//             </NavLink>
//             <NavLink to="/contact" className="hover:text-gray-900">
//               Contact
//             </NavLink>
//           </nav>
//         </div>
//       </header>

//       {/* Page Content */}
//       <div className="bg-gray-50 text-gray-800 pt-24">
//         <section className="bg-blue-700 text-white text-center py-16">
//           <motion.h1
//             className="text-4xl md:text-5xl font-bold mb-4"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Welcome to Course Registration System
//           </motion.h1>
//           <motion.p
//             className="text-lg md:text-xl max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             A simple and efficient platform to explore, register, and
//             manage courses online — built with Django and React.
//           </motion.p>
//         </section>

//         <section className="py-16 px-6 md:px-20">
//           <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
//             About the Project
//           </h2>
//           <p className="text-center max-w-3xl mx-auto text-gray-700 leading-relaxed">
//             The <strong>Course Registration System</strong> allows students
//             to browse available courses, view course details, and register
//             easily.
//           </p>
//         </section>

//         <section className="bg-white py-16 px-6 md:px-20">
//           <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
//             Key Features
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
//             {/* Course Management Card */}
//             <motion.div
//               className="p-6 bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer ring-1 ring-indigo-100"
//               whileHover={{ scale: 1.03 }}
//               onClick={handleOpenCourses}
//             >
//               <h3 className="text-xl font-semibold mb-3 text-indigo-700 flex items-center justify-center gap-2">
//                 <span className="text-2xl">🧾</span>
//                 List Of Courses
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Click to view courses (from backend) in a rich table — no
//                 page navigation.
//               </p>
//             </motion.div>

//             {/* Student Registration Card */}
//             <motion.div
//               className="p-6 bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer ring-1 ring-indigo-100"
//               whileHover={{ scale: 1.03 }}
//               onClick={handleOpenRegs}
//             >
//               <h3 className="text-xl font-semibold mb-3 text-indigo-700 flex items-center justify-center gap-2">
//                 <span className="text-2xl">👩‍🎓</span>
//                 List Of Students Registration
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Click to open registrations — view all student data in a rich,
//                 interactive table.
//               </p>
//             </motion.div>

//             {/* Additional Info Cards */}
//             <motion.div
//               className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition"
//               whileHover={{ scale: 1.05 }}
//             >
//               <h3 className="text-xl font-semibold mb-3 text-blue-600">
//                 📊 REST API Integration
//               </h3>
//               <p>
//                 Uses Django REST API to handle data securely and efficiently
//                 between frontend and backend.
//               </p>
//             </motion.div>

//             <motion.div
//               className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition"
//               whileHover={{ scale: 1.05 }}
//             >
//               <h3 className="text-xl font-semibold mb-3 text-blue-600">
//                 💻 Responsive UI
//               </h3>
//               <p>
//                 Designed with modern UI frameworks for seamless experience on
//                 all devices.
//               </p>
//             </motion.div>

//             <motion.div
//               className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition"
//               whileHover={{ scale: 1.05 }}
//             >
//               <h3 className="text-xl font-semibold mb-3 text-blue-600">
//                 🔒 Secure Data Handling
//               </h3>
//               <p>
//                 User data is managed securely using Django’s authentication
//                 and REST permissions.
//               </p>
//             </motion.div>

//             <motion.div
//               className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition"
//               whileHover={{ scale: 1.05 }}
//             >
//               <h3 className="text-xl font-semibold mb-3 text-blue-600">
//                 ⚙️ Easy Deployment
//               </h3>
//               <p>
//                 Can be hosted easily on any web server with backend and
//                 frontend integration.
//               </p>
//             </motion.div>
//           </div>
//         </section>
//       </div>

//       {/* -------- Courses Modal -------- */}
//       <Modal open={openCourses} onClose={handleCloseCourses} closeAfterTransition>
//         <Box sx={modalStyle}>
//           <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//             <Typography variant="h6" sx={{ flex: 1, fontWeight: 700 }}>
//               🧾 Courses
//             </Typography>
//             <TextField
//               size="small"
//               placeholder="Search id / name..."
//               value={coursesSearch}
//               onChange={(e) => setCoursesSearch(e.target.value)}
//               sx={{ width: 300, mr: 1 }}
//             />
//             <Button variant="contained" onClick={fetchCourses} sx={{ mr: 1 }}>
//               Refresh
//             </Button>
//             <IconButton onClick={handleCloseCourses}>
//               <CloseIcon />
//             </IconButton>
//           </Box>

//           <Box sx={{ height: "78vh", overflow: "hidden", borderRadius: 1 }}>
//             <DataGrid
//               rows={filteredCourses}
//               columns={coursesColumns}
//               pageSize={12}
//               rowsPerPageOptions={[5, 10, 25, 50]}
//               loading={coursesLoading}
//               getRowId={(row) => row.id}
//               disableSelectionOnClick
//               sx={{
//                 ".MuiDataGrid-columnHeader": {
//                   backgroundColor: "#eef6ff",
//                   color: "#0f172a",
//                   fontWeight: 700,
//                 },
//                 ".MuiDataGrid-virtualScroller": {
//                   background: "linear-gradient(180deg,#fff,#f7fbff)",
//                 },
//               }}
//             />
//           </Box>
//         </Box>
//       </Modal>

//       {/* -------- Registrations Modal -------- */}
//       <Modal open={openRegs} onClose={handleCloseRegs} closeAfterTransition>
//         <Box sx={modalStyle}>
//           <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//             <Typography variant="h6" sx={{ flex: 1, fontWeight: 700 }}>
//               🎓 Student Registrations
//             </Typography>
//             <TextField
//               size="small"
//               placeholder="Search name / email / course..."
//               value={regsSearch}
//               onChange={(e) => setRegsSearch(e.target.value)}
//               sx={{ width: 320, mr: 1 }}
//             />
//             <Button
//               variant="contained"
//               onClick={fetchRegistrations}
//               sx={{ mr: 1 }}
//             >
//               Refresh
//             </Button>
//             <IconButton onClick={handleCloseRegs}>
//               <CloseIcon />
//             </IconButton>
//           </Box>

//           <Box sx={{ height: "78vh", overflow: "hidden", borderRadius: 1 }}>
//             <DataGrid
//               rows={filteredRegs}
//               columns={regsColumns}
//               pageSize={10}
//               rowsPerPageOptions={[5, 10, 25, 50]}
//               loading={regsLoading}
//               getRowId={(row) => row.id}
//               disableSelectionOnClick
//               sx={{
//                 ".MuiDataGrid-columnHeader": {
//                   backgroundColor: "#eef6ff",
//                   color: "#0f172a",
//                   fontWeight: 700,
//                 },
//                 ".MuiDataGrid-virtualScroller": {
//                   background: "linear-gradient(180deg,#fff,#f7fbff)",
//                 },
//               }}
//             />
//           </Box>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default Content;

// import React, { useState, useEffect, useMemo } from "react";
// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";
// import ApiHelper from "../../Services/ApiHelper";

// import { DataGrid } from "@mui/x-data-grid";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   IconButton,
//   Chip,
//   Stack,
//   Modal,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import DeleteIcon from "@mui/icons-material/Delete";
// import VisibilityIcon from "@mui/icons-material/Visibility";

// const modalStyle = {
//   position: "fixed",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "92%",
//   maxWidth: 1100,
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   borderRadius: 12,
//   p: 2,
//   maxHeight: "90vh",
//   overflow: "hidden",
// };

// const Content = () => {
//   // ---------------- States ----------------
//   const [openRegs, setOpenRegs] = useState(false);
//   const [openCourses, setOpenCourses] = useState(false);
//   const [regs, setRegs] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [coursesMap, setCoursesMap] = useState({});
//   const [regsSearch, setRegsSearch] = useState("");
//   const [coursesSearch, setCoursesSearch] = useState("");
//   const [regsLoading, setRegsLoading] = useState(false);
//   const [coursesLoading, setCoursesLoading] = useState(false);

//   // ---------------- Modal Handlers ----------------
//   const handleOpenRegs = () => setOpenRegs(true);
//   const handleCloseRegs = () => setOpenRegs(false);
//   const handleOpenCourses = () => setOpenCourses(true);
//   const handleCloseCourses = () => setOpenCourses(false);

//   // ---------------- Fetch Courses ----------------
//   const fetchCourses = async () => {
//     setCoursesLoading(true);
//     try {
//       const res = await ApiHelper.getCourses();
//       const data = res.data || [];
//       setCourses(data);

//       // build id -> name map
//       const map = {};
//       data.forEach((c) => (map[c.id] = c.name));
//       setCoursesMap(map);
//     } catch (err) {
//       console.error("Courses fetch error:", err);
//     } finally {
//       setCoursesLoading(false);
//     }
//   };

//   // ---------------- Fetch Registrations ----------------
//   const fetchRegistrations = async () => {
//     setRegsLoading(true);
//     try {
//       const res = await ApiHelper.getRegistrations();
//       setRegs(res.data || []);
//     } catch (err) {
//       console.error("Registrations fetch error:", err);
//     } finally {
//       setRegsLoading(false);
//     }
//   };

//   // ---------------- Delete Handlers ----------------
//   const handleDeleteReg = async (id) => {
//     if (!window.confirm("Delete this registration?")) return;
//     try {
//       await ApiHelper.deleteRegistration(id);
//       setRegs((r) => r.filter((row) => row.id !== id));
//     } catch (err) {
//       console.error("Delete failed:", err);
//       alert("Delete failed — check console.");
//     }
//   };

//   const handleDeleteCourse = async (id) => {
//     if (!window.confirm("Delete this course?")) return;
//     try {
//       await ApiHelper.deleteCourse(id);
//       setCourses((c) => c.filter((x) => x.id !== id));
//       setCoursesMap((m) => {
//         const nm = { ...m };
//         delete nm[id];
//         return nm;
//       });
//     } catch (err) {
//       console.error("Course delete failed:", err);
//       alert("Course delete failed — check console.");
//     }
//   };

//   // ---------------- useEffect ----------------
//   useEffect(() => {
//     if (openRegs) {
//       fetchCourses();
//       fetchRegistrations();
//     }
//   }, [openRegs]);

//   useEffect(() => {
//     if (openCourses) {
//       fetchCourses();
//     }
//   }, [openCourses]);

//   // ---------------- Filtering ----------------
//   const filteredRegs = useMemo(() => {
//     if (!regsSearch) return regs;
//     const q = regsSearch.toLowerCase();
//     return regs.filter((r) => {
//       const cname = (coursesMap[r.course] || "").toLowerCase();
//       return (
//         (r.name || "").toLowerCase().includes(q) ||
//         (r.email || "").toLowerCase().includes(q) ||
//         (r.mobile || "").toLowerCase().includes(q) ||
//         cname.includes(q)
//       );
//     });
//   }, [regs, regsSearch, coursesMap]);

//   const filteredCourses = useMemo(() => {
//     if (!coursesSearch) return courses;
//     const q = coursesSearch.toLowerCase();
//     return courses.filter(
//       (c) =>
//         (c.name || "").toLowerCase().includes(q) ||
//         ("" + c.id).includes(q)
//     );
//   }, [courses, coursesSearch]);

//   // ---------------- Table Columns ----------------
//   const regsColumns = [
//     { field: "id", headerName: "ID", width: 80 },
//     { field: "name", headerName: "Student Name", width: 220, flex: 1 },
//     { field: "email", headerName: "Email", width: 250, flex: 1 },
//     { field: "mobile", headerName: "Mobile", width: 150 },
//     {
//       field: "course",
//       headerName: "Course",
//       width: 220,
//       renderCell: (params) => {
//         const cname = coursesMap[params.value] || `ID: ${params.value}`;
//         return <Chip label={cname} variant="outlined" />;
//       },
//     },
//     {
//       field: "actions",
//       headerName: "Actions",
//       width: 140,
//       sortable: false,
//       renderCell: (params) => (
//         <Stack direction="row" spacing={1}>
//           <IconButton
//             size="small"
//             onClick={() =>
//               alert(JSON.stringify(params.row, null, 2))
//             }
//           >
//             <VisibilityIcon />
//           </IconButton>
//           <IconButton
//             size="small"
//             onClick={() => handleDeleteReg(params.row.id)}
//           >
//             <DeleteIcon color="error" />
//           </IconButton>
//         </Stack>
//       ),
//     },
//   ];

//   const coursesColumns = [
//     { field: "id", headerName: "ID", width: 100 },
//     { field: "name", headerName: "Course Name", width: 400, flex: 1 },
//     {
//       field: "actions",
//       headerName: "Actions",
//       width: 140,
//       sortable: false,
//       renderCell: (params) => (
//         <Stack direction="row" spacing={1}>
//           <IconButton
//             size="small"
//             onClick={() =>
//               alert(JSON.stringify(params.row, null, 2))
//             }
//           >
//             <VisibilityIcon />
//           </IconButton>
//           <IconButton
//             size="small"
//             onClick={() => handleDeleteCourse(params.row.id)}
//           >
//             <DeleteIcon color="error" />
//           </IconButton>
//         </Stack>
//       ),
//     },
//   ];

//   // ---------------- JSX Return ----------------
//   return (
//     <>
//       {/* Navbar */}
//       <header className="text-gray-600 body-font shadow-md bg-white fixed w-full top-0 z-50">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <NavLink
//             to="/"
//             className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
//           >
//             <span className="ml-3 text-xl font-bold">
//               🎓 Course Management
//             </span>
//           </NavLink>

//           <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-5">
//             <NavLink
//               to="/hero"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
//                   : "hover:text-gray-900"
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink to="/content" className="hover:text-gray-900">
//               About
//             </NavLink>
//             <NavLink to="/gallery" className="hover:text-gray-900">
//               Gallery
//             </NavLink>
//             <NavLink to="/pricing-plans" className="hover:text-gray-900">
//               Pricing
//             </NavLink>
//             <NavLink to="/team" className="hover:text-gray-900">
//               Team
//             </NavLink>
//             <NavLink to="/contact" className="hover:text-gray-900">
//               Contact
//             </NavLink>
//           </nav>
//         </div>
//       </header>

//       {/* Main Page Content */}
//       <div className="bg-gray-50 text-gray-800 pt-24">
//         <section className="bg-blue-700 text-white text-center py-16">
//           <motion.h1
//             className="text-4xl md:text-5xl font-bold mb-4"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Welcome to Course Registration System
//           </motion.h1>
//           <motion.p
//             className="text-lg md:text-xl max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             A simple and efficient platform to explore, register, and manage
//             courses online — built with Django and React.
//           </motion.p>
//         </section>

//         <section className="py-16 px-6 md:px-20">
//           <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
//             About the Project
//           </h2>
//           <p className="text-center max-w-3xl mx-auto text-gray-700 leading-relaxed">
//             The <strong>Course Registration System</strong> allows students to
//             browse available courses, view course details, and register easily.
//           </p>
//         </section>

//         <section className="bg-white py-16 px-6 md:px-20">
//           <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
//             Key Features
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
//             {/* Courses */}
//             <motion.div
//               className="p-6 bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer ring-1 ring-indigo-100"
//               whileHover={{ scale: 1.03 }}
//               onClick={handleOpenCourses}
//             >
//               <h3 className="text-xl font-semibold mb-3 text-indigo-700 flex items-center justify-center gap-2">
//                 <span className="text-2xl">🧾</span>
//                 List Of Courses
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Click to view courses (from backend) in a rich table — no page
//                 navigation.
//               </p>
//             </motion.div>

//             {/* Registrations */}
//             <motion.div
//               className="p-6 bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer ring-1 ring-indigo-100"
//               whileHover={{ scale: 1.03 }}
//               onClick={handleOpenRegs}
//             >
//               <h3 className="text-xl font-semibold mb-3 text-indigo-700 flex items-center justify-center gap-2">
//                 <span className="text-2xl">👩‍🎓</span>
//                 List Of Students Registration
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Click to open registrations — view all student data in a rich,
//                 interactive table.
//               </p>
//             </motion.div>
//           </div>
//         </section>
//       </div>

//       {/* Courses Modal */}
//       <Modal open={openCourses} onClose={handleCloseCourses} closeAfterTransition>
//         <Box sx={modalStyle}>
//           <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//             <Typography variant="h6" sx={{ flex: 1, fontWeight: 700 }}>
//               🧾 Courses
//             </Typography>
//             <TextField
//               size="small"
//               placeholder="Search id / name..."
//               value={coursesSearch}
//               onChange={(e) => setCoursesSearch(e.target.value)}
//               sx={{ width: 300, mr: 1 }}
//             />
//             <Button variant="contained" onClick={fetchCourses} sx={{ mr: 1 }}>
//               Refresh
//             </Button>
//             <IconButton onClick={handleCloseCourses}>
//               <CloseIcon />
//             </IconButton>
//           </Box>

//           <Box sx={{ height: "78vh", overflow: "hidden", borderRadius: 1 }}>
//             <DataGrid
//               rows={filteredCourses}
//               columns={coursesColumns}
//               pageSize={12}
//               rowsPerPageOptions={[5, 10, 25, 50]}
//               loading={coursesLoading}
//               getRowId={(row) => row.id}
//               disableSelectionOnClick
//               sx={{
//                 ".MuiDataGrid-columnHeader": {
//                   backgroundColor: "#eef6ff",
//                   color: "#0f172a",
//                   fontWeight: 700,
//                 },
//                 ".MuiDataGrid-virtualScroller": {
//                   background: "linear-gradient(180deg,#fff,#f7fbff)",
//                 },
//               }}
//             />
//           </Box>
//         </Box>
//       </Modal>

//       {/* Registrations Modal */}
//       <Modal open={openRegs} onClose={handleCloseRegs} closeAfterTransition>
//         <Box sx={modalStyle}>
//           <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//             <Typography variant="h6" sx={{ flex: 1, fontWeight: 700 }}>
//               🎓 Student Registrations
//             </Typography>
//             <TextField
//               size="small"
//               placeholder="Search name / email / course..."
//               value={regsSearch}
//               onChange={(e) => setRegsSearch(e.target.value)}
//               sx={{ width: 320, mr: 1 }}
//             />
//             <Button variant="contained" onClick={fetchRegistrations} sx={{ mr: 1 }}>
//               Refresh
//             </Button>
//             <IconButton onClick={handleCloseRegs}>
//               <CloseIcon />
//             </IconButton>
//           </Box>

//           <Box sx={{ height: "78vh", overflow: "hidden", borderRadius: 1 }}>
//             <DataGrid
//               rows={filteredRegs}
//               columns={regsColumns}
//               pageSize={10}
//               rowsPerPageOptions={[5, 10, 25, 50]}
//               loading={regsLoading}
//               getRowId={(row) => row.id}
//               disableSelectionOnClick
//               sx={{
//                 ".MuiDataGrid-columnHeader": {
//                   backgroundColor: "#eef6ff",
//                   color: "#0f172a",
//                   fontWeight: 700,
//                 },
//                 ".MuiDataGrid-virtualScroller": {
//                   background: "linear-gradient(180deg,#fff,#f7fbff)",
//                 },
//               }}
//             />
//           </Box>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default Content;

// import React, { useState, useEffect, useMemo } from "react";
// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";
// import ApiHelper from "../../Services/ApiHelper";
// import { DataGrid } from "@mui/x-data-grid";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   IconButton,
//   Chip,
//   Stack,
//   Modal,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import DeleteIcon from "@mui/icons-material/Delete";
// import VisibilityIcon from "@mui/icons-material/Visibility";

// // ✅ Updated Fullscreen Modal Style
// const modalStyle = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100vw",
//   height: "100vh",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   borderRadius: 0,
//   p: 3,
//   overflow: "auto",
//   zIndex: 2000,
// };

// const Content = () => {
//   const [openRegs, setOpenRegs] = useState(false);
//   const [openCourses, setOpenCourses] = useState(false);
//   const [regs, setRegs] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [coursesMap, setCoursesMap] = useState({});
//   const [regsSearch, setRegsSearch] = useState("");
//   const [coursesSearch, setCoursesSearch] = useState("");
//   const [regsLoading, setRegsLoading] = useState(false);
//   const [coursesLoading, setCoursesLoading] = useState(false);

//   const handleOpenRegs = () => setOpenRegs(true);
//   const handleCloseRegs = () => setOpenRegs(false);
//   const handleOpenCourses = () => setOpenCourses(true);
//   const handleCloseCourses = () => setOpenCourses(false);

//   const fetchCourses = async () => {
//     setCoursesLoading(true);
//     try {
//       const res = await ApiHelper.getCourses();
//       const data = res.data || [];
//       setCourses(data);
//       const map = {};
//       data.forEach((c) => (map[c.id] = c.name));
//       setCoursesMap(map);
//     } catch (err) {
//       console.error("Courses fetch error:", err);
//     } finally {
//       setCoursesLoading(false);
//     }
//   };

//   const fetchRegistrations = async () => {
//     setRegsLoading(true);
//     try {
//       const res = await ApiHelper.getRegistrations();
//       setRegs(res.data || []);
//     } catch (err) {
//       console.error("Registrations fetch error:", err);
//     } finally {
//       setRegsLoading(false);
//     }
//   };

//   const handleDeleteReg = async (id) => {
//     if (!window.confirm("Delete this registration?")) return;
//     try {
//       await ApiHelper.deleteRegistration(id);
//       setRegs((r) => r.filter((row) => row.id !== id));
//     } catch (err) {
//       console.error("Delete failed:", err);
//       alert("Delete failed — check console.");
//     }
//   };

//   const handleDeleteCourse = async (id) => {
//     if (!window.confirm("Delete this course?")) return;
//     try {
//       await ApiHelper.deleteCourse(id);
//       setCourses((c) => c.filter((x) => x.id !== id));
//       setCoursesMap((m) => {
//         const nm = { ...m };
//         delete nm[id];
//         return nm;
//       });
//     } catch (err) {
//       console.error("Course delete failed:", err);
//       alert("Course delete failed — check console.");
//     }
//   };

//   useEffect(() => {
//     if (openRegs) {
//       fetchCourses();
//       fetchRegistrations();
//     }
//   }, [openRegs]);

//   useEffect(() => {
//     if (openCourses) {
//       fetchCourses();
//     }
//   }, [openCourses]);

//   const filteredRegs = useMemo(() => {
//     if (!regsSearch) return regs;
//     const q = regsSearch.toLowerCase();
//     return regs.filter((r) => {
//       const cname = (coursesMap[r.course] || "").toLowerCase();
//       return (
//         (r.name || "").toLowerCase().includes(q) ||
//         (r.email || "").toLowerCase().includes(q) ||
//         (r.mobile || "").toLowerCase().includes(q) ||
//         cname.includes(q)
//       );
//     });
//   }, [regs, regsSearch, coursesMap]);

//   const filteredCourses = useMemo(() => {
//     if (!coursesSearch) return courses;
//     const q = coursesSearch.toLowerCase();
//     return courses.filter(
//       (c) => (c.name || "").toLowerCase().includes(q) || ("" + c.id).includes(q)
//     );
//   }, [courses, coursesSearch]);

//   const regsColumns = [
//     { field: "id", headerName: "ID", width: 80 },
//     { field: "name", headerName: "Student Name", width: 220, flex: 1 },
//     { field: "email", headerName: "Email", width: 250, flex: 1 },
//     { field: "mobile", headerName: "Mobile", width: 150 },
//     {
//       field: "course",
//       headerName: "Course",
//       width: 220,
//       renderCell: (params) => {
//         const cname = coursesMap[params.value] || `ID: ${params.value}`;
//         return <Chip label={cname} variant="outlined" />;
//       },
//     },
//     {
//       field: "actions",
//       headerName: "Actions",
//       width: 140,
//       sortable: false,
//       renderCell: (params) => (
//         <Stack direction="row" spacing={1}>
//           <IconButton
//             size="small"
//             onClick={() => alert(JSON.stringify(params.row, null, 2))}
//           >
//             <VisibilityIcon />
//           </IconButton>
//           <IconButton size="small" onClick={() => handleDeleteReg(params.row.id)}>
//             <DeleteIcon color="error" />
//           </IconButton>
//         </Stack>
//       ),
//     },
//   ];

//   const coursesColumns = [
//     { field: "id", headerName: "ID", width: 100 },
//     { field: "name", headerName: "Course Name", width: 400, flex: 1 },
//     {
//       field: "actions",
//       headerName: "Actions",
//       width: 140,
//       sortable: false,
//       renderCell: (params) => (
//         <Stack direction="row" spacing={1}>
//           <IconButton
//             size="small"
//             onClick={() => alert(JSON.stringify(params.row, null, 2))}
//           >
//             <VisibilityIcon />
//           </IconButton>
//           <IconButton size="small" onClick={() => handleDeleteCourse(params.row.id)}>
//             <DeleteIcon color="error" />
//           </IconButton>
//         </Stack>
//       ),
//     },
//   ];

//   return (
//     <>
//       {/* Navbar */}
//       <header className="text-gray-600 body-font shadow-md bg-white fixed w-full top-0 z-50">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <NavLink
//             to="/"
//             className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
//           >
//             <span className="ml-3 text-xl font-bold">🎓 Course Management</span>
//           </NavLink>

//           <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-5">
//             <NavLink
//               to="/hero"
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1"
//                   : "hover:text-gray-900"
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink to="/content" className="hover:text-gray-900">
//               About
//             </NavLink>
//             <NavLink to="/gallery" className="hover:text-gray-900">
//               Gallery
//             </NavLink>
//             <NavLink to="/pricing-plans" className="hover:text-gray-900">
//               Pricing
//             </NavLink>
//             <NavLink to="/team" className="hover:text-gray-900">
//               Team
//             </NavLink>
//             <NavLink to="/contact" className="hover:text-gray-900">
//               Contact
//             </NavLink>
//           </nav>
//         </div>
//       </header>

//       {/* Main Page */}
//       <div className="bg-gray-50 text-gray-800 pt-24">
//         <section className="bg-blue-700 text-white text-center py-16">
//           <motion.h1
//             className="text-4xl md:text-5xl font-bold mb-4"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Welcome to Course Registration System
//           </motion.h1>
//           <motion.p
//             className="text-lg md:text-xl max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             A simple and efficient platform to explore, register, and manage
//             courses online — built with Django and React.
//           </motion.p>
//         </section>

//         <section className="py-16 px-6 md:px-20">
//           <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
//             About the Project
//           </h2>
//           <p className="text-center max-w-3xl mx-auto text-gray-700 leading-relaxed">
//             The <strong>Course Registration System</strong> allows students to
//             browse available courses, view course details, and register easily.
//           </p>
//         </section>

//         <section className="bg-white py-16 px-6 md:px-20">
//           <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
//             Key Features
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
//             <motion.div
//               className="p-6 bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer ring-1 ring-indigo-100"
//               whileHover={{ scale: 1.03 }}
//               onClick={handleOpenCourses}
//             >
//               <h3 className="text-xl font-semibold mb-3 text-indigo-700 flex items-center justify-center gap-2">
//                 <span className="text-2xl">🧾</span>
//                 List Of Courses
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Click to view courses (from backend) in a rich table — no page
//                 navigation.
//               </p>
//             </motion.div>

//             <motion.div
//               className="p-6 bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer ring-1 ring-indigo-100"
//               whileHover={{ scale: 1.03 }}
//               onClick={handleOpenRegs}
//             >
//               <h3 className="text-xl font-semibold mb-3 text-indigo-700 flex items-center justify-center gap-2">
//                 <span className="text-2xl">👩‍🎓</span>
//                 List Of Students Registration
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Click to open registrations — view all student data in a rich,
//                 interactive table.
//               </p>
//             </motion.div>
//           </div>
//         </section>
//       </div>

//       {/* ✅ Fullscreen Courses Modal */}
//       <Modal open={openCourses} onClose={handleCloseCourses} closeAfterTransition>
//         <Box sx={modalStyle}>
//           <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//             <Typography variant="h6" sx={{ flex: 1, fontWeight: 700 }}>
//               🧾 Courses
//             </Typography>
//             <TextField
//               size="small"
//               placeholder="Search id / name..."
//               value={coursesSearch}
//               onChange={(e) => setCoursesSearch(e.target.value)}
//               sx={{ width: 300, mr: 1 }}
//             />
//             <Button variant="contained" onClick={fetchCourses} sx={{ mr: 1 }}>
//               Refresh
//             </Button>
//             <IconButton onClick={handleCloseCourses}>
//               <CloseIcon />
//             </IconButton>
//           </Box>

//           <Box sx={{ height: "85vh", borderRadius: 1 }}>
//             <DataGrid
//               rows={filteredCourses}
//               columns={coursesColumns}
//               pageSize={12}
//               rowsPerPageOptions={[5, 10, 25, 50]}
//               loading={coursesLoading}
//               getRowId={(row) => row.id}
//               disableSelectionOnClick
//               sx={{
//                 ".MuiDataGrid-columnHeader": {
//                   backgroundColor: "#eef6ff",
//                   color: "#0f172a",
//                   fontWeight: 700,
//                 },
//               }}
//             />
//           </Box>
//         </Box>
//       </Modal>

//       {/* ✅ Fullscreen Registrations Modal */}
//       <Modal open={openRegs} onClose={handleCloseRegs} closeAfterTransition>
//         <Box sx={modalStyle}>
//           <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//             <Typography variant="h6" sx={{ flex: 1, fontWeight: 700 }}>
//               🎓 Student Registrations
//             </Typography>
//             <TextField
//               size="small"
//               placeholder="Search name / email / course..."
//               value={regsSearch}
//               onChange={(e) => setRegsSearch(e.target.value)}
//               sx={{ width: 320, mr: 1 }}
//             />
//             <Button variant="contained" onClick={fetchRegistrations} sx={{ mr: 1 }}>
//               Refresh
//             </Button>
//             <IconButton onClick={handleCloseRegs}>
//               <CloseIcon />
//             </IconButton>
//           </Box>

//           <Box sx={{ height: "85vh", borderRadius: 1 }}>
//             <DataGrid
//               rows={filteredRegs}
//               columns={regsColumns}
//               pageSize={10}
//               rowsPerPageOptions={[5, 10, 25, 50]}
//               loading={regsLoading}
//               getRowId={(row) => row.id}
//               disableSelectionOnClick
//               sx={{
//                 ".MuiDataGrid-columnHeader": {
//                   backgroundColor: "#eef6ff",
//                   color: "#0f172a",
//                   fontWeight: 700,
//                 },
//               }}
//             />
//           </Box>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default Content;


// import React, { useState, useEffect, useMemo } from "react";
// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";
// import ApiHelper from "../../Services/ApiHelper";
// import { DataGrid } from "@mui/x-data-grid";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   IconButton,
//   Chip,
//   Stack,
//   Modal,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import DeleteIcon from "@mui/icons-material/Delete";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import EditIcon from "@mui/icons-material/Edit";

// const modalStyle = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100vw",
//   height: "100vh",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   borderRadius: 0,
//   p: 3,
//   overflow: "auto",
//   zIndex: 2000,
// };

// const Content = () => {
//   const [openRegs, setOpenRegs] = useState(false);
//   const [openCourses, setOpenCourses] = useState(false);
//   const [regs, setRegs] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [coursesMap, setCoursesMap] = useState({});
//   const [regsSearch, setRegsSearch] = useState("");
//   const [coursesSearch, setCoursesSearch] = useState("");
//   const [regsLoading, setRegsLoading] = useState(false);
//   const [coursesLoading, setCoursesLoading] = useState(false);
//   const [editData, setEditData] = useState(null); // current student being edited

//   const handleOpenRegs = () => setOpenRegs(true);
//   const handleCloseRegs = () => setOpenRegs(false);
//   const handleOpenCourses = () => setOpenCourses(true);
//   const handleCloseCourses = () => setOpenCourses(false);

//   const fetchCourses = async () => {
//     setCoursesLoading(true);
//     try {
//       const res = await ApiHelper.getCourses();
//       const data = res.data || [];
//       setCourses(data);
//       const map = {};
//       data.forEach((c) => (map[c.id] = c.name));
//       setCoursesMap(map);
//     } catch (err) {
//       console.error("Courses fetch error:", err);
//     } finally {
//       setCoursesLoading(false);
//     }
//   };

//   const fetchRegistrations = async () => {
//     setRegsLoading(true);
//     try {
//       const res = await ApiHelper.getRegistrations();
//       setRegs(res.data || []);
//     } catch (err) {
//       console.error("Registrations fetch error:", err);
//     } finally {
//       setRegsLoading(false);
//     }
//   };

//   const handleDeleteReg = async (id) => {
//     if (!window.confirm("Delete this registration?")) return;
//     try {
//       await ApiHelper.deleteRegistration(id);
//       setRegs((r) => r.filter((row) => row.id !== id));
//       alert("Deleted successfully!");
//     } catch (err) {
//       console.error("Delete failed:", err);
//       alert("Delete failed — check console.");
//     }
//   };

//   const handleDeleteCourse = async (id) => {
//     if (!window.confirm("Delete this course?")) return;
//     try {
//       await ApiHelper.deleteCourse(id);
//       setCourses((c) => c.filter((x) => x.id !== id));
//       const nm = { ...coursesMap };
//       delete nm[id];
//       setCoursesMap(nm);
//       alert("Course deleted successfully!");
//     } catch (err) {
//       console.error("Course delete failed:", err);
//       alert("Course delete failed — check console.");
//     }
//   };

//   useEffect(() => {
//     if (openRegs) {
//       fetchCourses();
//       fetchRegistrations();
//     }
//   }, [openRegs]);

//   useEffect(() => {
//     if (openCourses) {
//       fetchCourses();
//     }
//   }, [openCourses]);

//   const filteredRegs = useMemo(() => {
//     if (!regsSearch) return regs;
//     const q = regsSearch.toLowerCase();
//     return regs.filter((r) => {
//       const cname = (coursesMap[r.course] || "").toLowerCase();
//       return (
//         (r.name || "").toLowerCase().includes(q) ||
//         (r.email || "").toLowerCase().includes(q) ||
//         (r.mobile || "").toLowerCase().includes(q) ||
//         cname.includes(q)
//       );
//     });
//   }, [regs, regsSearch, coursesMap]);

//   const filteredCourses = useMemo(() => {
//     if (!coursesSearch) return courses;
//     const q = coursesSearch.toLowerCase();
//     return courses.filter(
//       (c) => (c.name || "").toLowerCase().includes(q) || ("" + c.id).includes(q)
//     );
//   }, [courses, coursesSearch]);

//   // ---------- UPDATE ----------
//   const handleEdit = (row) => {
//     setEditData(row);
//   };

//   const handleEditChange = (field, value) => {
//     setEditData({ ...editData, [field]: value });
//   };

//   const handleUpdate = async () => {
//     try {
//       await ApiHelper.updateRegistration(editData.id, editData);
//       alert("Updated successfully!");
//       setEditData(null);
//       fetchRegistrations();
//     } catch (err) {
//       console.error("Update failed:", err);
//       alert("Update failed — check console.");
//     }
//   };

//   const regsColumns = [
//     { field: "id", headerName: "ID", width: 80 },
//     { field: "name", headerName: "Student Name", width: 220, flex: 1 },
//     { field: "email", headerName: "Email", width: 250, flex: 1 },
//     { field: "mobile", headerName: "Mobile", width: 150 },
//     {
//       field: "course",
//       headerName: "Course",
//       width: 220,
//       renderCell: (params) => {
//         const cname = coursesMap[params.value] || `ID: ${params.value}`;
//         return <Chip label={cname} variant="outlined" />;
//       },
//     },
//     {
//       field: "actions",
//       headerName: "Actions",
//       width: 160,
//       sortable: false,
//       renderCell: (params) => (
//         <Stack direction="row" spacing={1}>
//           <IconButton size="small" onClick={() => handleEdit(params.row)}>
//             <EditIcon color="primary" />
//           </IconButton>
//           <IconButton size="small" onClick={() => handleDeleteReg(params.row.id)}>
//             <DeleteIcon color="error" />
//           </IconButton>
//         </Stack>
//       ),
//     },
//   ];

//   const coursesColumns = [
//     { field: "id", headerName: "ID", width: 100 },
//     { field: "name", headerName: "Course Name", width: 400, flex: 1 },
//     {
//       field: "actions",
//       headerName: "Actions",
//       width: 140,
//       sortable: false,
//       renderCell: (params) => (
//         <Stack direction="row" spacing={1}>
//           <IconButton
//             size="small"
//             onClick={() => alert(JSON.stringify(params.row, null, 2))}
//           >
//             <VisibilityIcon />
//           </IconButton>
//           <IconButton size="small" onClick={() => handleDeleteCourse(params.row.id)}>
//             <DeleteIcon color="error" />
//           </IconButton>
//         </Stack>
//       ),
//     },
//   ];

//   return (
//     <>
//       {/* Header */}
//       <header className="text-gray-600 body-font shadow-md bg-white fixed w-full top-0 z-50">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <NavLink
//             to="/"
//             className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
//           >
//             <span className="ml-3 text-xl font-bold">🎓 Course Management</span>
//           </NavLink>

//           <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-5">
//             <NavLink to="/hero" className="hover:text-gray-900">
//               Home
//             </NavLink>
//             <NavLink to="/gallery" className="hover:text-gray-900">
//               Gallery
//             </NavLink>
//             <NavLink to="/pricing-plans" className="hover:text-gray-900">
//               Pricing
//             </NavLink>
//             <NavLink to="/team" className="hover:text-gray-900">
//               Team
//             </NavLink>
//             <NavLink to="/contact" className="hover:text-gray-900">
//               Contact
//             </NavLink>
//           </nav>
//         </div>
//       </header>

//       {/* Main */}
//       <div className="bg-gray-50 text-gray-800 pt-24">
//         <section className="bg-blue-700 text-white text-center py-16">
//           <motion.h1
//             className="text-4xl md:text-5xl font-bold mb-4"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Welcome to Course Registration System
//           </motion.h1>
//           <motion.p
//             className="text-lg md:text-xl max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             A simple and efficient platform to explore, register, and manage
//             courses online — built with Django and React.
//           </motion.p>
//         </section>

//         {/* Cards */}
//         <section className="bg-white py-16 px-6 md:px-20">
//           <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
//             Quick Access
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
//             <motion.div
//               className="p-6 bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer ring-1 ring-indigo-100"
//               whileHover={{ scale: 1.03 }}
//               onClick={handleOpenCourses}
//             >
//               <h3 className="text-xl font-semibold mb-3 text-indigo-700">
//                 🧾 List Of Courses
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Click to view all available courses.
//               </p>
//             </motion.div>

//             <motion.div
//               className="p-6 bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer ring-1 ring-indigo-100"
//               whileHover={{ scale: 1.03 }}
//               onClick={handleOpenRegs}
//             >
//               <h3 className="text-xl font-semibold mb-3 text-indigo-700">
//                 👩‍🎓 Student Registrations
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Click to manage student registrations.
//               </p>
//             </motion.div>
//           </div>
//         </section>
//       </div>

//       {/* ✅ Courses Modal */}
//       <Modal open={openCourses} onClose={handleCloseCourses}>
//         <Box sx={modalStyle}>
//           <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//             <Typography variant="h6" sx={{ flex: 1, fontWeight: 700 }}>
//               🧾 Courses
//             </Typography>
//             <TextField
//               size="small"
//               placeholder="Search id / name..."
//               value={coursesSearch}
//               onChange={(e) => setCoursesSearch(e.target.value)}
//               sx={{ width: 300, mr: 1 }}
//             />
//             <Button variant="contained" onClick={fetchCourses} sx={{ mr: 1 }}>
//               Refresh
//             </Button>
//             <IconButton onClick={handleCloseCourses}>
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <Box sx={{ height: "85vh" }}>
//             <DataGrid
//               rows={filteredCourses}
//               columns={coursesColumns}
//               pageSize={12}
//               loading={coursesLoading}
//               getRowId={(row) => row.id}
//             />
//           </Box>
//         </Box>
//       </Modal>

//       {/* ✅ Student Registrations Modal */}
//       <Modal open={openRegs} onClose={handleCloseRegs}>
//         <Box sx={modalStyle}>
//           <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//             <Typography variant="h6" sx={{ flex: 1, fontWeight: 700 }}>
//               🎓 Student Registrations
//             </Typography>
//             <TextField
//               size="small"
//               placeholder="Search name / email / course..."
//               value={regsSearch}
//               onChange={(e) => setRegsSearch(e.target.value)}
//               sx={{ width: 320, mr: 1 }}
//             />
//             <Button variant="contained" onClick={fetchRegistrations} sx={{ mr: 1 }}>
//               Refresh
//             </Button>
//             <IconButton onClick={handleCloseRegs}>
//               <CloseIcon />
//             </IconButton>
//           </Box>

//           <Box sx={{ height: "85vh" }}>
//             <DataGrid
//               rows={filteredRegs}
//               columns={regsColumns}
//               pageSize={10}
//               loading={regsLoading}
//               getRowId={(row) => row.id}
//             />
//           </Box>
//         </Box>
//       </Modal>

//       {/* ✏️ Edit Modal */}
//       <Modal open={!!editData} onClose={() => setEditData(null)}>
//         <Box
//           sx={{
//             ...modalStyle,
//             width: 500,
//             height: "auto",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             borderRadius: 2,
//             p: 4,
//           }}
//         >
//           <Typography variant="h6" mb={2}>
//             ✏️ Edit Student
//           </Typography>
//           <Stack spacing={2}>
//             <TextField
//               label="Name"
//               value={editData?.name || ""}
//               onChange={(e) => handleEditChange("name", e.target.value)}
//             />
//             <TextField
//               label="Email"
//               value={editData?.email || ""}
//               onChange={(e) => handleEditChange("email", e.target.value)}
//             />
//             <TextField
//               label="Mobile"
//               value={editData?.mobile || ""}
//               onChange={(e) => handleEditChange("mobile", e.target.value)}
//             />
//             <TextField
//               label="Course ID"
//               value={editData?.course || ""}
//               onChange={(e) => handleEditChange("course", e.target.value)}
//             />
//             <Stack direction="row" justifyContent="flex-end" spacing={2}>
//               <Button onClick={() => setEditData(null)}>Cancel</Button>
//               <Button variant="contained" onClick={handleUpdate}>
//                 Save
//               </Button>
//             </Stack>
//           </Stack>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default Content;


// import React, { useState, useEffect, useMemo } from "react";
// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";
// import ApiHelper from "../../Services/ApiHelper";
// import { DataGrid } from "@mui/x-data-grid";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   IconButton,
//   Chip,
//   Stack,
//   Modal,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";

// const modalStyle = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100vw",
//   height: "100vh",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   borderRadius: 0,
//   p: 3,
//   overflow: "auto",
//   zIndex: 2000,
// };

// const Content = () => {
//   const [openRegs, setOpenRegs] = useState(false);
//   const [openCourses, setOpenCourses] = useState(false);
//   const [regs, setRegs] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [coursesMap, setCoursesMap] = useState({});
//   const [regsSearch, setRegsSearch] = useState("");
//   const [coursesSearch, setCoursesSearch] = useState("");
//   const [regsLoading, setRegsLoading] = useState(false);
//   const [coursesLoading, setCoursesLoading] = useState(false);
//   const [editData, setEditData] = useState(null); // student edit
//   const [editCourseData, setEditCourseData] = useState(null); // course edit

//   const handleOpenRegs = () => setOpenRegs(true);
//   const handleCloseRegs = () => setOpenRegs(false);
//   const handleOpenCourses = () => setOpenCourses(true);
//   const handleCloseCourses = () => setOpenCourses(false);

//   // ---------- FETCH ----------
//   const fetchCourses = async () => {
//     setCoursesLoading(true);
//     try {
//       const res = await ApiHelper.getCourses();
//       const data = res.data || [];
//       setCourses(data);
//       const map = {};
//       data.forEach((c) => (map[c.id] = c.name));
//       setCoursesMap(map);
//     } catch (err) {
//       console.error("Courses fetch error:", err);
//     } finally {
//       setCoursesLoading(false);
//     }
//   };

//   const fetchRegistrations = async () => {
//     setRegsLoading(true);
//     try {
//       const res = await ApiHelper.getRegistrations();
//       setRegs(res.data || []);
//     } catch (err) {
//       console.error("Registrations fetch error:", err);
//     } finally {
//       setRegsLoading(false);
//     }
//   };

//   // ---------- DELETE ----------
//   const handleDeleteReg = async (id) => {
//     if (!window.confirm("Delete this registration?")) return;
//     try {
//       await ApiHelper.deleteRegistration(id);
//       setRegs((r) => r.filter((row) => row.id !== id));
//       alert("Deleted successfully!");
//     } catch (err) {
//       console.error("Delete failed:", err);
//       alert("Delete failed — check console.");
//     }
//   };

//   const handleDeleteCourse = async (id) => {
//     if (!window.confirm("Delete this course?")) return;
//     try {
//       await ApiHelper.deleteCourse(id);
//       setCourses((c) => c.filter((x) => x.id !== id));
//       const nm = { ...coursesMap };
//       delete nm[id];
//       setCoursesMap(nm);
//       alert("Course deleted successfully!");
//     } catch (err) {
//       console.error("Course delete failed:", err);
//       alert("Course delete failed — check console.");
//     }
//   };

//   // ---------- EDIT STUDENT ----------
//   const handleEdit = (row) => setEditData(row);
//   const handleEditChange = (field, value) =>
//     setEditData({ ...editData, [field]: value });

//   const handleUpdate = async () => {
//     try {
//       await ApiHelper.updateRegistration(editData.id, editData);
//       alert("Student updated successfully!");
//       setEditData(null);
//       fetchRegistrations();
//     } catch (err) {
//       console.error("Update failed:", err);
//       alert("Update failed — check console.");
//     }
//   };

//   // ---------- EDIT COURSE ----------
//   const handleEditCourse = (row) => setEditCourseData(row);
//   const handleCourseChange = (field, value) =>
//     setEditCourseData({ ...editCourseData, [field]: value });

//   const handleCourseUpdate = async () => {
//     try {
//       await ApiHelper.updateCourse(editCourseData.id, {
//         name: editCourseData.name,
//       });
//       alert("Course updated successfully!");
//       setEditCourseData(null);
//       fetchCourses();
//     } catch (err) {
//       console.error("Course update failed:", err);
//       alert("Course update failed — check console.");
//     }
//   };

//   // ---------- FILTER ----------
//   const filteredRegs = useMemo(() => {
//     if (!regsSearch) return regs;
//     const q = regsSearch.toLowerCase();
//     return regs.filter((r) => {
//       const cname = (coursesMap[r.course] || "").toLowerCase();
//       return (
//         (r.name || "").toLowerCase().includes(q) ||
//         (r.email || "").toLowerCase().includes(q) ||
//         (r.mobile || "").toLowerCase().includes(q) ||
//         cname.includes(q)
//       );
//     });
//   }, [regs, regsSearch, coursesMap]);

//   const filteredCourses = useMemo(() => {
//     if (!coursesSearch) return courses;
//     const q = coursesSearch.toLowerCase();
//     return courses.filter(
//       (c) => (c.name || "").toLowerCase().includes(q) || ("" + c.id).includes(q)
//     );
//   }, [courses, coursesSearch]);

//   useEffect(() => {
//     if (openRegs) {
//       fetchCourses();
//       fetchRegistrations();
//     }
//   }, [openRegs]);

//   useEffect(() => {
//     if (openCourses) fetchCourses();
//   }, [openCourses]);

//   // ---------- COLUMNS ----------
//   const regsColumns = [
//     { field: "id", headerName: "ID", width: 80 },
//     { field: "name", headerName: "Student Name", width: 220, flex: 1 },
//     { field: "email", headerName: "Email", width: 250, flex: 1 },
//     { field: "mobile", headerName: "Mobile", width: 150 },
//     {
//       field: "course",
//       headerName: "Course",
//       width: 220,
//       renderCell: (params) => {
//         const cname = coursesMap[params.value] || `ID: ${params.value}`;
//         return <Chip label={cname} variant="outlined" />;
//       },
//     },
//     {
//       field: "actions",
//       headerName: "Actions",
//       width: 160,
//       sortable: false,
//       renderCell: (params) => (
//         <Stack direction="row" spacing={1}>
//           <IconButton size="small" onClick={() => handleEdit(params.row)}>
//             <EditIcon color="primary" />
//           </IconButton>
//           <IconButton
//             size="small"
//             onClick={() => handleDeleteReg(params.row.id)}
//           >
//             <DeleteIcon color="error" />
//           </IconButton>
//         </Stack>
//       ),
//     },
//   ];

//   const coursesColumns = [
//     { field: "id", headerName: "ID", width: 100 },
//     { field: "name", headerName: "Course Name", width: 400, flex: 1 },
//     {
//       field: "actions",
//       headerName: "Actions",
//       width: 160,
//       sortable: false,
//       renderCell: (params) => (
//         <Stack direction="row" spacing={1}>
//           <IconButton size="small" onClick={() => handleEditCourse(params.row)}>
//             <EditIcon color="primary" />
//           </IconButton>
//           <IconButton
//             size="small"
//             onClick={() => handleDeleteCourse(params.row.id)}
//           >
//             <DeleteIcon color="error" />
//           </IconButton>
//         </Stack>
//       ),
//     },
//   ];

//   return (
//     <>
//       {/* Header */}
//       <header className="text-gray-600 body-font shadow-md bg-white fixed w-full top-0 z-50">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <NavLink
//             to="/"
//             className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
//           >
//             <span className="ml-3 text-xl font-bold">🎓 Course Management</span>
//           </NavLink>
//           <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-5">
//              <NavLink to="/hero" className="hover:text-gray-900">
//                Home
//              </NavLink>
//              <NavLink to="/content" className="hover:text-gray-900">
//                About
//              </NavLink>
//              <NavLink to="/gallery" className="hover:text-gray-900">
//                Gallery
//              </NavLink>
//              <NavLink to="/pricing-plans" className="hover:text-gray-900">
//                Pricing
//              </NavLink>
//              <NavLink to="/team" className="hover:text-gray-900">
//                Team
//              </NavLink>
//              <NavLink to="/contact" className="hover:text-gray-900">
//                Contact
//              </NavLink>
//            </nav>
//         </div>
//       </header>

//        <div className="bg-gray-50 text-gray-800 pt-24">
//          <section className="bg-blue-700 text-white text-center py-16">
//            <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//              Welcome to Course Registration System
//            </motion.h1>
//            <motion.p className="text-lg md:text-xl max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
//              A simple and efficient platform to explore, register, and manage courses online — built with Django and React.
//            </motion.p>
//          </section>

//          <section className="py-16 px-6 md:px-20">
//            <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">About the Project</h2>
//            <p className="text-center max-w-3xl mx-auto text-gray-700 leading-relaxed">
//              The <strong>Course Registration System</strong> allows students to browse available courses, view course details, and register easily.
//            </p>
//          </section>

//          <section className="bg-white py-16 px-6 md:px-20">
//            <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Key Features</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
//             <motion.div
//               className="p-6 bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer ring-1 ring-indigo-100"
//               whileHover={{ scale: 1.03 }}
//               onClick={handleOpenCourses}
//             >
//               <h3 className="text-xl font-semibold mb-3 text-indigo-700">
//                 🧾 List Of Courses
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Click to view courses (from backend) in a rich table — no page navigation.

//               </p>
//             </motion.div>

//             <motion.div
//               className="p-6 bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer ring-1 ring-indigo-100"
//               whileHover={{ scale: 1.03 }}
//               onClick={handleOpenRegs}
//             >
//               <h3 className="text-xl font-semibold mb-3 text-indigo-700">
//                 👩‍🎓 Student Registrations
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Click to open registrations — view all student data in a rich, interactive table.

//               </p>
//             </motion.div>
//             <motion.div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition" whileHover={{ scale: 1.05 }}>
//                <h3 className="text-xl font-semibold mb-3 text-blue-600">📊 REST API Integration</h3>
//                <p>Uses Django REST API to handle data securely and efficiently between frontend and backend.</p>
//              </motion.div>
//           </div>
//         </section>
//       </div>

//       {/* ✅ Courses Modal */}
//       <Modal open={openCourses} onClose={handleCloseCourses}>
//         <Box sx={modalStyle}>
//           <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//             <Typography variant="h6" sx={{ flex: 1, fontWeight: 700 }}>
//               🧾 Courses
//             </Typography>
//             <TextField
//               size="small"
//               placeholder="Search id / name..."
//               value={coursesSearch}
//               onChange={(e) => setCoursesSearch(e.target.value)}
//               sx={{ width: 300, mr: 1 }}
//             />
//             <Button variant="contained" onClick={fetchCourses} sx={{ mr: 1 }}>
//               Refresh
//             </Button>
//             <IconButton onClick={handleCloseCourses}>
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <Box sx={{ height: "85vh" }}>
//             <DataGrid
//               rows={filteredCourses}
//               columns={coursesColumns}
//               pageSize={12}
//               loading={coursesLoading}
//               getRowId={(row) => row.id}
//             />
//           </Box>
//         </Box>
//       </Modal>

//       {/* //       {/* ✅ Student Registrations Modal */}
//        <Modal open={openRegs} onClose={handleCloseRegs}>
//          <Box sx={modalStyle}>
//            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//              <Typography variant="h6" sx={{ flex: 1, fontWeight: 700 }}>
//                🎓 Student Registrations
//              </Typography>
//              <TextField
//               size="small"
//               placeholder="Search name / email / course..."
//               value={regsSearch}
//               onChange={(e) => setRegsSearch(e.target.value)}
//               sx={{ width: 320, mr: 1 }}
//             />
//             <Button variant="contained" onClick={fetchRegistrations} sx={{ mr: 1 }}>
//               Refresh
//             </Button>
//             <IconButton onClick={handleCloseRegs}>
//               <CloseIcon />
//             </IconButton>
//           </Box>

//           <Box sx={{ height: "85vh" }}>
//             <DataGrid
//               rows={filteredRegs}
//               columns={regsColumns}
//               pageSize={10}
//               loading={regsLoading}
//               getRowId={(row) => row.id}
//             />
//           </Box>
//         </Box>
//       </Modal> 

//       {/* ✏️ Edit Course Modal */}
//       <Modal open={!!editCourseData} onClose={() => setEditCourseData(null)}>
//         <Box
//           sx={{
//             ...modalStyle,
//             width: 400,
//             height: "auto",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             borderRadius: 2,
//             p: 4,
//           }}
//         >
//           <Typography variant="h6" mb={2}>
//             ✏️ Edit Course
//           </Typography>
//           <Stack spacing={2}>
//             <TextField
//               label="Course Name"
//               value={editCourseData?.name || ""}
//               onChange={(e) => handleCourseChange("name", e.target.value)}
//             />
//             <Stack direction="row" justifyContent="flex-end" spacing={2}>
//               <Button onClick={() => setEditCourseData(null)}>Cancel</Button>
//               <Button variant="contained" onClick={handleCourseUpdate}>
//                 Save
//               </Button>
//             </Stack>
//           </Stack>
//         </Box>
//       </Modal>

//       {/* ✏️ Edit Student Modal */}
//       <Modal open={!!editData} onClose={() => setEditData(null)}>
//         <Box
//           sx={{
//             ...modalStyle,
//             width: 500,
//             height: "auto",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             borderRadius: 2,
//             p: 4,
//           }}
//         >
//           <Typography variant="h6" mb={2}>
//             ✏️ Edit Student
//           </Typography>
//           <Stack spacing={2}>
//             <TextField
//               label="Name"
//               value={editData?.name || ""}
//               onChange={(e) => handleEditChange("name", e.target.value)}
//             />
//             <TextField
//               label="Email"
//               value={editData?.email || ""}
//               onChange={(e) => handleEditChange("email", e.target.value)}
//             />
//             <TextField
//               label="Mobile"
//               value={editData?.mobile || ""}
//               onChange={(e) => handleEditChange("mobile", e.target.value)}
//             />
//             <TextField
//               label="Course ID"
//               value={editData?.course || ""}
//               onChange={(e) => handleEditChange("course", e.target.value)}
//             />
//             <Stack direction="row" justifyContent="flex-end" spacing={2}>
//               <Button onClick={() => setEditData(null)}>Cancel</Button>
//               <Button variant="contained" onClick={handleUpdate}>
//                 Save
//               </Button>
//             </Stack>
//           </Stack>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default Content;



import React, { useState, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import ApiHelper from "../../Services/ApiHelper";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Chip,
  Stack,
  Modal,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 0,
  p: 3,
  overflow: "auto",
  zIndex: 2000,
};

const Content = () => {
  const [openRegs, setOpenRegs] = useState(false);
  const [openCourses, setOpenCourses] = useState(false);
  const [openLoginList, setOpenLoginList] = useState(false);
  const [regs, setRegs] = useState([]);
  const [courses, setCourses] = useState([]);
  const [logins, setLogins] = useState([]);
  const [coursesMap, setCoursesMap] = useState({});
  const [regsSearch, setRegsSearch] = useState("");
  const [coursesSearch, setCoursesSearch] = useState("");
  const [loginSearch, setLoginSearch] = useState("");
  const [regsLoading, setRegsLoading] = useState(false);
  const [coursesLoading, setCoursesLoading] = useState(false);
  const [loginsLoading, setLoginsLoading] = useState(false);
  const [editData, setEditData] = useState(null); // student edit
  const [editCourseData, setEditCourseData] = useState(null); // course edit

  // Add Student
  const [addStudentOpen, setAddStudentOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
  });

  // Add Course
  const [addCourseOpen, setAddCourseOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({ name: "" });

  // ---------- FETCH ----------
  const fetchCourses = async () => {
    setCoursesLoading(true);
    try {
      const res = await ApiHelper.getCourses();
      const data = res.data || [];
      setCourses(data);
      const map = {};
      data.forEach((c) => (map[c.id] = c.name));
      setCoursesMap(map);
    } catch (err) {
      console.error("Courses fetch error:", err);
    } finally {
      setCoursesLoading(false);
    }
  };

    // 👇 NEW: Fetch Login List
  const fetchLoginList = async () => {
    setLoginsLoading(true);
    try {
      const res = await ApiHelper.getLoginList(); // Make sure this exists in ApiHelper
      setLogins(res.data || []);
    } catch (err) {
      console.error("Login list fetch error:", err);
    } finally {
      setLoginsLoading(false);
    }
  };


  const fetchRegistrations = async () => {
    setRegsLoading(true);
    try {
      const res = await ApiHelper.getRegistrations();
      setRegs(res.data || []);
    } catch (err) {
      console.error("Registrations fetch error:", err);
    } finally {
      setRegsLoading(false);
    }
  };

  // ---------- ADD COURSE ----------
const handleAddCourse = async () => {
  try {
    await ApiHelper.addCourse(newCourse);
    alert("✅ Course added successfully!");
    setAddCourseOpen(false);
    fetchCourses(); // refresh the course list
  } catch (error) {
    console.error("Error adding course:", error);
    alert("❌ Error adding course!");
  }
};

  // ---------- ADD STUDENT ----------
  const handleAddStudent = async () => {
    if (
      !newStudent.name.trim() ||
      !newStudent.email.trim() ||
      !newStudent.mobile.trim() ||
      !newStudent.course
    ) {
      alert("Please fill all fields!");
      return;
    }

    try {
      await ApiHelper.createRegistration(newStudent);
      alert("Student added successfully!");
      setAddStudentOpen(false);
      setNewStudent({ name: "", email: "", mobile: "", course: "" });
      fetchRegistrations();
    } catch (err) {
      console.error("Add student failed:", err);
      alert("Failed to add student — check console.");
    }
  };

  // ---------- DELETE ----------
  const handleDeleteReg = async (id) => {
    if (!window.confirm("Delete this registration?")) return;
    try {
      await ApiHelper.deleteRegistration(id);
      setRegs((r) => r.filter((row) => row.id !== id));
      alert("Deleted successfully!");
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Delete failed — check console.");
    }
  };

  const handleDeleteCourse = async (id) => {
    if (!window.confirm("Delete this course?")) return;
    try {
      await ApiHelper.deleteCourse(id);
      setCourses((c) => c.filter((x) => x.id !== id));
      const nm = { ...coursesMap };
      delete nm[id];
      setCoursesMap(nm);
      alert("Course deleted successfully!");
    } catch (err) {
      console.error("Course delete failed:", err);
      alert("Course delete failed — check console.");
    }
  };

  // ---------- EDIT STUDENT ----------
  const handleEdit = (row) => setEditData(row);
  const handleEditChange = (field, value) =>
    setEditData({ ...editData, [field]: value });

  const handleUpdate = async () => {
    try {
      await ApiHelper.updateRegistration(editData.id, editData);
      alert("Student updated successfully!");
      setEditData(null);
      fetchRegistrations();
    } catch (err) {
      console.error("Update failed:", err);
      alert("Update failed — check console.");
    }
  };

  // ---------- EDIT COURSE ----------
  const handleEditCourse = (row) => setEditCourseData(row);
  const handleCourseChange = (field, value) =>
    setEditCourseData({ ...editCourseData, [field]: value });

  const handleCourseUpdate = async () => {
    try {
      await ApiHelper.updateCourse(editCourseData.id, {
        name: editCourseData.name,
      });
      alert("Course updated successfully!");
      setEditCourseData(null);
      fetchCourses();
    } catch (err) {
      console.error("Course update failed:", err);
      alert("Course update failed — check console.");
    }
  };

  // ---------- FILTER ----------
  const filteredRegs = useMemo(() => {
    if (!regsSearch) return regs;
    const q = regsSearch.toLowerCase();
    return regs.filter((r) => {
      const cname = (coursesMap[r.course] || "").toLowerCase();
      return (
        (r.name || "").toLowerCase().includes(q) ||
        (r.email || "").toLowerCase().includes(q) ||
        (r.mobile || "").toLowerCase().includes(q) ||
        cname.includes(q)
      );
    });
  }, [regs, regsSearch, coursesMap]);

  const filteredCourses = useMemo(() => {
    if (!coursesSearch) return courses;
    const q = coursesSearch.toLowerCase();
    return courses.filter(
      (c) => (c.name || "").toLowerCase().includes(q) || ("" + c.id).includes(q)
    );
  }, [courses, coursesSearch]);

  useEffect(() => {
    if (openRegs) {
      fetchCourses();
      fetchRegistrations();
    }
  }, [openRegs]);

  useEffect(() => {
    if (openCourses) fetchCourses();
  }, [openCourses]);

    const filteredLogins = useMemo(() => {
    if (!loginSearch) return logins;
    const q = loginSearch.toLowerCase();
    return logins.filter(
      (l) =>
        (l.mobile || "").toLowerCase().includes(q) ||
        (l.email || "").toLowerCase().includes(q)
    );
  }, [logins, loginSearch]);



  // ---------- COLUMNS ----------
  const regsColumns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "name", headerName: "Student Name", width: 220, flex: 1 },
    { field: "email", headerName: "Email", width: 250, flex: 1 },
    { field: "mobile", headerName: "Mobile", width: 150 },
    {
      field: "course",
      headerName: "Course",
      width: 220,
      renderCell: (params) => {
        const cname = coursesMap[params.value] || `ID: ${params.value}`;
        return <Chip label={cname} variant="outlined" />;
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 160,
      sortable: false,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <IconButton size="small" onClick={() => handleEdit(params.row)}>
            <EditIcon color="primary" />
          </IconButton>
          <IconButton size="small" onClick={() => handleDeleteReg(params.row.id)}>
            <DeleteIcon color="error" />
          </IconButton>
        </Stack>
      ),
    },
  ];

  const coursesColumns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Course Name", width: 400, flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      width: 160,
      sortable: false,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <IconButton size="small" onClick={() => handleEditCourse(params.row)}>
            <EditIcon color="primary" />
          </IconButton>
          <IconButton size="small" onClick={() => handleDeleteCourse(params.row.id)}>
            <DeleteIcon color="error" />
          </IconButton>
        </Stack>
      ),
    },
  ];

    const loginColumns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "mobile", headerName: "Mobile", width: 180 },
    { field: "email", headerName: "Email", width: 250 },
  ];

  // ---------- useEffects ----------
  useEffect(() => {
    if (openRegs) {
      fetchCourses();
      fetchRegistrations();
    }
  }, [openRegs]);

  useEffect(() => {
    if (openCourses) fetchCourses();
  }, [openCourses]);

  useEffect(() => {
    if (openLoginList) fetchLoginList();
  }, [openLoginList]);

  return (
    <>
      {/* 🔹 Header */}
      <header className="text-gray-600 body-font shadow-md bg-white fixed w-full top-0 z-50">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <NavLink to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl font-bold">🎓 Course Management</span>
          </NavLink>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-5">
            <NavLink to="/hero" className="hover:text-gray-900">Home</NavLink>
            <NavLink to="/content" className="hover:text-gray-900">About</NavLink>
            <NavLink to="/gallery" className="hover:text-gray-900">Gallery</NavLink>
            <NavLink to="/pricing-plans" className="hover:text-gray-900">Pricing</NavLink>
            <NavLink to="/team" className="hover:text-gray-900">Team</NavLink>
            <NavLink to="/contact" className="hover:text-gray-900">Contact</NavLink>
          </nav>
        </div>
      </header>

      <div className="bg-gray-50 text-gray-800 pt-24">
        <section className="bg-blue-700 text-white text-center py-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Course Registration System
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A simple and efficient platform to explore, register, and manage courses online — built with Django and React.
          </motion.p>
        </section>

        <section className="py-16 px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
            About the Project
          </h2>
          <p className="text-center max-w-3xl mx-auto text-gray-700 leading-relaxed">
            The <strong>Course Registration System</strong> allows students to browse available courses, view course details, and register easily.
          </p>
        </section>

        <section className="bg-white py-16 px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <motion.div
              className="p-6 bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer ring-1 ring-indigo-100"
              whileHover={{ scale: 1.03 }}
              onClick={() => setOpenCourses(true)}
            >
              <h3 className="text-xl font-semibold mb-3 text-indigo-700">🧾 List Of Courses</h3>
              <p className="text-sm text-gray-600">
                Click to view courses (from backend) in a rich table — no page navigation.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer ring-1 ring-indigo-100"
              whileHover={{ scale: 1.03 }}
              onClick={() => setOpenRegs(true)}
            >
              <h3 className="text-xl font-semibold mb-3 text-indigo-700">
                👩‍🎓 Student Registrations
              </h3>
              <p className="text-sm text-gray-600">
                Click to open registrations — view all student data in a rich, interactive table.
              </p>
            </motion.div>
            
            <motion.div
            className="p-6 bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition cursor-pointer ring-1 ring-indigo-100"
            whileHover={{ scale: 1.03 }}
            onClick={() => setOpenLoginList(true)}
            >
              <h3 className="text-xl font-semibold mb-3 text-indigo-700">🔐 Login Users</h3>
              <p className="text-sm text-gray-600">
                   Click to open and view all users who logged in.
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ✅ Courses Modal */}
      <Modal open={openCourses} onClose={() => setOpenCourses(false)}>
        <Box sx={modalStyle}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Typography variant="h6" sx={{ flex: 1, fontWeight: 700 }}>
              🧾 Courses
            </Typography>
            <TextField
              size="small"
              placeholder="Search id / name..."
              value={coursesSearch}
              onChange={(e) => setCoursesSearch(e.target.value)}
              sx={{ width: 300, mr: 1 }}
            />
            <Button variant="contained" onClick={() => setAddCourseOpen(true)} color="success" sx={{ mr: 1 }}>
              + Add Course
            </Button>
            <Button variant="contained" onClick={fetchCourses} sx={{ mr: 1 }}>
              Refresh
            </Button>
            <IconButton onClick={() => setOpenCourses(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ height: "85vh" }}>
            <DataGrid
              rows={filteredCourses}
              columns={coursesColumns}
              pageSize={12}
              loading={coursesLoading}
              getRowId={(row) => row.id}
            />
          </Box>
        </Box>
      </Modal>

      {/* ➕ Add Course Modal */}
      <Modal open={addCourseOpen} onClose={() => setAddCourseOpen(false)}>
        <Box
          sx={{
            ...modalStyle,
            width: 420,
            height: "auto",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: 2,
            p: 4,
          }}
        >
          <Typography variant="h6" mb={2}>
            ➕ Add New Course
          </Typography>

          <Stack spacing={2}>
            <TextField
              label="Course Name"
              value={newCourse.name}
              onChange={(e) => setNewCourse({ name: e.target.value })}
            />

            <Stack direction="row" justifyContent="flex-end" spacing={2}>
              <Button onClick={() => setAddCourseOpen(false)}>Cancel</Button>
              <Button variant="contained" color="primary" onClick={handleAddCourse}>
                Save
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>

      {/* ✅ Student Registrations Modal */}
      <Modal open={openRegs} onClose={() => setOpenRegs(false)}>
        <Box sx={modalStyle}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Typography variant="h6" sx={{ flex: 1, fontWeight: 700 }}>
              🎓 Student Registrations
            </Typography>
            <TextField
              size="small"
              placeholder="Search name / email / course..."
              value={regsSearch}
              onChange={(e) => setRegsSearch(e.target.value)}
              sx={{ width: 300, mr: 1 }}
            />
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                if (courses.length === 0) fetchCourses();
                setAddStudentOpen(true);
              }}
              sx={{ mr: 1 }}
            >
              + Add Student
            </Button>
            <Button variant="contained" onClick={fetchRegistrations} sx={{ mr: 1 }}>
              Refresh
            </Button>
            <IconButton onClick={() => setOpenRegs(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ height: "78vh" }}>
            <DataGrid
              rows={filteredRegs}
              columns={regsColumns}
              pageSize={10}
              loading={regsLoading}
              getRowId={(row) => row.id}
            />
          </Box>
        </Box>
      </Modal>

      {/* ✏️ Edit Course Modal */}
      <Modal open={!!editCourseData} onClose={() => setEditCourseData(null)}>
        <Box
          sx={{
            ...modalStyle,
            width: 400,
            height: "auto",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: 2,
            p: 4,
          }}
        >
          <Typography variant="h6" mb={2}>
            ✏️ Edit Course
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="Course Name"
              value={editCourseData?.name || ""}
              onChange={(e) => handleCourseChange("name", e.target.value)}
            />
            <Stack direction="row" justifyContent="flex-end" spacing={2}>
              <Button onClick={() => setEditCourseData(null)}>Cancel</Button>
              <Button variant="contained" onClick={handleCourseUpdate}>
                Save
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>

      {/* ✏️ Edit Student Modal */}
      <Modal open={!!editData} onClose={() => setEditData(null)}>
        <Box
          sx={{
            ...modalStyle,
            width: 500,
            height: "auto",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: 2,
            p: 4,
          }}
        >
          <Typography variant="h6" mb={2}>
            ✏️ Edit Student
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="Name"
              value={editData?.name || ""}
              onChange={(e) => handleEditChange("name", e.target.value)}
            />
            <TextField
              label="Email"
              value={editData?.email || ""}
              onChange={(e) => handleEditChange("email", e.target.value)}
            />
            <TextField
              label="Mobile"
              value={editData?.mobile || ""}
              onChange={(e) => handleEditChange("mobile", e.target.value)}
            />
            <TextField
              label="Course ID"
              value={editData?.course || ""}
              onChange={(e) => handleEditChange("course", e.target.value)}
            />
            <Stack direction="row" justifyContent="flex-end" spacing={2}>
              <Button onClick={() => setEditData(null)}>Cancel</Button>
              <Button variant="contained" onClick={handleUpdate}>
                Save
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>

      {/* ➕ Add Student Modal */}
      <Modal open={addStudentOpen} onClose={() => setAddStudentOpen(false)}>
        <Box
          sx={{
            ...modalStyle,
            width: 520,
            height: "auto",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: 2,
            p: 4,
          }}
        >
          <Typography variant="h6" mb={2}>
            ➕ Add New Student
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="Name"
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            />
            <TextField
              label="Email"
              value={newStudent.email}
              onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
            />
            <TextField
              label="Mobile"
              value={newStudent.mobile}
              onChange={(e) => setNewStudent({ ...newStudent, mobile: e.target.value })}
            />

            {/* Course dropdown */}
            <FormControl fullWidth>
              <InputLabel id="course-select-label">Course</InputLabel>
              <Select
                labelId="course-select-label"
                label="Course"
                value={newStudent.course}
                onChange={(e) => setNewStudent({ ...newStudent, course: e.target.value })}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {courses.map((c) => (
                  <MenuItem key={c.id} value={c.id}>
                    {c.name} {`(ID: ${c.id})`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Stack direction="row" justifyContent="flex-end" spacing={2}>
              <Button onClick={() => setAddStudentOpen(false)}>Cancel</Button>
              <Button variant="contained" onClick={handleAddStudent}>
                Save
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
      {/* ✅ Login List Modal */}
      <Modal open={openLoginList} onClose={() => setOpenLoginList(false)}>
        <Box sx={modalStyle}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Typography variant="h6" sx={{ flex: 1, fontWeight: 700 }}>
              📋 Login User List
            </Typography>
            <TextField
              size="small"
              placeholder="Search mobile / email..."
              value={loginSearch}
              onChange={(e) => setLoginSearch(e.target.value)}
              sx={{ width: 300, mr: 1 }}
            />
            <Button variant="contained" onClick={fetchLoginList} sx={{ mr: 1 }}>
              Refresh
            </Button>
            <IconButton onClick={() => setOpenLoginList(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ height: "80vh" }}>
            <DataGrid
              rows={filteredLogins}
              columns={loginColumns}
              pageSize={10}
              loading={loginsLoading}
              getRowId={(row) => row.id}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Content;
