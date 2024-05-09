import React, { useState } from "react";
import PrimarySearchAppBar from "../../Komponen/Header/Header";
import SideMenuPage from "../../Komponen/menu/menu";
import "./profile.css";
import Button from "../../Komponen/Button/Button";

const Profile: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result as string;
        setImageSrc(imageDataUrl);
      };
      reader.readAsDataURL(file);
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    // Lakukan logika upload ke server di sini
    console.log("Mengunggah file:", selectedFile);
  };

  return (
    <div className="dashboard-container">
      {/* header */}
      <PrimarySearchAppBar />
      {/* Component halaman */}
      <div className="Card-judul-admin">
        <h4 className="judul">Profile Admin</h4>
      </div>
      <div className="atas-profile">
        {/* Identitas */}
        <div className="identitas">
          <h6 className="identitas-admin">Nama</h6>
          <h6 className="identitas-admin">Nip</h6>
        </div>
        {/* Foto */}
        <div className="foto">
          <input
            type="file"
            title="Upload Photo"
            accept="image/*"
            onChange={handleFileChange}
          />
          {imageSrc && (
            <div
              style={{
                position: "relative",
                width: "25cm",
                height: "25cm",
                overflow: "hidden",
              }}
            >
              <img
                src={imageSrc}
                alt="Uploaded"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "1px solid black",
                  boxSizing: "border-box",
                }}
              ></div>
            </div>
          )}
          <Button
            className="Unggah-foto"
            onClick={handleUpload}
            disabled={!selectedFile}
          >
            Unggah Foto
          </Button>
        </div>
        <div className="side-menu">
          <SideMenuPage />
          {/* Isi konten lainnya di sini */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
