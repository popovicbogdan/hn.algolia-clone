import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import NavItems from "./NavItems";

const Navbar = props => {
  return (
    <header>
      <div className="container ">
        <div className="row">
          <div className="col s3">
            <NavLink id="a_foot" to="/">
              <img
                id="logo"
                src="//d3nb9u6x572n0.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png"
                alt=""
              />
              <div className="HeaderName container hide-on-small-and-down">
                Search <br /> Hacker News
              </div>
            </NavLink>
          </div>
          <NavItems loc={props.location.pathname} />
        </div>
      </div>
    </header>
  );
};

export default withRouter(Navbar);
