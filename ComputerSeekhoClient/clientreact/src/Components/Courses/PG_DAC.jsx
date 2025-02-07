import React from 'react';
import { useEffect, useState } from 'react';
import { FaCode, FaDatabase, FaCloud, FaLaptopCode, FaMobileAlt, FaCogs, FaServer, FaShieldAlt, FaProjectDiagram, FaNetworkWired, FaCodeBranch, FaSyncAlt } from 'react-icons/fa';

function PG_DAC() {
  const modules = [
    { icon: <FaCode />, title: 'Advanced Programming in Java & .NET' },
    { icon: <FaDatabase />, title: 'Database Technologies' },
    { icon: <FaCloud />, title: 'Cloud Computing' },
    { icon: <FaLaptopCode />, title: 'Software Development Methodologies' },
    { icon: <FaMobileAlt />, title: 'Mobile Application Development' },
    { icon: <FaCogs />, title: 'Software Engineering' },
    { icon: <FaServer />, title: 'Enterprise Application Development' },
    { icon: <FaShieldAlt />, title: 'Cyber Security' },
    { icon: <FaProjectDiagram />, title: 'Project Management' },
    { icon: <FaNetworkWired />, title: 'Computer Networks' },
    { icon: <FaCodeBranch />, title: 'Version Control Systems' },
    { icon: <FaSyncAlt />, title: 'DevOps & Automation' },
  ];

  const [visibleModules, setVisibleModules] = useState([]);
  const [heading, setHeading] = useState('Course Modules');

  useEffect(() => {
    setVisibleModules(modules);  // Show modules immediately after component mounts
    
    setTimeout(() => {
      setHeading('Explore Our Post Graduate Diploma in Advanced Computing (PGDAC) Modules!');
    }, 1500);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#ffffff', padding: '10px', overflowY: 'scroll', height: '100vh', width: '100vw', boxSizing: 'border-box' }}>
      <div style={{ width: '90%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', boxSizing: 'border-box', overflowY: 'auto', maxHeight: '100vh' }}>
        <div style={{ maxWidth: '90%', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.12)', backgroundColor: '#ffffff', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '90vh', overflowY: 'auto' }}>
          <div style={{ backgroundColor: '#003366', color: 'white', textAlign: 'center', justifyContent: 'center', padding: '15px', width: '100%', borderRadius: '12px 12px 0 0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '1.5px', fontFamily: 'Poppins, sans-serif', textTransform: 'uppercase', width: '100%' }}>
              PGDAC - Post Graduate Diploma in Advanced Computing
            </h2>
          </div>

          <div style={{ color: '#333', fontSize: '0.9rem', fontFamily: 'Poppins, sans-serif', padding: '15px', backgroundColor: '#ffffff', borderRadius: '10px', marginTop: '20px', width: '100%' }}>
            <p style={{ textAlign: 'center' }}>
              <strong>Post Graduate Diploma in Advanced Computing (PGDAC)</strong> is designed for graduates who want to build a career in software development. The program covers advanced computing technologies, modern programming languages, software development methodologies, and tools necessary to build high-performance applications.
            </p>
            <h4 style={{ color: '#003366', marginTop: '15px', textAlign: 'center', fontSize: '1.5rem', fontWeight: '600', fontFamily: 'Poppins, sans-serif' }}>
              {heading}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', justifyItems: 'center' }}>
              {visibleModules.map((module, index) => (
                <li key={index} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  fontSize: '0.9rem',
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
                  <h5 style={{ fontSize: '1rem', fontWeight: '600', color: '#003366' }}>
                    {module.title}
                  </h5>
                </li>
              ))}
            </ul>
            <p style={{ textAlign: 'center', marginTop: '15px' }}>
              Visit <a href="https://www.cdac.in" target="_blank" rel="noopener noreferrer" style={{ color: '#003366', fontWeight: 'bold' }}>www.cdac.in</a> for details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PG_DAC;