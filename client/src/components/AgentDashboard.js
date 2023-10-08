import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function AgentDashboard() {
  const { id } = useParams();
  const [agent, setAgent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/agents/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAgent(data);
      })
      .catch((error) => {
        console.error("Error fetching agent details:", error);
      });
  }, [id]);

  const handleLogout = () => {
    // clears storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    navigate("/signin");
  };

  if (!agent) {
    return <div>Loading...</div>;
  }

  const backgroundImageUrl = "https://images.pexels.com/photos/453201/pexels-photo-453201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const containerStyle = {
    background: `url(${backgroundImageUrl}) no-repeat center center fixed`,
    backgroundSize: "cover",
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={containerStyle}>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <Link to="/home" className="text-blue-600 hover:underline">
            &larr; Back to Home
          </Link>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Agent Details</h2>
        <p className="text-gray-700">Name: {agent.name}</p>
        <p className="text-gray-700">Email: {agent.email}</p>
        <p className="text-gray-700">Phone Number: {agent.phonebook}</p>

        {/* Links to other pages */}
        <div className="mt-4">
          <Link
            to="/createhouse"
            className="bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700 mr-2"
          >
            Create House
          </Link>
          <Link
            to="/updatehouse"
            className="bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:bg-green-700 mr-2"
          >
            Update House
          </Link>
          <Link
            to="/deletehouse"
            className="bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
          >
            Delete House
          </Link>
        </div>
        <button
          onClick={handleLogout}
          className="bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700 mt-4"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default AgentDashboard;
