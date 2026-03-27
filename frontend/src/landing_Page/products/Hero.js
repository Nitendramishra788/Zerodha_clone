import React from 'react'

function Hero() {
    return ( 
       <div className='container p-5'>
        <div className='row text-center'>
            <div className='col mt-5'>
                <h2>Zerodha Products</h2>
                 <p className='fs-5'>Sleek, modern, and intuitive trading platforms</p>
                 <p className='fs-5'>Check out our <a href='#' style={{textDecoration:"none"}}>investment offerings →</a></p>
                
            </div>
        </div>
        <hr className='mt-5'></hr>
       </div>
       
     );
}

export default Hero;