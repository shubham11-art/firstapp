import React from "react";

const PostRqe = () => {
  const createUser = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
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
        alert("User Added...");
      })
      .catch((err) => {
        alert("Could not Add");
        console.log(err);
      });
  };
  return (
    <>
      <h2>Post Request </h2>
      <button onClick={createUser}>Create User</button>
    </>
  );
};

export default PostRqe;
