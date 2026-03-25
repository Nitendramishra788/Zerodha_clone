import React from 'react'


function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5'>Invest in everythink</h1>
                <p>Online platfrom to invest in stocks, derivatives, mutual funds, and more</p>
                <button style={{width:"20%" , margin:"0 auto" ,  color:"white"}} className='p-2 btn btn-primary'><b>Signup Now</b></button>
            </div>
        </div>
     );
}

export default Hero;