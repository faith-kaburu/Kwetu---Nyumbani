import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const backgroundColorUrl = "https://images.pexels.com/photos/15849301/pexels-photo-15849301/free-photo-of-dark-blue-background.jpeg";

function HouseDetails() {
  const { id } = useParams();
  const [house, setHouse] = useState(null);
  const [agent, setAgent] = useState(null);

  useEffect(() => {
    // Fetch house details based on ID from the API endpoint
    fetch(`http://127.0.0.1:5000/houses/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setHouse(data);
        // Fetch agent details based on agent_id from the house data
        fetch(`http://127.0.0.1:5000/agents/${data.agent_id}`)
          .then((response) => response.json())
          .then((agentData) => {
            setAgent(agentData);
          })
          .catch((error) => {
            console.error("Error fetching agent details:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching house details:", error);
      });
  }, [id]); // Add id as a dependency here

  if (!house || !agent) {
    return <div>Loading...</div>;
  }

  const containerStyle = {
    background: `url(${backgroundColorUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="text-white min-h-screen" style={containerStyle}>
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 p-4">
            {/* Display house details */}
            <h2 className="text-3xl font-semibold mb-4">{house.title}</h2>
            <p className="text-xl">Price: ${house.price}</p>
            {/* Display other house details as needed */}
            <p className="text-lg">Size: {house.size} sqft</p>
            <p className="text-lg">County: {house.county}</p>
            <p className="text-lg">Description: {house.description}</p>
            <p className="text-lg">Area: {house.city}</p>
            <p className="text-lg">Bedroom: {house.bedrooms}</p>
            <p className="text-lg">Bathrooms: {house.bathrooms}</p>
          </div>
          <div className="lg:w-1/3 p-4">
            {/* Display agent details */}
            <h2 className="text-2xl font-semibold mb-4">Agent Details</h2>
            <p className="text-lg">Name: {agent.name}</p>
            <p className="text-lg">Email: {agent.email}</p>
            <p className="text-lg">Phone: {agent.phone}</p>
          </div>
        </div>
        <div className="lg:w-2/3 mx-auto">
          <img src={house.image_paths} alt={house.title} className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default HouseDetails;