import React from "react";

function Ticket() {
  return (
    <div className="container">

      {/* Heading */}
      <div className="row">
        <h3 className="py-4 py-md-5 text-center text-md-start">
          To create a tickket, select relevant topic
        </h3>

        {/* Row 1 */}
        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <h6><i className="fa-solid fa-plus"></i> Account Opening</h6>

          <ul style={{ listStyle: "none", lineHeight: "30px" }}>
            <li><a href="#">Online Account Opening</a></li>
            <li><a href="#">Offline Account Opening</a></li>
            <li><a href="#">Company, Partnership and HUF Account Opening</a></li>
            <li><a href="#">NRI Account Opening</a></li>
            <li><a href="#">Charges at Zerodha</a></li>
            <li><a href="#">Zerodha IDFC FIRST Bank 3-in-1 Account</a></li>
            <li><a href="#">Getting Started</a></li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <h6><i className="fa-solid fa-user"></i> Your Zerodha Account</h6>

          <ul style={{ listStyle: "none", lineHeight: "30px" }}>
            <li><a href="#">Login Credentials</a></li>
            <li><a href="#">Account Modification and Segment Addition</a></li>
            <li><a href="#">DP ID and bank details</a></li>
            <li><a href="#">Your Profile</a></li>
            <li><a href="#">Transfer and conversion of shares</a></li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <h6><i className="fa-solid fa-chart-column"></i> Your Zerodha Account</h6>

          <ul style={{ listStyle: "none", lineHeight: "30px" }}>
            <li><a href="#">Margin/leverage, Product and Order types</a></li>
            <li><a href="#">Kite Web and Mobile</a></li>
            <li><a href="#">Trading FAQs</a></li>
            <li><a href="#">Corporate Actions</a></li>
            <li><a href="#">Sentinel</a></li>
            <li><a href="#">Kite API</a></li>
            <li><a href="#">Pi and other platforms</a></li>
            <li><a href="#">Stockreports+</a></li>
            <li><a href="#">GTT</a></li>
          </ul>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row py-3 py-md-4">

        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <h6><i className="fa-regular fa-credit-card"></i> Funds</h6>

          <ul style={{ listStyle: "none", lineHeight: "30px" }}>
            <li><a href="#">Adding Funds</a></li>
            <li><a href="#">Fund Withdrawal</a></li>
            <li><a href="#">eMandates</a></li>
            <li><a href="#">Adding Bank Accounts</a></li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <h6><i className="fa-regular fa-circle"></i> Console</h6>

          <ul style={{ listStyle: "none", lineHeight: "30px" }}>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Ledger</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">60 Day Challenge</a></li>
            <li><a href="#">IPO</a></li>
            <li><a href="#">Referral Program</a></li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <h6><i className="fa-regular fa-circle"></i> Coin</h6>

          <ul style={{ listStyle: "none", lineHeight: "30px" }}>
            <li><a href="#">Understanding Mutual Funds</a></li>
            <li><a href="#">About Coin</a></li>
            <li><a href="#">Buying and Selling MF</a></li>
            <li><a href="#">Starting an SIP</a></li>
            <li><a href="#">Managing your Portfolio</a></li>
            <li><a href="#">Coin App</a></li>
            <li><a href="#">Moving to Coin</a></li>
            <li><a href="#">Government Securities</a></li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default Ticket;