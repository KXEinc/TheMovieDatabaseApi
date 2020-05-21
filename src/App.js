import React, { useEffect } from "react";
import "./App.scss";
// noinspection ES6CheckImport
import { Route, Switch, withRouter } from "react-router-dom";
import NavBar from "./containers/navbar/NavBar";
import About from "./components/about/about";
import Cards from "./containers/cards/cards";
import Content from "./containers/content/content";
import { connect } from "react-redux";
import { getMovies } from "./redux/actions/actions";
import Footer from "./containers/footer/footer";
import ModalWindow from "./components/modalWindow/modalWindow";
import Loader from "./components/loader/Loader";
import AboutMovie from "./components/AboutMovie/aboutMovie";

const App = (props) => {
  useEffect(() => {
    props.GetMovies(props);
    // eslint-disable-next-line
  }, [props.pages]);

  return (
    <>
      {props.showModal && (
        <ModalWindow>
          <AboutMovie/>
        </ModalWindow>
      )}
      <NavBar />
      {props.displayLoader && <Loader />}
      <Content>
        <Switch>
          <Route exact path={`/${props.page}`} component={Cards} />
          <Route path="/about" component={About} />
        </Switch>
      </Content>
      {props.showFooter && <Footer />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    page: state.page,
    pages: state.pages,
    numOfPages: state.numOfPages,
    displayLoader: state.displayLoader,
    showFooter: state.showFooter,
    showModal: state.showModal,
    movies: state.movies,
  };
};

const mapReducerToProps = (reducer) => {
  return {
    GetMovies: (props) => reducer(getMovies(props)),
  };
};

export default connect(mapStateToProps, mapReducerToProps)(withRouter(App));
