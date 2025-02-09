import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AdminNavbar from "./Components/Navbar/AdminNavbar.jsx";
import ListComponent from "./Components/EnquiryList/ListComponent.jsx";
import AddEnquiryComponent from "./Components/EnquiryRegister/AddEnquiryComponent.jsx";
import RegistrationComponent from "./Components/StudentRegister/RegistrationComponent.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import HeaderComponent from "./Components/Navbar/HeaderComponent.jsx";
import FooterComponent from "./Components/Navbar/FooterComponent.jsx";
import TableComponent from "./Components/Tables/TableComponent.jsx";
// import BatchComponent from "./Components/Tables/batchComponent.jsx";
import CourseComponent from "./Components/Tables/CourseComponent.jsx";
import StaffComponent from "./Components/Tables/StaffComponent.jsx";
import StudentComponent from "./Components/Tables/StudentComponent.jsx";
import AlbumComponent from "./Components/Tables/AlbumComponent.jsx";
import PaymentComponent from "./Components/Tables/PaymentComponent.jsx";
import ClosureReasonComponent from "./Components/Tables/ClosureReasonComponent.jsx";
import FollowupComponent from "./Components/Tables/FollowupComponent.jsx";
import EnquiryComponent from "./Components/Tables/EnquiryComponent.jsx";
import Login from "./Components/Login/Login";
import Student from "./Components/Student/Student.jsx";
import OnlineEnquiries from "./Components/OnlineEnquiries/OnlineEnquiries.jsx";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [enquiries, setEnquiries] = useState([
  //   { id: 1, name: "Enquiry 1", details: "Details of enquiry 1" },
  //   { id: 2, name: "Enquiry 2", details: "Details of enquiry 2" },
  //   { id: 3, name: "Enquiry 3", details: "Details of enquiry 3" },
  //   { id: 4, name: "Enquiry 4", details: "Details of enquiry 4" },
  //   { id: 5, name: "Enquiry 5", details: "Details of enquiry 5" },
  //   { id: 6, name: "Enquiry 6", details: "Details of enquiry 6" },
  //   { id: 7, name: "Enquiry 7", details: "Details of enquiry 7" },
  //   { id: 8, name: "Enquiry 8", details: "Details of enquiry 8" },
  // ]);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  
  const handleCloseEnquiry = (id) => {
    setEnquiries(enquiries.filter((enquiry) => enquiry.id !== id));
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }


  

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <HeaderComponent />
      <AdminNavbar />
      
      <div style={{ marginTop: "70px", paddingBottom: "50px" }}>
        <Routes>
          <Route path="/" element={<ListComponent onClose={handleCloseEnquiry} />} />
          <Route path="/listcomponent" element={<ListComponent onClose={handleCloseEnquiry} />} />
          <Route path="/add-enquiry" element={<AddEnquiryComponent />} />
          <Route path="/online-enquiries" element={<OnlineEnquiries />} />
          <Route path="/table" element={<TableComponent />} />
          <Route path="/students" element={<Student />} />
          <Route path="/register" element={<RegistrationComponent />} />
          <Route path="/table/courses" element={<CourseComponent />} />
          {/* <Route path="/table/batches" element={<BatchComponent />} /> */}
          <Route path="/table/staff" element={<StaffComponent />} />
          <Route path="/table/students" element={<StudentComponent />} />
          <Route path="/table/albums" element={<AlbumComponent />} />
          <Route path="/table/payment" element={<PaymentComponent />} />
          <Route path="/table/closure-reasons" element={<ClosureReasonComponent />} />
          <Route path="/table/followups" element={<FollowupComponent />} />
          <Route path="/table/enquiries" element={<EnquiryComponent />} />
        </Routes>
      </div>
      <FooterComponent style={{bottom:0}} />
    </LocalizationProvider>
  );
};

export default App;
