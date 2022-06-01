import React from "react";
import "./HeaderRight.css";

function HeaderRight() {
  return (
    <div className="header-top-right">
      <span class="burger-menu-right material-symbols-outlined"> menu </span>

      <nav>
        <ul className="ul-right">
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
    </div>
  );
}

export default HeaderRight;
