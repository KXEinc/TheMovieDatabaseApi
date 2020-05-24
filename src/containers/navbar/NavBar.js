import React from "react";

import Search from "../search/Search"
import NavPath from '../navPath/NavPath'


export default () => (
  <div className={"navBar"}>
    <Search />
    <NavPath className={'navPath'}/>
  </div>
);
