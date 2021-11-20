import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
import image1 from './logo.png';


export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div>
            <img src={image1} class="logo" />
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/" class="buttonA"><button class="buttonB">Wishlist</button></Link>
            </li>
            <li>
              <Link to="/add" class="buttonA"><button class="buttonB">Search</button></Link>
            </li>
            <li>
            <h3>|</h3>
            </li>
            <li>
              <a href="https://github.com/TheHOC" >
                <button class="buttonC">Github</button>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/christoffel-angelo-kuntadi-2052651a9/" >
                <button class="buttonC">Linked-in</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};