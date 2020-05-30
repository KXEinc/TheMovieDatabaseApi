import React from "react";

import { topRate } from "../../API/API";
import { Link, NavLink, useHistory } from "react-router-dom";

const linkCreater = (pages, page, numOfPages, getMovies) => {
  let navLinks = [];
  if (pages.length === 0) {
  } else if (page < 10) {
    navLinks = pages.slice(0, 10);
  } else if (numOfPages - page < 9) {
    navLinks = pages.slice(numOfPages - 10, numOfPages);
  } else {
    navLinks = pages.slice(page - 5, page + 5);
  }

  const clickHandler = (el) => {
    getMovies(topRate, { page: el });
  };

  return navLinks.map((el, i) => (
    <NavLink
      activeClassName={"pages-links__navLink_active"}
      className={"pages-links__navLink"}
      key={i}
      to={"/" + el}
      onClick={() => clickHandler(el)}
    >
      {el}
    </NavLink>
  ));
};

const NavElementsDrawer = ({ pages, page, numOfPages, getMovies }) => {
  const history = useHistory();
  const navLinks = linkCreater(pages, page, numOfPages, getMovies, history);
  return (
    <div className={"navLinks-container"}>
      <Link
        className={"navLinks-container__btn"}
        to={`/${1}`}
        onClick={() => getMovies(topRate, { page: "1" })}
      >
        First Page
      </Link>
      <div className={'pages-links'}>{navLinks}</div>
      <Link
        className={"navLinks-container__btn"}
        onClick={() => getMovies(topRate, { page: numOfPages })}
        to={`/${numOfPages}`}
      >
        Last Page
      </Link>
    </div>
  );
};

export default NavElementsDrawer;
