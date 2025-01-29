import React from "react";

const MarqueeHeader = () => {
  return (
    <div className="bg-blue-600 text-white py-2 overflow-hidden">
      <marquee behavior="scroll" direction="left" scrollamount="5">
        🎉 VITA Placements - 2025 Batch Hiring Started! Apply Now! 🎉
      </marquee>
    </div>
  );
};

export default MarqueeHeader;