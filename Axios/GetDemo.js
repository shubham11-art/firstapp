import React from "react";
import { Routes, Route } from "react-router-dom";
import SingleUser from "./SingleUser";
import UserList from "./UserList";
const GetDemo = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserList />}></Route>
        <Route path=":id" element={<SingleUser />}></Route>
      </Routes>
    </>
  );
};
export default GetDemo;
