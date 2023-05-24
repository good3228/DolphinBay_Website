/* eslint-disable */
import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__chef app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.Aunt} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Auntie's Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            {" "}
            creating an unforgettable culinary experience that celebrates the
            vibrant and delicious flavors of Taiwan.
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          Our commitment to using only the freshest, highest quality ingredients
          and providing exceptional service ensures a warm and welcoming
          atmosphere for all of our guests. Come taste the authenticity of our
          dishes today!
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Yulun Chen</p>
        <p className="p__cormorant">Dolphin Bay's Founder</p>
        {/* <img src={images.sign} alt="sign_image" /> */}
      </div>
    </div>
  </div>
);

export default Chef;
