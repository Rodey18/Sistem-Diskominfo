import React from "react";
import {
  IoIosHome,
  IoIosCloudUpload,
  IoIosPeople,
  IoIosLogOut,
} from "react-icons/io";
import { Link } from "react-router-dom";

const SideMenuPage: React.FC = () => {
  return (
    <div className="container-menu">
      <div className="container-judul">
        <h1 className="judul">DataStat</h1>
      </div>
      <div className="menu-slide" style={{ margin: "70px" }}>
        <Link to="/dashboard" className="menu-item">
          <IoIosHome />
          <h5 className="menu-text">Dashboard</h5>
        </Link>
        <Link
          to="/upload"
          className="menu-item"
          style={{ marginBottom: "70px" }}
        >
          <IoIosCloudUpload />
          <h5 className="menu-text">Data</h5>
        </Link>
        <Link to="/" className="menu-item" style={{ margin: "70px" }}>
          <IoIosPeople />
          <h5 className="menu-text">Employee</h5>
        </Link>
      </div>
      <div className="akhir-slide">
        <Link to="/login" className="menu-item">
          <IoIosLogOut />
          <span className="menu-text">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default SideMenuPage;
