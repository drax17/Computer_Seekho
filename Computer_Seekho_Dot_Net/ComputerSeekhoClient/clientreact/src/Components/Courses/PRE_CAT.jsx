import React, { useEffect, useState } from 'react';
import { FaBook, FaChalkboardTeacher, FaAward, FaGraduationCap, FaClipboardList, FaClock, FaCog, FaLaptop, FaTools } from 'react-icons/fa';
import './PRE_CAT.css'; // Ensure you have a separate CSS file for styles

function PRE_CAT() {
  const modules = [
    { icon: <FaBook />, title: 'C-CAT Preparation' },
    { icon: <FaChalkboardTeacher />, title: 'Workshop Sessions' },
    { icon: <FaAward />, title: 'Building Strong Foundation' },
    { icon: <FaGraduationCap />, title: 'Post Graduate Courses Readiness' },
    { icon: <FaClipboardList />, title: 'Section A+B Preparation' },
    { icon: <FaClock />, title: 'Time Management for C-CAT' },
    { icon: <FaCog />, title: 'Focused Skill Development' },
    { icon: <FaLaptop />, title: 'Practical Application of Concepts' },
    { icon: <FaTools />, title: 'Test-Taking Strategies' },
  ];

  const [visibleModules, setVisibleModules] = useState([]);
  const [heading, setHeading] = useState('Pre C-CAT Workshop Modules');

  useEffect(() => {
    setVisibleModules(modules);  // Show modules immediately after component mounts
    
    setTimeout(() => {
      setHeading('Prepare for C-DAC’s Post Graduate Courses with Pre C-CAT!');
    }, 1500);
  }, []);

  return (
    <div className="modal-container">
      <div className="content-container">
        <div className="modal-box">
          <div className="modal-header">
            <h2 className="modal-title">
              Pre C-CAT - Prepare for C-DAC's Common Admission Test
            </h2>
          </div>

          <div className="modal-body">
            <p className="intro-text">
              <strong>Pre C-CAT</strong> is a workshop offered by SMVITA to help candidates prepare for the C-DAC Common Admission Test (C-CAT). This workshop covers both Section A and Section B of the exam and also helps build a strong foundation for C-DAC's Post Graduate Courses.
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

export default PRE_CAT;