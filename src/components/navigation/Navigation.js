import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeScreen, ProfileScreen, NotFoundScreen, SearchUser } from "../../screens";
import { ConnectedRoute } from "../connected-route/ConnectedRoute";
import { Newsfeed } from "../../screens/Newsfeed";
import { UserInfo } from "../user-info";
import { LookUpUser } from "../look-up-user";

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
        path="/search"
        component={SearchUser}
      />
      {/* <ConnectedRoute
        exact
        isProtected
        path="/followers"
        component={Followers}
      /> */}
      <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);
