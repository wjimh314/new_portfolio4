import React from 'react';
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div id="About Me"className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
                <p className="p-text">Full Stack Web Developer and life long learner passionate about developing new technical skills and building productive business relationships. Effective at implementing multiple forms of problem solving skills to provide efficiency in solving complex problems. Graduate of the University of Pennsylvania Full Stack Web Development Boot Camp with hands-on experience building front end websites from scratch and creating back-end applications and databases. Known for strong teamwork and project management skills during the development cycle of complex projects.
                </p>
            </div>
       
        </div>
    </div>
  
  )
}

export default AboutMe
