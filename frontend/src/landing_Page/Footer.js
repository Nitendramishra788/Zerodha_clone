import React from "react";

function Footer() {
  return (
    <div style={{ backgroundColor: "#f7f7f7" }}>
      <hr />

      <div className="container mt-5">
        <div className="row">

          {/* Logo Section */}
          <div className="col-lg-3 col-md-6 col-12 mt-5 text-center text-md-start">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              className="img-fluid"
              style={{ maxWidth: "150px" }}
            />

            <p className="mt-3">
              © 2010 - 2026, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="row mt-4 text-center text-md-start">
              <div className="col"><a href="#"><i className="fa-brands fa-x-twitter"></i></a></div>
              <div className="col"><a href="#"><i className="fa-brands fa-square-facebook"></i></a></div>
              <div className="col"><a href="#"><i className="fa-brands fa-instagram"></i></a></div>
              <div className="col"><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></div>
            </div>

            <hr className="mt-3" />

            <div className="row text-center text-md-start">
              <div className="col"><a href="#"><i className="fa-brands fa-youtube"></i></a></div>
              <div className="col"><a href="#"><i className="fa-brands fa-whatsapp"></i></a></div>
              <div className="col"><a href="#"><i className="fa-brands fa-telegram"></i></a></div>
            </div>

            {/* App buttons */}
            <div className="row mt-4 align-items-center text-center text-md-start">
              <div className="col-6">
                <img src="media/images/googlePlayBadge.svg" className="img-fluid" />
              </div>
              <div className="col-6">
                <img src="media/images/appstoreBadge.svg" className="img-fluid" />
              </div>
            </div>
          </div>

          {/* Columns */}
          <div className="col-lg col-md-6 col-12">
            <ul className="mt-5" style={{ listStyle: "none", lineHeight: "40px" }}>
              <li><b>Account</b></li>
              <li>Open demat account</li>
              <li>Minor demat account</li>
              <li>NRI demat account</li>
              <li>HUF demat account</li>
              <li>Commodity</li>
              <li>Dematerialisation</li>
              <li>Fund transfer</li>
              <li>MTF</li>
            </ul>
          </div>

          <div className="col-lg col-md-6 col-12">
            <ul className="mt-5" style={{ listStyle: "none", lineHeight: "40px" }}>
              <li><b>Support</b></li>
              <li>Contact us</li>
              <li>Support portal</li>
              <li>How to file a complaint?</li>
              <li>Status of your complaints</li>
              <li>Bulletin</li>
              <li>Circular</li>
              <li>Z-Connect blog</li>
              <li>Downloads</li>
            </ul>
          </div>

          <div className="col-lg col-md-6 col-12">
            <ul className="mt-5" style={{ listStyle: "none", lineHeight: "40px" }}>
              <li><b>Company</b></li>
              <li>About</li>
              <li>Philosophy</li>
              <li>Press & media</li>
              <li>Careers</li>
              <li>Zerodha Cares (CSR)</li>
              <li>Zerodha.tech</li>
              <li>Open source</li>
              <li>Referral program</li>
            </ul>
          </div>

          <div className="col-lg col-md-6 col-12">
            <ul className="mt-5" style={{ listStyle: "none", lineHeight: "40px" }}>
              <li><b>Quick links</b></li>
              <li>Upcoming IPOs</li>
              <li>Brokerage charges</li>
              <li>Market holidays</li>
              <li>Economic calendar</li>
              <li>Calculators</li>
              <li>Markets</li>
              <li>Sectors</li>
              <li>Gift Nifty</li>
            </ul>
          </div>

        </div>

        <hr />

        {/* Bottom text */}
        <p style={{ fontSize: "10px" }}>
          Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633...
        </p>

        <p style={{ fontSize: "10px" }}>
          Procedure to file a complaint on SEBI SCORES...
        </p>

        <p style={{ fontSize: "12px" }}>
          <a href="#" style={{ textDecoration: "none" }}>Grievances Redressal Mechanism</a> |
          <a href="#" style={{ textDecoration: "none" }}> Grievances Redressal Mechanism</a>
        </p>

        <p style={{ fontSize: "10px" }}>
          Investments in securities market are subject to market risks...
        </p>

        {/* Bottom links */}
        <div className="row text-center text-md-start mt-4">
          <div className="col-6 col-md">NSE</div>
          <div className="col-6 col-md">BSE</div>
          <div className="col-6 col-md">MCX</div>
          <div className="col-6 col-md">Terms & conditions</div>
          <div className="col-6 col-md">Policies & procedures</div>
          <div className="col-6 col-md">Privacy policy</div>
          <div className="col-6 col-md">Disclosure</div>
          <div className="col-6 col-md">For investor's attention</div>
        </div>

      </div>
    </div>
  );
}

export default Footer;