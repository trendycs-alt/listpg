"use client";

import { useRouter } from "next/navigation";

export default function MNP() {
  const router = useRouter();

  return (
    <div className="page">

      <button onClick={() => router.back()} className="back-button">
        ← Back
      </button>

      <div className="page-title-box">
        <h1>MNP</h1>
      </div>

      <div className="card">
        <div className="menu-group group-idr center-box">
          <div className="menu-link-row">
            <span className="menu-icon">👉</span>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdK5thxl0GAO09hbLPhPi8DpyGKUOFDyNVISGc9DeC8omc9zQ/viewform" target="_blank" rel="noopener noreferrer">
              Register ( IDR )
            </a>
          </div>
        </div>
        <img
          src="/mnp-fee.webp"
          alt="MNP LOGO"
          className="responsive-img"
        />
      </div>

    </div>
  );
}