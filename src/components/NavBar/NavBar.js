import React from "react";
import NavPath from "../../containers/navPath/NavPath";
import Search from "../../containers/search/Search";

export default () => (
  <div className={"navBar"}>
    <Search />
    <NavPath className={"navPath"} />
  </div>
);
