import React from "react";
import NavPages from "../navpages/NavPages";
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";
import { getMovies, setNumOfPages } from '../../redux/actions/actions'

const linkCreater = props => {
  let navLinks = [];
  const numOfPages = props.numOfPages;
  if (props.pages.length === 0) {
    console.log(props.pages)
    const pageNumArr = Array(numOfPages).fill('').map((el, i) => el = i + 1);
    props.setNumOfPages(pageNumArr);
  } else if (props.page < 10) {
    navLinks = props.pages.slice(0, 10);
  } else if (numOfPages- props.page < 9) {
    navLinks = props.pages.slice(numOfPages - 10, numOfPages);
  } else {
    navLinks = props.pages.slice(props.page - 5, props.page + 5);
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
        <Link onClick={() => props.GetMovies(props)}to={`/${1}`}>
          First Page
        </Link>
        {navLinks}
        <Link
          onClick={() => props.GetMovies(props)}
          to={`/${props.numOfPages}`}
        >
          Last Page
        </Link>
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
    setNumOfPages: (pageNumArr) => {console.log(pageNumArr)}//reducer(setNumOfPages(pageNumArr))}
    }
};

export default connect(mapStateToProps, mapReducerToState)(withRouter(Footer));
