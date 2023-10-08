import React, { useState } from "react";
import { useParams } from "react-router-dom";

function UpdateHouse() {
  const { id } = useParams();
  const [houseId, setHouseId] = useState(id);
  const [fieldToUpdate, setFieldToUpdate] = useState("");
  const [newValue, setNewValue] = useState("");

  const handleUpdateField = (e) => {
    e.preventDefault();

    const updatedField = {
      [fieldToUpdate]: newValue,
    };

    // Get the token from localStorage
    const token = localStorage.getItem("access_token");

    fetch(`http://127.0.0.1:5000/houses/${houseId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedField),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Field updated successfully:", data);
        alert("Field updated in the database");
      })
      .catch((error) => {
        console.error("Error updating field:", error);
      });
  };

  return (
    <div className="update-house">
      <h2>Update House Details</h2>
      <form onSubmit={handleUpdateField}>
        <label>House ID:</label>
        <input
          type="number"
          name="houseId"
          value={houseId}
          onChange={(e) => setHouseId(e.target.value)}
          required
        />
        <label>Field to Update:</label>
        <input
          type="text"
          name="fieldToUpdate"
          value={fieldToUpdate}
          onChange={(e) => setFieldToUpdate(e.target.value)}
          required
        />
        <label>New Value:</label>
        <input
          type="text"
          name="newValue"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          required
        />
        <button type="submit">Update Field</button>
      </form>
    </div>
  );
}

export default UpdateHouse;
