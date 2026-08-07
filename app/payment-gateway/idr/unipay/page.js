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

      <div className="card dark-theme">
        <h2>UNIPAY001</h2>
        <img
          src="/unipay001-fee.webp"
          alt="UNIPAY001"
          className="responsive-img"
        />
      </div>

      <div className="card dark-theme">
        <h2>UNIPAY002</h2>
        <img
          src="/unipay002-fee.webp"
          alt="UNIPAY002"
          className="responsive-img"
        />
      </div>

      <div className="card dark-theme">
        <h2>UNIPAY003</h2>
        <img
          src="/unipay003-fee.webp"
          alt="UNIPAY003"
          className="responsive-img"
        />
      </div>

      <div className="card dark-theme">
        <h2>UNIPAY004</h2>
        <img
          src="/unipay004-fee.webp"
          alt="UNIPAY004"
          className="responsive-img"
        />
      </div>
    </div>
  );
}