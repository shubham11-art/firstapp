import React from "react";

const DeleteRqe = () => {
  const deleteUser = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    })
      .then((response) => {
        alert("Deleted...");
      })
      .catch((err) => {
        alert("Could not deleted");
        console.log(err);
      });
  };

  return (
    <>
      <h2>Delete User</h2>
      <button onClick={deleteUser}>Delete User</button>
    </>
  );
};

export default DeleteRqe;
