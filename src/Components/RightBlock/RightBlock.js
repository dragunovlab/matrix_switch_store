import React from "react";
import HeaderRight from "../HeaderRight/HeaderRight";
import "./RightBlock.css";


//LEFT CLICK FUNCTION
const RCF = () => {
  const buttonR = document.querySelector(".buttonR");
  const buttonBR = document.querySelector(".buttonBR");
  
  const leftBlock = document.querySelector(".leftBlock");
  const rightBlock = document.querySelector(".rightBlock");

  const like = document.querySelector(".like");
  const share = document.querySelector(".share");

  const App = document.querySelector(".App");

  leftBlock.style.width = "0%";
  rightBlock.style.width = "100%"; 
  buttonR.style.opacity = "0"
  buttonBR.style.display = "flex"
  App.style.overflowX = 'hidden'
  like.style.opacity = '0'
  share.style.opacity = '0'
};
//LEFT CLICK FUNCTION

//BACK LEFT CLICK FUNCTION
const BRCF = () => { 

  const buttonR = document.querySelector(".buttonR");
  const buttonBR = document.querySelector(".buttonBR");
  
  const leftBlock = document.querySelector(".leftBlock");
  const rightBlock = document.querySelector(".rightBlock");
  const like = document.querySelector(".like");
  const share = document.querySelector(".share");
   

  leftBlock.style.width = "50%"; 
  rightBlock.style.width = "50%";
  buttonBR.style.display = "none";
 
  buttonR.style.opacity = "1";
  like.style.opacity = '1'
  share.style.opacity = '1'
}
//BACK LEFT CLICK FUNCTION


const RightBlock = () => {
  return (
    <div className="rightBlock">
      <HeaderRight />

      <div className="Content">
        
      <div className="ContentLeft">
          <img className="s-mix-pro" src="./images/S-MIX-PRO.png" alt="" />
        </div>

        <div className="ContentRight">
          <h1 class="rightTittleH1">S-MIX-PRO</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eaque
            atque harum voluptate expedita eveniet maxime qui exercitationem
            hic! Laboriosam natus accusantium consequatur ratione illum fugit
            expedita impedit pariatur quisquam?
          </p>

          <button className="buttonBR material-symbols-outlined" onClick={BRCF}>
            chevron_right
          </button>

          <div class="btns-block">
            <span class="like material-symbols-outlined"> favorite </span>
            <span class="share material-symbols-outlined"> share </span>
            <button class="buttonR" onClick={RCF}>
              Look
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RightBlock;
