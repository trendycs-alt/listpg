"use client";

import { useRouter } from "next/navigation";

export default function UniPay() {
  const router = useRouter();

  return (
    <div className="page">
      <button onClick={() => router.back()} className="back-button">
        ← Back
      </button>

      <div className="page-title-box">
        <h1>UNIPAY</h1>
      </div>

      <div className="card dark-theme register-card">
        <div className="menu-group group-idr center-box">
          <div className="menu-link-row">
            <span className="menu-icon">👉</span>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeEhfw8o2Zn7_qiSYWyB4wvD4QH72aJxegM176TJ2HpO_u90g/viewform" target="_blank" rel="noopener noreferrer">
              Register Unipay
            </a>
          </div>
        </div>
      </div>

      <div className="card dark-theme">
        <h2>UNIPAY001</h2>
        <img
          src="/unipay001-fee.png"
          alt="UNIPAY001"
          className="responsive-img"
        />
      </div>

      <div className="card dark-theme">
        <h2>UNIPAY002</h2>
        <img
          src="/unipay002-fee.png"
          alt="UNIPAY002"
          className="responsive-img"
        />
      </div>

      <div className="card dark-theme">
        <h2>UNIPAY003</h2>
        <img
          src="/unipay003-fee.png"
          alt="UNIPAY003"
          className="responsive-img"
        />
      </div>

      <div className="card dark-theme">
        <h2>UNIPAY004</h2>
        <img
          src="/unipay004-fee.png"
          alt="UNIPAY004"
          className="responsive-img"
        />
      </div>
    </div>
  );
}