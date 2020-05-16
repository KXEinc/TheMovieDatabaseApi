import React from "react";
import "./css/App.css";
// noinspection ES6CheckImport
import { Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <br/>
      <Link to={"/kek"}>KEK</Link>
      <Switch>
        <Route exact path="/" render={() => <h1>Hello Word!</h1>} />
        <Route path="/kek" render={() => <h2>KEK</h2>} />
      </Switch>
    </>
  );
}

export default App;
