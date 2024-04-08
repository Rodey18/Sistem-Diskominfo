import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Komponen/Header/Header"; // Mengimpor komponen header
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
  
      <div className="data-stat-container">

      {/* Main Content */}
      <div className="main-content">
        {/* Tampilkan komponen header di sini */}
        <Header />

        
      {/* Sidebar */}
      <div className="sidebar">
        <div className="nav-item">Dashboard</div>
        <div className="nav-item">Data</div>
        <div className="nav-item">Employee</div>
        <div className="nav-item">Logout</div>
      </div>

        {/* Line Graphs */}
        <div className="line-graph">
          {/* Visitors Count Graph */}
          {/* Upload History Graph */}
        </div>

        {/* Admin Actions History */}
        <div className="admin-actions">
          <table>
            <thead>
              <tr>
                <th>Admin Name</th>
                <th>Reference Value</th>
                <th>Date</th>
                <th>Deleted</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hera</td>
                <td>menerima file dari diskominfo</td>
                <td>2017-11-27</td>
                <td></td>
              </tr>
              {/* Other rows */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
