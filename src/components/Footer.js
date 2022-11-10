import React from "react";
import {
	//   FacebookShareButton,
	//   FacebookIcon,
	//   TwitterShareButton,
	//   TwitterIcon,
	//   RedditShareButton,
	//   RedditIcon,
	LinkedinShareButton,
	LinkedinIcon,
} from "react-share";
import { Link } from "react-scroll";

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="d-flex">
							<p>Philadelphia,PA</p>
						</div>
						<div className="d-flex">
							<a href="tel:555-555-555">484-832-9469</a>
						</div>
						<div className="d-flex">
							<p>wjimh314@gmail.com</p>
						</div>
						<div className="d-flex">
							<p>github: github.com/wjimh314</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-2 col-sm-6">
						<div className="row">
							<div className="col">
              <a className="footer-nav">
              <Link smooth={true} to="Header" offset={-110} className="nav-link" href="#">Home</Link></a>
								<br />
								<a className="footer-nav">
              <Link smooth={true} to="About Me" offset={-110} className="nav-link" href="#">About Me</Link>
            </a>
								<br />
								<a className="footer-nav">
              <Link smooth={true} to="Resume" offset={-110} className="nav-link" href="#">Resume</Link>
            </a>
							</div>
							<div className="col">
              <a className="footer-nav">
              <Link smooth={true} to="Languages" offset={-110} className="nav-link" href="#">My Process</Link>
            </a>
								<br />
								<a className="footer-nav">
              <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">Portfolio</Link>
            </a>
								<br />
                
							</div>
						</div>
					</div>
					<div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
						<div className="d-flex justify-content-center">
							<LinkedinShareButton
								url={
									"https://www.linkedin.com/in/william-hart-62a120241"
								}
								quote={"FullStack Developer"}
								hashtag="#javascript">
								<LinkedinIcon
									className="mx-3"
									size={36}
								/>
							</LinkedinShareButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
