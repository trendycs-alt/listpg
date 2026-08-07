import Link from "next/link";

export default function MNP() {
  return (
    <div className="page">

      <Link href="/payment-gateway/idr" className="back-button">
        ← Back
      </Link>

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
          src="/MNP-fee.webp"
          alt="MNP LOGO"
          className="responsive-img"
        />
      </div>

    </div>
  );
}