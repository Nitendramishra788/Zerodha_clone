import React from "react";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <h1 className="mb-3">Unbeatable pricing</h1>

          <p>
            We poineered the concept of discount broking and price transparency
            in india. Flat fees and no hidden charges
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            See pricing{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="col-lg-2 d-none d-lg-block"></div>

        <div className="col-lg-6 col-md-12">
          <div className="row text-center">
            
            <div className="col-12 col-md-6 border p-4 mb-3 mb-md-0">
              <h1 className="mb-3"> &#8377;0</h1>
              <p>
                Free equity delivery and <br />
                direct mutual funds
              </p>
            </div>

            <div className="col-12 col-md-6 border p-4">
              <h1 className="mb-3"> &#8377;20</h1>
              <p>Intraday and F&O</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;