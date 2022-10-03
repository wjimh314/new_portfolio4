import React from 'react';

const Resume
 = () => {
  return (
   <div id= "Resume" className='Resume'>
    <div className="d-flex justify-content-center my-5">
    <h1>Resume</h1>
   </div>
   <div className="container experience-wrapper">
    <div className='timeline-block time-lineblock-right'>
    <div className="marker"></div>
    <div className='timeline-content'>
    <h3>2022</h3>
    <p>2021-2022:Field Supervisor
        2022-current:student at UPENN</p>
     </div>
    </div>
    <div className='timeline-block time-lineblock-right'>
    <div className="marker"></div>
    <div className='timeline-content'>
    <h3>2021</h3>
    <p>HVAC-R Field Service Tech</p>
    <a href="https://docs.google.com/document/d/1AG6WVVVgwVRTCnMkjul7WOQo6Ek7wHNGqslH-ZmtEvU/edit">See my full resume here!</a>
     </div>
    </div>
   </div>
   </div>

   



  )
}

export default Resume;
