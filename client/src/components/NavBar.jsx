import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#4CAF50' }}>
      <Link className="navbar-brand text-white" to="/">Wander Log</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/logs">View Logs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/add-log">Add Log</Link>
          </li>
             {/* <li className="nav-item">
            <Link className="nav-link text-white" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/register">Register</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
