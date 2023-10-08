import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


function UserDashboard() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetch(`http://127.0.0.1:5000/users/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, [id]);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    navigate("/signin"); // Redirect to the sign-in page after logout
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-dashboard">
      <div className="navigation-links">
        <Link to="/home">Home</Link>
        <Link to={`/users/${id}`}>User Dashboard</Link>
        <button onClick={handleLogout}>Logout</button> 
      </div>
      <h2>User Details</h2>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDashboard;
