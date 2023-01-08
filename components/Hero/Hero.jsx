import Link from "next/link";
import "./Hero.scss";

const Hero = (props) => {
  return (
    <div id="hero-wrapper">
      <h1>Choose a graph:</h1>
      <div id="nav-links-wrapper">
        <ul id="nav-links">
          {props.navLinks &&
            props.navLinks.map((navLink, i) => {
              return (
                <Link href={navLink.link} className="nav-link" key={i}>
                  <li>{navLink.name}</li>
                </Link>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
