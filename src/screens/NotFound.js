import React from "react";
import { Link } from "react-router-dom";

const NotFound = ({ location }) => (
  <>
    <p> 404:
      Page not found for {location.pathname}</p>
    <Link to="/">Go Home</Link>
  </>
);

export const NotFoundScreen = NotFound;
