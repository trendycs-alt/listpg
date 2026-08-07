"use client";

import { useRouter } from "next/navigation";

export default function MPAY234() {
  const router = useRouter();

  return (
    <div className="page">

      <button onClick={() => router.back()} className="back-button">
        ← Back
      </button>

      <div className="page-title-box">
        <h1>MPAY234</h1>
      </div>

      <div className="card dark-theme">
        <div className="menu-group group-idr center-box">
          <div className="menu-link-row">
            <span className="menu-icon">👉</span>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfoIt1sc3wzYZzx0_CPGlnwO5VuE942NW__kkujOafHzsdIrA/viewform" target="_blank" rel="noopener noreferrer">
                Register ( IDR )
            </a>
          </div>
        </div>
        <img
          src="/MPAY234-fee.webp"
          alt="MPAY234 LOGO"
          className="responsive-img"
        />
      </div>

    </div>
  );
}