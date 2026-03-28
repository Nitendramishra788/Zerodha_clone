import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5 img-fluid"
        />

        <h1 className="mt-5">Invest in everythink</h1>

        <p className="px-3 px-md-0">
          Online platfrom to invest in stocks, derivatives, mutual funds, and more
        </p>

        <button
          className="p-2 btn btn-primary mt-3"
          style={{
            width: "100%",
            maxWidth: "250px",
            margin: "0 auto",
            color: "white",
          }}
        >
          <b>Signup Now</b>
        </button>

      </div>
    </div>
  );
}

export default Hero;