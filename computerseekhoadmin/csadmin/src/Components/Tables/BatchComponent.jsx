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
const staticBatches = [
  {
    batch_id: 1,
    batch_name: 'Batch 1',
    batch_start_time: '09:00',
    batch_end_time: '12:00',
    course_id: 1,
    presentation_date: '2025-02-20T09:00',
    course_fees: 15000,
    course_fees_from: '2025-02-01',
    course_fees_to: '2025-06-01',
    batch_is_active: true,
  },
  {
    batch_id: 2,
    batch_name: 'Batch 2',
    batch_start_time: '13:00',
    batch_end_time: '16:00',
    course_id: 2,
    presentation_date: '2025-03-20T13:00',
    course_fees: 20000,
    course_fees_from: '2025-03-01',
    course_fees_to: '2025-09-01',
    batch_is_active: true,
  },
  {
    batch_id: 3,
    batch_name: 'Batch 3',
    batch_start_time: '17:00',
    batch_end_time: '20:00',
    course_id: 3,
    presentation_date: '2025-04-20T17:00',
    course_fees: 5000,
    course_fees_from: '2025-04-01',
    course_fees_to: '2025-05-01',
    batch_is_active: true,
  },
];

const BatchComponent = () => {
  const [batches, setBatches] = useState(staticBatches); // Using static content
  const [searchQuery, setSearchQuery] = useState('');

  // Commented out fetchBatches and other dynamic code
  /*
  const fetchBatches = async () => {
    try {
      const response = await axios.get('/api/batches');
      setBatches(response.data);
    } catch (error) {
      console.error('Error fetching batches:', error);
    }
  };

  useEffect(() => {
    fetchBatches();
  }, []);

  const deleteBatch = async (id) => {
    try {
      await axios.delete(`/api/batches/${id}`);
      setBatches(batches.filter(batch => batch.batch_id !== id));
    } catch (error) {
      console.error('Error deleting batch:', error);
    }
  };
  */

  const filteredBatches = Array.isArray(batches) ? batches.filter(batch =>
    batch.batch_name.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  return (
    <Box sx={{ padding: '20px', backgroundColor: colors.light, borderRadius: '8px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h4" sx={{ color: colors.primary }}>
          Batch Master
        </Typography>
        <TextField
          label="Search by Batch Name"
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
        {filteredBatches.map(batch => (
          <ListItem key={batch.batch_id} sx={{ backgroundColor: colors.white, borderRadius: '8px', marginBottom: '10px' }}>
            <ListItemText
              primary={batch.batch_name}
              secondary={`Start: ${batch.batch_start_time}, End: ${batch.batch_end_time}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => console.log('View batch', batch.batch_id)}>
                <Button variant="contained" sx={{ backgroundColor: colors.accent, color: colors.white, marginRight: '10px' }}>
                  View
                </Button>
              </IconButton>
              <IconButton edge="end" onClick={() => console.log('Edit batch', batch.batch_id)}>
                <EditIcon sx={{ color: colors.accent }} />
              </IconButton>
              <IconButton edge="end" onClick={() => console.log('Delete batch', batch.batch_id)}>
                <DeleteIcon sx={{ color: colors.secondary }} />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default BatchComponent;
