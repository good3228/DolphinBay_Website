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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem
          neque eligendi. Quasi commodi saepe maxime id quidem at possimus
          labore, consequatur fugiat corrupti voluptatibus soluta rem itaque
          impedit? Cupiditate quod, nisi perferendis accusantium vitae
          consectetur suscipit eos nam, a iste ab alias voluptas! A molestias
          quod unde aut obcaecati.
        </p>
        \
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history flex__center">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus saepe corrupti quia voluptas qui, maxime tempora sunt distinctio deleniti odit accusamus cupiditate illum nesciunt beatae eligendi delectus rerum ipsam dolores inventore! Error laudantium, officia vero repellat architecto quis blanditiis magni consectetur placeat dolorum, doloribus laborum! Asperiores autem quia delectus aut?
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
