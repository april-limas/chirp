import React from "react";
import { LoginFormContainer, MenuContainer } from "../components";
import { Link } from "react-router-dom";

export const HomeScreen = () => (
  <>
    <MenuContainer />
    <h2>Kwitter</h2>
    <LoginFormContainer />
    <Link to="/">Sign-Up Today and join our community!</Link>

  </>
  
);
