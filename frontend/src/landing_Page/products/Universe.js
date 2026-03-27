import React from 'react'


function Universe() {
    return ( 
        <div className='container text-center '>
            <h2 className='mt-5'>The Zerodha Universe</h2>
            <p className='mt-5'>Extend your trading and investment experience even further with our partner platforms</p>

            <div className='row mt-5'>
                <div className='col'>
                    <img src='media/images/zerodhaFundhouse.png' alt='Zerodha Funds' style={{width:"50%"}}/>
                    <p style={{fontSize:"12px", color:"gray"}} className='p-4'>Our asset management venture<br></br>
                     that is creating simple and transparent index<br></br>
                     funds to help you save for your goals.
                     </p>
                </div>
                <div className='col'>
                     <img src='media/images/sensibullLogo.svg' alt='sensibull' style={{width:"50%"}}/>
                     <p style={{fontSize:"12px" ,color:"gray"}} className='p-4'>Options trading platform that lets you<br></br>
                      create strategies, analyze positions, and examine<br></br>
                      data points like open interest, FII/DII, and more.
                      </p>
                </div>
                <div className='col'>
                       <img src='media/images/tijori.svg' alt='tijori' style={{width:"50%"}}/>
                       <p style={{fontSize:"12px", color:"gray"}} className='p-2'>Investment research platform<br></br>
                        that offers detailed insights on stocks,<br></br>
                        sectors, supply chains, and more.
                        </p>
                </div>
            </div>

            
            <div className='row mt-5'>
                <div className='col '>
                    <img src='media/images/streakLogo.png' alt='streak' style={{width:"50%"}}/>
                    <p style={{fontSize:"12px", color:"gray"}} className='p-4'>Systematic trading platform<br></br>
                    that allows you to create and backtest<br></br>
                    strategies without coding.</p>
                </div>
                <div className='col'>
                    <img src='media/images/smallcaseLogo.png' alt='smallcase' style={{width:"50%"}}/>
                    <p style={{fontSize:"12px", color:"gray"}} className='p-4'>Thematic investing platform<br></br>
                       that helps you invest in diversified<br></br>
                       baskets of stocks on ETFs.</p>
                </div>
                <div className='col'>
                    <img src='media/images/dittoLogo.png' alt='ditto' style={{width:"50%"}}/>

                    <p style={{fontSize:"12px", color:"gray"}} className='p-4'>Personalized advice on life<br></br>
                        and health insurance. No spam<br></br>
                        and no mis-selling.</p>
                </div>
            </div>
        </div>
     );
}

export default Universe;