import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Halaman/HalamanLogin/HalamanLogin/Login";
import Dashboard from "./Halaman/Dashboard/Dashboard";
import Upload from "./Halaman/upload/uploadFIle";

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<Upload />} />
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
