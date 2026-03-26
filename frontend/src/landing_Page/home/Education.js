import React from 'react'

function Education() {
    return ( 
       <div className='container mt-5'>
        <div className='row'>
            <div className='col-6'>
                     <img src='media/images/education.svg' alt='Education' />
            </div>
            <div className='col-6 mt-5'>
                <p className='mb-3' >Varsity, the largest online stock market education book in the world<br></br>covering everythink from the basics to advanced trading.</p>
                
               <a href='#'  className='mb-3'   style={{textDecoration:"None"}}>Versity <i  class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>

                <p  className='mb-4'>Varsity, the largest online stock market education book in the world<br></br>covering everythink from the basics to advanced trading.</p>
                
               <a href='#'  style={{textDecoration:"None"}}>TradingQ&A <i  class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>
       </div>
     );
}

export default Education;