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

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    maxWidth: 300,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const CustomizedMenus = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentFilter, setCurrentFilter] = useState("Menu");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="FullMenu">
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          width: "180px",
          margin: "1rem 30vw",
          fontWeight: 900,
        }}
      >
        {currentFilter}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            setCurrentFilter("Menu");
            handleClose();
          }}
          disableRipple
        >
          Menu
        </MenuItem>
        <MenuItem
          onClick={() => {
            setCurrentFilter("Appetizers");
            handleClose();
          }}
          disableRipple
        >
          Appetizers
        </MenuItem>
        <MenuItem
          onClick={() => {
            setCurrentFilter("Noodle Soup");
            handleClose();
          }}
          disableRipple
        >
          Noodle Soup
        </MenuItem>
        <MenuItem
          onClick={() => {
            setCurrentFilter("Stir Fry");
            handleClose();
          }}
          disableRipple
        >
          Stir Fry
        </MenuItem>
        <MenuItem
          onClick={() => {
            setCurrentFilter("Rice Dishes");
            handleClose();
          }}
          disableRipple
        >
          Rice Dishes
        </MenuItem>
        <MenuItem
          onClick={() => {
            setCurrentFilter("Fried Rice");
            handleClose();
          }}
          disableRipple
        >
          Fried Rice
        </MenuItem>
        <MenuItem
          onClick={() => {
            setCurrentFilter("Dry Noodles");
            handleClose();
          }}
          disableRipple
        >
          Dry Noodles
        </MenuItem>
        <MenuItem
          onClick={() => {
            setCurrentFilter("Vegetarian");
            handleClose();
          }}
          disableRipple
        >
          Vegetarian Options
        </MenuItem>
        <MenuItem
          onClick={() => {
            setCurrentFilter("Soup");
            handleClose();
          }}
          disableRipple
        >
          Soup
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

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

      {/* <motion.div
        whileInView={{ scale: [0, 1] }}
        whileHover={{ scale: [1, 0.9] }}
        transition={{
          duration: 0.25,
        }}
      ></motion.div> */}
      <div className="fullMenu-part">
        {/* {!isNonMobileScreens && <CustomizedMenus />} */}
        {/* {data.menu.map((item, index) => {
          const isLast = index === data.menu.length - 1;
          const isOddPosition = index % 2 === 0;

          return (
            <>
              {activeFilter === item.category && (
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
              )}
            </>
          );
        })} */}

        <div className="fullMenu-part">
          {/* {!isNonMobileScreens && <CustomizedMenus />} */}
          {data.menu
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
            })}
        </div>
      </div>
    </div>
  );
};

export default FullMenu;
