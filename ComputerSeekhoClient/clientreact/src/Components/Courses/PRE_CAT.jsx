import React from 'react';
import { useEffect, useState } from 'react';
import { FaBook, FaChalkboardTeacher, FaAward, FaGraduationCap, FaClipboardList, FaClock, FaCog, FaLaptop, FaTools } from 'react-icons/fa';

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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#ffffff', padding: '10px', overflowY: 'scroll', height: '100vh', width: '100vw', boxSizing: 'border-box' }}>
      <div style={{ width: '90%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', boxSizing: 'border-box', overflowY: 'auto', maxHeight: '100vh' }}>
        <div style={{ maxWidth: '90%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.12)', backgroundColor: '#ffffff', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '90vh', overflowY: 'auto' }}>
          <div style={{ backgroundColor: '#003366', color: 'white', textAlign: 'center', justifyContent: 'center', padding: '15px', width: '100%', borderRadius: '12px 12px 0 0' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', letterSpacing: '1.5px', fontFamily: 'Poppins, sans-serif', textTransform: 'uppercase', width: '100%' }}>
              Pre C-CAT - Prepare for C-DAC's Common Admission Test
            </h2>
          </div>

          <div style={{ color: '#333', fontSize: '1rem', fontFamily: 'Poppins, sans-serif', padding: '15px', backgroundColor: '#ffffff', borderRadius: '10px', marginTop: '20px', width: '100%' }}>
            <p style={{ textAlign: 'center' }}>
              <strong>Pre C-CAT</strong> is a workshop offered by SMVITA to help candidates prepare for the C-DAC Common Admission Test (C-CAT). This workshop covers both Section A and Section B of the exam and also helps build a strong foundation for C-DAC's Post Graduate Courses.
            </p>
            <h4 style={{ color: '#003366', marginTop: '15px', textAlign: 'center', fontSize: '1.75rem', fontWeight: '600', fontFamily: 'Poppins, sans-serif' }}>
              {heading}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', justifyItems: 'center' }}>
              {visibleModules.map((module, index) => (
                <li key={index} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  fontSize: '1rem',  // Increased font size
                  opacity: 1,
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  fontFamily: 'Poppins, sans-serif',
                  padding: '14px',
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.15)',
                  border: '1px solid #003366',
                  transform: 'scale(1)',
                  textAlign: 'center',
                  width: '250px', // Fixed width for consistent module outline
                }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.15)';
                  }}
                >
                  <span style={{ marginBottom: '10px', fontSize: '2rem', color: '#003366' }}>
                    {module.icon}
                  </span>
                  <h5 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#003366' }}>
                    {module.title}
                  </h5>
                </li>
              ))}
            </ul>
            <p style={{ textAlign: 'center', marginTop: '15px' }}>
              Visit <a href="https://www.cdac.in" target="_blank" rel="noopener noreferrer" style={{ color: '#003366', fontWeight: 'bold' }}>www.cdac.in</a> for details on C-DAC’s PG Courses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PRE_CAT;