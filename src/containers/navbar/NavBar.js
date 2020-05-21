import React from "react";

import Search from "../search/search"
import NavPath from '../navPath/NavPath'


export default () => (
  <div className={"navBar"}>
    <Search className={"search__input search__input_mlr3"}/>
    <NavPath className={'navPath'}/>
  </div>
);
