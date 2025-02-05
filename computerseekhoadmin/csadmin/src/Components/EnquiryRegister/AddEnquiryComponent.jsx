import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  Box,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const AddEnquiryComponent = () => {
  const [formData, setFormData] = useState({
    enquirerName: "",
    enquirerAddress: "",
    enquirerMobile: "",
    enquirerAlternateMobile: "",
    enquirerEmailId: "",
    enquiryDate: dayjs(),
    enquirerQuery: "",
    courseId: "",
    followUpDate: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    navigate("/");
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: "2.5rem",
            marginBottom: "1.5rem",
            color: "#1A1A1D", // Darker Maroon
            fontWeight: "bold",
            fontFamily: "'Arial', sans-serif", // Changing the font family to Arial
            transition: "color 0.3s, transform 0.3s",
            "&:hover": {
              color: "#A64D79",
              transform: "scale(1.02)", // Adding a slight scaling effect on hover
            },
          }}
        >
          Enquiry Form
        </Typography>

      </Box>
      <Card
        sx={{
          boxShadow: 6,
          borderRadius: 3,
          backgroundColor: "#FEFFFF",
          backgroundImage: "linear-gradient(135deg, #FEFFFF 30%, #F5F7FA 100%)",
          border: "1px solid #DDD",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  name="enquirerName"
                  value={formData.enquirerName}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{ backgroundColor: "#FEFFFF", borderRadius: 2, boxShadow: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  name="enquirerAddress"
                  value={formData.enquirerAddress}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{ backgroundColor: "#FEFFFF", borderRadius: 2, boxShadow: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Mobile"
                  name="enquirerMobile"
                  type="number"
                  value={formData.enquirerMobile}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{ backgroundColor: "#FEFFFF", borderRadius: 2, boxShadow: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Alternate Mobile"
                  name="enquirerAlternateMobile"
                  type="number"
                  value={formData.enquirerAlternateMobile}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{ backgroundColor: "#FEFFFF", borderRadius: 2, boxShadow: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="enquirerEmailId"
                  type="email"
                  value={formData.enquirerEmailId}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{ backgroundColor: "#FEFFFF", borderRadius: 2, boxShadow: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Enquiry Date"
                    value={formData.enquiryDate}
                    onChange={(newValue) => handleDateChange("enquiryDate", newValue)}
                    sx={{ backgroundColor: "#FEFFFF", borderRadius: 2, boxShadow: 2 }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Follow-Up Date"
                    value={formData.followUpDate}
                    onChange={(newValue) => handleDateChange("followUpDate", newValue)}
                    sx={{ backgroundColor: "#FEFFFF", borderRadius: 2, boxShadow: 2 }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Query"
                  name="enquirerQuery"
                  multiline
                  rows={3}
                  value={formData.enquirerQuery}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{ backgroundColor: "#FEFFFF", borderRadius: 2, boxShadow: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required sx={{ backgroundColor: "#FEFFFF", borderRadius: 2, boxShadow: 2 }}>
                  <InputLabel>Course</InputLabel>
                  <Select name="courseId" value={formData.courseId} onChange={handleChange}>
                    <MenuItem value={"1"}>DAC</MenuItem>
                    <MenuItem value={"2"}>DBDA</MenuItem>
                    <MenuItem value={"3"}>PRE-CAT</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundImage: "linear-gradient(to right, #6A1E55, #A64D79)",
                    color: "#FEFFFF",
                    "&:hover": { backgroundImage: "linear-gradient(to right, #A64D79, #6A1E55)" },
                    py: 1.5,
                    mt: 2,
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                >
                  Submit Enquiry
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AddEnquiryComponent;
