


import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const userIndex = sessionStorage.getItem("customerId");

    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://culture-2-default-rtdb.europe-west1.firebasedatabase.app/users/customers/${userIndex}.json`
        );
        const userData = response.data;
        if (userData) {
          setUser(userData);
          setName(userData.name);
          setEmail(userData.email);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchUserTickets = async () => {
      try {
        const response = await axios.get(
          `https://culture-2-default-rtdb.europe-west1.firebasedatabase.app/orders.json`
        );

        const ordersData = response.data;
        if (ordersData) {
          const orders = Object.keys(ordersData).map(orderId => {
            return { orderId, ...ordersData[orderId] };
          });
          // setOrder(Object.keys(ordersData));
          setOrder(orders);
              console.log(orders);
          // console.log(orders);
          const customSess=window.sessionStorage.getItem('customerId');
          // if (customSess) {
            // Filter orders based on customerId
            // const customerOrders = orders.filter(order => order.customer_id === customSess);
            if(customSess === order.customer_id){
            console.log(order); // Logs orders that match the customerId
            }
          // }
        //   if (customSess) {
        //   const customerOrders = order.filter(order => order.customerId === customSess);
        //   console.log(customerOrders)
        // }
      }
      
      } catch (error) {
        console.error("Error fetching user tickets:", error);
      }
    };

    if (userIndex) {
      fetchUserData();
      fetchUserTickets();
    }
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const userIndex = sessionStorage.getItem("customerId");

    try {
      const updatedUser = { name, email };
      await axios.put(
        `https://culture-2-default-rtdb.europe-west1.firebasedatabase.app/users/customers/${userIndex}.json`,
        updatedUser
      );
      setUser(updatedUser);
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div>
      <NavBar/>
    <div className="container mx-auto my-32">

      <div className="max-w-xl mx-auto">
        {user ? (
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-8">
            {isEditing ? (
              <form onSubmit={handleUpdate}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
                <p className="text-gray-600 mb-4">{user.email}</p>
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Edit Profile
                </button>
              </div>
            )}
          </div>
        ) : (
          <p className="text-gray-600 text-center">Loading...</p>
        )}
      </div>
      <div className="max-w-xl mx-auto ">
        <div className="bg-red1 p-8 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">My Orders</h2>
          {order.length > 0 ? (
            <ul>
              {order.map((ticket, index) => (
                <li key={index} className="mb-2">
                  <div className="p-4 bg-gray-100 rounded-md shadow-md">
                    <p className="text-lg font-semibold">{ticket.eventName}</p>
                    <p className="text-gray-600">Date: {ticket.eventDate}</p>
                    <p className="text-gray-600">Location: {ticket.city}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No tickets found.</p>
          )}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Profile;
