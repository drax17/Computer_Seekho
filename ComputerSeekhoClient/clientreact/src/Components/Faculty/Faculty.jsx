import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
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
    <Container className="faculty-container">
      <div className="faculty-header">
        <Typography variant="h4" component="h1" gutterBottom>
          Our Faculty
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Meet our experienced and dedicated faculty members
        </Typography>
      </div>
      <Grid container spacing={4} className="faculty-list" direction="column" alignItems="center">
        {facultyData.map((faculty, index) => (
          <Grid item xs={12} key={index}>
            <Card className="faculty-member">
              <CardMedia
                component="img"
                height="140"
                image={faculty.image}
                alt={faculty.name}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {faculty.name}
                </Typography>
                <Typography className="position" color="textSecondary">
                  {faculty.position}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {faculty.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Faculty;