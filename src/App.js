import React, { useEffect } from "react";
import "./App.scss";
// noinspection ES6CheckImport
import { Route, Switch, withRouter } from "react-router-dom";
import NavBar from "./containers/navbar/NavBar";
import About from "./components/about/about";
import Cards from "./containers/cards/Cards";
import { Content } from './containers/content/Content'
import { connect } from "react-redux";
import { getMovies } from "./redux/actions/actions";
import Footer from "./containers/footer/Footer";
import ModalWindow from "./components/modalWindow/ModalWindow";
import Loader from "./components/loader/Loader";
import AboutMovie from "./components/AboutMovie/AboutMovie";
import ScrollHandler from './hoc/ScrollHandler'

const App = (props) => {
  console.log('kek')
  useEffect(() => {
    props.getMovies(props);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {props.showModal && (
        <>
          <ModalWindow />
          <AboutMovie />
        </>
      )}
      <ScrollHandler>
        <NavBar />
        {props.displayLoader && <Loader />}
        <Content>
          <Switch>
            <Route exact path={`/${props.page}`} component={Cards} />
            <Route path={`/search/${props.searchValue}`} component={Cards} />
            <Route path="/about" component={About} />
          </Switch>
        </Content>
        {props.showFooter && <Footer />}
      </ScrollHandler>
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
    searchValue: state.searchInputValue
  };
};

const mapReducerToProps = (reducer) => {
  return {
    getMovies: (props) => reducer(getMovies(props)),
  };
};

export default connect(mapStateToProps, mapReducerToProps)(withRouter(App));
