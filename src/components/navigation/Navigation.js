import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Newsfeed, ProfileScreen, FollowersPage, NotFoundScreen, SearchUser, UserLinkDisplay, MessageLinkDisplay, EditProfileScreen, SignUpForm, LogInPage, DeletedUserPage } from "../../screens";
import { ConnectedRoute } from "../connected-route/ConnectedRoute";



export const Navigation = () => (
  <BrowserRouter>
    <Switch>
      <ConnectedRoute
        exact
        path="/"
        redirectIfAuthenticated
        component={LogInPage}
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
        component={UserLinkDisplay}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/message"
        component={MessageLinkDisplay}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/edit-profile"
        component={EditProfileScreen}
      />
      <ConnectedRoute
        exact
        path="/sign-up"
        component={SignUpForm}
      />
      <ConnectedRoute
        exact
        path="/delete"
        component={DeletedUserPage}
      />
      <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);
