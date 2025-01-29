import React, { useState } from "react";
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
    <div className="container mx-auto p-6">
      {/* PG-DBDA Section */}
      <h1 className="text-2xl font-bold text-center text-blue-600">PG-DBDA Placement</h1>
      <div className="grid grid-cols-3 gap-6 mt-6">
        {DBDAbatchData.map((item, index) => (
          <PlacementCard key={index} batch={item.batch} logo={item.logo} name={item.name} />
        ))}
      </div>

      {/* PG-DAC Section */}
      <h1 className="text-2xl font-bold text-center text-blue-600 mt-10">PG-DAC Placement</h1>
      <div className="grid grid-cols-3 gap-6 mt-6">
        {DACbatchData.map((item, index) => (
          <PlacementCard key={index} batch={item.batch} logo={item.logo} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default BatchwisePlacement;
