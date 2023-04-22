import React, { useState, useEffect } from "react";

import "./FullMenu.css";
import { data } from "../../constants";
import images from "../../constants/images";

import "./DrinkMenu.css";

const DrinkMenu = () => {
  return (
    <>
      <p className="topping-detail">Toppings($.50): Boba/ Mini tapioca/ Pudding/ Lychee jelly/ Grass jelly/ Aloe</p>
      <div className="drinkMenu">
        {data.drinks.map((drink) => {
          return (
            <>
              <div className="drink-type-category">
                <div className="drink-type-name" key={drink.id}>
                  {drink.showType}
                  <div>${drink.price}</div>
                </div>
                <div className="divide-line"></div>
                <div className="drink-type-desc">{drink.desc}</div>
                <div className="drink-info">
                  {drink.items.map((item) => {
                    return (
                      <>
                        <div className="drink-name">
                          <div>{item.engTitle}</div>
                          <div>{item.chiTitle}</div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
        <div className="shaved-ice-div">
          <img src={images.shavedIce} className="shaved-ice"></img>
        </div>
      </div>
    </>
  );
};

export default DrinkMenu;
