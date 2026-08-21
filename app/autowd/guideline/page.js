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
          {lang === "id" ? "PANDUAN" : "GUIDELINE"}
        </span>
        <h1 className="doc-title">Auto Withdraw</h1>
      </header>

      {/* CONTENT */}
      <main className="guideline-content">

      <a href="/autowd/termsandconditions"
  className="disclaimer-box guideline-disclaimer disclaimer-collapsed"
>
  <div className="disclaimer-icon">⚠️</div>
  <div style={{ flex: 1 }}>
    <div className="disclaimer-header">
      <p className="disclaimer-title">
        {lang === "id" ? "SYARAT DAN KETENTUAN AUTO WITHDRAW" : "TERMS AND CONDITIONS OF AUTO WITHDRAW"}
      </p>

      <span className="disclaimer-toggle">
        {lang === "id" ? " ▶️ (tap untuk detail)" : " ▶️ (tap for detail)"}
      </span>
    </div>
  </div>
</a>

        {/* SECTION 1 */}
        <section className="section">
          <div className="section-head">
            <span className="section-num">01</span>
            <h2>
              {isID ? "Aktifkan On Withdraw Service" : "Enable On Withdraw Service"}
            </h2>
          </div>

          <p>
            {isID
              ? "Sebelum terdapat transaksi masuk, pastikan fitur On Withdraw Service telah diaktifkan."
              : "Before any incoming transactions, make sure the On Withdraw Service feature has been enabled."}
          </p>

          <p>
            {isID
              ? "Tersedia 2 metode proses transaksi Withdraw :"
              : "There are 2 available methods for processing Withdraw transactions :"}
          </p>

          <ul>
            <li>
              <strong>Manual Confirm</strong>{" "}
              <strong>{isID ? "( Aktifkan On Withdraw Service )" : "( Enable On Withdraw Service )"}</strong>
            </li>
          </ul>

          <div className="shot-card">
            <img
              src="/ONWDSERVICE-CENTANG.webp"
              alt="Withdraw Service"
              onClick={() => setLightboxSrc("/ONWDSERVICE-CENTANG.webp")}
            />
          </div>

          <div className="note-inline">
            <span>⚠️</span>
            <span>
              <strong>{isID ? "Note:" : "Note:"}</strong>{" "}
              {isID
                ? "Admin perlu melakukan klik CONFIRM secara manual dan memilih Payment Type: Payment Gateway → Agar transaksi diteruskan ke PGA."
                : "Admin needs to manually click CONFIRM and select Payment Type: Payment Gateway → so the transaction is forwarded to the PGA."}
            </span>
          </div>

          <div className="shot-card">
            <img
              src="/MANUALCONFIRM.webp"
              alt="Confirm Process"
              onClick={() => setLightboxSrc("/MANUALCONFIRM.webp")}
            />
          </div>

          <ul>
            <li>
              <strong>Auto Confirm</strong>{" "}
              <strong>{isID
                ? "( Aktifkan On Withdraw Service dan Auto Withdraw Service )"
                : "( Enable On Withdraw Service and Auto Withdraw Service )"}
                </strong>
            </li>
          </ul>

          <div className="shot-card">
            <img
              src="/AUTOWDSERVICE-CENTANG.webp"
              alt="Auto Withdraw Service"
              onClick={() => setLightboxSrc("/AUTOWDSERVICE-CENTANG.webp")}
            />
          </div>

          <div className="note-inline">
            <span>⚠️</span>
            <span>
              <strong>{isID ? "Note:" : "Note:"}</strong>{" "}
              {isID
                ? "Form transaksi withdraw member akan langsung diteruskan ke PGA secara otomatis. Tidak diperlukan proses klik Confirm secara manual."
                : "Withdrawal requests will be automatically sent to the PGA. No manual confirmation is required."}
            </span>
          </div>

        </section>

        {/* SECTION 2 */}
        <section className="section">

          <div className="section-head">
            <span className="section-num">02</span>
            <h2>
              {isID
                ? "Hanya Satu PGA Auto WD yang Dapat Aktif dalam Satu Waktu"
                : "Only One Auto Withdraw PGA Can Be Active at a Time"}
            </h2>
          </div>

          <p>
            {isID
              ? "Sistem tidak mendukung penggunaan Auto Withdraw pada dua PGA secara bersamaan."
              : "The system does not support activating Auto Withdraw for multiple PGAs simultaneously."}
          </p>

          <ul>
            <li>
              <p>
                <strong>{isID
                  ? "Apabila PGA x sedang aktif untuk Auto WD, kemudian PGA z diaktifkan tanpa mematikan PGA x terlebih dahulu, maka :"
                  : "If PGA x is currently active and PGA z is enabled without disabling PGA x first :"}
                </strong>
              </p>
              <ul>
                <li>
                  <p>
                    {isID
                      ? "PGA x akan otomatis menjadi OFF."
                      : "PGA x will be turned OFF automatically."}
                  </p>
                </li>
                <li>
                  <p>
                    {isID
                      ? "PGA z akan langsung menjadi ON."
                      : "PGA z will become ON immediately."}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        
        <div className="note-inline">
            <span>⚠️</span>
            <span>
              <strong>{isID ? "Note:" : "Note:"}</strong>{" "}
              {isID
                ? "Pastikan PGA yang ingin digunakan untuk Auto Withdraw telah dipilih dengan benar sebelum mengaktifkan layanan."
                : "Please ensure that the correct PGA is selected before enabling Auto Withdraw."}
            </span>
          </div>

        </section>

        {/* SECTION 3 */}
        <section className="section">
          <div className="section-head">
            <span className="section-num">03</span>
            <h2>{isID ? "Setup Fund Method Listing (FML)" : "Setup Fund Method Listing (FML)"}</h2>
          </div>
          <p>{isID ? "Sebelum menggunakan Auto Withdraw PGA, pastikan seluruh bank dan ewallet yang digunakan telah didaftarkan pada menu Fund Method Listing (FML)." : "Before using Auto Withdraw, all supported banks and ewallet must be configured in the Fund Method Listing (FML) menu."}</p>
        <ul>
            <li>
              <strong>{isID
                ? "Ketentuan Bank Name dan Ewallet Name"
                : "Bank Name dan Ewallet Name Requirements"}</strong>
            </li>
          </ul>
          <p>{isID 
          ? "Nama bank pada FML harus sama persis dengan nama bank pada transaksi withdraw member."
          : "The Bank Name in FML must match the member's bank name exactly."}
          </p>
          
          <div className="example-list">
          <p>{isID 
          ? "Contoh :"
          : "For Example :"}
          </p>
          <p>{isID 
          ? "✅ Bank Name pada FML X member : (Seabank X Seabank) atau (Sea Bank X Sea Bank)"
          : "✅ Both FML and member Bank Name : (Seabank X Seabank) or (Sea Bank X Sea Bank)"}
          </p>
          <p>{isID 
          ? "✅ Bank Name pada FML X member : (Shopeepay X Shopeepay) atau (Shopee pay X Shopee pay)"
          : "✅ Both FML and member Bank Name : (Shopeepay X Shopeepay) or (Shopee pay X Shopee pay)"}
          </p>
          <p>{isID 
          ? "❌ Bank Name pada FML X member : (Seabank X Sea bank) atau (Sea Bank X SeaBank)"
          : "❌ Both FML and member Bank Name : (Seabank X Sea bank) or (Sea Bank X SeaBank"}
          </p>
          <p>{isID 
          ? "❌ Bank Name pada FML X member : (Shopeepay X Shopee pay) atau (Shopee pay X Shopeepay)"
          : "❌ Both FML and member Bank Name : (Shopeepay X Shopee pay) or (Shopee pay X Shopeepay)"}
          </p>
          </div>

          <div className="note-inline">
            <span>⚠️</span>
            <span>
              <strong>{isID ? "Note:" : "Note:"}</strong>{" "}
              {isID
                ? "Perbedaan penulisan nama bank dapat menyebabkan transaksi WD tidak dapat diproses ke PGA dan transaksi umumnya berwarna putih."
                : "Any difference in bank name format may cause Auto WD transactions to fail and transactions normally show White Colour."}
            </span>
          </div>

          <ul>
            <li>
              <strong>{isID
                ? "Ketentuan Bank Code"
                : "Bank Code Requirements"}</strong>
            </li>
          </ul>

          <p>{isID 
          ? "Pastikan Bank Code yang diisi sesuai dengan Bank Name yang dibuat pada FML."
          : "Please ensure that the Bank Code is correctly assigned according to the corresponding Bank Name."}
          </p>

        <div className="shot-card">
            <img
              src="/FMLBANK.webp"
              alt="Auto Withdraw Service"
              onClick={() => setLightboxSrc("/FMLBANK.webp")}
            />
          </div>

          <div className="shot-card">
            <img
              src="/FMLEWALLET.png"
              alt="Auto Withdraw Service"
              onClick={() => setLightboxSrc("/FMLEWALLET.png")}
            />
          </div>

        <div className="note-inline">
            <span>⚠️</span>
            <span>
              <strong>{isID ? "Note:" : "Note:"}</strong>{" "}
              {isID
                ? "Bank Code yang salah dapat menyebabkan transaksi tidak berhasil diproses oleh PGA."
                : "An Incorrect Bank Code may cause the transaction to be unsuccessfully processed by PGA."}
            </span>
          </div>
        </section>

      {/* SECTION 4 */}
        <section className="section">

          <div className="section-head">
            <span className="section-num">04</span>
            <h2>
              {isID
                ? "Range Amount Auto Withdraw"
                : "Auto Withdraw Transaction Amount Range"}
            </h2>
          </div>

          <p>{isID 
          ? "Nominal transaksi yang dapat diproses menggunakan Auto Withdraw PGA ditentukan oleh :"
          : "The transaction amount eligible for Auto Withdraw is determined by :"}
          </p>

            <div className="example-list">
          <ul>
            <li>
              <p>
              <strong>{isID
                ? "Standar minimum dan maksimum nominal dari masing-masing PGA."
                : "The PGA provider's minimum and maximum transaction limits."}</strong>
                </p>
                <p>{isID 
                ? "( silakan merujuk pada tabel fee Auto WD masing-masing PGA )"
                : "( Please refer to the Auto WD fee table for each PGA before configuring the ranges )"}
                </p>
            </li>
          </ul>
          <ul>
            <li>
              <p>
              <strong>{isID
                ? "Pengaturan Range Amount yang diset oleh agent pada admin panel."
                : "The Range Amount settings configured by the agent in the admin panel."}</strong>
              </p>
              <ul>
            <li>
              <p>
                {isID
                ? "Withdraw Amount Range - Click Confirm range Auto WD"
                : "Withdraw Amount Range - Transactions that can be processed by a PGA after clicking button Confirm"}
              </p>
              </li>
            <li>
              <p>
                {isID
                ? "Auto Withdraw Amount Range - Without Click Confirm range Auto WD"
                : "Auto Withdraw Amount Range - Transactions that can be processed automatically by a PGA without clicking button Confirm"}
              </p>
              </li>
            </ul>
            </li>
            </ul>
            </div>

          <p>{isID 
          ? "Transaksi di luar range yang ditentukan tidak dapat diproses ke PGA."
          : "Transactions outside the configured range will not be processed through Auto Withdraw."}
          </p>

          <p><strong>{isID 
          ? "Contoh / Gambaran Cara Setting dan Hasilnya :"
          : "Example Configuration and the Result :"}</strong>
          </p>

          <div className="shot-card">
            <img
              src="/RANGEAMOUNT.webp"
              alt="Auto Withdraw Service"
              onClick={() => setLightboxSrc("/RANGEAMOUNT.webp")}
            />
          </div>

          <div className="example-list">
          <p><strong>{isID 
          ? "Pada gambar di atas dapat disimpulkan bahwa :"
          : "From the image above, we can conclude that:"}</strong>
          </p>

          <ul>
            <li>
              <p>{isID 
                ? "Standar min dan max dari PGA / Default withdraw amount range"
                : "Default Withdraw Amount Range ( PGA Standard )"}
              </p>
              <p><strong>{isID
                ? "20,000 - 50,000,000"
                : "20,000 - 50,000,000"}</strong>
              </p>
            </li>
            <li>
              <p>{isID
                ? "Standar yang ditentukan AGENT untuk dapat terproses ke PGA"
                : "Transactions within this range can be processed by a PGA after clicking button Confirm."}
              </p>
              <p><strong>{isID
                ? "20,000 - 35,000,000 ( saat click Confirm akan muncul opsi PGA )"
                : "20,000 - 35,000,000"}</strong>
              </p>
            </li>
            <li>
              <p>{isID
                ? "Range yang dapat langsung terproses ke PGA tanpa Click Confirm"
                : "Transactions within this range will be processed automatically by the PGA without clicking buttton Confirm."}
              </p>
              <p><strong>{isID
                ? "20,000 - 10,000,000"
                : "20,000 - 10,000,000"}</strong>
              </p>
            </li>
          </ul>

              <p><strong>{isID
                ? "Maka :"
                : "Therefore :"}</strong>
              </p>
          </div>
          <p></p>
          <div className="example-list">
          <p><strong>{isID 
          ? "Form WD yang akan langsung terproses oleh PGA tanpa perlu Click Confirm"
          : "Auto-Processed by the PGA (No Click Confirm Required)"}</strong>
          </p>
          <p>{isID 
          ? "✅ Form WD member dengan Amount 20,000 (Form berwarna Orange)"
          : "✅ Member withdrawal amount: 20,000 (Orange form)"}
          </p>
          <p>{isID 
          ? "✅ Form wd member dengan Amount 10,000,000 (Form berwarna Orange)"
          : "✅ Member withdrawal amount: 10,000,000 (Orange form)"}
          </p>
          </div>
          <p></p>
          <div className="example-list">
          <p><strong>{isID 
          ? "Form WD yang perlu Click Confirm dahulu dan pilih proses oleh PGA"
          : "Requires Click Confirm Before Being Processed by the PGA"}</strong>
          </p>
          <p>{isID 
          ? "✅ Form WD member dengan Amount 10,000,001 (Form berwarna Abu)"
          : "✅ Member withdrawal amount: 10,000,001 (Gray form)"}
          </p>
          <p>{isID 
          ? "✅ Form wd member dengan Amount 35,000,000 (Form berwarna Abu)"
          : "✅ Member withdrawal amount: 35,000,000 (Gray form)"}
          </p>
          </div>
          <p></p>
          <div className="example-list">
          <p><strong>{isID 
          ? "Form WD yang tidak dapat diproses oleh PGA sehingga harus Proses Manual"
          : "Cannot Be Processed by the PGA , must be processed manually"}</strong>
          </p>
          <p>{isID 
          ? "❌ Form WD member dengan Amount 19,999 (Form berwarna Putih)"
          : "❌ Member withdrawal amount: 19,999 (White form)"}
          </p>
          <p>{isID 
          ? "❌ Form WD member dengan Amount 35,000,001 (Form berwarna Putih)"
          : "❌ Member withdrawal amount: 35,000,001 (White form)"}
          </p>
          </div>

          <div className="note-inline">
            <span>⚠️</span>
            <span>
              <strong>{isID ? "Note:" : "Note:"}</strong>{" "}
              {isID
                ? "Semua pengaturan yang diperlukan harus sudah terupdate sebelum transaksi masuk agar Auto WD dapat bekerja dengan baik."
                : "All required settings must be updated before the transaction comes in to ensure that Auto WD can work properly."}
            </span>
          </div>
      </section>
      </main>

      <div className="info-box info-box-global">
      <div className="info-box-icon">i</div>
        <div>
          <p className="info-box-title">Note</p>
          <p className="info-box-text">
            {isID ? "Untuk informasi lebih lanjut, silakan hubungi team kami." : "For further information, please contact our team."}
          </p>
        </div>
      </div>
      {/* LIGHTBOX */}
      {lightboxSrc && (
        <div className="lightbox-overlay" onClick={() => setLightboxSrc(null)}>
          <button className="lightbox-close" onClick={() => setLightboxSrc(null)}>
            ✕
          </button>
          <img
            src={lightboxSrc}
            alt=""
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  </>
);
}