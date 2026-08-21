"use client";

import { useState } from "react";
import Link from "next/link";
import { globalProviders } from "../../../data/global-providers";

function safeIncludes(value, keyword) {
  return typeof value === "string" && value.includes(keyword);
}

const CURRENCY_COUNTRY = {
  THB: "th",
  MYR: "my",
  VND: "vn",
  AUD: "au",
  HKD: "hk",
  BRL: "br",
  INR: "in",
  BDT: "bd",
  PKR: "pk",
  KES: "ke",
  PHP: "ph",
};

function ProviderFlag({ currencyCode = "" }) {
  const countryCode = CURRENCY_COUNTRY[currencyCode];
  if (!countryCode) return <span>🟢</span>;
  return (
    <span className={`fi fi-${countryCode}`} style={{ marginRight: "6px" }} />
  );
}

function CurrencyText({ code = "" }) {
  return <span>{code}</span>;
}

function StatusCell({ value = "" }) {
  if (safeIncludes(value, "No Support")) {
    return <span className="pill pill-danger">{value}</span>;
  }
  return <span className="pill pill-ok">{value}</span>;
}

export default function PaymentGatewayGlobal() {
  const [selectedCurrency, setSelectedCurrency] = useState("ALL");

  const currencyList = ["ALL", ...new Set(globalProviders.map((p) => p.Currency))];

  const filteredProviders =
    selectedCurrency === "ALL"
      ? globalProviders
      : globalProviders.filter((p) => p.Currency === selectedCurrency);

  return (
    <>
    <div className="marquee-box">
      <span className="marquee-text">
      📢 🚨PG is using 3rd Party service 🚨 Please do not keep your money inside PG 🚨
            FREEZING OF FUNDS by the Bank / Relevant Authorities / PG ? 🚨
            QRIS & VA fraud by members / fraud by PG ?
            <strong>⚠️⚠️⚠️⚠️⚠️⚠️ NOT ENGINE RESPONSIBILITY ⚠️⚠️⚠️⚠️⚠️⚠️</strong>
            All available Payment Gateway have been verified. HOWEVER, there is still a possibility of unforeseen risks, and ENGINE shall not be held responsible for any losses or issues arising from such risks
      </span>
</div>

    <div className="page">
      <h1>Payment Gateway List - GLOBAL</h1>
      <div className="currency-filter">
        {currencyList.map((cur) => (
          <button
            key={cur}
            className={`filter-btn ${selectedCurrency === cur ? "filter-btn-active" : ""}`}
            onClick={() => setSelectedCurrency(cur)}
          >
            {cur}
          </button>
        ))}
      </div>

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
            {filteredProviders.map((p, index) => (
              <tr key={p.no} className={p.highlight ? "row-highlight" : ""}>
              <td>{index + 1}</td>
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

        <div className="pga-cards">
          {filteredProviders.map((p, index) => (
            <div key={p.no} className={`pga-card ${p.highlight ? "card-highlight" : ""}`}>
            <div className="pga-card-header">
            <span className="pga-card-no">{index + 1}.</span>
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

      <div className="info-box info-box-global">
        <div className="info-box-icon">i</div>
        <div>
          <p className="info-box-title">Note</p>
          <p className="info-box-text">
            For further information, please contact our team.
          </p>
        </div>
      </div>
    </div>
  </>
  );
}