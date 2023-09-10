import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/outdoorphoto.jpg'; 

// Define a CSS class for the background image with brightness filter
const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh', // Ensure the background covers the entire viewport height
  filter: 'brightness(70%)', // Adjust the brightness percentage as needed
  display: 'flex',  // Center the content horizontally and vertically
  alignItems: 'center',  // Center vertically
  justifyContent: 'center',  // Center horizontally
  flexDirection: 'column',  // Stack the elements vertically
};

// Define a CSS class for the white text color
const whiteText = {
  color: 'white',
};

function Home() {
  return (
    <div style={backgroundStyle} className="container-fluid p-0">
      <div className="container text-center">
        <h1 style={whiteText}>Welcome to Wander Log</h1>
        <p style={whiteText}>
          Explore and log your adventures with Wander Log. Create, view, and manage your travel logs.
        </p>
        <p>
          Get started by{' '}
          <Link to="/logs" className="btn btn-primary me-2">
            View Your Travel Logs
          </Link>
          or{' '}
          <Link to="/add-log" className="btn btn-success">
            Add a New Log
          </Link>
          
        </p>
      </div>
    </div>
  );
}

export default Home;
