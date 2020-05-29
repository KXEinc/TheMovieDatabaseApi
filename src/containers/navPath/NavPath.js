import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const NavPath = (props) => (

    <NavLink className={"navLink navLink_color navLink_size"} to={`/${props.page}`}>
      Movies
    </NavLink>

);

const mapStateToProps = (state) => {
  return {
    page: state.display.page,
  };
};

export default connect(mapStateToProps)(NavPath);
