import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "/BatchwisePlacement.css";

const BatchwisePlacement = () => {
    const [batches, setBatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBatches = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/placement/getAll");

                if (!response.ok) {
                    throw new Error("Failed to fetch batch data");
                }

                const data = await response.json();

                console.log("sjdfdksjfhsdfsdjf", {data});

                setBatches(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Error fetching batches:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBatches();
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <p className="error">{error}</p>;
    }

    if (batches.length === 0) {
        return <p className="no-data">No batches found</p>;
    }
    // console.log(batches)
         
    const handleNavigate = (batchId) => {
        navigate(`/Placedstudent/${batchId}`);
    };
    return (
        <div className="container">
            <h2 className="title">PLACEMENTS</h2>
            <div className="grid-container">
                {batches.map((batch) => (
                    <div key={batch.batchId} className="card">
                        <img src={"https://th.bing.com/th/id/OIP.CA-d-tldf-MSNEwosqKEugHaEo?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"} alt={batch.batchName} className="card-img" />
                        <div className="card-body">
                            <button className="btn" onClick={() => handleNavigate(batch.batchId)}>
                                {batch.batchName}
                            </button>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BatchwisePlacement;