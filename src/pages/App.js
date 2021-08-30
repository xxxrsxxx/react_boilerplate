import React from "react";
import { Route, Switch } from "react-router-dom";
import { MainPage } from "./index";
import BasicLayout from "../layout/BasicLayout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={BasicLayout(MainPage)} />
        {/*<Route exact path="/sub" component={BasicLayout()} />*/}
      </Switch>
    </div>
  );
}

export default App;
