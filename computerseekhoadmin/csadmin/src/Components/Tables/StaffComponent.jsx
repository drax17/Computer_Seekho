import React, { useState, useEffect } from 'react';
import { 
  Box, TextField, Button, Typography, IconButton, List, ListItem, ListItemText, 
  ListItemSecondaryAction, InputAdornment, Avatar, Dialog, DialogTitle, DialogContent, 
  DialogActions 
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';

const colors = {
  primary: '#1A1A1D',
  secondary: '#3B1C32',
  accent: '#6A1E55',
  light: '#F2F2F2',
  white: '#FFFFFF'
};

const StaffComponent = () => {
  const [staff, setStaff] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editStaff, setEditStaff] = useState(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const fetchStaff = async () => {
    try {
      const token = sessionStorage.getItem('jwttoken');
      if (!token) {
        console.error('No token found in sessionStorage');
        return;
      }

      const response = await fetch('http://localhost:8080/api/staff/all', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        console.error('API Error:', response.status, await response.text());
        return;
      }

      const data = await response.json();
      setStaff(data);
    } catch (error) {
      console.error('Error fetching staff:', error);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  const deleteStaff = async (id) => {
    try {
      const token = sessionStorage.getItem('jwttoken');
      if (!token) return;

      await fetch(`http://localhost:8080/api/staff/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      setStaff(staff.filter(member => member.staffId !== id));
    } catch (error) {
      console.error('Error deleting staff:', error);
    }
  };

  const openEditForm = (member) => {
    setEditStaff(member);
    setOpenEditDialog(true);
  };

  const handleEditChange = (e) => {
    setEditStaff({ ...editStaff, [e.target.name]: e.target.value });
  };

  const updateStaff = async () => {
    try {
      console.log("Updating staff:", editStaff); // Debugging
      
      const token = sessionStorage.getItem('jwttoken');
      if (!token) {
        console.error("No JWT token found");
        return;
      }
  
      const response = await fetch('http://localhost:8080/api/staff/update', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editStaff),
      });
  
      const responseData = await response.text(); // Read response
  
      if (!response.ok) {
        console.error('Update failed:', response.status, responseData);
        return;
      }
  
      console.log('Update successful:', responseData);
  
      setStaff(staff.map(member => (member.staffId === editStaff.staffId ? editStaff : member)));
      setOpenEditDialog(false);
    } catch (error) {
      console.error('Error updating staff:', error);
    }
  };
  

  const filteredStaff = staff.filter(member =>
    member.staffName.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        {filteredStaff.map(member => (
          <ListItem key={member.staffId} sx={{ backgroundColor: colors.white, borderRadius: '8px', marginBottom: '10px' }}>
            <Avatar src={member.photoUrl} alt={member.staffName} sx={{ width: 50, height: 50, marginRight: 2 }} />
            <ListItemText
              primary={member.staffName}
              secondary={`${member.staffRole} | ${member.staffEmail} | ${member.staffMobile}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => openEditForm(member)}>
                <EditIcon sx={{ color: colors.accent }} />
              </IconButton>
              <IconButton edge="end" onClick={() => deleteStaff(member.staffId)}>
                <DeleteIcon sx={{ color: colors.secondary }} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

      {/* Edit Staff Dialog */}
      {editStaff && (
        <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
          <DialogTitle>Edit Staff</DialogTitle>
          <DialogContent>
            <TextField
              label="Name"
              name="staffName"
              value={editStaff.staffName}
              onChange={handleEditChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Role"
              name="staffRole"
              value={editStaff.staffRole}
              onChange={handleEditChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="staffEmail"
              value={editStaff.staffEmail}
              onChange={handleEditChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Mobile"
              name="staffMobile"
              value={editStaff.staffMobile}
              onChange={handleEditChange}
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenEditDialog(false)} color="secondary">
              Cancel
            </Button>
            <Button onClick={updateStaff} color="primary" variant="contained">
              Save Changes
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default StaffComponent;
