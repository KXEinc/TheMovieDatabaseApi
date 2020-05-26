import React from "react";

import { topRate } from "../../API/API";
import { Link, NavLink } from "react-router-dom";

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
  return navLinks.map((el, i) => (
    <NavLink key={i} to={`/${el}`}>
      <button
        className={"navLinks-container__btn "}
        onClick={() => getMovies(topRate, { page: el })}
      >
        {el}
      </button>
    </NavLink>
  ));
};

const FooterDrawer = ({ pages, page, numOfPages, getMovies }) => {
  const navLinks = linkCreater(pages, page, numOfPages, getMovies);
  return (
    <div className={"footer-container"}>
      <div className={"navLinks-container"}>
        <Link to={`/${1}`} onClick={() => getMovies(topRate, { page: '1' })}>First Page</Link>
        {navLinks}
        <Link
          onClick={() => getMovies(topRate, { page: numOfPages })}
          to={`/${numOfPages}`}
        >
          Last Page
        </Link>
      </div>
    </div>
  );
};

export default FooterDrawer;
