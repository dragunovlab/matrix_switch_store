import React from "react";
import HeaderRight from "../HeaderRight/HeaderRight";
import "./RightBlock.css";


<<<<<<< HEAD
//RIGHT CLICK FUNCTION
=======
//LEFT CLICK FUNCTION
>>>>>>> fc25c6774ee0ef484e233da7407fdf03be387373
const RCF = () => {
  const buttonR = document.querySelector(".buttonR");
  const buttonBR = document.querySelector(".buttonBR");
  
  const leftBlock = document.querySelector(".leftBlock");
  const rightBlock = document.querySelector(".rightBlock");

<<<<<<< HEAD
  const like2 = document.querySelector(".like2");
  const share2 = document.querySelector(".share2");
=======
  const like = document.querySelector(".like");
  const share = document.querySelector(".share");
>>>>>>> fc25c6774ee0ef484e233da7407fdf03be387373

  const App = document.querySelector(".App");

  leftBlock.style.width = "0%";
  rightBlock.style.width = "100%"; 
  buttonR.style.opacity = "0"
  buttonBR.style.display = "flex"
  App.style.overflowX = 'hidden'
<<<<<<< HEAD
  like2.style.opacity = '0'
  share2.style.opacity = '0'
};
//RIGHT CLICK FUNCTION

//BACK RIGHT CLICK FUNCTION
=======
  like.style.opacity = '0'
  share.style.opacity = '0'
};
//LEFT CLICK FUNCTION

//BACK LEFT CLICK FUNCTION
>>>>>>> fc25c6774ee0ef484e233da7407fdf03be387373
const BRCF = () => { 

  const buttonR = document.querySelector(".buttonR");
  const buttonBR = document.querySelector(".buttonBR");
  
  const leftBlock = document.querySelector(".leftBlock");
  const rightBlock = document.querySelector(".rightBlock");
<<<<<<< HEAD
  const like2 = document.querySelector(".like2");
  const share2 = document.querySelector(".share2");
=======
  const like = document.querySelector(".like");
  const share = document.querySelector(".share");
>>>>>>> fc25c6774ee0ef484e233da7407fdf03be387373
   

  leftBlock.style.width = "50%"; 
  rightBlock.style.width = "50%";
  buttonBR.style.display = "none";
 
  buttonR.style.opacity = "1";
<<<<<<< HEAD
  like2.style.opacity = '1'
  share2.style.opacity = '1'
}
//BACK RIGHT CLICK FUNCTION
=======
  like.style.opacity = '1'
  share.style.opacity = '1'
}
//BACK LEFT CLICK FUNCTION
>>>>>>> fc25c6774ee0ef484e233da7407fdf03be387373


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
<<<<<<< HEAD
          <span class="share2 material-symbols-outlined"> share </span>
          <span class="like2 material-symbols-outlined"> favorite </span>
=======
            <span class="like material-symbols-outlined"> favorite </span>
            <span class="share material-symbols-outlined"> share </span>
>>>>>>> fc25c6774ee0ef484e233da7407fdf03be387373
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
