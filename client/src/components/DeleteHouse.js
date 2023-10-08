import React, { useState } from "react";

function DeleteHouse() {
  const [houseId, setHouseId] = useState("");

  const handleDelete = (e) => {
    e.preventDefault();

    // Get token from local storage
    const token = localStorage.getItem("access_token");

    if (!token) {
      console.error("Token not found in local storage");
      alert("Authentication token not found");
      return;
    }

    fetch(`http://127.0.0.1:5000/houses/${houseId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then((response) => {
        if (response.ok) {
          console.log("House deleted successfully");
          alert("House deleted from the database");
        } else {
          console.error("Error deleting house");
          alert("Error deleting the house");
        }
      })
      .catch((error) => {
        console.error("Error deleting house:", error);
        alert("Error deleting the house");
      });
  };

  return (
    <div className="delete-house">
      <h2>Delete House</h2>
      <form onSubmit={handleDelete}>
        <label>House ID:</label>
        <input
          type="number"
          value={houseId}
          onChange={(e) => setHouseId(e.target.value)}
          required
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default DeleteHouse;
