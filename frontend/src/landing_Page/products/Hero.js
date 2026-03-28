import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">

        <div className="col-12 mt-4 mt-md-5">
          <h2>Zerodha Products</h2>

          <p className="fs-5 px-2 px-md-0">
            Sleek, modern, and intuitive trading platforms
          </p>

          <p className="fs-5 px-2 px-md-0">
            Check out our{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              investment offerings →
            </a>
          </p>

        </div>

      </div>

      <hr className="mt-4 mt-md-5" />
    </div>
  );
}

export default Hero;