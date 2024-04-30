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
        <span className="judul">DataStat</span>
      </div>
      <div className="menu-slide">
        <Link to="/dashboard" className="menu-item">
          <IoIosHome />
          <span className="menu-text">Dashboard</span>
        </Link>
        <Link to="/upload" className="menu-item">
          <IoIosCloudUpload />
          <span className="menu-text">Data</span>
        </Link>
        <Link to="/" className="menu-item">
          <IoIosPeople />
          <span className="menu-text">Employee</span>
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
