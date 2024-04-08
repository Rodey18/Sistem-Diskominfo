// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../../../Komponen/Button/Button";
// import './Login.css';
// import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import firebase from 'firebase/app';
// import 'firebase/auth';

// const Login: React.FC = () => {
//   const [inputStatus, setInputStatus] = useState<string>(""); // State untuk status input
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     const inputNip: string | null = (document.getElementById("nip-input") as HTMLInputElement)?.value;
//     const inputPassword: string | null = (document.getElementById("password-input") as HTMLInputElement)?.value;
  
//     try {
//       // Authentikasi dengan Firebase menggunakan email/password
//       const userCredential = await firebase.auth().signInWithEmailAndPassword(inputNip, inputPassword);
//       // Jika berhasil, pindahkan ke halaman dashboard
//       navigate("/dashboard");
//     } catch (error) {
//       // Jika gagal, tampilkan pesan error dan ubah status input
//       setInputStatus("incorrect");
//     }
//   };


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../Komponen/Button/Button";
import './Login.css';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Login: React.FC = () => {
  const [inputStatus, setInputStatus] = useState<string>(""); // State untuk status input
  const navigate = useNavigate();

  const handleLogin = () => {
    // Lakukan validasi NIP dan password
    const nip: string = "12345"; // Contoh NIP yang benar
    const password: string = "secret"; // Contoh password yang benar
  
    // Ambil nilai dari input NIP dan password
    const inputNip: string | null = (document.getElementById("nip-input") as HTMLInputElement)?.value;
    const inputPassword: string | null = (document.getElementById("password-input") as HTMLInputElement)?.value;
  
    if (inputNip === nip && inputPassword === password) {
      // Jika berhasil, pindahkan ke halaman dashboard
      navigate("/dashboard");
    } else {
      // Jika gagal, tampilkan pesan error dan ubah status input
      setInputStatus("incorrect");
    }
  };

  return (
    <div className="backcover">
      <div className="cover">
        <div className="Gambar">
          <img src="/image/LogoProv.png" alt="LogoProv" />
        </div>
        <h2 className="h2">Login as Admin</h2>
        <h5 className="h5">Welcome to the Admin Panel</h5>
        <input
          id="nip-input"
          type="text"
          placeholder="NIP"
          className={inputStatus === "incorrect" ? "incorrect" : ""}
        />
        <input
          id="password-input"
          type="password"
          placeholder="Password"
          className={inputStatus === "incorrect" ? "incorrect" : ""}
        />
        
        {inputStatus === "incorrect" && (
          <div className="error-message">
            <span>
              <FontAwesomeIcon icon={faExclamationCircle} />
            </span>
            <span className="error-text">Incorrect NIP or password.</span>
          </div>
        )}

        <Button onClick={handleLogin} className="login-button">
          Login
        </Button>

      </div>
    </div>
  );
};

export default Login;
