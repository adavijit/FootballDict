import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Loadable from "react-loadable";
import {FullScreenLoader} from './components/Loader/Loader';
const Loading = () => <FullScreenLoader />;

const AsyncAppPages = Loadable({
  loader: () => import("./services/routes/AppRoutes"),
  loading: Loading,
});


export class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Redirect from="/" to="/players" exact />
        <Route path="/players" component={AsyncAppPages} exact />
        <Route path="/players/add" component={AsyncAppPages} exact />
        {/* <Route
          path="*"
          component={() => (
            <NotFound error_text={"Not Found"} error_code={404} />
          )}
        /> */}
      </Switch>
    </Router>
    )
  }
}

export default App
