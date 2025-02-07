import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { Call, PersonAdd, Close } from "@mui/icons-material";
import "./ListComponent.css";
import RegistrationComponent from "../StudentRegister/RegistrationComponent";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import {Close as CloseIcon} from "@mui/icons-material";
import {toast , Toaster} from "react-hot-toast";

const ListComponent = ({ onClose }) => {
  const navigate = useNavigate();

  const [enquiries, setEnquiries] = useState([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(enquiries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedEnquiries = enquiries.slice(startIndex, startIndex + itemsPerPage);

  const jwttoken = sessionStorage.getItem('jwttoken');
  if (!jwttoken) {
    sessionStorage.removeItem('jwttoken');
    navigate("/login");
  }
  const payloadB64 = jwttoken.split('.')[1];
  const payload = JSON.parse(atob(payloadB64));
  const username = payload.username;

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/enquiry/getByStaff/${username}`);
        if (!response.ok) throw new Error("Something went wrong!");
        const result = await response.json();
        setEnquiries(result);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchEnquiries();
  }, []);

  const openRegisterForm = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="list-container">
    <Toaster />
      <h2 className="list-title">Follow Ups</h2>
      <table className="enquiry-table">
        <thead>
          <tr>
            <th className="enquiry-header">Student Name</th>
            <th className="enquiry-header">Course</th>
            <th className="enquiry-header">Mobile</th>
            <th className="enquiry-header">Followup Date</th>
            <th className="enquiry-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayedEnquiries.map((enquiry) => (
            <tr key={enquiry.enquiryId} className="enquiry-row">
              {/* <td className="enquiry-details">{enquiry.studentName}</td> */}
              <td className="followup-count">{enquiry.studentName ? enquiry.studentName : enquiry.enquirerName}</td>
              <td className="followup-count">{enquiry.courseName}</td>
              <td className="followup-count">{enquiry.enquirerMobile}</td>
              <td className="followup-count">{enquiry.followUpDate}</td>
              <td className="enquiry-actions">
                <Button className="btn call">
                  <Call /> Call
                </Button>
                <Button
                  className="btn register"

                  onClick={() => openRegisterForm(enquiry)}
                >
                  <PersonAdd /> Register
                </Button>
                <Button
                  className="btn close"
                  onClick={() => onClose(enquiry.id)}
                >
                  <Close /> Close
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="btn pagination-btn"
        >
          Previous
        </Button>
        <span className="page-info">Page {currentPage} of {totalPages}</span>
        <Button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="btn pagination-btn"
        >
          Next
        </Button>
      </div>
      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        maxWidth="md"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            overflow: 'hidden',
            padding: '20px',
          },
        }}
      >
        <DialogTitle>
          <IconButton
            edge="end"
            color="inherit"
            onClick={closeModal}
            aria-label="close"
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <RegistrationComponent selectedEnquiry={selectedEnquiry} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ListComponent;
