import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import About from "../About/About";
import FindedCards from '../../containers/findCards/FindedCards'
import TopMovies from '../../containers/topMovies/TopMovies'
import AboutMovie from '../../containers/aboutMovie/AboutMovie'


const Content = () => {

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
