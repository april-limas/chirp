import React from "react";
import { LoginFormContainer, MenuContainer } from "../components";
import {Link} from 'react-router-dom';

export const LogInPage = () => (
  <>
    <MenuContainer />
    <br />
    <h2>Kwitter</h2>
    <br />
    <LoginFormContainer />
    <br />
    <p>Sign up today and join our community! Click <Link to="/sign-up">here</Link>.</p>
    

  </>
)
