import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h2 className="logo">Fleet Dashboard</h2>
      <ul className="nav-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Dashboard</Link>
        </li>
        <li className={location.pathname === '/trucks' ? 'active' : ''}>
          <Link to="/trucks">Trucks</Link>
        </li>
        <li className={location.pathname === '/trips' ? 'active' : ''}>
          <Link to="/trips">Trips</Link>
        </li>
        <li className={location.pathname === '/TripDetail' ? 'active' : ''}>
          <Link to="/tripdetails/:id">Trip Details</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
