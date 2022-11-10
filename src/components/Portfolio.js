import React  from "react";
import TheBlackBook from "/Users/williamhart/Desktop/portfolio4/new_portfolio4/src/components/images/TheBlackBook.png";
import FoodFREQS from "./images/FoodFREQS.png";
import gitThatCurrency from "./images/gitThatCurrency.png";
// import taskManager from "../images/task-manager.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Portfolio = () => {

  // TheBlackBook
  const openPopupboxTheBlackBook = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={TheBlackBook} alt="TheBlackBox." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Heroku:</b> <a className="hyper-link" onClick={() => window.open("https://floating-refuge-15851.herokuapp.com/")}>https://floating-refuge-15851.herokuapp.com/</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigTheBlackBook = {
    titleBar: {
      enable: true,
      text: "TheBlackBook",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }

  // FoodFreqs
  const openPopupboxFoodFREQS = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={FoodFREQS} alt="FoodFREQS" />
        <p>We decided to make an application for people strongly influenced by
					the culinary world. Using this application, the user will be able to
					create a profile, search recipes they want to cook frequently, save
					them to their profile and interact with other FoodFREQS.</p>
        <b>Heroku:</b> <a className="hyper-link" onClick={() => window.open("https://vast-sierra-04127.herokuapp.com/profile", "_blank")}>https://vast-sierra-04127.herokuapp.com/profile</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/wjimh314/foodFREQS", "_blank")}>https://github.com/wjimh314/foodFREQS</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigFoodFREQS = {
    titleBar: {
      enable: true,
      text: "City Guide App project."
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }

  // gitThatCurrency
  const openPopupboxgitThatCurrency = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={gitThatCurrency} alt="Portfolio Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/wjimh314/GitThatCurrency", "_blank")}>https://github.com/wjimh314/GitThatCurrency</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfiggitThatCurrency = {
    titleBar: {
      enable: true,
      text: "gitThatCurrency",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }

 


  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row row-cols-auto justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxTheBlackBook}>
            <img className="portfolio-image" src={TheBlackBook} alt="TheBlackBook" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxFoodFREQS}>
            <img className="portfolio-image" src={FoodFREQS} alt="City Guide Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxgitThatCurrency}>
            <img className="portfolio-image" src={gitThatCurrency} alt="gitThatCurrency" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
       
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigTheBlackBook} />
      <PopupboxContainer {...popupboxConfigFoodFREQS} />
      <PopupboxContainer {...popupboxConfiggitThatCurrency} />
      {/* <PopupboxContainer {...popupboxConfigTaskManager} /> */}
    </div>
  )
}

export default Portfolio;
