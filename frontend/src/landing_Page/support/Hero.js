import React from "react";

function Hero() {
  return (
    <div style={{ backgroundColor: "#387ed1" }}>
      <div className="container py-4 py-md-5">

        {/* Top Row */}
        <div className="row text-center text-md-start">

          <div className="col-lg-6 col-12 mb-3 mb-lg-0" style={{ color: "white" }}>
            <h4>Support Portal</h4>
          </div>

          <div className="col-lg-6 col-12" style={{ color: "white" }}>
            <h5>Track Tickets</h5>

            <h6 className="mt-3">Featured</h6>

            <p style={{ textDecoration: "underline" }}>
              1. Current Takeovers and Delisting – January 2024
            </p>

            <p style={{ textDecoration: "underline" }}>
              2. Latest Intraday leverages – MIS & CO
            </p>
          </div>

        </div>

        {/* Search Section */}
        <div className="row mt-4 mt-md-5">

          <div className="col-lg-8 col-12">

            <h6 style={{ color: "white" }}>
              Search for an answer or browse help topics to create a ticket
            </h6>

            <input
              placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
              className="w-100 mt-3 p-2"
              style={{ height: "50px", borderRadius: "1rem", border: "none" }}
            />

            <p className="mt-3 d-flex flex-wrap gap-3">
              <a href="#" style={{ color: "white" }}>Track account opening</a>
              <a href="#" style={{ color: "white" }}>Track segment activation</a>
              <a href="#" style={{ color: "white" }}>Intraday</a>
            </p>

          </div>

          <div className="col-lg-4 d-none d-lg-block"></div>

        </div>

      </div>
    </div>
  );
}

export default Hero;