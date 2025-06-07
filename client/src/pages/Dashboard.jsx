// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalTrucks: 0,
    activeTrips: 0,
    activeLoads: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/dashboard");
        setStats(res.data);
      } catch (err) {
        console.error("Error fetching dashboard stats", err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard Overview</h2>
      <div className="cards">
        <div className="card">
          <h3>Total Trucks</h3>
          <p>{stats.totalTrucks}</p>
        </div>
        <div className="card">
          <h3>Active Trips</h3>
          <p>{stats.activeTrips}</p>
        </div>
        <div className="card">
          <h3>Active Loads</h3>
          <p>{stats.activeLoads}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
