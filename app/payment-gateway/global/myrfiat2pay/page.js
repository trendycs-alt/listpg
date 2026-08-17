"use client";

import { useRouter } from "next/navigation";

export default function FIAT2PAY() {
  const router = useRouter();

  return (
    <div className="page">

      <button onClick={() => router.back()} className="back-button">
        ← Back
      </button>

      <div className="page-title-box">
        <h1><span className="fi fi-my" style={{ marginRight: "10px" }}></span>FIAT2PAY</h1>
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
          src="/FIAT2PAY-fee.png"
          alt="FIAT2PAY LOGO"
          className="responsive-img"
        />
      </div>

    </div>
  );
}