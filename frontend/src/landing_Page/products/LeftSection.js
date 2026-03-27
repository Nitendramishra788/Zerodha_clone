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
  return(
    <div className="container ps-5">
    <div className="row">
        <div className="col">
            <img src={imageURL}/>
        </div>
         <div className="col ps-5 mt-5">
            <h3>{productName}</h3>
            <p style={{lineHeight:"40px" , fontSize:"18px"}}>{ProductDescription}</p>
           


                         <div className="row p-3">
            <div className="col"><a href={productName} style={{textDecoration:"none"}}><b>TryDemo</b></a></div>
            <div className="col">  <a href={ProductDescription} style={{textDecoration:"none"}}><b>more</b></a></div>
         </div>
   
        <div className="row">
            <div className="col-4 ms-3"><a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/></a></div>
            
            <div className="col-5 ">   <a href={appStore}><img src="media/images/appstoreBadge.svg"/></a></div>
         </div>
         
         </div>

         
    </div>
  </div>
  )
}

export default LeftSection;
