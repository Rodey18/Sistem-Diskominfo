import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Komponen/Button/Button";
import "./uploadFile.css";

const FileUpload: React.FC = () => {
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [kontak, setKontak] = useState("");
  const [penanggung, setpj] = useState("");
  const [value, setValue] = useState("");
  const [datset, setDatset] = useState("");
  const [Metdat, setMetdat] = useState("");
  const [penyajian, setPenyajian] = useState("");

  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    // Lakukan sesuatu dengan file yang di-drop di sini
    if (validateForm()) {
      // Proses file
    } else {
      alert("Harap isi semua judul sebelum mengirim file.");
    }
  };

  const validateForm = () => {
    return judul !== "" && deskripsi !== ""; // ... (validasi lainnya)
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="unggahedit">
        <button style={{ marginRight: "15px" }}>
          <Link to="">Unggah Dokumen</Link>
        </button>
        <button>
          <Link to="">Edit Dokumen</Link>
        </button>
      </div>
      <div className="buttonDating">
        <Button style={{ marginRight: "15px" }}>
          <Link to="/uploadfile">Dataset</Link>
        </Button>
        <Button>
          <Link to="/uploadinfografis">Infografis</Link>
        </Button>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "0 0 30%" }}>
          <div className="Kiri" style={{ marginTop: "20px" }}>
            <div>
              <h6 className="judul">Judul</h6>
              <input
                type="text"
                placeholder="Input di sini"
                className="input-placeholder" // Apply CSS class
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
              />
            </div>
            <div>
              <h6 className="judul">Deskripsi</h6>
              <input
                type="text"
                placeholder="Input di sini"
                className="input-placeholder" // Apply CSS class
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              />
            </div>
            <div>
              <h6 className="judul">Kontak Produsen</h6>
              <input
                type="text"
                placeholder="Input di sini"
                className="input-placeholder"
                value={kontak}
                onChange={(e) => setKontak(e.target.value)}
              />
            </div>
            <div>
              <h6 className="judul">Penanggung Jawab</h6>
              <input
                type="text"
                placeholder="Input di sini"
                className="input-placeholder"
                value={penanggung}
                onChange={(e) => setpj(e.target.value)}
              />
            </div>
            <div>
              <h6 className="judul">value</h6>
              <input
                type="text"
                placeholder="Input di sini"
                className="input-placeholder"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div>
              <h6 className="judul">Satuan Dataset</h6>
              <input
                type="text"
                placeholder="Input di sini"
                className="input-placeholder"
                value={datset}
                onChange={(e) => setDatset(e.target.value)}
              />
            </div>
            <div>
              <h6 className="judul">Frekuensi Pengambilan Meta Data</h6>
              <input
                type="text"
                placeholder="Input di sini"
                className="input-placeholder"
                value={Metdat}
                onChange={(e) => setMetdat(e.target.value)}
              />
            </div>
            <div>
              <h6 className="judul">Tingkat Pennyajian Meta Data</h6>
              <input
                type="text"
                placeholder="Input di sini"
                className="input-placeholder"
                value={penyajian}
                onChange={(e) => setPenyajian(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div style={{ flex: "0 0 30%", marginLeft: "auto" }}>
          <div
            className="kotakdragdrop"
            onDrop={handleFileDrop}
            onDragOver={handleDragOver}
            style={{
              border: "2px dashed #ccc",
              padding: "20px",
              textAlign: "center",
              height: "200px",
              width: "200px",
              borderRadius: "10px",
              margin: "20px",
            }}
          >
            <FontAwesomeIcon
              className="dragdropicon"
              icon={faCloudArrowUp}
              style={{ fontSize: "70px" }}
            />
            <h4 className="dragdrop">Drag & drop</h4>
            <h6 className="fromdevices">or select files from device</h6>
          </div>
          <Button
            className="buttonkirim"
            style={{ backgroundColor: "blue", color: "white" }}
          >
            Kirim
          </Button>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "0 0 30%" }}></div>
        <div style={{ flex: "0 0 30%", marginLeft: "auto" }}></div>
      </div>
    </div>
  );
};

export default FileUpload;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
// import Button from "../../Komponen/Button/Button";
// import "./uploadFile.css";

// const FileUpload: React.FC = () => {
//   const [judul, setJudul] = useState("");
//   const [deskripsi, setDeskripsi] = useState("");
//   const [kontak, setKontak] = useState("");
//   const [penanggung, setpj] = useState("");
//   const [value, setValue] = useState("");
//   const [datset, setDatset] = useState("");
//   const [Metdat, setMetdat] = useState("");
//   const [penyajian, setPenyajian] = useState("");

