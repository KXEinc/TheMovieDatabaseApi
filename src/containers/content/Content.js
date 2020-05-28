import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../../components/About/About";
import { connect } from "react-redux";
import FindedCards from '../findCards/FindedCards'
import TopMovies from '../topMovies/TopMovies'
import AboutMovie from '../aboutMovie/AboutMovie'

const Content = ({ page, id }) => {
  //TODO: show err instead loader
  return (
    <div className={"content"}>
      <Switch>
        <Route path={`/search`} component={FindedCards} />
        <Route path={`/${page}`} component={TopMovies} />
        <Route path={`/movie/${id}`} component={AboutMovie} />
        <Route path="/about" component={About} />
      </Switch>
    </div>

  );
};

const mapStateToProps = (state) => {
  return {
    path: state.display.path,
    page: state.display.page,
    showLoader: state.ui.showLoader
  };
};

export default connect(mapStateToProps)(Content);
