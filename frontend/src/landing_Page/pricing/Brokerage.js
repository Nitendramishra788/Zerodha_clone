import React from "react";

function Brokerage() {
  return (
    <div className="container p-5 mt-5">
      <div className="row text-center ms-2">
        <div className="col">
          <img src="media/images/pricing0.svg" />
          <h3>Free equity delivery</h3>
          <p style={{ color: "gray" }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col">
          <img src="media/images/intradayTrades.svg" />
          <h3>Intraday and F&O trades</h3>
          <p style={{ color: "gray" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col">
          <img src="media/images/pricing0.svg" />
          <h3>Free direct MF</h3>
          <p style={{ color: "gray" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>

        
        <hr></hr>
        
      </div>
      <div className="row p-5">
          <div className="col">
            <h4 style={{color:"#387ed1"}}>Brokerage calculator</h4>
            <ul style={{lineHeight:"40px"}}>
              <li>
                Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
                GST per order.
              </li>
              <li>Digital contract notes will be sent via e-mail.</li>
              <li>
                Physical copies of contract notes, if required, shall be charged
                ₹20 per contract note. Courier charges apply.
              </li>
              <li>
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                For NRI account (PIS), 0.5% or ₹200 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h4 style={{color:"#387ed1"}}>List of charges</h4>
          </div>
        </div>
    </div>
  );
}

export default Brokerage;
