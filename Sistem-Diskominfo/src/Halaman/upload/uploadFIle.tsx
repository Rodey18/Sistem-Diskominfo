import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const UploadFile: React.FC = () => {
  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    // Lakukan sesuatu dengan file yang di-drop di sini
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <div>
        <button>
          <Link to="/dataset">Dataset</Link>
        </button>
        <button>
          <Link to="/infografis">Infografis</Link>
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "0 0 30%" }}>Selamat Datang</div>
        <div style={{ flex: "0 0 30%", marginLeft: "auto" }}>
          <div
            onDrop={handleFileDrop}
            onDragOver={handleDragOver}
            style={{
              border: "2px dashed #ccc",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faCloudArrowUp}
              style={{ fontSize: "50px" }}
            />
            <p>Drag & drop file di sini</p>
          </div>
          Selamat Berjuang
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
