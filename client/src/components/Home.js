import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const backgroundImageUrl = "https://images.pexels.com/photos/15849301/pexels-photo-15849301/free-photo-of-dark-blue-background.jpeg";

function Home() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    // Fetch houses data from API endpoint
    fetch("http://127.0.0.1:5000/houses") // Update the API endpoint URL
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setHouses(data);
        } else {
          throw new Error("Invalid data format");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const containerStyle = {
    background: `url(${backgroundImageUrl}) no-repeat center center fixed`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };

  return (
    <div style={containerStyle} className="text-white min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">House Listings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {houses.map((house) => (
            <Link key={house.id} to={`/house/${house.id}`} className="bg-gray-900 text-white p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">{house.title}</h2>
              <p>Price: ${house.price}</p>
              <p>Size: {house.size} sqft</p>
              <p>County: {house.county}</p>
              <img src={house.image_paths} alt={house.title} className="mt-2 w-full rounded-lg" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
