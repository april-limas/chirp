import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeScreen, NotFoundScreen, ProfileScreen } from "../../screens";
import { ConnectedRoute } from "../connected-route/ConnectedRoute";
import { Newsfeed } from "../../screens/Newsfeed";

export const Navigation = () => (
  <BrowserRouter>
    <Switch>
      <ConnectedRoute
        exact
        path="/"
        redirectIfAuthenticated
        component={HomeScreen}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/profiles/:username"
        component={Newsfeed}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/profile"
        component={ProfileScreen}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/followers"
        component={ProfileScreen}
      />
      <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);
