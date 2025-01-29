import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';
import './index.css';
import './App.css';

// Import your components



function App() {
  return (
    <div>
      <nav>
        <ul>
          <li> <Link to="home">Home</Link> </li>
          <li> <Link to="getintouch">GetInTouch</Link> </li>
          <li> <Link to="campus">Campus</Link> </li>
          <li> <Link to="placement">placement</Link> </li>
          <li> <Link to="faculty">faculty</Link> </li>
          <li> <Link to="PlacementCard">PlacementCard</Link> </li>
          <li> <Link to="BatchwisePlacement">BatchwisePlacement</Link> </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;


