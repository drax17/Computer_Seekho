import React, { useState } from 'react';
import { Box, TextField, Button, Typography, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, InputAdornment } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';

const colors = {
  primary: '#17252A',
  secondary: '#2B7A78',
  accent: '#3AAFA9',
  light: '#DEF2F1',
  white: '#FEFFFF'
};

// Temporary static content
const staticClosureReasons = [
  {
    closure_reasonID: 1,
    closure_reason_desc: 'Time not suitable',
  },
  {
    closure_reasonID: 2,
    closure_reason_desc: 'Fees too high',
  },
  {
    closure_reasonID: 3,
    closure_reason_desc: 'Inconvenient location',
  },
];

const ClosureReasonComponent = () => {
  const [closureReasons, setClosureReasons] = useState(staticClosureReasons); // Using static content
  const [searchQuery, setSearchQuery] = useState('');

  // Commented out fetchClosureReasons and other dynamic code
  /*
  const fetchClosureReasons = async () => {
    try {
      const response = await axios.get('/api/closure-reasons');
      setClosureReasons(response.data);
    } catch (error) {
      console.error('Error fetching closure reasons:', error);
    }
  };

  useEffect(() => {
    fetchClosureReasons();
  }, []);

  const deleteClosureReason = async (id) => {
    try {
      await axios.delete(`/api/closure-reasons/${id}`);
      setClosureReasons(closureReasons.filter(reason => reason.closure_reasonID !== id));
    } catch (error) {
      console.error('Error deleting closure reason:', error);
    }
  };
  */

  const filteredClosureReasons = Array.isArray(closureReasons) ? closureReasons.filter(reason =>
    reason.closure_reason_desc.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  return (
    <Box sx={{ padding: '20px', backgroundColor: colors.light, borderRadius: '8px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h4" sx={{ color: colors.primary }}>
          Closure Reason Master
        </Typography>
        <TextField
          label="Search by Closure Reason"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: '300px' }} // Adjust width as needed
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
        {filteredClosureReasons.map(reason => (
          <ListItem key={reason.closure_reasonID} sx={{ backgroundColor: colors.white, borderRadius: '8px', marginBottom: '10px' }}>
            <ListItemText
              primary={reason.closure_reason_desc}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => console.log('View closure reason', reason.closure_reasonID)}>
                <Button variant="contained" sx={{ backgroundColor: colors.accent, color: colors.white, marginRight: '10px' }}>
                  View
                </Button>
              </IconButton>
              <IconButton edge="end" onClick={() => console.log('Edit closure reason', reason.closure_reasonID)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" onClick={() => console.log('Delete closure reason', reason.closure_reasonID)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ClosureReasonComponent;
