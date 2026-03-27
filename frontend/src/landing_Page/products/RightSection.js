import React from "react";

function RightSection({ productName, productDescription, TagBTN, imageURL }) {
  return (
    <div className="container p-5 ">
      <div className="row  ">
        <div className="col pt-5">
          <h3 className="pt-5">{productName}</h3>
          <p style={{lineHeight:"40px" , fontSize:"18px"}}>{productDescription}</p>
          <a href="#" style={{textDecoration:"none"}}>{TagBTN}</a>
        </div>
        <div className="col">
             <img src={imageURL}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
