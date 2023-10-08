import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import HouseDetails from "./components/HouseDetails";
import CreateHouse from "./components/CreateHouse";
import UpdateHouse from "./components/UpdateHouse";
import DeleteHouse from "./components/DeleteHouse";
import UserDashboard from "./components/UserDashboard";
import AgentDashboard from "./components/AgentDashboard";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

// function App() {
//   const [authenticated, setAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Check authentication status
//     const token = localStorage.getItem("token");
//     const role = localStorage.getItem("role");

//     if (token) {
//       setAuthenticated(true);

//     } else {
//       setAuthenticated(false);
//     }
//   }, []);


// useEffect(() => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     // Validate token on the server-side here if necessary
//     setAuthenticated(true);
//   }
//   setLoading(false);
// }, []);

// if (loading) {
//   return <div>Loading...</div>;
// }

// const handleLogout = async () => {
//   try {
//       const response = await fetch("http://127.0.0.1:5000/logout", {
//           method: "POST",
//           credentials: "include",  // Include credentials (cookies) in the request
//       });

//       if (response.ok) {
//           // Clear the local state or perform any other logout actions
//           setAuthenticated(false);
//       } else {
//           console.error("Logout failed");
//       }
//   } catch (error) {
//       console.error("Error occurred during logout", error);
//   }
// };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/house/:id" element={<HouseDetails />} />
//         <Route path="/create" element={authenticated ? <CreateHouse /> : <Navigate to="/signin" />} />
//         <Route path="/update" element={authenticated ? <UpdateHouse /> : <Navigate to="/signin" />} />
//         <Route path="/delete" element={authenticated ? <DeleteHouse /> : <Navigate to="/signin" />} />
//         <Route path="/users/:id" element={authenticated ? <UserDashboard /> : <Navigate to="/signin" />} />
//         <Route path="/agents/:id" element={authenticated ? <AgentDashboard /> : <Navigate to="/signin" />} />
//         <Route path="/signin" element={<SignIn setAuthenticated={setAuthenticated} />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/logout" element={<Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// ... (import statements remain the same)

// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import SignIn from "./SignIn";
// import UserDashboard from "./UserDashboard";




// function App() {
//   const [authenticated, setAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [userId, setUserId] = useState(null);
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const storedUserId = localStorage.getItem("id");
//     const storedUserRole = localStorage.getItem("role");

//     if (token && storedUserId && storedUserRole) {
//       setAuthenticated(true);
//       setUserId(storedUserId);
//       setUserRole(storedUserRole);
//     }

//     setLoading(false);
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Router>
//       <Routes>
//         <Route path="/signin" element={!authenticated ? <SignIn setAuthenticated={setAuthenticated} setUserRole={setUserRole} setUserId={setUserId} /> : <Navigate to="/" />} />
//         <Route
//           path="/signup"
//           element={!authenticated ? <SignUp setAuthenticated={setAuthenticated} setUserRole={setUserRole} setUserId={setUserId} /> : <Navigate to="/" />}
//         />
//         {authenticated && (
//           <>
//             {userRole === "user" && (
//               <>
//                 <Route path="/users/:id" element={<UserDashboard />} />
//                 <Route path="/home" element={<Home />} />
//               </>
//             )}
//             {userRole === "agent" && (
//               <>
//                 <Route path="/agents/:id" element={<AgentDashboard />} />
//                 <Route path="/updatehouse" element={<UpdateHouse />} />
//                 <Route path="/deletehouse" element={<DeleteHouse />} />
//                 <Route path="/createhouse" element={<CreateHouse />} />
//                 <Route path="/home" element={<Home />} />
//               </>
//             )}
//           </>
//         )}
//         <Route path="*" element={<Navigate to="/signin" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;






// function App() {
//   const [authenticated, setAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("access_token");
//     if (token) {
//       setAuthenticated(true);
//     }
//     setLoading(false);
//   }, []);

//   const navigate = useNavigate();

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//       <Routes>
//         <Route path="/" element={authenticated ? <Home /> : <Navigate to="/signin" />} />
//         <Route path="/house/:id" element={<HouseDetails />} />
//         <Route path="/create" element={authenticated ? <CreateHouse /> : <Navigate to="/signin" />} />
//         <Route path="/update" element={authenticated ? <UpdateHouse /> : <Navigate to="/signin" />} />
//         <Route path="/delete" element={authenticated ? <DeleteHouse /> : <Navigate to="/signin" />} />
//         <Route path="/users/:id" element={authenticated ? <UserDashboard /> : <Navigate to="/signin" />} />
//         <Route path="/agents/:id" element={authenticated ? <AgentDashboard /> : <Navigate to="/signin" />} />
//         <Route path="/signin" element={!authenticated ? <SignIn setAuthenticated={setAuthenticated} setUserRole={setUserRole}/> : <Navigate to="/" />} />
//         <Route path="/signup" element={!authenticated ? <SignUp setAuthenticated={setAuthenticated} /> : <Navigate to="/" />} />
//         <Route path="/logout" element={<Navigate to="/signin" />} />
//       </Routes>
//   );
// }

// export default App;



function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/createhouse" element={<CreateHouse />} />
      <Route path="/updatehouse" element={<UpdateHouse />} />
      <Route path="/deletehouse" element={<DeleteHouse />} />
      <Route path="/home" element={<Home />} />
      <Route path="/house/:id" element={<HouseDetails />} />
      <Route path="/users/:id" element={<UserDashboard />} />
      <Route path="/agents/:id" element={<AgentDashboard />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/logout" element={<Navigate to="/signin" />} />
    </Routes>
  );
}

export default App;
