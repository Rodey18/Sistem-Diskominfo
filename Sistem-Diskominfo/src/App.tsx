import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./Halaman/HalamanLogin/HalamanLogin/Login";
import Dashboard from "./Halaman/Dashboard/Dashboard";

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
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
