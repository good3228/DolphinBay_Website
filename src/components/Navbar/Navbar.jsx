import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#">
          <img src={images.DB_logo} alt="app logo"></img>
        </a>
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <p
            className="p__cormorant"
            onClick={() => {
              navigate("menu");
            }}
          >
            Menu
          </p>
        </li>
        <li className="p__opensans">
          <p className="p__cormorant">
            <a href="#about">About</a>
          </p>
        </li>
        <li className="p__opensans">
          <p className="p__cormorant">
            <a href="#special">Today's Special</a>
          </p>
        </li>
        <li className="p__opensans">
          <p className="p__cormorant">
            <a href="#gallery">Gallery</a>
          </p>
        </li>

        <li className="p__opensans">
          <p className="p__cormorant">
            <a href="#contact">Contact</a>
          </p>
        </li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <p onClick={() => navigate("menu")}>Menu</p>
              </li>

              <li className="p__opensans">
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li className="p__opensans">
                <a href="#special" onClick={() => setToggleMenu(false)}>
                  Today's Special
                </a>
              </li>

              <li className="p__opensans">
                <a href="#gallery" onClick={() => setToggleMenu(false)}>
                  Gallery
                </a>
              </li>

              <li className="p__opensans">
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
