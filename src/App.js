import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
import {FullScreenLoader} from './components/shared/Loader/Loader';
import ErrorComponent from './components/shared/ErrorComponent/ErrorComponent';
import './App.css';

//Fallback loader
const Loading = () => <FullScreenLoader />;

//Loading component with dynamic imports
const AsyncAppPages = Loadable({
  loader: () => import("./services/routes/AppRoutes"),
  loading: Loading,
});
const AsyncHomeScreen = Loadable({
  loader: () => import("./containers/HomeScreen/HomeScreen"),
  loading: Loading,
});

export class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route path="/" component={AsyncHomeScreen} exact />
        <Route path="/players" component={AsyncAppPages} exact />
        <Route path="/players/add" component={AsyncAppPages} exact />
        <Route
          path="*"
          component={() => (
            <ErrorComponent message={"Page not Found"} />
          )}
        />
      </Switch>
    </Router>
    )
  }
}

export default App
