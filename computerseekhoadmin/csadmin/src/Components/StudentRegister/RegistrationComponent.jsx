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

const RegistrationComponent = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentAddress: "",
    studentGender: "",
    photoUrl: "",
    studentDob: dayjs(),
    studentQualification: "",
    studentMobile: "",
    batchId: "",
    courseId: "",
  });

  const batches = [
    { batchId: 1, batchName: "Batch 1" },
    { batchId: 2, batchName: "Batch 2" },
    { batchId: 3, batchName: "Batch 3" },
  ];

  const courses = [
    { courseId: 1, courseName: "Course 1" },
    { courseId: 2, courseName: "Course 2" },
    { courseId: 3, courseName: "Course 3" },
  ];

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
    navigate("/register");
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
            fontFamily: "'Arial', sans-serif",
            transition: "color 0.3s, transform 0.3s",
            "&:hover": {
              color: "#A64D79",
              transform: "scale(1.02)", // Adding a slight scaling effect on hover
            },
          }}
        >
          Student Registration
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
                  label="Student Name"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    backgroundColor: "#FEFFFF",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  name="studentAddress"
                  value={formData.studentAddress}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    backgroundColor: "#FEFFFF",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Mobile"
                  name="studentMobile"
                  type="number"
                  value={formData.studentMobile}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    backgroundColor: "#FEFFFF",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Qualification"
                  name="studentQualification"
                  value={formData.studentQualification}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    backgroundColor: "#FEFFFF",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date of Birth"
                    value={formData.studentDob}
                    onChange={(newValue) => handleDateChange("studentDob", newValue)}
                    fullWidth
                    sx={{
                      backgroundColor: "#FEFFFF",
                      borderRadius: 2,
                      boxShadow: 2,
                    }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Gender</InputLabel>
                  <Select
                    name="studentGender"
                    value={formData.studentGender}
                    onChange={handleChange}
                    displayEmpty
                    sx={{
                      backgroundColor: "#FEFFFF",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        boxShadow: 2,
                      },
                    }}
                  >
                    <MenuItem value="" disabled>
                      Select Gender
                    </MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Photo URL"
                  name="photoUrl"
                  value={formData.photoUrl}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{
                    backgroundColor: "#FEFFFF",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Batch</InputLabel>
                  <Select
                    name="batchId"
                    value={formData.batchId}
                    onChange={handleChange}
                    displayEmpty
                    sx={{
                      backgroundColor: "#FEFFFF",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        boxShadow: 2,
                      },
                    }}
                  >
                    <MenuItem value="" disabled>
                      Select Batch
                    </MenuItem>
                    {batches.map((batch) => (
                      <MenuItem key={batch.batchId} value={batch.batchId}>
                        {batch.batchName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Course</InputLabel>
                  <Select
                    name="courseId"
                    value={formData.courseId}
                    onChange={handleChange}
                    displayEmpty
                    sx={{
                      backgroundColor: "#FEFFFF",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        boxShadow: 2,
                      },
                    }}
                  >
                    <MenuItem value="" disabled>
                      Select Course
                    </MenuItem>
                    {courses.map((course) => (
                      <MenuItem key={course.courseId} value={course.courseId}>
                        {course.courseName}
                      </MenuItem>
                    ))}
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
                    "&:hover": {
                      backgroundImage: "linear-gradient(to right, #A64D79, #6A1E55)",
                    },
                    py: 1.5,
                    mt: 2,
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                >
                  Register Student
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RegistrationComponent;
