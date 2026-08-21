import Link from "next/link";
import { idrProviders } from "../../../data/idr-providers";

function SettlementPill({ value }) {
  const isRealtime = value.includes("Realtime");
  return (
    <span className={`pill ${isRealtime ? "pill-realtime" : "pill-ok"}`}>
      {isRealtime && "⚡ "}
      {value}
    </span>
  );
}

function safeIncludes(value, keyword) {
  return typeof value === "string" && value.includes(keyword);
}

function FeeVACell({ value = "" }) {
  if (safeIncludes(value, "No Support")) {
    return <span className="pill pill-danger">{value}</span>;
  }
  return <span className="pill pill-ok">{value}</span>;
}

export default function PaymentGatewayIDR() {
  return (
    <>
    <div className="marquee-box">
      <span className="marquee-text">
      📢 🚨PG menggunakan jasa Pihak Ketiga 🚨 Mohon untuk tidak menjadikan PG sebagai rekening tampung 🚨
Pembekuan UANG oleh Pihak Bank / Pihak Berwenang / Pihak PG ? 🚨
Fraud QRIS & VA by member / Fraud by PG ? 
<strong>⚠️⚠️⚠️⚠️⚠️⚠️ DI LUAR TANGGUNG JAWAB ENGINE ⚠️⚠️⚠️⚠️⚠️⚠️</strong>
Semua Payment Gateway yang tersedia adalah sudah terverifikasi , NAMUN tetap terdapat kemungkinan akan adanya resiko yang tidak bisa diprediksi dan ENGINE tidak bertanggung jawab untuk hal ini
      </span>
</div>
    <div className="page">
      <h1>List Payment Gateway - IDR</h1>
      <div className="card table-card">
        <table className="pga-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Provider PG</th>
              <th>Settlement</th>
              <th>Fee Qris ( % )</th>
              <th>Fee VA ( IDR & % )</th>
              <th>Auto Withdraw Service</th>
              <th>Pre Settlement Weekend / Libur / Pinjaman</th>
            </tr>
          </thead>
          <tbody>
            {idrProviders.map((p) => (
              <tr key={p.no} className={p.highlight ? "row-highlight" : ""}>
                <td>{p.no}</td>
                <td>
                  {p.path ? (
                    <Link href={p.path}>🟢 {p.name}</Link>
                  ) : (
                    <span>🟢 {p.name}</span>
                  )}
                </td>
                <td>
                  <SettlementPill value={p.Settlement} />
                </td>
                <td>{p.feeQris}</td>
                <td>
                <FeeVACell value={p.feeVA} />
                </td>
                <td>{p.autoWithdraw}</td>
                <td className={p.preSettlement.includes("Tidak ada settlement") ? "cell-tidak-ada-settlement" : ""}>
                  {p.preSettlement}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Versi mobile: card per provider */}
        <div className="pga-cards">
          {idrProviders.map((p) => (
            <div key={p.no} className={`pga-card ${p.highlight ? "card-highlight" : ""}`}>
              <div className="pga-card-header">
                <span className="pga-card-no">{p.no}.</span>
                {p.path ? (
                  <Link href={p.path} className="pga-card-name">🟢 {p.name}</Link>
                ) : (
                  <span className="pga-card-name">🟢 {p.name}</span>
                )}
              </div>
              <div className="pga-card-body">
                <div>
                  <span className="pga-card-label">Settlement</span>
                  <SettlementPill value={p.Settlement} />
                </div>
                <div>
                  <span className="pga-card-label">Fee Qris</span>
                  <span>{p.feeQris}</span>
                </div>
                <div>
                  <span className="pga-card-label">Fee VA</span>
                  <FeeVACell value={p.feeVA} />
                </div>
                <div>
                 <span className="pga-card-label">Auto Withdraw</span>
                  <span>{p.autoWithdraw}</span>
                </div>
                <div>
                  <span className="pga-card-label">Pre Settlement</span>
                  <span className={p.preSettlement.includes("Tidak ada settlement") ? "cell-tidak-ada-settlement" : ""}>
                    {p.preSettlement}
                  </span>
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
  </>
  );
}