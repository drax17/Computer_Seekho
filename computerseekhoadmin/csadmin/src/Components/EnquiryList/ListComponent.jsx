import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { Call, PersonAdd, Close } from "@mui/icons-material";
import "./ListComponent.css";

const ListComponent = ({ onClose }) => {
  const navigate = useNavigate();

  const[enquiries, setEnquiries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(enquiries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedEnquiries = enquiries.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/enquiry/all");
        if (!response.ok) throw new Error("Something went wrong!");
        const result = await response.json();
        setEnquiries(result);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchEnquiries();
  },[]);

  return (
    <div className="list-container">
      <h2 className="list-title">Enquiries</h2>
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
              <td className="followup-count">{enquiry.studentName || enquiry.enquirerName}</td>
              <td className="followup-count">{enquiry.courseName}</td>
              <td className="followup-count">{enquiry.enquirerMobile}</td>
              <td className="followup-count">{enquiry.followUpDate}</td>
              <td className="enquiry-actions">
                <Button className="btn call">
                  <Call /> Call
                </Button>
                <Button 
                  className="btn register" 
                  onClick={() => navigate("/register", { state: { enquiry } })}
                >
                  <PersonAdd /> Register
                </Button>
                <Button 
                  className="btn close" 
                  onClick={() => onClose(enquiry.id)}  // ✅ Close button works now
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
    </div>
  );
};

export default ListComponent;
