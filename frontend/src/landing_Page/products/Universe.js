import React from "react";

function Universe() {
  return (
    <div className="container text-center">
      
      <h2 className="mt-4 mt-md-5">The Zerodha Universe</h2>

      <p className="mt-3 mt-md-5 px-2 px-md-0">
        Extend your trading and investment experience even further with our partner platforms
      </p>

      {/* Row 1 */}
      <div className="row mt-4 mt-md-5">

        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Funds"
            className="img-fluid"
            style={{ maxWidth: "150px" }}
          />
          <p style={{ fontSize: "12px", color: "gray" }} className="p-3">
            Our asset management venture<br />
            that is creating simple and transparent index<br />
            funds to help you save for your goals.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <img
            src="media/images/sensibullLogo.svg"
            alt="sensibull"
            className="img-fluid"
            style={{ maxWidth: "150px" }}
          />
          <p style={{ fontSize: "12px", color: "gray" }} className="p-3">
            Options trading platform that lets you<br />
            create strategies, analyze positions, and examine<br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <img
            src="media/images/tijori.svg"
            alt="tijori"
            className="img-fluid"
            style={{ maxWidth: "150px" }}
          />
          <p style={{ fontSize: "12px", color: "gray" }} className="p-2">
            Investment research platform<br />
            that offers detailed insights on stocks,<br />
            sectors, supply chains, and more.
          </p>
        </div>

      </div>

      {/* Row 2 */}
      <div className="row mt-2 mt-md-5">

        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <img
            src="media/images/streakLogo.png"
            alt="streak"
            className="img-fluid"
            style={{ maxWidth: "150px" }}
          />
          <p style={{ fontSize: "12px", color: "gray" }} className="p-3">
            Systematic trading platform<br />
            that allows you to create and backtest<br />
            strategies without coding.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <img
            src="media/images/smallcaseLogo.png"
            alt="smallcase"
            className="img-fluid"
            style={{ maxWidth: "150px" }}
          />
          <p style={{ fontSize: "12px", color: "gray" }} className="p-3">
            Thematic investing platform<br />
            that helps you invest in diversified<br />
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <img
            src="media/images/dittoLogo.png"
            alt="ditto"
            className="img-fluid"
            style={{ maxWidth: "150px" }}
          />
          <p style={{ fontSize: "12px", color: "gray" }} className="p-3">
            Personalized advice on life<br />
            and health insurance. No spam<br />
            and no mis-selling.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Universe;