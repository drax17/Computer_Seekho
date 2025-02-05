import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainNavbar from './Components/Navbar/MainNavbar';
import MarqueeHeader from './Components/Header/MarqueeHeader';
import Home from './Components/Home/Home';
import BatchwisePlacement from './Components/Placement/BatchwisePlacement';
import OurRecruiters from './Components/Placement/OurRecruiters';
import Courses from './Components/Courses/Courses';
import CampusLife from './Components/CampusLife/CampusLife';
import Faculty from './Components/Faculty/Faculty';
import GetInTouch from './Components/GetInTouch/GetInTouch';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="fixed-header">
        <MarqueeHeader />
        <MainNavbar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/batchwiseplacement" element={<BatchwisePlacement />} />
          <Route path="/ourrecruiters" element={<OurRecruiters />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/campuslife" element={<CampusLife />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/getintouch" element={<GetInTouch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;