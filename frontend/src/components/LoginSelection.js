import React from "react";
import { useNavigate } from "react-router-dom";
import "./loginselection.css";

const RoleSelectionPage = () => {
  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    localStorage.setItem("selectedRole", role);
    navigate(`/login/${role}`); // 👈 Now navigates to /login/seller, /login/buyer, etc.
  };

  return (
    <div className="login-selection-container">
      <h2 className="choose-role-title">Choose Your Role</h2>

      <div className="roles-wrapper">
        {/* Seller Role */}
        <div className="role-box">
          <button className="circle-btn" onClick={() => handleRoleClick("seller")}>✔</button>
          <h3>Seller</h3>
          <p>💼 As a <strong>Seller</strong>, you can list your waste items (e.g., plastics, metals, e-waste) 
            for disposal. Recyclers will contact you and help manage it responsibly.
          </p> 
        </div>

        {/* Both Role */}
        <div className="role-box">
          <button className="circle-btn" onClick={() => handleRoleClick("both")}>✔</button>
          <h3>Both</h3>
          <p>🔁 If you're <strong>Both</strong> a seller and buyer, you can manage waste disposal and 
          purchase recycled materials—perfect for circular economy champions.
          </p>
        </div>

        {/* Buyer Role */}
        <div className="role-box">
          <button className="circle-btn" onClick={() => handleRoleClick("buyer")}>✔</button>
          <h3>Buyer</h3>
          <p>🛒 As a <strong>Buyer</strong>, you get access to a wide range of processed and eco-certified 
          materials ready to be reused in your industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionPage;
