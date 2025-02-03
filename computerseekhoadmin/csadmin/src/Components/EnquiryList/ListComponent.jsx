import React, { useState } from "react";
import Button from "./Button";
import { Call, PersonAdd, Close } from "@mui/icons-material"; // Import Material-UI Icons
import "./ListComponent.css"; // Import CSS file

const ListComponent = ({ enquiries }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(enquiries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedEnquiries = enquiries.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="list-container">
      <h2 className="list-title">Enquiries</h2>
      <table className="enquiry-table">
        <thead>
          <tr>
            <th className="enquiry-header">Enquiry</th>
            <th className="enquiry-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayedEnquiries.map((enquiry, index) => (
            <tr key={index} className="enquiry-row">
              <td className="enquiry-details">{enquiry.name} - {enquiry.details}</td>
              <td className="enquiry-actions">
                <Button className="btn call">
                  <Call /> Call
                </Button>
                <Button className="btn register">
                  <PersonAdd /> Register
                </Button>
                <Button className="btn close">
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
