import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Box from '../Box/Box'; // Assuming Box is a custom component
import './CampusLife.css';

const CampusLife = () => {
  const boxContent = [
    { title: 'Hostels', description: 'Explore the hostels and living spaces on campus.', image: 'https://wallpapers.com/images/high/msn-trio-with-neymar-patting-messi-fn137a63qctelo7d.webp' },
    { title: 'Sports', description: 'Sports activities and events for students.', image: 'https://wallpapers.com/images/high/msn-trio-with-neymar-patting-messi-fn137a63qctelo7d.webp' },
    { title: 'Events', description: 'Campus events and festivals throughout the year.', image: 'https://wallpapers.com/images/high/msn-trio-with-neymar-patting-messi-fn137a63qctelo7d.webp' },
    { title: 'Cafeteria', description: 'Enjoy a variety of food in the campus cafeteria.', image: 'https://wallpapers.com/images/high/msn-trio-with-neymar-patting-messi-fn137a63qctelo7d.webp' },
    { title: 'Library', description: 'Study resources and books in the library.', image: 'https://wallpapers.com/images/high/msn-trio-with-neymar-patting-messi-fn137a63qctelo7d.webp' },
    { title: 'Clubs', description: 'Join different clubs and societies on campus.', image: 'https://wallpapers.com/images/high/msn-trio-with-neymar-patting-messi-fn137a63qctelo7d.webp' },
  ];

  return (
    <Container className="campus-life">
      <Typography variant="h4" component="h1" gutterBottom>
        Campus Life
      </Typography>
      <Grid container spacing={4} className="box-container">
        {boxContent.map((box, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              title={box.title}
              description={box.description}
              image={box.image}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CampusLife;