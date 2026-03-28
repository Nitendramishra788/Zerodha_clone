import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        
        <div className="col-lg-6 col-sm-12 text-center mb-4 mb-lg-0">
          <img
            src="media/images/education.svg"
            alt="Education"
            className="img-fluid"
          />
        </div>

        <div className="col-lg-6 col-sm-12 mt-3 mt-lg-5 px-3 px-md-4">
          <p className="mb-3">
            Varsity, the largest online stock market education book in the world
            <br />
            covering everythink from the basics to advanced trading.
          </p>

          <a href="#" className="mb-3 d-inline-block" style={{ textDecoration: "none" }}>
            Versity <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="mb-4">
            Varsity, the largest online stock market education book in the world
            <br />
            covering everythink from the basics to advanced trading.
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            TradingQ&A <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;