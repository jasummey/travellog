import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/NavBar'; // Import the Navbar component
import Home from './components/Home';
import LogList from './components/LogList';
import AddLog from './components/AddLog';
import ViewLog from './components/ViewLog';
import EditLog from './components/EditLog';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Include the Navbar */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<LogList />} />
          <Route path="/add-log" element={<AddLog />} />
          <Route path="/logs/:id" element={<ViewLog />} />
          <Route path="/logs/:id/edit" element={<EditLog />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
