import React, { useEffect, useState } from 'react';
import { FaBook, FaChalkboardTeacher, FaAward, FaGraduationCap, FaClipboardList, FaClock, FaCog, FaLaptop, FaTools } from 'react-icons/fa';
import './PG_DAC.css'; // Ensure you have a separate CSS file for styles

function PG_DAC() {
  const modules = [
    { icon: <FaBook />, title: 'PG-DAC Preparation' },
    { icon: <FaChalkboardTeacher />, title: 'Workshop Sessions' },
    { icon: <FaAward />, title: 'Building Strong Foundation' },
    { icon: <FaGraduationCap />, title: 'Post Graduate Courses Readiness' },
    { icon: <FaClipboardList />, title: 'Section A+B Preparation' },
    { icon: <FaClock />, title: 'Time Management for PG-DAC' },
    { icon: <FaCog />, title: 'Focused Skill Development' },
    { icon: <FaLaptop />, title: 'Practical Application of Concepts' },
    { icon: <FaTools />, title: 'Test-Taking Strategies' },
  ];

  const [visibleModules, setVisibleModules] = useState([]);
  const [heading, setHeading] = useState('PG-DAC Workshop Modules');

  useEffect(() => {
    setVisibleModules(modules);  // Show modules immediately after component mounts
    
    setTimeout(() => {
      setHeading('Prepare for C-DAC’s PG-DAC with Pre-Workshop Modules!');
    }, 1500);
  }, []);

  return (
    <div className="modal-container">
      <div className="content-container">
        <div className="modal-box">
          <div className="modal-header">
            <h2 className="modal-title">
              Pre PG-DAC - Prepare for C-DAC's Post Graduate Advanced Computing
            </h2>
          </div>

          <div className="modal-body">
            <p className="intro-text">
              <strong>Pre PG-DAC</strong> is a workshop offered by SMVITA to help candidates prepare for the C-DAC PG-DAC exam. This workshop covers both Section A and Section B of the exam and also helps build a strong foundation for C-DAC's Post Graduate Advanced Computing Courses.
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
              Visit <a href="https://www.cdac.in" target="_blank" rel="noopener noreferrer" className="footer-link">www.cdac.in</a> for details on C-DAC’s PG-DAC Courses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PG_DAC;