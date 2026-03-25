import React from 'react'
function Awards() {
    return ( 
      
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-lg-6 col-sm-12'>
                    <img src='media/images/largestBroker.svg'/>
                </div>
                <div className='col-lg-6 col-sm-12 p-5'>
                    <h1>Largest stock broker in india </h1>
                    <p>2+ millon Zerodha clients contribute to over 15% of all retail oder <br></br> volumes in India daily by trading and investing in: </p>

                  <div className='row'>
                         
                    <div className='col-6 '>
                        <ul>
                            <li>Fetures and Options</li>
                            <li>Commodity derivatives</li>
                            <li>Currency derivatives</li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <ul>
                            <li>Stocks & IPOs</li>
                            <li>Direct mutual funds</li>
                            <li>Bonds and Govt Securities</li>
                        </ul>
                    </div>

                     <img src='media/images/pressLogos.png'/>

                  </div>

                   
                
                
                </div>
            </div>
        </div>
     );
}

export default Awards;