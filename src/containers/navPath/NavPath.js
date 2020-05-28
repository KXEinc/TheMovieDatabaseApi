import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const NavPath = (props) => (
  <div className={"navPath navPath_mr1"}>
    <NavLink className={"navPath__link_flex-shrink"} to={`/${props.page}`}>
      Movies
    </NavLink>
    <NavLink to={"/about"}>About</NavLink>
  </div>
);

const mapStateToProps = (state) => {
  return {
    page: state.display.page,
  };
};

export default connect(mapStateToProps)(NavPath);
