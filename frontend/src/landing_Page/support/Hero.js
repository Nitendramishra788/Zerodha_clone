import React from 'react'


function Hero() {
    return ( 
        <div style={{backgroundColor:"#387ed1"}}>
       <div className='container'>
        <div className='row'>
            <div className='col' style={{color:"white"}}>Support Portal</div>
            <div className='col' style={{color:"white"}}>Track Tickets
                <h6>Featured</h6>
                <p style={{textDecoration:"underline"}}>1. Current Takeovers and Delisting – January 2024</p>

                 <p style={{textDecoration:"underline"}}>2. Latest Intraday leverages – MIS & CO</p>
            </div>
        </div>

        <div className='row'>
            <div className='col'>
                <h6 style={{color:"white"}}>Search for an answer or browse help topics to create a ticket </h6>
                <input placeholder='Eg: how do i activate F&O, why is my order getting rejected..' style={{width:"100%" , height:"50px" , borderRadius:"1rem" }}></input>

                <p><a href='#' style={{color:"white"}}>Track account opening</a> <a href='#' style={{color:"white"}}>Track segment activation</a> <a href='#' style={{color:"white"}}>Intraday </a></p>
              
            </div>
            <div className='col'></div>
        </div>
       </div>

       </div>
     );

     
}

export default Hero;