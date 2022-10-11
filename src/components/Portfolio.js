import React from "react";
import foodFREQs from "../foodFREQs.jpg";
import gitThatCurrency from "../gitThatCurrency.jpg";
import JATE from "../JATE.jpg";
import javascriptTest from "../javascriptTest.jpeg";
import noteTaker from "../noteTaker.jpg";
import Develophub from "../Develophub.jpeg";

//react popupbox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
	//foodFREQs
	const openPopupboxfoodFREQs = () => {
		const content = (
			<>
				<img
					className="portfolio-image-popupbox"
					src={foodFREQs}
					alt="foodFREQs..."
				/>
				<p>
				
					We decided to make an application for people strongly influenced by
					the culinary world. Using this application, the user will be able to
					create a profile, search recipes they want to cook frequently, save
					them to their profile and interact with other FoodFREQS.
				</p>
				<b>GitHub:</b>{" "}
				<a
					className="hyper-link"
					onClick={() => window.open("https://github.com/wjimh314/foodFREQS")}
				>
					https://github.com/wjimh314/foodFREQS
				</a>
			</>
		);
		PopupboxManager.open({ content });
		PopupboxManager.update({});
	};

	const popupboxConfigfoodFREQs = {
		titleBar: {
			enable: true,
			text: "food",
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	//theBlackBook
	
	const openPopupboxDevelophub = () => {
		const content = (
			<>
				<img
					className="portfolio-image-popupbox"
					src={Develophub}
					alt="Develophub"
				/>
				<p>
				We created an application to give prospective developers a handy resource to connect with other established developers and maintain an index of code snippets, terminology, and concepts to quickly reference. user will create a profile and be able to add comments to a selection of various basic topics. we will also give them a way to create their own snippets that other users can leave comments on.			</p>
				<b>Heroku:</b>{" "}
				<a
					className="hyper-link"
					onClick={() =>
						window.open("https://floating-refuge-15851.herokuapp.com/")
					}
				>
					https://floating-refuge-15851.herokuapp.com/
				</a>
			</>
		);
		PopupboxManager.open({ content });
		PopupboxManager.update({});
	};

	const popupboxConfigDevelophub = {
		titleBar: {
			enable: true,
			text: "Develophub",
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};
	
	
	
	
	
	//gitthatcurrency
	const openPopupboxgitThatCurrency = () => {
		const content = (
			<>
				<img
					className="portfolio-image-popupbox"
					src={gitThatCurrency}
					alt="gitThatCurrency"
				/>
				<p>
					The goal of the project was to use IP API that can pull the user's
					current IP address and allow the user to access different country
					options through a dropdown menu. This information will then allow the
					user to be able to convert a certain amount of money to the currency
					that the country of their choosing uses on the website. DISCLAIMER: It
					will not actually convert the user's money, but simply determine how
					much the user's money would be worth in a specific country.
				</p>
				<b>GitHub:</b>{" "}
				<a
					className="hyper-link"
					onClick={() =>
						window.open("https://github.com/wjimh314/GitThatCurrency")
					}
				>
					https://github.com/wjimh314/GitThatCurrency
				</a>
			</>
		);
		PopupboxManager.open({ content });
		PopupboxManager.update({});
	};

	const popupboxConfiggitThatCurrency = {
		titleBar: {
			enable: true,
			text: "GitThatCurrency",
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	//JATE

	const openPopupboxJATE = () => {
		const content = (
			<>
				<img className="portfolio-image-popupbox" src={JATE} alt="JATE" />
				<p>
				Our task in this project was to build a text editor that runs in the browser. This is a single page application that meets all of the PWA criteria. This will also include the option to operate offline if need be
				</p>
				<b>GitHub:</b>{" "}
				<a
					className="hyper-link"
					onClick={() =>
						window.open("https://github.com/wjimh314/pwa_texteditor")
					}
				>
					https://github.com/wjimh314/pwa_texteditor
				</a>
			</>
		);
		PopupboxManager.open({ content });
		PopupboxManager.update({});
	};

	const popupboxConfigJATE = {
		titleBar: {
			enable: true,
			text: "JATE",
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	//javascriptTest

	const openPopupboxjavascriptTest = () => {
		const content = (
			<>
				<img
					className="portfolio-image-popupbox"
					src={javascriptTest}
					alt="javascriptTest"
				/>
				<p>
				The goal of this project was to make a small app that will quiz your javascript knowledge
				</p>
				<b>GitHub:</b>{" "}
				<a
					className="hyper-link"
					onClick={() =>
						window.open("https://github.com/wjimh314/Test-Your-Javascript")
					}
				>
					https://github.com/wjimh314/Test-Your-Javascript
				</a>
			</>
		);
		PopupboxManager.open({ content });
		PopupboxManager.update({});
	};

	const popupboxConfigjavascriptTest = {
		titleBar: {
			enable: true,
			text: "javascriptTest",
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	// noteTaker

	
	//passwordGenerator

	

	return (
		<div id="Portfolio"className="portfolio-wrapper">
			<div className="container">
				<h1 className="text-uppercase text-center py-5"> portfolio </h1>{" "}
				<div className="image-box-wrapper row justify-content-center">
					
				<div
						className="portfolio-image-box "
						onClick={openPopupboxDevelophub}
					>
						<img
							className="portfolio-image"
							src={Develophub}
							alt="Develophub"
						/>
						<div className="overflow"> </div>
					</div>
					
					
					<div className="portfolio-image-box" onClick={openPopupboxfoodFREQs}>
						<img className="portfolio-image" src={foodFREQs} alt="foodFREQs" />
						<div className="overflow"> </div>
					</div>
					<div
						className="portfolio-image-box"
						onClick={openPopupboxgitThatCurrency}
					>
						<img
							className="portfolio-image"
							src={gitThatCurrency}
							alt="gitThatCurrency"
						/>
						<div className="overflow"> </div>
					</div>
					<div className="portfolio-image-box" onClick={openPopupboxJATE}>
						<img className="portfolio-image" src={JATE} alt="JATE" />
					</div>
				
					
					
				</div>{" "}
			</div>{" "}
			<PopupboxContainer {...popupboxConfigfoodFREQs} />
			<PopupboxContainer {...popupboxConfiggitThatCurrency} />
			<PopupboxContainer {...popupboxConfigJATE} />
			<PopupboxContainer {...popupboxConfigDevelophub} />
		</div>
	);
};
export default Portfolio;
