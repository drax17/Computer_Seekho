import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';
import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-2.png';
import program_3 from '../../assets/program-3.png';
import './Courses.css';

const Courses = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const coursesData = [
    {
      image: program_1,
      icon: program_icon_1,
      title: 'PG DAC',
      path: '/pg-dac',
    },
    {
      image: program_2,
      icon: program_icon_2,
      title: 'PG DBDA',
      path: '/pg-dbda',
    },
    {
      image: program_3,
      icon: program_icon_3,
      title: 'PRE-CAT',
      path: '/pre-cat',
    },
  ];

  return (
    <Grid container spacing={4} className='courses'>
      {coursesData.map((course, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card className='course' onClick={() => handleNavigation(course.path)} sx={{ position: 'relative', cursor: 'pointer' }}>
            <CardMedia
              component='img'
              height='140'
              image={course.image}
              alt={course.title}
            />
            <div className="caption">
              <img src={course.icon} alt={course.title} />
              <Typography variant='h6' color='white'>{course.title}</Typography>
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Courses;