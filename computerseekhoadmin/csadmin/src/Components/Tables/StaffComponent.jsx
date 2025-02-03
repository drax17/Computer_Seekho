import React, { useState } from 'react';
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
const staticStaff = [
  {
    staff_id: 1,
    staff_name: 'John Doe',
    photo_url: 'https://via.placeholder.com/150',
    staff_mobile: 1234567890,
    staff_email: 'john.doe@example.com',
    staff_username: 'johndoe',
    staff_password: 'password123',
    staff_role: 'Teaching staff',
  },
  {
    staff_id: 2,
    staff_name: 'Jane Smith',
    photo_url: 'https://via.placeholder.com/150',
    staff_mobile: 9876543210,
    staff_email: 'jane.smith@example.com',
    staff_username: 'janesmith',
    staff_password: 'password123',
    staff_role: 'Non teaching',
  },
  {
    staff_id: 3,
    staff_name: 'Alice Johnson',
    photo_url: 'https://via.placeholder.com/150',
    staff_mobile: 5555555555,
    staff_email: 'alice.johnson@example.com',
    staff_username: 'alicejohnson',
    staff_password: 'password123',
    staff_role: 'House keeping',
  },
];

const StaffComponent = () => {
  const [staff, setStaff] = useState(staticStaff); // Using static content
  const [searchQuery, setSearchQuery] = useState('');

  // Commented out fetchStaff and other dynamic code
  /*
  const fetchStaff = async () => {
    try {
      const response = await axios.get('/api/staff');
      setStaff(response.data);
    } catch (error) {
      console.error('Error fetching staff:', error);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  const deleteStaff = async (id) => {
    try {
      await axios.delete(`/api/staff/${id}`);
      setStaff(staff.filter(member => member.staff_id !== id));
    } catch (error) {
      console.error('Error deleting staff:', error);
    }
  };
  */

  const filteredStaff = Array.isArray(staff) ? staff.filter(member =>
    member.staff_name.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  return (
    <Box sx={{ padding: '20px', backgroundColor: colors.light, borderRadius: '8px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h4" sx={{ color: colors.primary }}>
          Staff Master
        </Typography>
        <TextField
          label="Search by Staff Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: '300px', backgroundColor: colors.white, borderRadius: '4px' }} // Adjust width as needed
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
        {filteredStaff.map(member => (
          <ListItem key={member.staff_id} sx={{ backgroundColor: colors.white, borderRadius: '8px', marginBottom: '10px' }}>
            <ListItemText
              primary={member.staff_name}
              secondary={`${member.staff_role} | ${member.staff_email} | ${member.staff_mobile}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => console.log('View staff', member.staff_id)}>
                <Button variant="contained" sx={{ backgroundColor: colors.accent, color: colors.white, marginRight: '10px' }}>
                  View
                </Button>
              </IconButton>
              <IconButton edge="end" onClick={() => console.log('Edit staff', member.staff_id)}>
                <EditIcon sx={{ color: colors.accent }} />
              </IconButton>
              <IconButton edge="end" onClick={() => console.log('Delete staff', member.staff_id)}>
                <DeleteIcon sx={{ color: colors.secondary }} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default StaffComponent;
