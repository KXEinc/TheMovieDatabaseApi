import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom'
import About from "../../components/About/About";
import FindedCards from '../findCards/FindedCards'
import TopMovies from '../topMovies/TopMovies'
import AboutMovie from '../aboutMovie/AboutMovie'


const Content = () => {

  //TODO: show err instead loader
  return (
    <div className={"content"}>
      <Switch>
        <Route path="/about" component={About} />
        <Route path={`/movie/:id`} component={AboutMovie} />
        <Route path={`/search/:path`} component={FindedCards} />
        <Route exact path={`/:page`} component={TopMovies} />
        <Redirect to = "/"/>
      </Switch>
    </div>

  );
};



export default Content;
