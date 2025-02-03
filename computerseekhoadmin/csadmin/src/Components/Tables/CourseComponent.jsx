import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, InputAdornment } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';

const colors = {
  primary: '#1A1A1D',
  secondary: '#3B1C32',
  accent: '#6A1E55',
  light: '#F2F2F2', // Lighter background
  white: '#FFFFFF'
};

// Temporary static content
const staticCourses = [
  {
    course_id: 1,
    course_name: 'PG DAC',
    course_description: 'Post Graduate Diploma in Advanced Computing.',
    course_duration: 6,
    course_fees: 15000,
    course_is_active: true,
  },
  {
    course_id: 2,
    course_name: 'PG DBDA',
    course_description: 'Post Graduate Diploma in Big Data Analytics.',
    course_duration: 6,
    course_fees: 20000,
    course_is_active: true,
  },
  {
    course_id: 3,
    course_name: 'Pre CAT',
    course_description: 'Pre C-CAT workshop for C-CAT (Section A+B).',
    course_duration: 1,
    course_fees: 5000,
    course_is_active: true,
  },
];

const CourseComponent = () => {
  const [courses, setCourses] = useState(staticCourses); // Using static content
  const [searchQuery, setSearchQuery] = useState('');

  // Commented out fetchCourses and other dynamic code
  /*
  const fetchCourses = async () => {
    try {
      const response = await axios.get('/api/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`/api/courses/${id}`);
      setCourses(courses.filter(course => course.course_id !== id));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };
  */

  const filteredCourses = Array.isArray(courses) ? courses.filter(course =>
    course.course_name.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  return (
    <Box sx={{ padding: '20px', backgroundColor: colors.light, borderRadius: '8px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h4" sx={{ color: colors.primary }}>
          Course Master
        </Typography>
        <TextField
          label="Search by Course Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: '300px', backgroundColor: colors.white, borderRadius: '4px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <List>
        {filteredCourses.map(course => (
          <ListItem key={course.course_id} sx={{ backgroundColor: colors.white, borderRadius: '8px', marginBottom: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <ListItemText
              primary={<Typography sx={{ color: colors.primary, fontWeight: 'bold' }}>{course.course_name}</Typography>}
              secondary={course.course_description}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => console.log('View course', course.course_id)}>
                <Button variant="contained" sx={{ backgroundColor: colors.accent, color: colors.white, marginRight: '10px', borderRadius: '20px' }}>
                  View
                </Button>
              </IconButton>
              <IconButton edge="end" onClick={() => console.log('Edit course', course.course_id)}>
                <EditIcon sx={{ color: colors.accent }} />
              </IconButton>
              <IconButton edge="end" onClick={() => console.log('Delete course', course.course_id)}>
                <DeleteIcon sx={{ color: colors.secondary }} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CourseComponent;
