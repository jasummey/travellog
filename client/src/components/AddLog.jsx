import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../utils/api';

function AddLog() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('/api/add-log', formData)
      .then(() => {
        // Redirect to the list of logs after adding
        // You should replace '/logs' with the actual path to your list of logs page
        window.location.href = '/logs'; // Use window.location.href to navigate
      })
      .catch(error => {
        console.error("Error adding log:", error);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-success">Add a New Log</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location:</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-success">Save</button>
          <Link to="/logs" className="btn btn-secondary ms-2">Go to Logs</Link>
        </div>
      </form>
    </div>
  );
}

export default AddLog;
