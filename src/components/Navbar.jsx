import PropTypes from "prop-types";
import Links from "./Links.jsx";
import React from "react";
import { Link } from "react-router-dom";
// import Icon from "@mui/material/Icon";
// import SvgIcon from "@mui/material/SvgIcon";
import TocIcon from "@mui/icons-material/Toc";


Navbar.propTypes = {
  home: PropTypes.string,
  about: PropTypes.string,
}; 

Navbar.defaultProps = {
  // as name suggests
  home: "Home", 
  about: "About Us",
};

export default function Navbar(props) {
  // here for props also you are not allowed to use {props} instead use props directly as shown.
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Text-Utils
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              {/* ****************************************************************
              this is drop down menu
              **************************************************************** */}
              {/* <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a> */}
              {/* <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul> */}
              {/* ****************************************************************
              this is drop down menu
              **************************************************************** */}
            </li>
          </ul>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          {/* <PlusIcon className="navbar-toggler-icon" /> */}
          {/* <Icon sx={{ fontSize: 30 }}></Icon> */}
          {/* <SvgIcon>
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
              />
            </svg>
          </SvgIcon> */}
          <TocIcon/>
        </button>
        <Links />
        <div
          className={`d-flex form-check form-switch justify-content-center align-items-center gap-2`}
          style={{ color: "#AEB2B6" }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.changeMode}
          />
          <label htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
        </div>
      </div>
    </nav>
  );
}
