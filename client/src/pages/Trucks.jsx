// src/pages/Trucks.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Trucks.css";

const Trucks = () => {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    const fetchTrucks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/trucks");
        setTrucks(res.data);
      } catch (err) {
        console.error("Failed to fetch trucks", err);
      }
    };
    fetchTrucks();
  }, []);

  return (
    <div className="trucks-container">
      <h2>All Trucks</h2>
      <table className="trucks-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Truck Number</th>
            <th>Type</th>
            <th>Driver</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {trucks.map((truck, index) => (
            <tr key={truck._id}>
              <td>{index + 1}</td>
              <td>{truck.number}</td>
              <td>{truck.type}</td>
              <td>{truck.driver}</td>
              <td>
                <span className={`status ${truck.onTrip ? "active" : "available"}`}>
                  {truck.onTrip ? "On Trip" : "Available"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Trucks;
