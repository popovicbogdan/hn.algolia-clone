import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div id="footer" className="container">
          <ul>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>•</li>
            <li>
              <NavLink to="/settings">Settings</NavLink>
            </li>
            <li>•</li>
            <li>
              <NavLink to="/help">Help</NavLink>
            </li>
            <li>•</li>
            <li>
              <NavLink to="/api">Api</NavLink>
            </li>
            <li>•</li>
            <li>
              <a id="a_foot" href="https://news.ycombinator.com">
                Hacker News
              </a>
            </li>
            <li>•</li>
            <li>
              <a id="a_foot" href="https://github.com/algolia/hn-search">
                Fork/Contribute
              </a>
            </li>
            <li>•</li>
            <li>
              <NavLink to="/cool_apps">Cool Apps</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
