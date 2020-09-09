import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeScreen, Newsfeed, ProfileScreen, FollowersPage,NotFoundScreen, SearchUser } from "../../screens";
import { ConnectedRoute } from "../connected-route/ConnectedRoute";
import { UserInfoLink } from "../user-info-link";


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
        component={FollowersPage}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/search"
        component={SearchUser}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/user"
        component={UserInfoLink}
      />
      <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);
