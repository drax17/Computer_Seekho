import React, { useState, useEffect } from 'react';
import './OurRecruiters.css';

const OurRecruiters = () => {
  const [recruiters, setRecruiters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchRecruiters = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/recruiter/all'); // API endpoint to fetch all recruiters
        if (!response.ok) {
          throw new Error('Failed to fetch recruiters data');
        }
        const data = await response.json();
        setRecruiters(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRecruiters();
  }, []);

  if (loading) {
    return <div className="recruiter-page">Loading recruiters...</div>;
  }

  if (error) {
    return <div className="recruiter-page">Error: {error}</div>;
  }

  return (
    <div className="recruiter-page full-page">
      <header className="text-center mb-5">
        <h1 className="page-title">
          Our <span className="highlight">Top Hiring Partners</span>
        </h1>
        <p className="page-subtitle">Discover Opportunities with Industry Leaders</p>
      </header>
      <div className="grid-container">
        {recruiters.map((recruiter, index) => (
          <div key={index} className="recruiter-card">
            <div className="icon-container">
              {/* Display logo if available; fallback to name's first letter */}
              {recruiter.recruiterPhoto ? (
                <img
                  src={recruiter.recruiterPhoto}
                  alt={recruiter.recruiterName}
                  style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                />
              ) : (
                <span>{recruiter.recruiterName.charAt(0)}</span>
              )}
            </div>
            <h3>{recruiter.recruiterName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurRecruiters;