import React, { useEffect, useState } from 'react';
import { FaBook, FaChalkboardTeacher, FaAward, FaGraduationCap, FaClipboardList, FaClock, FaCog, FaLaptop, FaTools } from 'react-icons/fa';
import './PG_DBDA.css'; // Ensure you have a separate CSS file for styles

function PG_DBDA() {
  const modules = [
    { icon: <FaBook />, title: 'PGDBA Program Overview' },
    { icon: <FaChalkboardTeacher />, title: 'Workshop Sessions' },
    { icon: <FaAward />, title: 'Building Data Analytics Skills' },
    { icon: <FaGraduationCap />, title: 'Advanced Data Science Concepts' },
    { icon: <FaClipboardList />, title: 'Section A+B Preparation' },
    { icon: <FaClock />, title: 'Time Management for Data Analytics' },
    { icon: <FaCog />, title: 'Focused Skill Development' },
    { icon: <FaLaptop />, title: 'Practical Application of Analytics' },
    { icon: <FaTools />, title: 'Test-Taking Strategies' },
  ];

  const [visibleModules, setVisibleModules] = useState([]);
  const [heading, setHeading] = useState('PGDBA Program Modules');

  useEffect(() => {
    setVisibleModules(modules);  // Show modules immediately after component mounts
    
    setTimeout(() => {
      setHeading('Prepare for C-DAC’s Post Graduate Diploma in Big Data Analytics!');
    }, 1500);
  }, []);

  return (
    <div className="modal-container">
      <div className="content-container">
        <div className="modal-box">
          <div className="modal-header">
            <h2 className="modal-title">
              PGDBA - Prepare for C-DAC's Post Graduate Diploma in Big Data Analytics
            </h2>
          </div>

          <div className="modal-body">
            <p className="intro-text">
              <strong>PGDBA</strong> is a program offered by C-DAC to help candidates build skills in Big Data Analytics. The program includes comprehensive coverage of core data science topics, hands-on analytics, and test preparation.
            </p>
            <h4 className="subheading">
              {heading}
            </h4>
            <ul className="module-list">
              {visibleModules.map((module, index) => (
                <li key={index} className="module-card">
                  <span className="module-icon">
                    {module.icon}
                  </span>
                  <h5 className="module-title">
                    {module.title}
                  </h5>
                </li>
              ))}
            </ul>
            <p className="footer-text">
              Visit <a href="https://www.cdac.in" target="_blank" rel="noopener noreferrer" className="footer-link">www.cdac.in</a> for details on C-DAC’s PG Courses.
            </p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default PG_DBDA;