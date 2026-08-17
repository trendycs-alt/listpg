"use client";

import { useRouter } from "next/navigation";

export default function STARPAGO() {
  const router = useRouter();

  return (
    <div className="page">

      <button onClick={() => router.back()} className="back-button">
        ← Back
      </button>

      <div className="page-title-box">
        <h1><span className="fi fi-br" style={{ marginRight: "10px" }}></span>STARPAGO</h1>
      </div>

      <div className="card dark-theme">
        <div className="menu-group group-idr center-box">
          <div className="menu-link-row">
            <span className="menu-icon">👉</span>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdK5thxl0GAO09hbLPhPi8DpyGKUOFDyNVISGc9DeC8omc9zQ/viewform" target="_blank" rel="noopener noreferrer">
                Register ( Global )
            </a>
          </div>
        </div>
        <img
          src="/STARPAGO-fee.png"
          alt="STARPAGO LOGO"
          className="responsive-img"
        />
      </div>

    </div>
  );
}