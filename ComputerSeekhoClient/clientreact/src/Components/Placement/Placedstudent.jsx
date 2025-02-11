import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import './Placedstudent.css';
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";

const Placedstudent = () => {
    const [PlacedstudentList, setPlacedstudentList] = useState([]);
    const { batchId } = useParams();
    console.log(batchId);

    // Fetch staff data from the backend
    useEffect(() => {
        const fetchPlacedstudent = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/student/getById/${batchId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
    
                if (!response.ok) {
                    throw new Error("Failed to Fetch");
                }
    
                const data = await response.json();
                console.log("API Response:", data);
    
                const formattedStudents = Array.isArray(data)
                    ? data.map((Placedstudent) => ({
                          name: Placedstudent.studentName,
                          img: Placedstudent.photoUrl,
                          company: Placedstudent.recruiterName
                      }))
                    : [{
                          name: data.studentName,
                          img: data.photoUrl,
                          company: data.recruiterName
                      }];
    
                setPlacedstudentList(formattedStudents);
            } catch (error) {
                console.error("Error Fetching Data", error);
            }
        };
    
        fetchPlacedstudent();
    }, []);
    console.log(PlacedstudentList)
    return (
        <div>
    <div className="wrapper">
        {PlacedstudentList.length > 0 ? (
            PlacedstudentList.map((student, index) => (
                <div key={index} className="card">
                    <img src={student.img} alt="Student" />
                    <div className="info">
                        <h1>{student.name}</h1>
                        <p>{student.company || "Company not provided"}</p>
                    </div>
                </div>
            ))
        ) : (
            <p>No students found</p>
        )}
    </div>


            {/* <Footer /> */}
        </div>
    );
}

export default Placedstudent;