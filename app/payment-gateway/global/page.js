import Link from "next/link";

export default function PaymentGatewayGlobal() {
  return (
    <div className="page">
      <h1>Payment Gateway - Global</h1>
      <div className="card">
        <h2>Thailand</h2>
        <ul className="link-list">
          <li><Link href="/payment-gateway/global/thailand/vaderpay">VaderPay</Link></li>
        </ul>

        <h2>Malaysia</h2>
        <ul className="link-list">
          <li><Link href="/payment-gateway/global/malaysia/tongspay">TongsPay</Link></li>
        </ul>
      </div>
    </div>
  );
}
