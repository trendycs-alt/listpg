export default function MNP() {
  return (
    <div className="page">

      <h1>MNP</h1>
      <div className="card">
        <p>Detail Fee & Lainnya bisa dilihat pada tabel dibawah ini.</p>
        <img
          src="/MNP-fee.webp"
          alt="MNP LOGO"
          className="responsive-img"
        />
      </div>

      <div className="register-box">
        <p className="register-label">📌 Untuk Pendaftaran Payment Gateway, silahkan gunakan tautan dibawah ini:</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfoIt1sc3wzYZzx0_CPGlnwO5VuE942NW__kkujOafHzsdIrA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="register-button"
        >
          Formulir Pendaftaran Payment Gateway IDR →
        </a>
      </div>
    </div>
  );
}