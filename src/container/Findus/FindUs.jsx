import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import LocationMap from "../../components/Map";

const FindUs = () => (
  <div className="bg__darkblue app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">72 Brighton Ave, Boston, MA 02134</p>
        <p className="p__opensans">+1 562-650-6886</p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <a href="https://goo.gl/maps/AX2fx1k9f2RoZvM9A" target="_blank">
        <button
          type="button"
          className="custom__button"
          style={{ marginTop: "2rem" }}
        >
          Visit Us
        </button>
      </a>
    </div>

    <div className="app__wrapper_img">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.534850245162!2d-71.13133612432853!3d42.35243953558375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379c45f652157%3A0xd4ca6d1bf3deefe8!2sDolphin%20Bay!5e0!3m2!1sen!2sus!4v1682195814810!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
);

export default FindUs;
