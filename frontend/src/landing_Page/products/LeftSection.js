import React from "react";

function LeftSection({
  imageURL,
  productName,
  ProductDescription,
  tryDemo,
  learMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container ps-md-5 ps-2">
      <div className="row align-items-center">

        <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0">
          <img src={imageURL} alt="product" className="img-fluid" />
        </div>

        <div className="col-lg-6 col-12 ps-md-5 ps-2 mt-3 mt-lg-5">
          <h3>{productName}</h3>

          <p style={{ lineHeight: "30px", fontSize: "16px" }}>
            {ProductDescription}
          </p>

          {/* Links */}
          <div className="row p-2 text-center text-md-start">
            <div className="col-6 col-md-auto">
              <a href={tryDemo} style={{ textDecoration: "none" }}>
                <b>TryDemo</b>
              </a>
            </div>

            <div className="col-6 col-md-auto">
              <a href={learMore} style={{ textDecoration: "none" }}>
                <b>more</b>
              </a>
            </div>
          </div>

          {/* App buttons */}
          <div className="row mt-3 text-center text-md-start">
            <div className="col-6 col-md-4">
              <a href={googlePlay}>
                <img
                  src="media/images/googlePlayBadge.svg"
                  className="img-fluid"
                  alt="google play"
                />
              </a>
            </div>

            <div className="col-6 col-md-4">
              <a href={appStore}>
                <img
                  src="media/images/appstoreBadge.svg"
                  className="img-fluid"
                  alt="app store"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LeftSection;