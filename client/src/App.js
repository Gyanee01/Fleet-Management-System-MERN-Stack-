import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Trucks from './pages/Trucks';
import Trips from './pages/Trips';
import TripDetail from "./pages/TripDetails";
// import TripDetail from "./pages/TripDetail";


import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/trucks" element={<Trucks />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/tripdetails" element={<TripDetail />} />
            <Route path="/trips" element={<TripDetail />} />
            <Route path="/tripdetails/:id" element={<TripDetail />} />


          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
