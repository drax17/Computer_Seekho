import React, { useState } from 'react';
import './OurRecruiters.css';
import {
  FaMicrosoft,
  FaAmazon,
  FaApple,
  FaYoutube,
  FaTwitter,
  FaReddit,
  FaLinkedin,
  FaFacebook,
  FaSlack,
  FaReact,
} from "react-icons/fa";

const recruitersData = [
  {
    name: 'Microsoft',
    founded: '1975',
    headquarters: 'Redmond, WA',
    description: 'A leading technology company known for software and cloud computing.',
    website: 'https://www.microsoft.com',
    logo: <FaMicrosoft />,
    color: '#00A4EF',
  },
  {
    name: 'Amazon',
    founded: '1994',
    headquarters: 'Seattle, WA',
    description: 'A global e-commerce and cloud computing giant.',
    website: 'https://www.amazon.com',
    logo: <FaAmazon />,
    color: '#FF9900',
  },
  {
    name: 'Apple',
    founded: '1976',
    headquarters: 'Cupertino, CA',
    description: 'A technology company known for innovative consumer electronics.',
    website: 'https://www.apple.com',
    logo: <FaApple />,
    color: '#A2AAAD',
  },
  {
    name: 'YouTube',
    founded: '2005',
    headquarters: 'San Bruno, CA',
    description: 'A global video-sharing platform owned by Google.',
    website: 'https://www.youtube.com',
    logo: <FaYoutube />,
    color: '#CC0000',
  },
  {
    name: 'Twitter (X)',
    founded: '2006',
    headquarters: 'San Francisco, CA',
    description: 'A social networking platform for microblogging and discussions.',
    website: 'https://www.x.com',
    logo: <FaTwitter />,
    color: '#1DA1F2',
  },
  {
    name: 'Reddit',
    founded: '2005',
    headquarters: 'San Francisco, CA',
    description: 'A social news aggregation and discussion platform.',
    website: 'https://www.reddit.com',
    logo: <FaReddit />,
    color: '#FF4500',
  },
  {
    name: 'LinkedIn',
    founded: '2002',
    headquarters: 'Sunnyvale, CA',
    description: 'The world’s largest professional network for career growth.',
    website: 'https://www.linkedin.com',
    logo: <FaLinkedin />,
    color: '#0077B5',
  },
  {
    name: 'Facebook',
    founded: '2004',
    headquarters: 'Menlo Park, CA',
    description: 'A social media company connecting people globally.',
    website: 'https://www.facebook.com',
    logo: <FaFacebook />,
    color: '#3B5998',
  },
  {
    name: 'Slack',
    founded: '2013',
    headquarters: 'San Francisco, CA',
    description: 'A collaboration software for team communication and workflow management.',
    website: 'https://www.slack.com',
    logo: <FaSlack />,
    color: '#4A154B',
  },
  {
    name: 'React Inc.',
    founded: '2013',
    headquarters: 'Facebook HQ, Menlo Park, CA',
    description: 'The company behind React, a JavaScript library for building user interfaces.',
    website: 'https://reactjs.org',
    logo: <FaReact />,
    color: '#61DAFB',
  },
];

const OurRecruiters = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRecruiter, setSelectedRecruiter] = useState(null);

  const handleModalShow = (recruiter) => {
    setSelectedRecruiter(recruiter);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedRecruiter(null);
  };

  const handleContextMenu = (event, recruiter) => {
    event.preventDefault();
    handleModalShow(recruiter);
  };

  return (
    <div className="recruiter-page full-page">
      <header className="text-center mb-5">
        <h1 className="page-title">
          Our <span className="highlight">Top Hiring Partners</span>
        </h1>
        <p className="page-subtitle">Discover Opportunities with Industry Leaders</p>
      </header>
      <div className="grid-container">
        {recruitersData.map((recruiter, index) => (
          <div
            key={index}
            className="recruiter-card"
            onClick={() => handleModalShow(recruiter)}
            onContextMenu={(e) => handleContextMenu(e, recruiter)}
          >
            <div
              className="icon-container"
              style={{ backgroundColor: recruiter.color }}
            >
              {recruiter.logo}
            </div>
            <h3 style={{ color: recruiter.color }}>{recruiter.name}</h3>
          </div>
        ))}
      </div>
      {selectedRecruiter && showModal && (
        <div className="custom-modal-overlay" onClick={handleModalClose}>
          <div
            className="custom-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-button" onClick={handleModalClose}>
              Close
            </span>
            <div className="modal-header">
              <div
                className="modal-icon"
                style={{ color: selectedRecruiter.color }}
              >
                {selectedRecruiter.logo}
              </div>
              <h2>{selectedRecruiter.name}</h2>
              {console.log(selectedRecruiter)}
            </div>
            <div className="modal-body">
              <p><strong>Founded:</strong> {selectedRecruiter.founded}</p>
              <p><strong>Headquarters:</strong> {selectedRecruiter.headquarters}</p>
              <p><strong>Description:</strong> {selectedRecruiter.description}</p>
              <p>
                <strong>Website:</strong>{' '}
                <a href={selectedRecruiter.website} target="_blank" rel="noopener noreferrer">
                  {selectedRecruiter.website}
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurRecruiters;
