// import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import Header from "../../Komponen/Header/Header";
// import ResponsiveDrawer from "../../Komponen/menu/menu";

// import "./Dashboard.css";

// const Dashboard: React.FC = () => {
//   // const navigate = useNavigate(); // Jika Anda akan menggunakan useNavigate, nanti bisa diaktifkan

//   return (
//     <div className="data-stat-container">
//       {/* <Header /> */}
//       <ResponsiveDrawer />
//       <div className="main-content"></div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import { Box } from "@mui/material";
import PrimarySearchAppBar from "../../Komponen/Header/Header";
import SideMenuPage from "../../Komponen/menu/menu";

const Dashboard: React.FC = () => {
  return (
    <Box>
      <PrimarySearchAppBar />
      <Box sx={{ display: "flex" }}>
        <SideMenuPage />
        <Box sx={{ flexGrow: 1 }}></Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
