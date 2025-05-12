import React from "react";
import doctorsData from "../../doctors.json";
import "./ReportsLayout.css";

const ReportsLayout = () => {
    return (
        <div className="reports-container">
            <h2>Reports</h2>
            <table className="reports-table">
                <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Doctor Name</th>
                        <th>Doctor Specialty</th>
                        <th>View Report</th>
                        <th>Download Report</th>
                    </tr>
                </thead>
                <tbody>
                    {doctorsData.map((doctor, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{doctor.name}</td>
                            <td>{doctor.specialty}</td>
                            <td>
                                <button className="view-button">View Report</button>
                            </td>
                            <td>
                                <button className="download-button">Download Report</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReportsLayout;