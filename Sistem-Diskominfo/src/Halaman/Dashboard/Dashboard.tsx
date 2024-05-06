import React from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "../../Komponen/Header/Header";
import ResponsiveDrawer from "../../Komponen/menu/menu";

import "./Dashboard.css";

const Dashboard: React.FC = () => {
  // const navigate = useNavigate(); // Jika Anda akan menggunakan useNavigate, nanti bisa diaktifkan

  return (
    <div className="data-stat-container">
      {/* <Header /> */}
      <ResponsiveDrawer />
      <div className="main-content"></div>
    </div>
  );
};

export default Dashboard;
