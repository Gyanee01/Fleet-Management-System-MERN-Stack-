// src/pages/Trips.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Trips.css";
import { Link } from 'react-router-dom';

const Trips = () => {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/trips");
        setTrips(res.data);
      } catch (err) {
        console.error("Failed to fetch trips", err);
      }
    };
    fetchTrips();
  }, []);

  return (
    <div className="trips-container">
      <h2>All Trips</h2>
      <table className="trips-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Truck Number</th>
            <th>Start Location</th>
            <th>End Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip, index) => (
            <tr
              key={trip._id}
              onClick={() => navigate(`/trips/${trip._id}`)}
              className="clickable-row"
            >
              <td>{index + 1}</td>
              <td>{trip.truck?.number || "N/A"}</td>
              <td>{trip.startLocation}</td>
              <td>{trip.endLocation}</td>
              <td>
                <span
                  className={`status ${
                    trip.completed ? "completed" : "ongoing"
                  }`}
                >
                  {trip.completed ? "Completed" : "Ongoing"}
                </span>
              </td>
              <td>
                <Link to={`/trips/${trip._id}`}>
                  <button className="view-button">View</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Trips;
