import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Jovernie</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link
                spy={true}
                to="Navbar"
                smooth={true}
                activeClass="activeClass"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                to="Services"
                smooth={true}
                activeClass="activeClass"
              >
                Services
              </Link>
            </li>

            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>

            <li>
              <Link
                spy={true}
                to="Portfolio"
                smooth={true}
                activeClass="activeClass"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                to="Testimonials"
                smooth={true}
                activeClass="activeClass"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
}
