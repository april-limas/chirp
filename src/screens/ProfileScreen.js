import React from "react";
import { MenuContainer, Profile, DeleteAccount } from "../components";

import { Link } from "react-router-dom"


export const ProfileScreen = () => {

  

  return (
  <>
    <MenuContainer />
    <Profile />
    <Link to="/edit-profile"><p>Edit Profile</p></Link>
    <br />
    <br />
    <div>
      <DeleteAccount />
    </div>
  </>
)}





