import React from "react";
import { LoginFormContainer, MenuContainer } from "../components";
import {Link} from 'react-router-dom';

export const HomeScreen = () => (
  <>
    <MenuContainer />
    <br/>
    <h2>Kwitter</h2>
    <br/>
    <LoginFormContainer />
    <Link to="/">Sign-Up Today and join our community!</Link>

  </>
)
