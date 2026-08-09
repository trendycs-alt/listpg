"use client";

import { useRouter } from "next/navigation";

export default function ALCOPAY() {
  const router = useRouter();

  return (
    <div className="page">

      <button onClick={() => router.back()} className="back-button">
        ← Back
      </button>

      <div className="page-title-box">
        <h1>ALCOPAY</h1>
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
          src="/ALCOPAY-fee.png"
          alt="ALCOPAY LOGO"
          className="responsive-img"
        />
      </div>

    </div>
  );
}