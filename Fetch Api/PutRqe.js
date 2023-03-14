import React from "react";

const PutRqe = () => {
  const updateUser = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        alert("Updated...");
      })
      .catch((err) => {
        alert("Could not Created");
        console.log(err);
      });
  };
  return (
    <>
      <h2>Put Request </h2>
      <button onClick={updateUser}>Update User</button>
    </>
  );
};

export default PutRqe;
