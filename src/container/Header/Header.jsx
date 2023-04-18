import { React, useState } from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title={"Chase the taste of Taiwan"} />
        <h1 className="app__header-h1"> The Key to Fine Dining</h1>
        <p className="p_opensans" style={{ margin: "2rem 0", color: "white" }}>
          Delicious Taiwanese cuisine with authentic flavors and friendly
          service awaits.
        </p>
        <button
          type="button"
          className="custom__button"
          onClick={() => navigate("/menu")}
        >
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="welcome" />
      </div>
    </div>
  );
};

export default Header;
