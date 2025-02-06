import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const ListComponent = ({ enquiries }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(enquiries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedEnquiries = enquiries.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Enquiries</h2>
      <div className="space-y-4">
        {displayedEnquiries.map((enquiry, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">{enquiry.name}</p>
              <p className="text-gray-600">{enquiry.details}</p>
            </div>
            <div className="space-x-2">
              <Button className="bg-blue-500 text-white">Call</Button>
              <Button className="bg-green-500 text-white">Register</Button>
              <Button className="bg-red-500 text-white">Close</Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-gray-500 text-white"
        >
          Previous
        </Button>
        <span>Page {currentPage} of {totalPages}</span>
        <Button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="bg-gray-500 text-white"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ListComponent;
