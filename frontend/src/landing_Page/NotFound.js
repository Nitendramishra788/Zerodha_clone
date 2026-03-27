import React from 'react'


function NotFound() {
    return (  

        <div className='container p-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5'>404 Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <button style={{width:"20%" , margin:"0 auto" ,  color:"white"}} className='p-2 btn btn-primary'><b>Signup Now</b></button>
            </div>
        </div>
    );
}

export default NotFound;