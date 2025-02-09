import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  InputAdornment,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SendIcon from "@mui/icons-material/Send";

const colors = {
  primary: "#1A1A1D",
  secondary: "#3B1C32",
  accent: "#6A1E55",
  light: "#F2F2F2",
  white: "#FFFFFF",
};

const PaymentComponent = () => {
  const [payments, setPayments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/payment/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setPayments(data);
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };

    fetchPayments();
  }, []);

  const filteredPayments = Array.isArray(payments)
    ? payments.filter((payment) =>
        [
          payment?.paymentId?.toString(),
          payment?.student?.studentId?.toString(),
          payment?.student?.course?.courseId?.toString(),
        ].some((value) => value?.includes(searchQuery))
      )
    : [];

  const generateReceipt = (payment) => {
    console.log("Generate receipt for", payment.paymentId);
  };

  const handleSendReceipt = (payment) => {
    setSelectedPayment(payment);
    setOpenDialog(true);
  };

  const confirmSendReceipt = () => {
    console.log("Send receipt for", selectedPayment?.paymentId);
    setOpenDialog(false);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ padding: "20px", backgroundColor: colors.light, borderRadius: "8px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <Typography variant="h4" sx={{ color: colors.primary }}>
          Payment Master
        </Typography>
        <TextField
          label="Search by Payment ID, Student ID, or Course ID"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: "300px", backgroundColor: colors.white, borderRadius: "4px" }}
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
        {filteredPayments.map((payment) => (
          <ListItem key={payment.paymentId} sx={{ backgroundColor: colors.white, borderRadius: "8px", marginBottom: "10px" }}>
            <ListItemText
              primary={`Payment ID: ${payment.paymentId}`}
              secondary={`Student ID: ${payment.student?.studentId} | Course ID: ${payment.student?.course?.courseId} | Amount: ${payment.amount} | Payment Type: ${payment.paymentType?.paymentTypeDesc}`}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Tooltip title="Generate Receipt">
                <IconButton edge="end" onClick={() => generateReceipt(payment)} sx={{ marginRight: "10px" }}>
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
          Are you sure you want to send the receipt for Payment ID: {selectedPayment?.paymentId}?
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
