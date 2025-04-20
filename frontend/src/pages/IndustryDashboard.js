// src/pages/IndustryDashboard.js
import React, { useState } from "react";

const IndustryDashboard = () => {
  const [wasteType, setWasteType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later: save wasteType to DB here
    console.log("Submitted Waste:", wasteType);
    setSubmitted(true);
  };

  return (
    <div className="dashboard">
      <h2>Industry Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <label>Select Waste Type:</label>
        <select value={wasteType} onChange={(e) => setWasteType(e.target.value)} required>
          <option value="">-- Select Waste --</option>
          <option value="Plastic">Plastic</option>
          <option value="Metal">Metal</option>
          <option value="Glass">Glass</option>
          <option value="E-waste">E-waste</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Waste submitted! Waiting for recycler response...</p>}
    </div>
  );
};

export default IndustryDashboard;
