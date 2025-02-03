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
const staticPaymentTypes = [
  {
    payment_typeID: 1,
    payment_type_desc: 'Cheque',
  },
  {
    payment_typeID: 2,
    payment_type_desc: 'DD',
  },
  {
    payment_typeID: 3,
    payment_type_desc: 'Bank Transfer',
  },
];

const PaymentTypeMasterComponent = () => {
  const [paymentTypes, setPaymentTypes] = useState(staticPaymentTypes); // Using static content
  const [searchQuery, setSearchQuery] = useState('');

  // Commented out fetchPaymentTypes and other dynamic code
  /*
  const fetchPaymentTypes = async () => {
    try {
      const response = await axios.get('/api/payment-types');
      setPaymentTypes(response.data);
    } catch (error) {
      console.error('Error fetching payment types:', error);
    }
  };

  useEffect(() => {
    fetchPaymentTypes();
  }, []);

  const deletePaymentType = async (id) => {
    try {
      await axios.delete(`/api/payment-types/${id}`);
      setPaymentTypes(paymentTypes.filter(type => type.payment_typeID !== id));
    } catch (error) {
      console.error('Error deleting payment type:', error);
    }
  };
  */

  const filteredPaymentTypes = Array.isArray(paymentTypes) ? paymentTypes.filter(type =>
    type.payment_type_desc.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  return (
    <Box sx={{ padding: '20px', backgroundColor: colors.light, borderRadius: '8px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h4" sx={{ color: colors.primary }}>
          Payment Type Master
        </Typography>
        <TextField
          label="Search by Payment Type"
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
        {filteredPaymentTypes.map(type => (
          <ListItem key={type.payment_typeID} sx={{ backgroundColor: colors.white, borderRadius: '8px', marginBottom: '10px' }}>
            <ListItemText
              primary={type.payment_type_desc}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => console.log('View payment type', type.payment_typeID)}>
                <Button variant="contained" sx={{ backgroundColor: colors.accent, color: colors.white, marginRight: '10px' }}>
                  View
                </Button>
              </IconButton>
              <IconButton edge="end" onClick={() => console.log('Edit payment type', type.payment_typeID)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" onClick={() => console.log('Delete payment type', type.payment_typeID)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PaymentTypeMasterComponent;
