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
      </div>
    </div>
  );
}