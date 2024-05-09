import React from "react";
import PrimarySearchAppBar from "../../Komponen/Header/Header";
import SideMenuPage from "../../Komponen/menu/menu";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      {/* <div className="header"> */}
      <PrimarySearchAppBar />
      {/* Component halaman */}
      <h2>ayam</h2>

      {/* </div> */}
      <div className="content">
        <div className="side-menu">
          <SideMenuPage />
          {/* Isi konten lainnya di sini */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
