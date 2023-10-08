import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SignUp from "./SignUp";

const SignIn = ({ setAuthenticated, setUserRole }) => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("access_token")}`
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    localStorage.setItem("access_token", data.access_token);
                    localStorage.setItem("role", data.role);
                    localStorage.setItem("id", data.id);

                    document.cookie = `access_token=${data.access_token}; path=/`;
                    console.log("Received token:", data.access_token);
                    console.log("Cookies:", document.cookie);

                    // setUserRole(data.role);
                    // setAuthenticated(true);

                    if (data.role === 'user') {
                        navigate(`/users/${data.id}`);
                    } else if (data.role === 'agent') {
                        navigate(`/agents/${data.id}`);
                    } else {
                        console.error("Invalid role");
                    }
                } else {
                    console.error("Invalid credentials");
                }
            } else {
                console.error("Authentication failed");
            }
        } catch (error) {
            console.error("Error occurred during sign in", error);
        }
    };
 
    return (
        <div>
        <div className="flex items-center justify-center h-screen bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg')`}}>
          <div className="flex flex-col items-center justify-center space-y-8 bg-white bg-opacity-80 p-8 rounded-lg">
            <h1 className="text-6xl font-bold text-center mb-4 text-blue-800">REAL ESTATE KE</h1>
            <img src="https://i.ytimg.com/vi/AzOFMIh0WK4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLClfS8fWpRhBvnaqfGcBFkR52j0qQ" alt="Image" className="w-48 h-48 rounded-full" />
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            <form onSubmit={handleSignIn} className="max-w-xs">
              <label className="block mb-4">
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-blue-800 focus:border-blue-800" />
              </label>
              <label className="block mb-4">
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-blue-800 focus:border-blue-800" />
              </label>
              <button type="submit" className="bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900">Sign In</button>
            </form>
            <p className="text-gray-500 mt-4">Don't have an account? <a href="/signup" className="text-blue-800">Sign Up</a></p>
          </div>
        </div>
      </div>
  
    );
};

export default SignIn;