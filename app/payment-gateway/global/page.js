import Link from "next/link";
import { globalProviders } from "../../../data/global-providers";

// Helper: aman dipakai walau value undefined/null
function safeIncludes(value, keyword) {
  return typeof value === "string" && value.includes(keyword);
}

// Mapping kode currency -> kode negara (dipakai flag-icons, format ISO 3166-1 alpha-2).
// Tambah baris baru di sini kalau nanti ada currency lain.
const CURRENCY_COUNTRY = {
  THB: "th", // Thailand
  MYR: "my", // Malaysia
  VND: "vn", // Vietnam
  AUD: "au", // Australia
  HKD: "hk", // Hongkong
  BRL: "br", // Brazil
  INR: "in", // India
  BDT: "bd", // Bangladesh
  PKR: "pk", // Pakistan
  KES: "ke", // Kenya
  PHP: "ph", // Philippines
};

// Bendera kecil di depan nama provider (gantiin bulatan hijau)
function ProviderFlag({ currencyCode = "" }) {
  const countryCode = CURRENCY_COUNTRY[currencyCode];
  if (!countryCode) return <span>🟢</span>; // fallback kalau currency belum ada di mapping
  return (
    <span
      className={`fi fi-${countryCode}`}
      style={{ marginRight: "6px" }}
    />
  );
}

// Kolom Currency: teks polos, tanpa bendera
function CurrencyText({ code = "" }) {
  return <span>{code}</span>;
}

// Pill hijau/merah untuk Auto Withdraw & USDT Settlement
function StatusCell({ value = "" }) {
  if (safeIncludes(value, "No Support")) {
    return <span className="pill pill-danger">{value}</span>;
  }
  return <span className="pill pill-ok">{value}</span>;
}

export default function PaymentGatewayGlobal() {
  return (
    <div className="page">
      <h1>Payment Gateway List - GLOBAL</h1>
      <div className="card table-card table-card-global">
        <table className="pga-table pga-table-global">
          <thead>
            <tr>
              <th>No</th>
              <th>PG Provider</th>
              <th>Currency</th>
              <th>Settlement</th>
              <th>Fee QR & Bank ( % )</th>
              <th>Auto Withdraw</th>
              <th>USDT Settlement</th>
            </tr>
          </thead>
          <tbody>
            {globalProviders.map((p) => (
              <tr key={p.no} className={p.highlight ? "row-highlight" : ""}>
                <td>{p.no}</td>
                <td>
                  {p.path ? (
                    <Link href={p.path}>
                      <ProviderFlag currencyCode={p.Currency} /> {p.name}
                    </Link>
                  ) : (
                    <span>
                      <ProviderFlag currencyCode={p.Currency} /> {p.name}
                    </span>
                  )}
                </td>
                <td>
                  <CurrencyText code={p.Currency} />
                </td>
                <td>{p.Settlement}</td>
                <td>{p.fee}</td>
                <td>
                  <StatusCell value={p.autoWithdraw} />
                </td>
                <td>
                  <StatusCell value={p.usdtSettlement} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Versi mobile: card per provider */}
        <div className="pga-cards">
          {globalProviders.map((p) => (
            <div key={p.no} className={`pga-card ${p.highlight ? "card-highlight" : ""}`}>
              <div className="pga-card-header">
                <span className="pga-card-no">{p.no}.</span>
                {p.path ? (
                  <Link href={p.path} className="pga-card-name">
                    <ProviderFlag currencyCode={p.Currency} /> {p.name}
                  </Link>
                ) : (
                  <span className="pga-card-name">
                    <ProviderFlag currencyCode={p.Currency} /> {p.name}
                  </span>
                )}
              </div>
              <div className="pga-card-body">
                <div>
                  <span className="pga-card-label">Currency</span>
                  <CurrencyText code={p.Currency} />
                </div>
                <div>
                  <span className="pga-card-label">Settlement</span>
                  <span>{p.Settlement}</span>
                </div>
                <div>
                  <span className="pga-card-label">Fee QR & Bank ( % )</span>
                  <span>{p.fee}</span>
                </div>
                <div>
                  <span className="pga-card-label">Auto Withdraw</span>
                  <StatusCell value={p.autoWithdraw} />
                </div>
                <div>
                  <span className="pga-card-label">USDT Settlement</span>
                  <StatusCell value={p.usdtSettlement} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="info-box">
        <div className="info-box-icon">i</div>
        <div>
          <p className="info-box-title">Keterangan</p>
          <p className="info-box-text">
            Untuk informasi lebih lanjut, silakan hubungi team kami.
          </p>
        </div>
      </div>
    </div>
  );
}