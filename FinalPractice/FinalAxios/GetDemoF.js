import React from "react";
import { Route, Routes } from "react-router-dom";
import GetAxiosF from "./GetAxiosF";
import SingleUserF from "./SingleUserF";

const GetDemoF = () => {
  return (
    <Routes>
      <Route path="" element={<GetAxiosF />} />
      <Route path=":id" element={<SingleUserF />} />
    </Routes>
  );
};

export default GetDemoF;
