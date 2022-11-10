import React from 'react'

const Resume = () => {
  return (
  <div id='Resume' className='Resume'>
    <div className='d-flex justify-content-center my-5'>
    <h1>Resume</h1>
  </div>
  <div className='container resume-wrapper'>
    <div className= 'timeline-block timeline-block-right'>
        <div className='marker'></div>
        <div className='timeline-content'>
            <h3>2022-2022: University Of Pennsylvania</h3>
            <p>October 2022 I graduated from University of Pennsylvania Full Stack Web Development Boot Camp. Durning my time attending I learned a variety of programming languages for both front end and back end development. Utilizing these languages I was able to create multiple applications to showcase my new skill set. </p>
        </div>
    </div>
    {/* 2021- 2022*/}

    <div className= 'timeline-block timeline-block-left'>
        <div className='marker'></div>
        <div className='timeline-content'>
            <h3>2021-2022: DreamTeam Home services - Field Supervisor </h3>
            <p>Durning this period of time as a HVAC field supervisor I was responsible for collaborating across multiple departments to meet timelines and customer satisfaction goals. With this position came the opportunity to train and supervise a team in order to meet personal and company goals for customer satisfaction and sales. Training included diagnostic and troubleshooting of a many different forms of mechanical and electrical equipment  </p>
        </div>
    </div>
    {/* 2020-2021 */}
    <div className= 'timeline-block timeline-block-right'>
        <div className='marker'></div>
        <div className='timeline-content'>
            <h3>2020-2021: W.M Henderson - Service Technician </h3>
            <p>Produced detailed documentation of issues, services provided, and outcomes on every job ticket. Cultivated strong relationships with clients to build successful business partnerships. Provided exceptional customer service while adhering to a strict schedule.</p>
        </div>
    </div>
    {/*2018-2020  */}
    <div className= 'timeline-block timeline-block-left'>
        <div className='marker'></div>
        <div className='timeline-content'>
            <h3>2018-2020: Murphys Plumbing Heating and Air conditiong - service/install technician  </h3>
            <p> Performed a wide variety of tasks from service and installs to sales. While working here I continued to develop and sharpen my problem solving skills while providing detailed repair options to every client.</p>
        </div>
    </div>
  </div>
  </div>
  )
}

export default Resume;