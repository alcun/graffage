"use client";

import Link from "next/link";
import React from "react";
import useIsScrolled from "../../functions/useIsScrolled";
import "./NavBar.scss";

const NavBar = (props) => {
  const isScrolled = useIsScrolled();
 
  return (
    <header id="nav-header-wrapper">
      <nav
        id="nav-wrapper"
        className={isScrolled ? "scrolledNav" : "unscrolledNav"}
      >
        <div id="nav-logo-wrapper">Logo</div>
        <div id="nav-links-wrapper">
          <ul id="nav-links">
            {props.navLinks && props.navLinks.map((navLink, i) => {
              return (
                <li key={i} className="nav-link">
                  <Link href={navLink.link}>{navLink.name}</Link>
                </li>
              );
            })}

          </ul>
        </div>
        <div id="nav-cta-wrapper">
          <button className="cta-button">CTA</button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
