import React, { useState } from 'react';
import { 
  Box, TextField, Typography, IconButton, List, ListItem, ListItemText, 
  ListItemSecondaryAction, InputAdornment, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions, Button 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SendIcon from '@mui/icons-material/Send';

const colors = {
  primary: '#1A1A1D',
  secondary: '#3B1C32',
  accent: '#6A1E55',
  light: '#F2F2F2',
  white: '#FFFFFF'
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
  const [paymentTypes, setPaymentTypes] = useState({
    1: 'Credit Card',
    2: 'Cash',
    3: 'Bank Transfer',
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const filteredPayments = Array.isArray(payments) ? payments.filter(payment =>
    payment.payment_id.toString().includes(searchQuery) || 
    payment.student_id.toString().includes(searchQuery) ||
    payment.course_id.toString().includes(searchQuery)
  ) : [];

  const generateReceipt = (payment) => {
    console.log('Generate receipt for', payment.payment_id);
  };

  const handleSendReceipt = (payment) => {
    setSelectedPayment(payment);
    setOpenDialog(true);
  };

  const confirmSendReceipt = () => {
    console.log('Send receipt for', selectedPayment.payment_id);
    setOpenDialog(false);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

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
        {filteredPayments.map(payment => (
          <ListItem key={payment.payment_id} sx={{ backgroundColor: colors.white, borderRadius: '8px', marginBottom: '10px' }}>
            <ListItemText
              primary={`Payment ID: ${payment.payment_id}`}
              secondary={`Student ID: ${payment.student_id} | Course ID: ${payment.course_id} | Amount: ${payment.amount} | Payment Type: ${paymentTypes[payment.payment_typeID]}`}
            />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Tooltip title="Generate Receipt">
                <IconButton edge="end" onClick={() => generateReceipt(payment)} sx={{ marginRight: '10px' }}>
                  <ReceiptIcon sx={{ color: colors.accent }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Send Receipt">
                <IconButton edge="end" onClick={() => handleSendReceipt(payment)}>
                  <SendIcon sx={{ color: colors.secondary }} />
                </IconButton>
              </Tooltip>
            </Box>
          </ListItem>
        ))}
      </List>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirm Send Receipt</DialogTitle>
        <DialogContent>
          Are you sure you want to send the receipt for Payment ID: {selectedPayment?.payment_id}?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmSendReceipt} color="primary" autoFocus>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PaymentComponent;
