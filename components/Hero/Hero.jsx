import Link from "next/link";
import "./Hero.scss";

const Hero = (props) => {
  return (
    <div id='hero-wrapper'>
      <div>Pick a graph</div>
      <div id="nav-links-wrapper">
          <ul id="nav-links">
            {props.navLinks &&
              props.navLinks.map((navLink, i) => {
                return (
                  <li key={i} className="nav-link">
                    <Link href={navLink.link}>{navLink.name}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
    </div>
  )
}

export default Hero
