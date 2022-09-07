import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
// import logo from "../../assets/logo.jpeg";

import "../styles/navbar.css";
import navLinks from "./navLinks";

// Navbar component for the app
export default function Navbar() {
  // represents the current URL
  const location = useLocation();
  // access the history instance to use for navigation
  const history = useHistory();

  // checks whether its mobile width or not;
  const [, setIsMobile] = useState(window.innerWidth <= 500);

  // resizes the window size
  const resizeWidth = () => {
    setIsMobile(window.innerWidth <= 500);
  };

  useEffect(() => {
    // adds an event listener when resizing of browser event is place
    window.addEventListener("resize", resizeWidth);
    // removes the listener when component is unmounted
    return () => window.removeEventListener("resize", resizeWidth);
  }, []);

  return (
    <nav id="menu" className="menu" tabIndex={0}>
      {/* checkbox used to toggle the menu in mobile view */}
      <input type="checkbox" id="nav-check" />

      <div className="nav-header">
        <img  alt="Equitas Logo" className="logo" id="equitas-logo" />
        <h1>WOW</h1>
      </div>

      {/* This label makes the hamburger menu which shows in mobile view and 
          opens the menu when clicked on it */}
      <label
        id="hamburger-icon"
        htmlFor="nav-check"
        className="show-menu-button"
      >
        {/* 3 spans for the menu icon. Spans made to look like bars on the menu icon using CSS */}
        <span></span>
        <span></span>
        <span></span>
      </label>

      {/* This label is used to add an overlay when menu is opened in mobile and 
          hides the menu when clicked on it */}
      <label
        id="menu-overlay-close"
        htmlFor="nav-check"
        className="bg-menu-overlay"
      ></label>

      {/* list the menu links to navigate */}
      <ul id="nav-link-list">
        {/* This label shows the close button on mobile when menu is opened and 
            hides the menu when clicked on it */}
        <label
          id="close-button"
          htmlFor="nav-check"
          className="hide-menu-button"
        >
          {/* 3 spans for the menu icon. Spans made to look like bars on the menu icon using CSS */}
          <span></span>
          <span></span>
        </label>

        {/* Maps the nav links to navigate to different route */}
        {navLinks.map((link, index) => {
          // checks if the current route and link route is same and stores the same
          let isSameRoute = location.pathname === link.route;
          // returns a list item
          return (
            <label htmlFor="nav-check" key={`nav-link-${index + 1}`}>
              <li
                id={`link-${link.linkId}`}
                tabIndex={0}
                className={`${isSameRoute ? "active-link" : ""}`}
                onClick={() => (isSameRoute ? {} : history.push(link.route))}
              >
                {/* nav link icon on the left */}
                <div className="link-icon">
                  <div>{link.Icon}</div>
                  {/* <img
                    src={isSameRoute ? link.selectedIcon : link.Icon}
                    alt=""
                  /> */}
                  {/* {<link.Icon color={isSameRoute ? "#220a48" : "#ffffff"} />} */}
                </div>
                {/* nav link page title */}
                <span id={`link-title-${link.linkId}`}>{link.linkTitle}</span>
              </li>
            </label>
          );
        })}
      </ul>
    </nav>
  );
}
