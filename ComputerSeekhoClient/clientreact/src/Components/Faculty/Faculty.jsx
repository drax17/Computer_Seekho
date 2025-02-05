import React from 'react';
import './Faculty.css';

const facultyData = [
  {
    name: 'Ketki Acharya',
    position: 'C, Web Programming, .Net',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbulv01lur73HEGmpMgCiLtPr_pe8SSvrh1g&s',
    bio: 'Corporate Trainings Conducted for Deloitte, Accenture, Capgemini, Tata Consulting Engineering Ltd.'
  },
  {
    name: 'Nitin VijayKar',
    position: 'C++, Core and Enterprise Java',
    image: '1.jpg',
    bio: 'Corporate Trainings Conducted for L&T Infotech, Geometrix, Capgemini, BNP Paribas'
  },
  {
    name: 'Amar Panchal',
    position: 'Data Structures',
    image: '1.jpg',
    bio: 'Amar has 11 years of experience in the software industry and 10 years in teaching. His unique, innovative style of teaching enables students to be developers - real good ones!'
  },
  {
    name: 'Jayant Ponkshe',
    position: 'Project Mentor',
    image: '1.jpg',
    bio: 'With over 25 years experience in the software industry, of which 10 years with Patni as Solution Architect/Project Manager, Jayant ensures that each student is exposed to the project execution methodology that the industry uses.'
  },
  {
    name: 'Pradeep Tripathi',
    position: 'Big Data, AI and ML',
    image: '1.jpg',
    bio: 'An industry expert in Big Data, AI/ML and Business Analytics with experience in successfully implementing solutions for Fortune 100 enterprises.'
  }
];

const Faculty = () => {
  return (
    <div className="faculty-container">
      <div className="faculty-header">
        <h1>Our Faculty</h1>
        <p>Meet our experienced and dedicated faculty members</p>
      </div>
      <div className="faculty-list">
        {facultyData.map((faculty, index) => (
          <div className="faculty-member" key={index}>
            <img src={faculty.image} alt={faculty.name} />
            <h2>{faculty.name}</h2>
            <p className="position">{faculty.position}</p>
            <p>{faculty.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;