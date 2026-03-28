import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5">
      <div className="row text-center">

        <h1 className="mt-4 mt-md-5">Open a Zerodha account</h1>

        <p className="px-3 px-md-0">
          modern platform and apps, &#8377;0 investments, and flat &#8377;20 intraday and F&O trades
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

export default OpenAccount;