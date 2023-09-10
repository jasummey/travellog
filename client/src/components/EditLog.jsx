import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from '../utils/api';

function EditLog() {
  const { id } = useParams();
  const [log, setLog] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
  });

  useEffect(() => {
    // Fetch the individual travel log by ID from your backend when the component mounts
    axios
      .get(`/api/logs/${id}`)
      .then(response => setLog(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleChange = event => {
    const { name, value } = event.target;
    setLog({ ...log, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .put(`/api/logs/${id}`, log) // Send a PUT request to update the log
      .then(() => {
        // Redirect to the view log page after editing
        // You should replace `/logs/${id}` with the actual path to your view log page
        window.location.href = `/logs/${id}`; // Use window.location.href to navigate
      })
      .catch(error => {
        console.error('Error editing log:', error);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Edit Log</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={log.title}
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
            value={log.description}
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
            value={log.location}
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
            value={log.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">Save</button>
          <Link to={`/logs/${id}`} className="btn btn-secondary ml-2">Cancel</Link>
        </div>
      </form>
    </div>
  );
}

export default EditLog;
