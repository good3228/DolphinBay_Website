import React, { useState, useEffect } from "react";

import "./FullMenu.css";
import { data } from "../../constants";
import images from "../../constants/images";

import { animate, motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DrinkMenu from "./DrinkMenu";

// const CustomizedMenus = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [currentFilter, setCurrentFilter] = useState("Menu");
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div className="FullMenu">
//       <Button
//         id="demo-customized-button"
//         aria-controls={open ? "demo-customized-menu" : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? "true" : undefined}
//         variant="contained"
//         disableElevation
//         onClick={handleClick}
//         endIcon={<KeyboardArrowDownIcon />}
//         sx={{
//           width: "180px",
//           margin: "1rem 30vw",
//           fontWeight: 900,
//         }}
//       >
//         {currentFilter}
//       </Button>
//       <StyledMenu
//         id="demo-customized-menu"
//         MenuListProps={{
//           "aria-labelledby": "demo-customized-button",
//         }}
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//       >
//         <MenuItem
//           onClick={() => {
//             setCurrentFilter("Menu");
//             handleClose();
//           }}
//           disableRipple
//         >
//           Menu
//         </MenuItem>
//         <MenuItem
//           onClick={() => {
//             setCurrentFilter("Appetizers");
//             handleClose();
//           }}
//           disableRipple
//         >
//           Appetizers
//         </MenuItem>
//         <MenuItem
//           onClick={() => {
//             setCurrentFilter("Noodle Soup");
//             handleClose();
//           }}
//           disableRipple
//         >
//           Noodle Soup
//         </MenuItem>
//         <MenuItem
//           onClick={() => {
//             setCurrentFilter("Stir Fry");
//             handleClose();
//           }}
//           disableRipple
//         >
//           Stir Fry
//         </MenuItem>
//         <MenuItem
//           onClick={() => {
//             setCurrentFilter("Rice Dishes");
//             handleClose();
//           }}
//           disableRipple
//         >
//           Rice Dishes
//         </MenuItem>
//         <MenuItem
//           onClick={() => {
//             setCurrentFilter("Fried Rice");
//             handleClose();
//           }}
//           disableRipple
//         >
//           Fried Rice
//         </MenuItem>
//         <MenuItem
//           onClick={() => {
//             setCurrentFilter("Dry Noodles");
//             handleClose();
//           }}
//           disableRipple
//         >
//           Dry Noodles
//         </MenuItem>
//         <MenuItem
//           onClick={() => {
//             setCurrentFilter("Vegetarian");
//             handleClose();
//           }}
//           disableRipple
//         >
//           Vegetarian Options
//         </MenuItem>
//         <MenuItem
//           onClick={() => {
//             setCurrentFilter("Soup");
//             handleClose();
//           }}
//           disableRipple
//         >
//           Soup
//         </MenuItem>
//       </StyledMenu>
//     </div>
//   );
// };

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="http://localhost:3000/">
          <img src={images.DB_logo} alt="app logo"></img>
        </a>
      </div>
    </nav>
  );
};

const FullMenu = () => {
  const [menuFilter, setMenuFilter] = useState("All");
  const [activeFilter, setActiveFilter] = useState("Appetizers");
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const onClickHandler = (event) => {
    setActiveFilter(event.value);
  };

  return (
    <div className="app__fullMenu">
      <Navbar></Navbar>
      {
        <div className="app__work-filter">
          {[
            "Appetizers",
            "Noodle Soup",
            "Stir Fry",
            "Rice Dishes",
            "Fried Rice",
            "Dry Noodles",
            "Vegetarian Options",
            "Soup",
            "Drink",
          ].map((item, index) => (
            <>
              <button
                key={index}
                variant="text"
                className={
                  item === activeFilter
                    ? "app__fullMenu-filter-active"
                    : "app__fullMenu-filter"
                }
                onClick={() => {
                  setActiveFilter(item);
                }}
              >
                {item}
              </button>
            </>
          ))}
        </div>
      }

      <div className="fullMenu-part">
        {/* {!isNonMobileScreens && <CustomizedMenus />} */}
        {activeFilter !== "Drink" ? (
          data.menu
            .filter((item) => item.category === activeFilter)
            .map((item, index, array) => {
              const isLast = array.indexOf(item) === array.length - 1;
              const isOddPosition = index % 2 === 0;

              return (
                <>
                  <div className="item-info" key={index}>
                    <header>
                      <div className="item-info-title-price">
                        <h4 className="title">{item.title}</h4>
                        <h4 className="price">${item.price}</h4>
                      </div>

                      <div className="item-info-divide-text">
                        <div className="divide-line"></div>
                        <p className="item-text">{item.desc}</p>
                      </div>
                    </header>
                  </div>
                  {isLast && isOddPosition && (
                    <div className="item-info" key={index}>
                      <header>
                        <div className="item-info-title-price">
                          <h4 className="title"></h4>
                          <h4 className="price"></h4>
                        </div>

                        <div className="item-info-divide-text">
                          {/* <div className="divide-line"></div> */}
                          <p className="item-text"></p>
                        </div>
                      </header>
                    </div>
                  )}
                </>
              );
            })
        ) : (
          <DrinkMenu></DrinkMenu>
        )}
      </div>
    </div>
  );
};

export default FullMenu;
