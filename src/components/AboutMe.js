import React from "react";
import Me from "../me.jpg";

const AboutMe = () => {
	return (
		<div id= "about me"className="container py-5">
			<div className="row">
				<div className="col-lg-6 col-xm-12">
                <div className="photo-wrap">
				<img  className="profile-img"src={Me} alt="me" />
                       
					</div>
				</div>       
				<div className="col-lg-6 col-xm-12">
					<h1 className="about-heading">About me</h1>
					<p>
						Currently pursuing a full stack development certification from
						University of Penn with a graduation date of October 2022. Prior to
						my decision to change careers, I worked in the HVAC-R industry for
						almost 10 years. With this prior career comes years of diagnosing
						and repairing multiple types of electrical and mechanical equipment.
						With this experience and my acquired skills through University of
						Penn, I plan to combine the two in order to excel in my new career!.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
