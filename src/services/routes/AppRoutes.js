import React, { Component } from "react";
import { Route } from "react-router-dom";
import Loadable from "react-loadable";
import MainContainer from "../../containers/MainContainer";
import {FullScreenLoader} from "../../components/shared/Loader/Loader";

const Loading = () => <FullScreenLoader />;

const AsyncListingScreen = Loadable({
  loader: () => import("../../containers/ListingScreen/ListingScreen"),
  loading: Loading,
});

const AsyncCreateScreen = Loadable({
  loader: () => import("../../containers/CreateScreen/CreateScreen"),
  loading: Loading,
});

export class AppRoutes extends Component {
  render() {
    return (
      <MainContainer>
        <Route path="/players" component={AsyncListingScreen} exact />
        <Route path="/players/add" component={AsyncCreateScreen} exact />
      </MainContainer>
    );
  }
}

export default AppRoutes;