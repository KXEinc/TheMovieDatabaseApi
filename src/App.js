import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./App.scss";
// noinspection ES6CheckImport

import { connect } from "react-redux";
import { topRate } from "./API/API";
import { getMovies } from "./redux/actions/fetchActions";
import NavBar from "./components/NavBar/NavBar";
import ScrollHandler from "./hoc/ScrollHandler";
import Content from "./containers/content/Content";
import Footer from './containers/footer/Footer'
import AboutMovie from './containers/aboutMovie/AboutMovie'


const App = ({ getMovies }) => {
  const fetchParams = {
    number: 1,
  };
  const history = useHistory();

  useEffect(() => {
    getMovies(topRate, fetchParams);
    history.push("1");
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <NavBar />
      <AboutMovie/>
      <ScrollHandler>
        <Content />
      <Footer/>
      </ScrollHandler>
      {/*  <NavBar />*/}
      {/*{props.showModal && (*/}
      {/*  <>*/}
      {/*    <ModalWindow />*/}
      {/*    <AboutMovie />*/}
      {/*  </>*/}
      {/*)}*/}

      {/*<ScrollHandler>*/}
      {/*  <NavBar />*/}

      {/*  {props.showFooter && <Footer />}*/}
      {/*</ScrollHandler>*/}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (path, params) => dispatch(getMovies(path, params)),
  };
};

export default connect(null, mapDispatchToProps)(App);
