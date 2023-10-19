import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../utils/api';

function LogList() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    
    axios
      .get('http://localhost:5000/api/logs')
      .then(response => setLogs(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mt-4">
      <div style={{ backgroundColor: '#4CAF50', padding: '20px', borderRadius: '10px' }}>
        <h2 className="mb-4 text-white">Travel Logs</h2>
        <ul className="list-group">
          {logs.map(log => (
            <li key={log._id} className="list-group-item">
              <Link to={`/logs/${log._id}`} className="text-success">{log.title}</Link>
            </li>
          ))}
        </ul>
        <Link to="/add-log" className="btn btn-primary mt-3">
          Add a New Log
        </Link>
      </div>
    </div>
  );
}

export default LogList;
