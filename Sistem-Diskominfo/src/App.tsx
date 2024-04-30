import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Halaman/HalamanLogin/HalamanLogin/Login";
import Dashboard from "./Halaman/Dashboard/Dashboard";
import UploadFile from "./Halaman/upload/uploadFIle";
import UploadInfografis from "./Halaman/upload/uploadInfografis";
import DashboardUser from "./Halaman/User/DashboardUser";

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/uploadfile" element={<UploadFile />} />
          <Route path="/uploadinfografis" element={<UploadInfografis />} />
          <Route path="/dashboarduser" element={<DashboardUser />} />
        </Routes>

        {/* <Routes> 
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
