import Link from "next/link";
import { idrProviders } from "../../../data/idr-providers";

export default function PaymentGatewayIDR() {
  return (
    <div className="page">
      <h1>List Payment Gateway - IDR</h1>
      <div className="card table-card">
        <table className="pga-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Provider PGA</th>
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
                <td className={p.Settlement.includes("Realtime") ? "cell-realtime" : ""}>
                    {p.Settlement}
                </td>
                <td>{p.feeQris}</td>
                <td className={p.feeVA.includes("No Support") ? "cell-no-support" : ""}>
                    {p.feeVA}
                </td>
                <td className={p.autoWithdraw.includes("No Support") ? "cell-no-support" : ""}>
                    {p.autoWithdraw}
                </td>
                <td className={p.preSettlement.includes("Tidak ada settlement") ? "cell-tidak-ada-settlement" : ""}>
                    {p.preSettlement}</td>
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
                  <span className={p.Settlement.includes("Realtime") ? "cell-realtime" : ""}>
                    {p.Settlement}
                  </span>
                </div>
                <div>
                  <span className="pga-card-label">Fee Qris</span>
                  <span>{p.feeQris}</span>
                </div>
                <div>
                  <span className="pga-card-label">Fee VA</span>
                  <span className={p.feeVA.includes("No Support") ? "cell-no-support" : ""}>
                    {p.feeVA}
                  </span>
                </div>
                <div>
                  <span className="pga-card-label">Auto Withdraw</span>
                  <span className={p.autoWithdraw.includes("No Support") ? "cell-no-support" : ""}>
                    {p.autoWithdraw}
                  </span>
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
    </div>
  );
}