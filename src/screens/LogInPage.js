import React from "react";
import { LoginFormContainer, MenuContainer } from "../components";
import {Link} from 'react-router-dom';

export const LogInPage = () => (
  <>
    <MenuContainer />
    <br />
    <br />
    <LoginFormContainer />
    <br />
    <p>Not registered yet?</p>
    <p>Sign up today and join our community! Click <Link to="/sign-up">here</Link>.</p>
    

  </>
)
