import React, { useState } from "react";
import './BatchwisePlacement.css'; // Import the CSS file
import PlacementCard from "./PlacementCard";

const BatchwisePlacement = () => {
  const [DBDAbatchData, setDBDAbatchData] = useState([
    { batch: "PG-DBDA March 2024", logo: "/DBDA/dbda_March24 (1).jpg", name: "Titans" },
    { batch: "PG-DBDA Aug 2019", logo: "/images/dbda2.png", name: "Blitzkrieg" },
    { batch: "PG-DAC Feb 2020", logo: "/images/dac1.png", name: "Comrades" },
  ]);

  const [DACbatchData, setDACbatchData] = useState([
    { batch: "PG-DAC May 2021", logo: "/images/dac1.png", name: "Warriors" },
    { batch: "PG-DAC Aug 2019", logo: "/images/dac2.png", name: "Gladiators" },
    { batch: "PG-DAC Feb 2020", logo: "/images/dac3.png", name: "Avengers" },
  ]);

  return (
    <div className="batchwise-placement-container">
      {/* PG-DBDA Section */}
      <h1>PG-DBDA Placement</h1>
      <div className="grid">
        {DBDAbatchData.map((item, index) => (
          <PlacementCard key={index} batch={item.batch} logo={item.logo} name={item.name} />
        ))}
      </div>

      {/* PG-DAC Section */}
      <h1>PG-DAC Placement</h1>
      <div className="grid">
        {DACbatchData.map((item, index) => (
          <PlacementCard key={index} batch={item.batch} logo={item.logo} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default BatchwisePlacement;