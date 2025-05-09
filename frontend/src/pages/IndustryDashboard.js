// IndustryDashboard.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./IndustryDashboard.css";

const IndustryDashboard = () => {
  const [industryEmail, setIndustryEmail] = useState("");
  const [selectedWaste, setSelectedWaste] = useState([]);
  const [recyclers, setRecyclers] = useState([]);
  const [requests, setRequests] = useState([]);

  const allRecyclers = [
    { name: "Gravita India Ltd", person: "Rajat Agrawal (MD & CEO)", wastes: ["Metal", "Battery"] },
    { name: "Eco Recycling Ltd", person: "Suresh Kumar", wastes: ["Plastic", "E-waste"] },
    { name: "Toxic Waste Solution", person: "Meera Singh", wastes: ["Chemical", "E-waste"] },
    { name: "GreenTech", person: "Amit Sharma", wastes: ["Plastic", "Glass", "Organic"] }
  ];

  useEffect(() => {
    const email = localStorage.getItem("industryEmail");
    if (email) {
      setIndustryEmail(email);
      fetchRequests(email);
    }
  }, []);

  const fetchRequests = async (email) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/requests/industry/${email}`);
      setRequests(res.data.data);
    } catch (err) {
      console.error("Error fetching requests", err);
    }
  };

  const handleWasteSelect = (waste) => {
    const updated = selectedWaste.includes(waste)
      ? selectedWaste.filter((w) => w !== waste)
      : [...selectedWaste, waste];
    setSelectedWaste(updated);

    const filteredRecyclers = allRecyclers.filter((recycler) =>
      recycler.wastes.some((w) => updated.includes(w))
    );
    setRecyclers(filteredRecyclers);
  };

  const handleRequestSend = async (recycler) => {
    console.log("Sending request to:", recycler.name, recycler.person);

    try {
      await axios.post("http://localhost:5000/api/requests", {
        seller_email: industryEmail,
        waste_type: selectedWaste.join(", "),
        recycler_company: recycler.name,         // ✅ Correct value
        recycler_person: recycler.person         // ✅ Correct value
      });
      alert("Request sent!");
      fetchRequests(industryEmail);
    } catch (error) {
      console.error("Error sending request", error);
      alert("Failed to send request.");
    }
  };

  return (
    <div className="industry-dashboard">
      <h2>Industry Dashboard</h2>

      <h3>Select Wastes</h3>
      <div className="waste-options">
        {["Metal", "Plastic", "Glass", "Battery", "Organic", "E-waste", "Chemical"].map((waste, i) => (
          <button
            key={i}
            className={selectedWaste.includes(waste) ? "selected" : ""}
            onClick={() => handleWasteSelect(waste)}
          >
            {waste}
          </button>
        ))}
      </div>

      <h3>Matching Recyclers</h3>
      {recyclers.length === 0 ? (
        <p>No matching recyclers found.</p>
      ) : (
        recyclers.map((recycler, index) => (
          <div key={index} className="request-card">
            <p><strong>Company:</strong> {recycler.name}</p>
            <p><strong>Person:</strong> {recycler.person}</p>
            <button className="send-button" onClick={() => handleRequestSend(recycler)}>Send Request</button>
          </div>
        ))
      )}

      <h3>Request Status</h3>
      {requests.length === 0 ? (
        <p>No requests made yet.</p>
      ) : (
        requests.map((req, index) => (
          <div key={index} className="request-card">
            <p><strong>To:</strong> {req.recycler_company}</p>
            <p><strong>Person:</strong> {req.recycler_person}</p>
            <p><strong>Waste:</strong> {req.waste_type}</p>
            <p>
              <strong>Status:</strong>{" "}
              <span className={`status-badge status-${req.status.toLowerCase()}`}>{req.status}</span>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default IndustryDashboard;
