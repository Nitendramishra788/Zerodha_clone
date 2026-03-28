import React from "react";

function RightSection({ productName, productDescription, TagBTN, imageURL }) {
  return (
    <div className="container p-5">
      <div className="row align-items-center">

        {/* Text Section */}
        <div className="col-lg-6 col-12 pt-3 pt-lg-5 order-2 order-lg-1">
          <h3 className="pt-2 pt-lg-5">{productName}</h3>

          <p style={{ lineHeight: "30px", fontSize: "16px" }}>
            {productDescription}
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            {TagBTN}
          </a>
        </div>

        {/* Image Section */}
        <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0 order-1 order-lg-2">
          <img
            src={imageURL}
            alt="product"
            className="img-fluid"
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;