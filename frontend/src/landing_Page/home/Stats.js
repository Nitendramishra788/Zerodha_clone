import React from "react";

function Stats() {
  return (
    <div className="container mt-5">
      <div className="row mt-5 align-items-center">
        
        <div className="col-lg-6 col-sm-12 mb-4 mb-lg-0">
          <h1 className="p-2">Trust with confidence</h1>

          <h3>Customer-firt always</h3>
          <p>
            That's why 1.3+ core comtumers trust Zerodha with &#8377;3.5+
            <br />
            lakh crores worth of equity investments.
          </p>

          <h3>No spam or gimmicks</h3>
          <p>
            No gimmicks spam, "gamification", or annoying push
            <br />
            notifications. high quality apps that you use at your pace, the
            <br />
            way you like
          </p>

          <h3>The Zerodha Universe</h3>
          <p>
            Not just app, but a whole ecosystem. Our investment in
            <br />
            30+ fintech startup offer you tailored services specific to
            <br />
            you needs.
          </p>
        </div>

        <div className="col-lg-6 col-sm-12 text-center">
          
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "70%" }}
          />

          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            
            <a href="#" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>

            <a href="#" style={{ textDecoration: "none" }}>
              Try kite demo{" "}
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;