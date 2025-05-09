// RecyclerDashboard.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RecyclerDashboard.css";

const RecyclerDashboard = () => {
  const [recyclerCompany, setRecyclerCompany] = useState("");
  const [recyclerPerson, setRecyclerPerson] = useState("");
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const company = localStorage.getItem("recyclerCompany");
    const person = localStorage.getItem("recyclerPerson");
    if (company && person) {
      setRecyclerCompany(company);
      setRecyclerPerson(person);
      fetchRequests(company, person);
    }
  }, []);

  const fetchRequests = async (company, person) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/requests/recycler/${company}/${person}`);
      setRequests(res.data.data);
    } catch (err) {
      console.error("Error fetching requests", err);
    }
  };

  const handleStatusUpdate = async (requestId, status) => {
    try {
      await axios.patch(`http://localhost:5000/api/requests/${requestId}`, { status });
      fetchRequests(recyclerCompany, recyclerPerson);
    } catch (err) {
      console.error("Error updating request", err);
    }
  };

  return (
    <div className="recycler-dashboard">
      <h2>Recycler Dashboard</h2>
      {requests.length === 0 ? (
        <p>No requests yet.</p>
      ) : (
        requests.map((req, index) => (
          <div key={index} className="request-card">
            <p><strong>From:</strong> {req.seller_email}</p>
            <p><strong>Waste:</strong> {req.waste_type}</p>
            <p><strong>Status:</strong> {req.status}</p>
            {req.status === "Pending" && (
              <div className="request-actions">
                <button
                  className="accept-button"
                  onClick={() => handleStatusUpdate(req.id, "Accepted")}
                >
                  Accept
                </button>
                <button
                  className="reject-button"
                  onClick={() => handleStatusUpdate(req.id, "Rejected")}
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default RecyclerDashboard;
