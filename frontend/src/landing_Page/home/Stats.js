import React from 'react'


function Stats() {
    return ( 
        <div className='container mt-5'>
            <div className='row mt-5'>
                <div className='col-lg-6 col-sm-12'>
                    <h1 className='p-2'>Trust with confidence</h1>
                    <h3>Customer-firt always</h3>
                    <p>That's why 1.3+ core comtumers trust Zerodha with &#8377;3.5+<br></br> lakh crores worth of equity investments.</p>

                    <h3>No spam or gimmicks</h3>
                    <p>No gimmicks spam, "gamification", or annoying push<br></br>notifications. high quality apps that you use at your pace, the<br></br>way you like</p>

                    <h3>The Zerodha Universe</h3>
                    <p>Not just app, but a whole ecosystem. Our investment in<br></br>30+ fintech startup offer you tailored services specific to<br></br>you needs.</p>
                </div>
                 <div className='col-lg-6 col-sm-12'>
                    <img src='media/images/ecosystem.png' style={{width:"70%"}}/>
                    <div className='text-center'>
                        <a href='#' className='mx-5' style={{textDecoration:"None"}}>Explore our products <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>

                           <a href='#' className='mx-5' style={{textDecoration:"None"}}>Try kite demo <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                 </div>
            </div>
        </div>
     );
}

export default Stats;