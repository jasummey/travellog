import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from '../utils/api';
import DeleteLog from './DeleteLog'; 

function ViewLog() {
  const { id } = useParams();
  const [log, setLog] = useState(null);

  useEffect(() => {
    
    axios
      .get(`/api/logs/${id}`)
      .then(response => setLog(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleLogDelete = () => {
    
    window.location.href = '/logs';
  };

  if (!log) {
    return <div className="container mt-4">Loading...</div>;
  }

  return (
    <div className="container mt-4" style={{ backgroundColor: '#4CAF50', padding: '20px', borderRadius: '10px' }}>
      <h2 className="text-white">{log.title}</h2>
      <p className="text-white">Date: {log.date}</p>
      <p className="text-white">Location: {log.location}</p>
      <p className="text-white">Description: {log.description}</p>

    
      <Link to={`/logs/${id}/edit`} className="btn btn-primary mr-2">Edit Log</Link>

      
      <button className="btn btn-danger mr-2" onClick={handleLogDelete}>
        Delete Log
      </button>

      
      <div className="mt-2">
      
        <Link to="/logs" className="btn btn-secondary">Back to Logs</Link>
      </div>
    </div>
  );
}

export default ViewLog;
