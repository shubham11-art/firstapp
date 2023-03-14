import React from "react";
import { useLocation, useParams } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  // const history = useHistory();

  return (
    <>
      <h1>
        User {fname} {lname} Page
      </h1>
      <br />
      <p>Location is {location.pathname}</p>
      {location.pathname === `/user/akshay/ambade` ? (
        <button>Click Me</button>
      ) : null}
      {/* <p>Location is {location.pathname}</p>

      {location.pathname === `/user/akshay/ambade` ? (
        <button onClick={() => history.goBack()}>Go Back</button>
      ) : null} */}
    </>
  );
};

export default User;
