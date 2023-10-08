import React, { useState } from "react";

const backgroundImageUrl = "https://images.pexels.com/photos/15849301/pexels-photo-15849301/free-photo-of-dark-blue-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

function CreateHouse() {
    const [houseData, setHouseData] = useState({
        title: "",
        size: 0,
        price: 0,
        description: "",
        city: "",
        county: "",
        bedrooms: 0,
        bathrooms: 0,
        image_paths: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "image_paths") {
            setHouseData({ ...houseData, [name]: [value, ...houseData.image_paths] });
        } else {
            setHouseData({ ...houseData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://127.0.0.1:5000/houses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(houseData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("House added successfully:", data);
                alert("House added to the database");
            })
            .catch((error) => {
                console.error("Error adding house:", error);
            });
    };

    const containerStyle = {
        background: `url(${backgroundImageUrl}) no-repeat center center fixed`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    return (
        <div style={containerStyle}>
            <div className="bg-opacity-90 bg-white p-4 text-black">
                <h2 className="text-2xl font-semibold mb-4">Create a New House Listing</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block text-black font-bold">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={houseData.title}
                        onChange={handleInputChange}
                        className="w-full border rounded-md py-2 px-3 text-white bg-gray-900 focus:outline-none focus:border-blue-500"
                        required
                    />
                    <label className="block text-black font-bold">Bathrooms:</label>
                    <input
                        type="number"
                        name="bathrooms"
                        value={houseData.bathrooms}
                        onChange={handleInputChange}
                        className="w-full border rounded-md py-2 px-3 text-white bg-gray-900 focus:outline-none focus:border-blue-500"
                        required
                    />
                    <label className="block text-black font-bold">Bedrooms:</label>
                    <input
                        type="number"
                        name="bedrooms"
                        value={houseData.bedrooms}
                        onChange={handleInputChange}
                        className="w-full border rounded-md py-2 px-3 text-white bg-gray-900 focus:outline-none focus:border-blue-500"
                        required
                    />
                    <label className="block text-black font-bold">Area:</label>
                    <input
                        type="text"
                        name="city"
                        value={houseData.city}
                        onChange={handleInputChange}
                        className="w-full border rounded-md py-2 px-3 text-white bg-gray-900 focus:outline-none focus:border-blue-500"
                        required
                    />
                    <label className="block text-black font-bold">County:</label>
                    <input
                        type="text"
                        name="county"
                        value={houseData.county}
                        onChange={handleInputChange}
                        className="w-full border rounded-md py-2 px-3 text-white bg-gray-900 focus:outline-none focus:border-blue-500"
                        required
                    />
                    <label className="block text-black font-bold">Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={houseData.price}
                        onChange={handleInputChange}
                        className="w-full border rounded-md py-2 px-3 text-white bg-gray-900 focus:outline-none focus:border-blue-500"
                        required
                    />
                    <label className="block text-black font-bold">Size(sqfeet):</label>
                    <input
                        type="number"
                        name="size"
                        value={houseData.size}
                        onChange={handleInputChange}
                        className="w-full border rounded-md py-2 px-3 text-white bg-gray-900 focus:outline-none focus:border-blue-500"
                        required
                    />
                    <label className="block text-black font-bold">Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={houseData.description}
                        onChange={handleInputChange}
                        className="w-full border rounded-md py-2 px-3 text-white bg-gray-900 focus:outline-none focus:border-blue-500"
                        required
                    />
                    <label className="block text-black font-bold">Images:</label>
                    <input
                        type="text"
                        name="image_paths"
                        value={houseData.image_paths[0]}
                        onChange={handleInputChange}
                        className="w-full border rounded-md py-2 px-3 text-white bg-gray-900 focus:outline-none focus:border-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-900"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateHouse;

/*import React, { useState } from "react";

function CreateHouse() {
    const [houseData, setHouseData] = useState({
        title: "",
        size: 0,
        price: 0,
        description: "",
        city: "",
        county: "",
        bedrooms: 0,
        bathrooms: 0,
        image_paths: "",
        agent_id: 0
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setHouseData({ ...houseData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const token = localStorage.getItem('access_token');

        if (!token) {
            console.error("Token not found in local storage");
            return;
        }

        fetch("http://127.0.0.1:5000/houses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(houseData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("House added successfully:", data);
                alert("House added to database");
            })
            .catch((error) => {
                console.error("Error adding house:", error);
            });
    };

    return (
        <div className="create-house">
            <h2>Create a New House Listing</h2>
            <form onSubmit={handleSubmit}>
                {/* Your input fields *//*}
                <label>Title:</label><br />
        <input
        type="text"
        name="title"
        value={houseData.title}
        onChange={handleInputChange}
        required
        /><br />
        <label>Bathrooms:</label><br />
        <input
        type="number"
        name="bathrooms"
        value={houseData.bathrooms}
        onChange={handleInputChange}
        required
        /><br />
        <label>Bedrooms:</label><br />
        <input
        type="number"
        name="bedrooms"
        value={houseData.bedrooms}
        onChange={handleInputChange}
        required
        /><br />
        <label>Area:</label><br />
        <input
        type="text"
        name="city"
        value={houseData.city}
        onChange={handleInputChange}
        required
        /><br />
        <label>County:</label><br />
        <input
        type="text"
        name="county"
        value={houseData.county}
        onChange={handleInputChange}
        required
        /><br />
        <label>Price:</label><br />
        <input
        type="number"
        name="price"
        value={houseData.price}
        onChange={handleInputChange}
        required
        /><br />
        <label>Size(sqfeet):</label><br />
        <input
        type="number"
        name="size"
        value={houseData.size}
        onChange={handleInputChange}
        required
        /><br />
        <label>Description:</label><br />
        <input
        type="text"
        name="description"
        value={houseData.description}
        onChange={handleInputChange}
        required
        /><br />
        <label>Images:</label><br />
        <input
        type="text"
        name="image_paths"
        value={houseData.image_paths}
        onChange={handleInputChange}
        required
        /><br />
        <label>Agent ID:</label><br />
        <input
            type="number"
            name="agent_id"
            value={houseData.agent_id}
            onChange={handleInputChange}
            required
        /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreateHouse;*/
