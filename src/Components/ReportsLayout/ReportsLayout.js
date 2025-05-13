import React from "react";
import doctorsData from "../../doctors.json";
import report1PDF from "./patient_report_1.pdf";
import report2PDF from "./patient_report_2.pdf";
import "./ReportsLayout.css";

const ReportsLayout = () => {
    const getReportPDF = (index) => {
        return index % 2 === 0 ? report1PDF : report2PDF;
    };

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
                    {doctorsData.map((doctor, index) => {
                        const reportPDF = getReportPDF(index);
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <a href={reportPDF} target="_blank" rel="noopener noreferrer" className="view-button">
                                        View Report
                                    </a>
                                </td>
                                <td>
                                    <a href={reportPDF} download={`patient_report_${index + 1}.pdf`} className="download-button">
                                        Download Report
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ReportsLayout;