import React from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "../ReduxApp/Slices/UsersSlice";
import UserProfile from "./UserProfile";

const UserList = () => {
  const users = useSelector(selectUsers);
  return (
    <section style={{ display: "flex", flexWrap: "wrap" }}>
      {Array.isArray(users) &&
        users.map((user) => <UserProfile key={user.id} {...user} />)}
    </section>
  );
};
export default UserList;
