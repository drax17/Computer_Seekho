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
const staticPayments = [
  {
    payment_id: 1,
    payment_typeID: 1,
    payment_date: '2025-01-10',
    student_id: 1,
    course_id: 1,
    batch_id: 1,
    amount: 15000,
    enquiry_id: 1,
  },
  {
    payment_id: 2,
    payment_typeID: 2,
    payment_date: '2025-02-15',
    student_id: 2,
    course_id: 2,
    batch_id: 2,
    amount: 20000,
    enquiry_id: 2,
  },
  {
    payment_id: 3,
    payment_typeID: 1,
    payment_date: '2025-03-20',
    student_id: 3,
    course_id: 3,
    batch_id: 3,
    amount: 5000,
    enquiry_id: 3,
  },
];

const PaymentComponent = () => {
  const [payments, setPayments] = useState(staticPayments); // Using static content
  const [searchQuery, setSearchQuery] = useState('');

  // Commented out fetchPayments and other dynamic code
  /*
  const fetchPayments = async () => {
    try {
      const response = await axios.get('/api/payments');
      setPayments(response.data);
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const deletePayment = async (id) => {
    try {
      await axios.delete(`/api/payments/${id}`);
      setPayments(payments.filter(payment => payment.payment_id !== id));
    } catch (error) {
      console.error('Error deleting payment:', error);
    }
  };
  */

  const filteredPayments = Array.isArray(payments) ? payments.filter(payment =>
    payment.payment_id.toString().includes(searchQuery) || 
    payment.student_id.toString().includes(searchQuery) ||
    payment.course_id.toString().includes(searchQuery)
  ) : [];

  return (
    <Box sx={{ padding: '20px', backgroundColor: colors.light, borderRadius: '8px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h4" sx={{ color: colors.primary }}>
          Payment Master
        </Typography>
        <TextField
          label="Search by Payment ID, Student ID or Course ID"
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
        {filteredPayments.map(payment => (
          <ListItem key={payment.payment_id} sx={{ backgroundColor: colors.white, borderRadius: '8px', marginBottom: '10px' }}>
            <ListItemText
              primary={`Payment ID: ${payment.payment_id}`}
              secondary={`Student ID: ${payment.student_id} | Course ID: ${payment.course_id} | Amount: ${payment.amount}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => console.log('View payment', payment.payment_id)}>
                <Button variant="contained" sx={{ backgroundColor: colors.accent, color: colors.white, marginRight: '10px' }}>
                  View
                </Button>
              </IconButton>
              <IconButton edge="end" onClick={() => console.log('Edit payment', payment.payment_id)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" onClick={() => console.log('Delete payment', payment.payment_id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PaymentComponent;
