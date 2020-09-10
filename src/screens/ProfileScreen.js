import React from "react";
import { MenuContainer, Profile, DeleteAccount } from "../components";
import { EditProfile } from "../components/edit-profile";


export const ProfileScreen = () => (
  <>
    <MenuContainer />
    <Profile />
    <EditProfile />
    <br/>
    <br/>
    <div>
      <DeleteAccount />
    </div>
  </>
)




