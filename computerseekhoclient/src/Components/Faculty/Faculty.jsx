import './faculty.css'
const facultyData = [
  {
    name: 'Ketki Acharya',
    position: 'C,Web Programming,.Net',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbulv01lur73HEGmpMgCiLtPr_pe8SSvrh1g&s',
    bio: 'Corporate Trainings Conducted for Deloitte,Accenture,Capgemini,Tata Consulting Engineering Ltd.'
  },
  {
    name: 'Nitin VijayKar',
    position: 'c++,core and enterprise java',
    image: '1.jpg',
    bio: 'Corporate Trainings Conducted for L&T Infotech,Geometrix,Capgemini,BNP Paribas'
  },
  {
    name: 'Amar Panchal',
    position: 'Data Structures',
    image: '1.jpg',
    bio: 'Amar has 11 years of experience in the software industry and 10 years in teaching.His unique,innovative style of teaching enable students to be a developers-real good ones!'
  },
  {
    name: 'Jayant Ponkshe',
    position: 'Project Mentor',
    image: '1.jpg',
    bio: 'with over 25 years experience in the software industry of which 10 years with patni as solution Architect/Project Manager,Jayant ensures that each student is exposed to the project execution methodology that the industry uses '
  },
  {
    name: 'Pradeep Tripathi',
    position: 'Big Data,AI and ML',
    image: '1.jpg',
    bio: 'An industry expert in BigData,AI/ML and Business analytics with experience in successfully implementing solutions for fortune 100 enterprise'
  },
  {
    name: 'Vikram Nayak',
    position: 'Soft Skills',
    image: '1.jpg',
    bio: 'Corporate trainings at Mercedes Benz,Force Motors,Honda Motors,Hyundai Motors,Mahindra Group,Tata Group,Vodafone,Airtel,HDFC,GMR,IRB'
  }
];

const Faculty = () => (
  <div className="faculty-page">
    <h1>Meet Our Faculty</h1>
    <div className="faculty-list">
      {facultyData.map((faculty, index) => (
        <FacultyCard key={index} faculty={faculty} />
      ))}
    </div>
  </div>
);

const FacultyCard = ({ faculty }) => (
  <div className="faculty-card">
    <img src={faculty.image} alt={faculty.name} className="faculty-image" />
    <h3>{faculty.name}</h3>
    <p className="faculty-position">{faculty.position}</p>
    <p className="faculty-bio">{faculty.bio}</p>
  </div>
);



export default Faculty;
