// src/Components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/auth"; // This will clear the local storage and refresh the page, redirecting to /auth
  };

  return (
    <nav className="navbar">
      <Link to="/">Homepage</Link>
      {role !== 'ADMIN' && <Link to="/biodata">Biodata</Link>}
      {role !== 'USER' && <Link to="/admin-dashboard">Admin Dashboard</Link>}
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
