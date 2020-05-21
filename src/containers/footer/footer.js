import React from "react";
import NavPages from "../navpages/navPages";
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from 'react-router-dom'
import { getMovies } from "../../redux/actions/actions";


const linkCreater = (props) => {
  let navLinks;
  const numOfPages = props.numOfPages;
  if (props.page < 10) {
    navLinks = numOfPages.slice(0, 10);
  } else if (props.pages - props.page < 9 ) {
    navLinks = numOfPages.slice(props.pages - 10, props.pages);
  } else {
    navLinks = numOfPages.slice(props.page - 5, props.page + 5);
  }
  return navLinks.map((el, i) => (
    <NavLink onClick={() => props.GetMovies(props, el)} key={i} to={`/${el}`}>
      {el}
    </NavLink>
  ));
};

const Footer = (props) => {
  const navLinks = linkCreater(props);
  return (
    <div className={"footer-container"}>
      <NavPages>
        <Link onClick={() => props.GetMovies(props, 1)}  to={`/${1}`}>First Page</Link>
        {navLinks}
        <Link onClick={() => props.GetMovies(props, 365)}  to={`/${365}`}>Last Page</Link>
      </NavPages>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pages: state.pages,
    page: state.page,
    numOfPages: state.numOfPages,
  };
};

const mapReducerToState = (reducer) => {
  return {
    GetMovies: (props, i) => reducer(getMovies(props, i)),
  };
};

export default connect(mapStateToProps, mapReducerToState)(withRouter(Footer));
