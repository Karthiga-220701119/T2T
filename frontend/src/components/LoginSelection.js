import React from "react";
import "./loginselection.css"; // Make sure to style it

const LoginSelection = () => {
  return (
    <div className="login-selection-container">
      <h2 className="choose-role-title">Choose Your Role</h2>
      <div className="roles-wrapper">

        {/* Seller Box */}
        <div className="role-box">
          <button className="circle-btn">
            ✔
          </button>
          <h3>Seller</h3>
          <p>Are you an industry looking to dispose of your waste responsibly? Join as a Seller and connect with recyclers.</p>
        </div>

        {/* Both Box */}
        <div className="role-box">
          <button className="circle-btn">
            ✔
          </button>
          <h3>Both</h3>
          <p>Need both selling and buying services? Choose this role to handle waste and buy recycled materials.</p>
        </div>

        {/* Buyer Box */}
        <div className="role-box">
          <button className="circle-btn">
            ✔
          </button>
          <h3>Buyer</h3>
          <p>Looking for recycled materials for your business? Join as a Buyer to explore reliable recyclers.</p>
        </div>
        
      </div>
    </div>
  );
};

export default LoginSelection;
