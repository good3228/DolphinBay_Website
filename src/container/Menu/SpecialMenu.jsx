/* eslint-disable */
import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";
import { useNavigate } from "react-router-dom";

const SpecialMenu = () => {
  const navigate = useNavigate();

  return (
    <div
      className="app__specialMenu flex__center section__padding"
      id="special"
    >
      <div className="app__specialMenu-title">
        <SubHeading title="Drinks that fit your mood" />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
          <p className="app__specialMenu-menu_heading">House Specials</p>
          <div className="app__specialMenu_menu_items">
            {data.specials.map((special, index) => (
              <MenuItem
                key={special.title + index}
                title={special.title}
                price={special.price}
                tags={special.tags}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.DBsnow} alt="menu__img" />
        </div>

        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">Our Favorites</p>
          <div className="app__specialMenu_menu_items">
            {data.favorites.map((favorite, index) => (
              <MenuItem
                key={favorite.title + index}
                title={favorite.title}
                price={favorite.price}
                tags={favorite.tags}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button
          onClick={() => navigate("/menu")}
          type="button"
          className="custom__button"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
