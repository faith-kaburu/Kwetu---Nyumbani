import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setAuthenticated }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful signup
        console.log("SignUp Successful");
        // Redirect to login page
        navigate("/signin");
        setAuthenticated(true);
      } else {
        console.error("SignUp failed");
      }
    } catch (error) {
      console.error("Error occurred during sign up", error);
    }
  };

  return (
<div className="flex items-center justify-center h-screen bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg')`}}>
  <div className="flex flex-col items-center justify-center space-y-8 bg-white bg-opacity-80 p-8 rounded-lg">
    <h1 className="text-6xl font-bold text-center mb-4 text-blue-800">Welcome</h1>
    <img src="https://i.ytimg.com/vi/AzOFMIh0WK4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLClfS8fWpRhBvnaqfGcBFkR52j0qQ" alt="Image" className="w-48 h-48 rounded-full" />
    <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
    <form onSubmit={handleSignUp} className="max-w-xs">
      <label className="block mb-4">
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-blue-800 focus:border-blue-800" />
      </label>
      <label className="block mb-4">
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-blue-800 focus:border-blue-800" />
      </label>
      <button type="submit" className="bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900">Sign Up</button>
    </form>
  </div>
</div>
  ); 
};

export default SignUp;