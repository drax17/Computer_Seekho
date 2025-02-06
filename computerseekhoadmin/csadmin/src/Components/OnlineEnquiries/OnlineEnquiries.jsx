import React, { useState, useEffect } from "react";
import { Typography, Box, List, ListItem, ListItemText, Divider, IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import MessageIcon from "@mui/icons-material/Message";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const OnlineEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);

  const handleAccept = (name) => {
    const enquiry = enquiries.find((enquiry) => enquiry.enquirerName === name);
    if (enquiry) {
      const queryString = new URLSearchParams(enquiry).toString();
      window.location.href = `/add-enquiry?${queryString}`;
    }
  };

  useEffect(() => {
      const fetchOnlineEnquiries = async () => {
        try {
          const response = await fetch("http://localhost:8080/api/getInTouch/all");
          if (!response.ok) throw new Error("Something went wrong!");
          const result = await response.json();
          setEnquiries(result);
        } catch (error) {
          toast.error(error.message);
        }
      };
      fetchOnlineEnquiries();
    },[]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxHeight: 700,
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        backgroundColor: "#1A1A1D",
        p: 2,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#A64D79" }}>
        🔔 Online Enquiries
      </Typography>
      <List>
        {enquiries.length > 0 ? (
          enquiries.map((entry, index) => (
            <Box key={index}>
              <ListItem
                alignItems="flex-start"
                sx={{
                  backgroundColor: "#3B1C32",
                  boxShadow: 3,
                  borderRadius: 2,
                  p: 2,
                  mb: 2,
                  color: "white",
                  fontSize: "1.2rem", // Increased font size
                }}
              >
                <ListItemText
                  primary={
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <MessageIcon sx={{ mr: 2, color: "lightblue" }} />
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        {entry.enquirerName}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <>
                      <Typography variant="body2" sx={{ color: "white" }}>
                        <b>Email:</b> {entry.enquirerEmail}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "white" }}>
                        <b>Mobile:</b> {entry.enquirerPhone}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "white" }}>
                        <b>Course:</b> {entry.courseName || "N/A"}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "white" }}>
                        <b>Message:</b> {entry.enquiryMessage || "N/A"}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "white" }}>
                        <b>Message:</b> {entry.enquirerPhone || "N/A"}
                      </Typography>
                    </>
                  }
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: "green",
                  }}
                  onClick={() => handleAccept(entry.enquirerName)}
                >
                  <CheckCircleIcon />
                </IconButton>
              </ListItem>
              {index < enquiries.length - 1 && <Divider sx={{ bgcolor: "#6A1E55" }} />}
            </Box>
          ))
        ) : (
          <Typography align="center" sx={{ width: "100%", color: grey[600] }}>
            No new enquiries
          </Typography>
        )}
      </List>
    </Box>
  );
};

export default OnlineEnquiries;
