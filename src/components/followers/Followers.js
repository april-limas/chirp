import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actions } from "../../redux/actions/users";
import { FollowersItem } from "../followers-item";
import {v4} from "uuid";

export const Followers = () => {
  const { data } = useSelector((state) => ({
    data: state.users.usersList.users,
  }));

  console.log({data});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getFollowers());
  }, []);

  return (
    <>
      <h2>Followers</h2>

      <ul>{data && data.map((item) => <FollowersItem user={item} key={v4()}/>)}</ul>
    </>
  );
};