//   const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//     // Lakukan sesuatu dengan file yang di-drop di sini
//     if (validateForm()) {
//       // Proses file
//     } else {
//       alert("Harap isi semua judul sebelum mengirim file.");
//     }
//   };

//   const validateForm = () => {
//     return judul !== "" && deskripsi !== ""; // ... (validasi lainnya)
//   };

//   const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//   };

//   return (
//     <div>
//       <div className="unggahedit">
//         <button style={{ marginRight: "15px" }}>
//           <Link to="">Unggah Dokumen</Link>
//         </button>
//         <button>
//           <Link to="">Edit Dokumen</Link>
//         </button>
//       </div>
//       <div className="buttonDating">
//         <Button style={{ marginRight: "15px" }}>
//           <Link to="uploadfile">Dataset</Link>
//         </Button>
//         <Button>
//           <Link to="uploadinfografis">Infografis</Link>
//         </Button>
//       </div>
//       <div style={{ display: "flex" }}>
//         <div style={{ flex: "0 0 30%" }}>
//           <div className="Kiri" style={{ marginTop: "20px" }}>
//             <div>
//               <h6 className="judul">Judul</h6>
//               <input
//                 type="text"
//                 placeholder="Input di sini"
//                 className="input-placeholder" // Apply CSS class
//                 value={judul}
//                 onChange={(e) => setJudul(e.target.value)}
//               />
//             </div>
//             <div>
//               <h6 className="judul">Deskripsi</h6>
//               <input
//                 type="text"
//                 placeholder="Input di sini"
//                 className="input-placeholder" // Apply CSS class
//                 value={deskripsi}
//                 onChange={(e) => setDeskripsi(e.target.value)}
//               />
//             </div>
//             <div>
//               <h6 className="judul">Kontak Produsen</h6>
//               <input
//                 type="text"
//                 placeholder="Input di sini"
//                 className="input-placeholder"
//                 value={kontak}
//                 onChange={(e) => setKontak(e.target.value)}
//               />
//             </div>
//             <div>
//               <h6 className="judul">Penanggung Jawab</h6>
//               <input
//                 type="text"
//                 placeholder="Input di sini"
//                 className="input-placeholder"
//                 value={penanggung}
//                 onChange={(e) => setpj(e.target.value)}
//               />
//             </div>
//             <div>
//               <h6 className="judul">value</h6>
//               <input
//                 type="text"
//                 placeholder="Input di sini"
//                 className="input-placeholder"
//                 value={value}
//                 onChange={(e) => setValue(e.target.value)}
//               />
//             </div>
//             <div>
//               <h6 className="judul">Satuan Dataset</h6>
//               <input
//                 type="text"
//                 placeholder="Input di sini"
//                 className="input-placeholder"
//                 value={datset}
//                 onChange={(e) => setDatset(e.target.value)}
//               />
//             </div>
//             <div>
//               <h6 className="judul">Frekuensi Pengambilan Meta Data</h6>
//               <input
//                 type="text"
//                 placeholder="Input di sini"
//                 className="input-placeholder"
//                 value={Metdat}
//                 onChange={(e) => setMetdat(e.target.value)}
//               />
//             </div>
//             <div>
//               <h6 className="judul">Tingkat Pennyajian Meta Data</h6>
//               <input
//                 type="text"
//                 placeholder="Input di sini"
//                 className="input-placeholder"
//                 value={penyajian}
//                 onChange={(e) => setPenyajian(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>
//         <div style={{ flex: "0 0 30%", marginLeft: "auto" }}>
//           <div
//             className="kotakdragdrop"
//             onDrop={handleFileDrop}
//             onDragOver={handleDragOver}
//             style={{
//               border: "2px dashed #ccc",
//               padding: "20px",
//               textAlign: "center",
//               height: "200px",
//               width: "200px",
//               borderRadius: "10px",
//               margin: "20px",
//             }}
//           >
//             <FontAwesomeIcon
//               className="dragdropicon"
//               icon={faCloudArrowUp}
//               style={{ fontSize: "70px" }}
//             />
//             <h4 className="dragdrop">Drag & drop</h4>
//             <h6 className="fromdevices">or select files from device</h6>
//           </div>
//           <Button
//             className="buttonkirim"
//             style={{ backgroundColor: "blue", color: "white" }}
//           >
//             Kirim
//           </Button>
//         </div>
//       </div>
//       <div style={{ display: "flex" }}>
//         <div style={{ flex: "0 0 30%" }}></div>
//         <div style={{ flex: "0 0 30%", marginLeft: "auto" }}></div>
//       </div>
//     </div>
//   );
// };

// export default FileUpload;
