import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage";
import LoginSelection from "./components/LoginSelection";
import BuyerLogin from './pages/BuyerLogin';
import SellerLogin from './pages/SellerLogin';
import BothLogin from './pages/BothLogin';
import SignInPage from './pages/SignInPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginSelection />} />
        <Route path="/login/buyer" element={<BuyerLogin />} />
        <Route path="/login/seller" element={<SellerLogin />} />
        <Route path="/login/both" element={<BothLogin />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
