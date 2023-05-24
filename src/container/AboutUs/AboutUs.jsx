/* eslint-disable */
import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div> */}

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Welcome to our Taiwanese restaurant, where we offer an authentic taste
          of Taiwan right here in the USA. Our menu is filled with a variety of
          delicious Taiwanese dishes, from the famous beef noodle soup to the
          beloved oyster omelet and crispy popcorn chicken. We use only the
          freshest ingredients to create each dish, ensuring that every bite is
          bursting with flavor. And for those looking for a refreshing drink to
          complement their meal, we have a selection of bubble milk teas,
          flavored teas, and other Taiwanese beverages to choose from. Come and
          experience the warm hospitality and delicious flavors of Taiwan at our
          restaurant.
        </p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history flex__center">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Our story began in 1999 when our founder opened the first location of
          our restaurant in California. Her passion for Taiwanese cuisine and
          dedication to quality quickly made our restaurant a local favorite. In
          2012, we moved to Boston and continued to serve up authentic Taiwanese
          dishes to the East Coast. Our commitment to quality ingredients and
          excellent customer service has earned us a loyal following, and we are
          proud to continue sharing the flavors of Taiwan with our community. We
          look forward to serving you and hope you enjoy your dining experience
          with us.
        </p>
        /
      </div>
    </div>
  </div>
);

export default AboutUs;
