import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Components/Home';
import Campus from './Components/Campus';
import NoPage from './Components/NoPage';
import Faculty from './Components/Faculty';
import GetInTouch from './Components/GetInTouch';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="campus" element={<Campus />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="getintouch" element={<GetInTouch />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
