import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Halaman/HalamanLogin/HalamanLogin/Login";
import Dashboard from "./Halaman/Dashboard/Dashboard";
import UploadInfografis from "./Halaman/upload/uploadInfografis";
import DashboardUser from "./Halaman/User/DashboardUser";
import FileUpload from "./Halaman/upload/uploadFile";

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/uploadfile" element={<FileUpload />} />
          <Route path="/uploadinfografis" element={<UploadInfografis />} /> */}
          <Route path="/" element={<FileUpload />} />
          <Route path="/uploadfile" element={<FileUpload />} />
          <Route path="/uploadinfografis" element={<UploadInfografis />} />
          <Route path="/dashboarduser" element={<DashboardUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
