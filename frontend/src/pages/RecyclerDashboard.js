// src/pages/RecyclerDashboard.js
import React, { useState } from "react";

const RecyclerDashboard = () => {
  const [requests, setRequests] = useState([
    { id: 1, industry: "ABC Industries", waste: "Plastic", status: "" },
    { id: 2, industry: "XYZ Corp", waste: "Metal", status: "" },
  ]);

  const handleResponse = (id, decision) => {
    const updatedRequests = requests.map((req) =>
      req.id === id ? { ...req, status: decision } : req
    );
    setRequests(updatedRequests);
    // Later: Save decision to DB
  };

  return (
    <div className="dashboard">
      <h2>Recycler Dashboard</h2>
      {requests.map((req) => (
        <div key={req.id} className="request-box">
          <p><b>Industry:</b> {req.industry}</p>
          <p><b>Waste:</b> {req.waste}</p>
          <p><b>Status:</b> {req.status || "Pending"}</p>
          {req.status === "" && (
            <>
              <button onClick={() => handleResponse(req.id, "Accepted")}>Accept</button>
              <button onClick={() => handleResponse(req.id, "Rejected")}>Reject</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecyclerDashboard;
