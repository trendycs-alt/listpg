"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function AutoWithdrawGuideline() {
  const [lang, setLang] = useState("id");
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [desktopSlot, setDesktopSlot] = useState(null);
  const [mobileSlot, setMobileSlot] = useState(null);

  const desktopSlotRef = useRef(null);
  const mobileSlotRef = useRef(null);

  const isID = lang === "id";

  useEffect(() => {
    const navbarInner = document.querySelector(".navbar-inner");
    const hamburger = document.querySelector(".hamburger");

    // DESKTOP slot: center absolute dalam navbar-inner
    if (navbarInner) {
      const div = document.createElement("div");
      div.className = "guideline-lang-desktop-slot";
      navbarInner.appendChild(div);
      desktopSlotRef.current = div;
      setDesktopSlot(div);
    }

    // MOBILE slot: sebelum hamburger (versi yang dah OK, tak diubah)
    if (navbarInner) {
      const div = document.createElement("div");
      div.className = "guideline-lang-mobile";
      if (hamburger) {
        navbarInner.insertBefore(div, hamburger);
      } else {
        navbarInner.appendChild(div);
      }
      mobileSlotRef.current = div;
      setMobileSlot(div);
    }

    return () => {
      desktopSlotRef.current?.remove();
      mobileSlotRef.current?.remove();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightboxSrc ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxSrc]);

  const langToggle = (
    <div className="guideline-lang-portal">
      <button className={isID ? "active" : ""} onClick={() => setLang("id")}>
        ID
      </button>
      <button className={!isID ? "active" : ""} onClick={() => setLang("en")}>
        EN
      </button>
    </div>
  );

  return (
    <>
  <div className="marquee-box">
    <span className="marquee-text">
      {isID ? (
        <>
      📢 🚨PG menggunakan jasa Pihak Ketiga 🚨 Mohon untuk tidak menjadikan PG sebagai rekening tampung 🚨
            Pembekuan UANG oleh Pihak Bank / Pihak Berwenang / Pihak PG ? 🚨
            Fraud QRIS & VA by member / Fraud by PG ? 
            <strong>⚠️⚠️⚠️⚠️⚠️⚠️ DI LUAR TANGGUNG JAWAB ENGINE ⚠️⚠️⚠️⚠️⚠️⚠️</strong>
            Semua Payment Gateway yang tersedia adalah sudah terverifikasi , NAMUN tetap terdapat kemungkinan akan adanya resiko yang tidak bisa diprediksi dan ENGINE tidak bertanggung jawab untuk hal ini
      </>
    ) : (
      <>
      📢 🚨PG is using 3rd Party service 🚨 Please do not keep your money inside PG 🚨
            FREEZING OF FUNDS by the Bank / Relevant Authorities / PG ? 🚨
            QRIS & VA fraud by members / fraud by PG ?
            <strong>⚠️⚠️⚠️⚠️⚠️⚠️ NOT ENGINE RESPONSIBILITY ⚠️⚠️⚠️⚠️⚠️⚠️</strong>
            All available Payment Gateway have been verified. HOWEVER, there is still a possibility of unforeseen risks, and ENGINE shall not be held responsible for any losses or issues arising from such risks
      </>
        )}
</span>
</div>
    <div className="guideline-page">

      {desktopSlot && createPortal(langToggle, desktopSlot)}
      {mobileSlot && createPortal(langToggle, mobileSlot)}

      {/* HEADER */}
      <header className="doc-header">
        <span className="doc-eyebrow">
          {lang === "id" ? "SYARAT & KETENTUAN" : "TERMS & CONDITIONS"}
        </span>
        <h1 className="doc-title">Auto Withdraw</h1>
      </header>

      {/* CONTENT */}
      <main className="guideline-content">

      <a href="/autowd/guideline"
  className="disclaimer-box guideline-disclaimer disclaimer-collapsed"
>
  <div className="disclaimer-icon">⚠️</div>
  <div style={{ flex: 1 }}>
    <div className="disclaimer-header">
      <p className="disclaimer-title">
        {lang === "id" ? "Tap untuk melihat Panduan Auto Withdraw" : "Tap to see Auto Withdraw Guideline"}
      </p>

      <span className="disclaimer-toggle">
        {lang === "id" ? " ▶️ (tap untuk detail)" : " ▶️ (tap for detail)"}
      </span>
    </div>
  </div>
</a>

          <div className="section-head">
            <span className="section-num">01</span>
            <h2>
              {isID ? "Ketersediaan Saldo PGA" : "Available PGA Balance"}
            </h2>
          </div>

          <div className="section-head">
            <span className="section-num">02</span>
            <h2>
              {isID
                ? "Bank Name dan Bank Code pada FML sudah sesuai dengan data member"
                : "Bank Name and Bank Code in FML match the member's bank details"}
            </h2>
          </div>

          <div className="section-head">
            <span className="section-num">03</span>
            <h2>{isID ? "On Withdraw Service telah diaktifkan" : "On Withdraw Service is enabled"}</h2>
          </div>
         
          <div className="section-head">
            <span className="section-num">04</span>
            <h2>
              {isID
                ? "Range Amount Withdraw telah diatur dengan benar"
                : "Range Amount Withdraw are configured properly"}
            </h2>
          </div>

        </main>

          {/* DISCLAIMER SECTION */}
<section className="section">
  <div className="disclaimer-final-box">
    <h3 className="disclaimer-final-title">
      {isID ? "Disclaimer :" : "Disclaimer:"}
    </h3>

    <p>
      {isID
        ? "Setiap transaksi Withdraw member yang diproses ke PGA akan muncul pada BackOffice / Dashboard PGA (Status transaksi pada PGA inilah yang akan menentukan transaksi tersebut berhasil terproses / tidak)."
        : "Every member Withdraw transaction processed to the PGA will appear on the PGA's BackOffice / Dashboard (the transaction status on the PGA is what determines whether the transaction was successfully processed or not)."}
    </p>

    <p className="disclaimer-final-highlight">
      {isID
        ? "Tidak disarankan untuk REJECT transaksi Auto WD yang sedang di proses ke PGA tanpa ada konfirmasi dari pihak PGA terlebih dahulu."
        : "It is not recommended to REJECT an Auto WD transaction that is being processed to the PGA without confirmation from the PGA first."}
    </p>

    <p className="disclaimer-final-highlight">
      {isID
        ? "Selalu kami himbau untuk konfirmasi kembali pada CS yang bertugas di dalam grup PGA masing-masing terkait transaksi yang sudah failed / gagal pada Dashboard PGA."
        : "We always advise reconfirming with the CS on duty in each PGA group regarding transactions that have failed on the PGA Dashboard."}
    </p>

    <p>
        {isID ? "Fee setiap Auto Withdraw PGA berbeda." : "The Auto Withdraw fee for each PGA is different."}
        <br />
        {isID
          ? <>Disarankan untuk cek pada Table Details PGA yang tersedia atau chat ke <strong>CS PGA</strong> yang bertugas. </>
          : <>It is recommended to check the available PGA Details Table or chat with the <strong>CS PGA</strong> on duty. </>}
    </p>    

    <p className="disclaimer-final-thanks">
      {isID ? "Terima kasih." : "Thank you."}
    </p>
  </div>
</section>



      <div className="info-box info-box-global">
      <div className="info-box-icon">i</div>
        <div>
          <p className="info-box-title">Note</p>
          <p className="info-box-text">
            {isID ? "Untuk informasi lebih lanjut, silakan hubungi team kami." : "For further information, please contact our team."}
          </p>
        </div>
      </div>
      

    </div>
  </>
);
}