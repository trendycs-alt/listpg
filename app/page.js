"use client";
import Link from "next/link";
import { useState } from "react";
// ...
function DisclaimerBox() {
  const [expanded, setExpanded] = useState(false);
  const [lang, setLang] = useState("id"); // "id" atau "en"

  return (
    <div className={`disclaimer-box ${expanded ? "disclaimer-expanded" : ""}`}>
      <div className="disclaimer-icon">⚠️</div>
      <div style={{ flex: 1 }}>
      <div className="disclaimer-header">
        <p className="disclaimer-title"
           onClick={() => setExpanded(!expanded)}
            style={{ cursor: "pointer" }}
        >
          {lang === "id" ? "HIMBAUAN PENTING" : "IMPORTANT NOTICE"}
      <span className="disclaimer-toggle">
      {expanded
      ? lang === "id"
    ? " ▲ (tap untuk sembunyikan)"
    : " ▲ (tap to hide)"
  : lang === "id"
  ? " ▼ (tap untuk baca)"
  : " ▼ (tap to read)"}
      </span>
      </p>
          <button
            className="lang-toggle-btn"
            onClick={(e) => {
              e.stopPropagation();
              setLang(lang === "id" ? "en" : "id");
            }}
          >
            {lang === "id" ? "EN" : "ID"}
          </button>
        </div>

        {lang === "id" ? (
          <>

    <p className="disclaimer-text">
🚨PG menggunakan jasa Pihak Ketiga , Mohon untuk tidak menjadikan PG sebagai rekening tampung 🚨
</p>
  <p className="disclaimer-text" style={{ marginTop: "1rem" }}>
Pembekuan UANG oleh Pihak Bank / Pihak Berwenang / Pihak PG ?
</p>
  <p className="disclaimer-text" style={{ marginTop: "0.1rem" }}>
Fraud QRIS & VA by member / Fraud by PG ?
</p>
  <p className="disclaimer-text" style={{ marginTop: "1rem" }}>
<strong>⚠️ DI LUAR TANGGUNG JAWAB ENGINE&nbsp;⚠️</strong>
</p>
  <p className="disclaimer-text" style={{ marginTop: "1rem" }}>
Semua PG yang tersedia adalah sudah terverifikasi , NAMUN tetap terdapat kemungkinan akan adanya resiko yang tidak bisa diprediksi dan ENGINE tidak bertanggung jawab untuk hal ini
        </p>
        </>
        ) : (
          <>
    <p className="disclaimer-text">
🚨PG is using 3rd Party service , Please do not keep your money inside PG 🚨
</p>
  <p className="disclaimer-text" style={{ marginTop: "1rem" }}>
FREEZING OF FUNDS by the Bank / Relevant Authorities / PG ?
</p>
  <p className="disclaimer-text" style={{ marginTop: "0.1rem" }}>
QRIS & VA fraud by members / fraud by PG ?
</p>
  <p className="disclaimer-text" style={{ marginTop: "1rem" }}>
<strong>⚠️ NOT ENGINE RESPONSIBILITY&nbsp;⚠️</strong>
</p>
  <p className="disclaimer-text" style={{ marginTop: "1rem" }}>
All available PG have been verified. HOWEVER, there is still a possibility of unforeseen risks, and ENGINE shall not be held responsible for any losses or issues arising from such risks
        </p>
        </>
      )}
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <div className="page">
      <DisclaimerBox />
      <div className="hero-row">
        <div className="menu-column">
          <div className="menu-group group-idr">
            <div className="menu-title-row">
              <span className="menu-icon">🚩</span>
              <Link href="/payment-gateway/idr">List Payment Gateway IDR</Link>
            </div>
            <div className="menu-link-row">
              <span className="menu-icon">👉</span>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfoIt1sc3wzYZzx0_CPGlnwO5VuE942NW__kkujOafHzsdIrA/viewform" target="_blank" rel="noopener noreferrer">
                Register ( IDR )
              </a>
            </div>
          </div>

          <div className="menu-group group-global">
            <div className="menu-title-row">
              <span className="menu-icon">🌐</span>
              <Link href="/payment-gateway/global">List Payment Gateway GLOBAL</Link>
            </div>
            <div className="menu-link-row">
              <span className="menu-icon">👉</span>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdK5thxl0GAO09hbLPhPi8DpyGKUOFDyNVISGc9DeC8omc9zQ/viewform" target="_blank" rel="noopener noreferrer">
                Register ( GLOBAL )
              </a>
            </div>
          </div>

          <div className="menu-group group-faq">
            <div className="menu-title-row">
              <span className="menu-icon">🔺</span>
              <Link href="/autowd/guideline">Auto Withdraw Service - Payment Gateway</Link>
            </div>
          </div>

          <div className="menu-group group-robot">
            <div className="menu-title-row">
              <span className="menu-icon">🤖</span>
              <Link href="/BOTX24">X24 ROBOT - Auto Deposit & Withdraw</Link>
            </div>
            <div className="menu-link-row">
              <span className="menu-icon">👉</span>
              <a href="https://daftar-x24-link.com" target="_blank" rel="noopener noreferrer">
                Register ( X24 )
              </a>
            </div>
          </div>
        </div>
        <img
          src="/banner-pga.png"
          alt="Banner"
          className="responsive-img hero-banner-side"
        />
      </div>
    </div>
  );
}