import React from "react";
import HeaderLeft from "../HeaderLeft/HeaderLeft";
import "./LeftBlock.css";

const LeftBlock = () => {
  return (
    <div className="leftBlock">
      <HeaderLeft />
      <img className="s-mix-e " src="./images/S-MIX-E.webp" alt="S-MIX-E" />
    </div>
  );
};

export default LeftBlock;
