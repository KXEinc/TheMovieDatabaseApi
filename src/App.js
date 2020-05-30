import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./App.scss";
// noinspection ES6CheckImport

import { connect } from "react-redux";
import { topRate } from "./API/API";
import { getMovies } from './redux/actions/fetchActions'
import NavBar from "./components/NavBar/NavBar";
import ScrollHandler from "./hoc/ScrollHandler";
import Content from "./components/content/Content";
import NavElements from './containers/navElements/NavElements'



const App = ({ getMovies }) => {
  const fetchParams = {
    number: 1,
  };
  const history = useHistory();

  useEffect(() => {
    getMovies(topRate, fetchParams);
    history.push("/1");
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <NavBar />
      <ScrollHandler>
        <Content />
      <NavElements/>
      </ScrollHandler>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (path, params) => dispatch(getMovies(path, params)),
  };
};

export default connect(null, mapDispatchToProps)(App);
