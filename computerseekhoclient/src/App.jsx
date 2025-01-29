import './App.css';
import Home from './Components/Home/Home';
import Faculty from './Components/Faculty/Faculty';
import GetInTouch from './Components/GetInTouch/GetInTouch';
import MainNavbar from './Components/Navbar/MainNavbar'; // Import the Navbar component
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MarqueeHeader from './Components/Header/MarqueeHeader';
import CampusLife from './Components/CampusLife/CampusLife';

function App() {
  return (
    <BrowserRouter>
      <MarqueeHeader/>
      <MainNavbar /> {/* Render the Navbar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="campuslife" element={<CampusLife />} />
        <Route path="faculty" element={<Faculty />} />
        <Route path="getintouch" element={<GetInTouch />} />
        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;