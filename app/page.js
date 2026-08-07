import Link from "next/link";

export default function Home() {
  return (
    <div className="page">
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
              <Link href="/faq/auto-withdraw">Auto Withdraw Service - Payment Gateway</Link>
            </div>
          </div>

          <div className="menu-group group-robot">
            <div className="menu-title-row">
              <span className="menu-icon">🤖</span>
              <Link href="/robot/x24-robot">X24 ROBOT - Auto Deposit & Withdraw</Link>
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