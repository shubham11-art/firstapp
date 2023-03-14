import React from "react";
import GetRqe from "./GetRqe";
import PostRqe from "./PostRqe";
import PutRqe from "./PutRqe";
import DeleteRqe from "./DeleteRqe";
import Practice from "./Practice";
import GetDemo from "../Axios/GetDemo";
import UserList from "../Axios/UserList";

const FetchApi = () => {
  return (
    <>
      <GetRqe />
      <PostRqe />
      <PutRqe />
      <DeleteRqe />
      <Practice />
      <UserList />
      <GetDemo />
    </>
  );
};
export default FetchApi;
