import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import './Faculty.css';

const Faculty = () => {
  const [facultyData, setFacultyData] = useState([]);

  // Fetch faculty data from the database
  useEffect(() => {
    const fetchFacultyData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/staff/all');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setFacultyData(data);
      } catch (error) {
        console.error('Error fetching faculty data:', error);
      }
    };

    fetchFacultyData();
  }, []);

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
      <Grid container spacing={4} className="faculty-list" justifyContent="center">
        {facultyData.map((faculty) => (
          <Grid item xs={12} sm={6} md={4} key={faculty.staffId}>
            <Card className="faculty-member">
              <CardMedia
                component="img"
                height="140"
                image={faculty.photoUrl}
                alt={faculty.staffName}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {faculty.staffName}
                </Typography>
                <Typography className="position" color="textSecondary">
                  {faculty.staffRole || 'Faculty Member'}
                </Typography>
                {/* Description intentionally left empty as per request */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Faculty;
