import Link from "next/link";
import React from "react";
import "./NavBar.scss";

const NavBar = ({ props }) => {
  return (
    <nav id="nav-wrapper">
      <div id="nav-logo-wrapper">Logo</div>
      <div id="nav-links-wrapper">
        <ul id='nav-links'>
          <li className="nav-link">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link href="/services">Services</Link>
          </li>
        </ul>
      </div>
      <div id='nav-cta-wrapper'>CTA</div>
    </nav>
  );
};

export default NavBar;
