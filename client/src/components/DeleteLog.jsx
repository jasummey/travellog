import React from 'react';
import axios from '../utils/api';

function DeleteLog({ id, onDelete }) {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this log?')) {
      axios
        .delete(`/api/logs/${id}`)
        .then(() => {
          onDelete(); // Invoke the parent component's callback to refresh the log view
        })
        .catch(error => {
          console.error('Error deleting log:', error);
        });
    }
  };

  return (
    <button onClick={handleDelete}>Delete Log</button>
  );
}

export default DeleteLog;
