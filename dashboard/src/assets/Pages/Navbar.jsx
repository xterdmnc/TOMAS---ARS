
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
              <div className="navbar-left">
        <img src="/SkyEase.png" alt="Logo" className="logo" />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/user" className="nav-link">Users</Link>
        </li>
        <li className="nav-item">
          <Link to="/staff" className="nav-link">Staff</Link>
        </li>
        <li className="nav-item">
          <Link to="/booking" className="nav-link">Flight Booking</Link>
        </li>
        <li className="nav-item">
          <Link to="/reserve" className="nav-link">Flight Reservation</Link>
        </li>
        <li className="nav-item">
          <Link to="/update" className="nav-link">Flight Update</Link>
        </li>
        <li className="nav-item">
          <Link to="/payment" className="nav-link">Payment Processing</Link>
        </li>
        <li className="nav-item">
          <Link to="/report" className="nav-link">Sales Report</Link>
        </li>
        <li className="nav-item">
          <Link to="/feedback" className="nav-link">Customer Feedback</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
