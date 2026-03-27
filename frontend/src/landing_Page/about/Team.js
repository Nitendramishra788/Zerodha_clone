import React from 'react'


function Team() {
    return ( 
        <div className='container'>
            <div className='row text-center'>
                <div className='col'>
                   <img 
  src="media/images/nit_mishra.jpeg" 
  alt="Developer"
  style={{
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    objectFit: "cover"
   
    
  }} 
/>

<p className='text-center'><i>Dev By Nitendra nit mishra</i></p>
                </div>
                 <div className='col'>
                    <p>
Nitendra Mishra is a passionate developer currently focused on building real-world projects and overcoming challenges through consistent learning and practice. He started his journey in development with a strong curiosity for technology and a desire to create something meaningful.

Currently, he is working on his personal AI assistant project “Noor”, where he is exploring voice recognition, automation, and intelligent systems. Through this project, he aims to understand how real-world AI applications are built and how they can be improved.

He is continuously improving his skills in development and building projects to strengthen his portfolio. His goal is to become a skilled AI developer and create impactful solutions in the future.

When not coding, he spends time exploring new ideas, learning new technologies, and improving his problem-solving mindset.

Connect on GitHub / LinkedIn
</p>
                 </div>
            </div>
        </div>
     );
}

export default Team;