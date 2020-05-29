import React from "react";
import NavPath from "../../containers/navPath/NavPath";
import Search from "../../containers/search/Search";
import { NavLink } from "react-router-dom";

export default () => (
  <div className={"navBar navBar_size"}>
    <NavPath />
    <Search />
    <NavLink to={"/about"} className={"navLink navLink_color navLink_size"}>About</NavLink>
  </div>
);
