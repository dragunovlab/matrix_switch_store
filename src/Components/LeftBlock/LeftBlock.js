import React from "react";
import HeaderLeft from "../HeaderLeft/HeaderLeft";
import "./LeftBlock.css";

window.onload = function() {
  const buttonBL = document.querySelector(".buttonBL");
  const buttonBR = document.querySelector(".buttonBR");

  buttonBL.style.display = "none";
  buttonBR.style.display = "none";
}


//LEFT CLICK FUNCTION
const LCF = () => {
  const buttonL = document.querySelector(".buttonL");
  const buttonBL = document.querySelector(".buttonBL");
  
  const leftBlock = document.querySelector(".leftBlock");
  const rightBlock = document.querySelector(".rightBlock");

  const like = document.querySelector(".like");
  const share = document.querySelector(".share");

  const App = document.querySelector(".App");

  leftBlock.style.width = "100%";
  rightBlock.style.width = "0%"; 
  buttonL.style.opacity = "0"
  buttonBL.style.display = "flex"
  App.style.overflowX = 'hidden'
  like.style.opacity = '0'
  share.style.opacity = '0'
};
//LEFT CLICK FUNCTION

//BACK LEFT CLICK FUNCTION
const BLCF = () => { 

  const buttonL = document.querySelector(".buttonL");
  const buttonBL = document.querySelector(".buttonBL");
  
  const leftBlock = document.querySelector(".leftBlock");
  const rightBlock = document.querySelector(".rightBlock");
  const like = document.querySelector(".like");
  const share = document.querySelector(".share");
   

  leftBlock.style.width = "50%"; 
  rightBlock.style.width = "50%";
  buttonBL.style.display = "none";
 
  buttonL.style.opacity = "1";
  like.style.opacity = '1'
  share.style.opacity = '1'
}
//BACK LEFT CLICK FUNCTION

const LeftBlock = () => {
  return (
    <div className="leftBlock">
      <HeaderLeft />
      <div className="Content">
        <div className="ContentLeft">
          <h1 class="leftTittleH1">S-MIX-E</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eaque
            atque harum voluptate expedita eveniet maxime qui exercitationem
            hic! Laboriosam natus accusantium consequatur ratione illum fugit
            expedita impedit pariatur quisquam?
          </p>

          <button className="buttonBL material-symbols-outlined" onClick={BLCF}>chevron_left</button>

          <div class="btns-block">
          <button class="buttonL" onClick={LCF}>
              Look
            </button>
            <span class="like material-symbols-outlined"> favorite </span>
            <span class="share material-symbols-outlined"> share </span>
           
          </div>
        </div>
        
        <div className="ContentRight">
          <img className="s-mix-e" src="./images/S-MIX-E.webp" alt="S-MIX-E" />
        </div>
      </div>
    </div>
  );
};

export default LeftBlock;
