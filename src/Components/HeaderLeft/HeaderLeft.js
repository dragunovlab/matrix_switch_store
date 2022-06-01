import React from "react";
import "./HeaderLeft.css";

function HeaderLeft() {
  return (
    <div className="header-top-left">
      <nav>
        <ul>
          <li class="home">
            <a href="#">Home</a>
          </li>
          <li>
            <a class="shop" href="#">
              Store
            </a>
          </li>
          <li>
            <a class="contact" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <span class="burger-menu-left material-symbols-outlined"> menu </span>
    </div>
  );
}

export default HeaderLeft;
